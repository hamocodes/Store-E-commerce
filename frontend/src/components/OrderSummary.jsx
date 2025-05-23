import { motion } from "framer-motion";
import { useCartStore } from "../stores/useCartStore";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "../lib/axios";
import { useState } from "react";

const stripePromise = loadStripe(
  "pk_test_51RIKAMBOKhswhiKBsDjiuwcIYjgW452ATIx06WJ7FPOiuj4mMfEn5BUm94hArRg0cixxPoCVx7NImIASplG5ZOal00uUVOGCpq"
);

const OrderSummary = () => {
  const { total, subtotal, coupon, isCouponApplied, cart } = useCartStore();
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    email: "",
    address: ""
  });
  const [showShippingForm, setShowShippingForm] = useState(false);

  const savings = subtotal - total;
  const formattedSubtotal = subtotal.toFixed(2);
  const formattedTotal = total.toFixed(2);
  const formattedSavings = savings.toFixed(2);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const isShippingValid = shippingInfo.name.trim() && 
                        shippingInfo.email.trim() && 
                        shippingInfo.address.trim();

  const handlePayment = async () => {
    if (!showShippingForm) {
      setShowShippingForm(true);
      return;
    }

    if (!isShippingValid) return;

    const stripe = await stripePromise;
    const res = await axios.post("/payments/create-checkout-session", {
      products: cart,
      couponCode: coupon ? coupon.code : null,
      shippingInfo // Include shipping info in the payment request
    });

    const session = res.data;
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error("Error:", result.error);
    }
  };

  return (
    <motion.div
      className="space-y-4 rounded-lg border border-gray-700 bg-black p-4 shadow-sm sm:p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="text-xl font-semibold text-white">Order Summary</p>

      <div className="space-y-4">
        <div className="space-y-2">
          <dl className="flex items-center justify-between gap-4">
            <dt className="text-base font-normal text-gray-400">Original price</dt>
            <dd className="text-base font-medium text-white">${formattedSubtotal}</dd>
          </dl>

          {savings > 0 && (
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-400">Savings</dt>
              <dd className="text-base font-medium text-gray-300">-${formattedSavings}</dd>
            </dl>
          )}

          {coupon && isCouponApplied && (
            <dl className="flex items-center justify-between gap-4">
              <dt className="text-base font-normal text-gray-400">Coupon ({coupon.code})</dt>
              <dd className="text-base font-medium text-gray-300">-{coupon.discountPercentage}%</dd>
            </dl>
          )}

          <dl className="flex items-center justify-between gap-4 border-t border-gray-700 pt-2">
            <dt className="text-base font-bold text-white">Total</dt>
            <dd className="text-base font-bold text-white">${formattedTotal}</dd>
          </dl>
        </div>

        {showShippingForm && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="space-y-3"
          >
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={shippingInfo.name}
                onChange={handleChange}
                className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-white"
                placeholder="Your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={shippingInfo.email}
                onChange={handleChange}
                className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-white"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-1">Address</label>
              <textarea
                name="address"
                value={shippingInfo.address}
                onChange={handleChange}
                className="w-full rounded border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-1 focus:ring-white"
                placeholder="Your shipping address"
                rows={3}
                required
              />
            </div>
          </motion.div>
        )}

        <motion.button
          className={`flex w-full items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 transition-all ${
            showShippingForm
              ? isShippingValid
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-gray-500 text-gray-300 cursor-not-allowed"
              : "bg-white text-black hover:bg-gray-200"
          }`}
          whileHover={!showShippingForm || isShippingValid ? { scale: 1.05 } : {}}
          whileTap={!showShippingForm || isShippingValid ? { scale: 0.95 } : {}}
          onClick={handlePayment}
        >
          {showShippingForm ? "Complete Payment" : "Proceed to Checkout"}
        </motion.button>

        <div className="flex items-center justify-center gap-2">
          <span className="text-sm font-normal text-gray-400">or</span>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-white underline hover:text-gray-300 hover:no-underline"
          >
            Continue Shopping
            <MoveRight size={16} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderSummary;