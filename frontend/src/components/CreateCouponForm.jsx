import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PlusCircle, Loader } from "lucide-react";
import axios from "axios";

const CreateCouponForm = () => {
	const [coupon, setCoupon] = useState({
		code: "",
		discountPercentage: "",
		expirationDate: "",
	});

	const [loading, setLoading] = useState(false);
	const [successMessage, setSuccessMessage] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [coupons, setCoupons] = useState([]);

	const fetchCoupons = async () => {
		try {
			const res = await axios.get("/api/coupons", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
			});
			setCoupons(res.data);
		} catch (error) {
			console.error("Failed to fetch coupons:", error);
		}
	};

	useEffect(() => {
		fetchCoupons();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setSuccessMessage("");
		setErrorMessage("");

		

		if (!coupon.code || !coupon.discountPercentage || !coupon.expirationDate) {
			setErrorMessage("All fields are required.");
			setLoading(false);
			return;
		}

		try {
			await axios.post(
				"/api/coupons",
				{
				  code: coupon.code,
				  discount: parseFloat(coupon.discountPercentage),
				  expiresAt: coupon.expirationDate,
				},
				{
				  headers: {
					Authorization: `Bearer ${localStorage.getItem("token")}`,
				  },
				}
			  );
			  

			setSuccessMessage("Coupon created successfully!");
			setCoupon({ code: "", discountPercentage: "", expirationDate: "" });
			fetchCoupons();
		} catch (error) {
			setErrorMessage(error.response?.data?.message || "Error creating coupon");
		} finally {
			setLoading(false);
		}
	};

	return (
		<motion.div
			className='bg-black shadow-lg rounded-lg p-8 mb-8 max-w-xl mx-auto'
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
		>
			<h2 className='text-2xl font-semibold mb-6 text-white'>Create New Coupon</h2>

			<form onSubmit={handleSubmit} className='space-y-4'>
				<div>
					<label htmlFor='code' className='block text-sm font-medium text-gray-300'>
						Coupon Code
					</label>
					<input
						type='text'
						id='code'
						value={coupon.code}
						onChange={(e) => setCoupon({ ...coupon, code: e.target.value })}
						className='mt-1 block w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 text-white'
						required
					/>
				</div>

				<div>
					<label htmlFor='discountPercentage' className='block text-sm font-medium text-gray-300'>
						Discount (%)
					</label>
					<input
						type='number'
						id='discountPercentage'
						value={coupon.discountPercentage}
						onChange={(e) => setCoupon({ ...coupon, discountPercentage: e.target.value })}
						min='0'
						max='100'
						required
						className='mt-1 block w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 text-white'
					/>
				</div>

				<div>
					<label htmlFor='expirationDate' className='block text-sm font-medium text-gray-300'>
						Expiration Date
					</label>
					<input
						type='date'
						id='expirationDate'
						value={coupon.expirationDate}
						onChange={(e) => setCoupon({ ...coupon, expirationDate: e.target.value })}
						required
						className='mt-1 block w-full bg-gray-900 border border-gray-700 rounded-md py-2 px-3 text-white'
					/>
				</div>

				{successMessage && <p className='text-green-400'>{successMessage}</p>}
				{errorMessage && <p className='text-red-400'>{errorMessage}</p>}

				<button
					type='submit'
					className='w-full flex justify-center py-2 px-4 rounded-md shadow-sm text-sm font-medium text-white bg-gray-700 hover:bg-gray-600 disabled:opacity-50'
					disabled={loading}
				>
					{loading ? (
						<>
							<Loader className='mr-2 h-5 w-5 animate-spin' />
							Creating...
						</>
					) : (
						<>
							<PlusCircle className='mr-2 h-5 w-5' />
							Create Coupon
						</>
					)}
				</button>
			</form>
		</motion.div>
	);
};

export default CreateCouponForm;
