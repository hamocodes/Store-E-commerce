import { Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TC from "./pages/TCPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import CategoryPage from "./pages/CategoryPage";

import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { useUserStore } from "./stores/useUserStore";
import { useEffect } from "react";
import LoadingSpinner from "./components/LoadingSpinner";
import CartPage from "./pages/CartPage";
import { useCartStore } from "./stores/useCartStore";
import PurchaseSuccessPage from "./pages/PurchaseSuccessPage";
import PurchaseCancelPage from "./pages/PurchaseCancelPage";
import Footer from "./components/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/contact";
import Categories from "./pages/CategoriesPage";
import Shipping from "./pages/ShippingPolicy";
import ReturnsRefunds from "./pages/ReturnsRefunds";
import FAQs from "./pages/FAQs";
import Careers from "./pages/Careers";

function App() {
	const { user, checkAuth, checkingAuth } = useUserStore();
	const { getCartItems } = useCartStore();
	useEffect(() => {
		checkAuth();
	}, [checkAuth]);

	useEffect(() => {
		if (!user) return;

		getCartItems();
	}, [getCartItems, user]);

	if (checkingAuth) return <LoadingSpinner />;

	return (
		<div className='min-h-screen mt-10 pt-5 bg-gray-900 text-white relative overflow-hidden'>
			{/* Background gradient */}
			<div className='absolute inset-0 overflow-hidden'>
				<div className='absolute inset-0'>
					<div className='absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(0,0,0,0.3)_0%,rgba(169,169,169,0.2)_45%,rgba(255,255,255,0.1)_100%)]' />
				</div>
			</div>

			<div className='relative z-50'>
				<Navbar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/terms' element={<TC />} />
					<Route path='/privacy-policy' element={<PrivacyPolicy />} />
					<Route path='/about' element={<AboutUs />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/categories' element={<Categories />} />
					<Route path='/shipping' element={<Shipping />} />
					<Route path='/returns' element={<ReturnsRefunds />} />
					<Route path='/faq' element={<FAQs />} />
					<Route path='/careers' element={<Careers />} />

					<Route path='/signup' element={!user ? <SignUpPage /> : <Navigate to='/' />} />
					<Route path='/login' element={!user ? <LoginPage /> : <Navigate to='/' />} />
					<Route
						path='/secret-dashboard'
						element={user?.role === "admin" ? <AdminPage /> : <Navigate to='/login' />}
					/>
					<Route path='/category/:category' element={<CategoryPage />} />
					<Route path='/cart' element={user ? <CartPage /> : <Navigate to='/login' />} />
					<Route
						path='/purchase-success'
						element={user ? <PurchaseSuccessPage /> : <Navigate to='/login' />}
					/>
					<Route path='/purchase-cancel' element={user ? <PurchaseCancelPage /> : <Navigate to='/login' />} />
				</Routes>
				<Footer/>
			</div>
			<Toaster />
		</div>
	);
}

export default App;
