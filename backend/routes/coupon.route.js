import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getCoupon, validateCoupon, createCoupon } from "../controllers/coupon.controller.js";

const router = express.Router();

router.post("/", protectRoute, createCoupon);
router.get("/", protectRoute, getCoupon);
router.post("/validate", protectRoute, validateCoupon);

export default router;
