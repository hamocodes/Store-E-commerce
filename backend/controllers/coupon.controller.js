import Coupon from "../models/coupon.model.js";

export const getCoupon = async (req, res) => {
	try {
		const coupon = await Coupon.findOne({ userId: req.user._id, isActive: true });
		res.json(coupon || null);
	} catch (error) {
		console.log("Error in getCoupon controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const validateCoupon = async (req, res) => {
	try {
		const { code } = req.body;
		const coupon = await Coupon.findOne({ code: code, userId: req.user._id, isActive: true });

		if (!coupon) {
			return res.status(404).json({ message: "Coupon not found" });
		}

		if (coupon.expirationDate < new Date()) {
			coupon.isActive = false;
			await coupon.save();
			return res.status(404).json({ message: "Coupon expired" });
		}

		res.json({
			message: "Coupon is valid",
			code: coupon.code,
			discountPercentage: coupon.discountPercentage,
		});
	} catch (error) {
		console.log("Error in validateCoupon controller", error.message);
		res.status(500).json({ message: "Server error", error: error.message });
	}
};

export const createCoupon = async (req, res) => {
	try {
		const { code, discount, expiresAt } = req.body;

		if (!code || !discount || !expiresAt) {
			return res.status(400).json({ message: "All fields are required" });
		}

		const existing = await Coupon.findOne({ code });
		if (existing) {
			return res.status(400).json({ message: "Coupon already exists" });
		}

		const newCoupon = new Coupon({
			code,
			discountPercentage: discount,
			expirationDate: expiresAt,
			userId: req.user._id, // ✅ Set from authenticated user
		});

		await newCoupon.save();

		res.status(201).json({ message: "Coupon created", coupon: newCoupon });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
