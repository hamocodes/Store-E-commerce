import { BarChart, PlusCircle, ShoppingBasket, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import AnalyticsTab from "../components/AnalyticsTab";
import CreateProductForm from "../components/CreateProductForm";
import ProductsList from "../components/ProductsList";
import CreateCouponForm from "../components/CreateCouponForm";
import OrdersList from "../components/OrdersList"; // <- Make sure this path is correct

import { useProductStore } from "../stores/useProductStore";

const tabs = [
	{ id: "analytics", label: "Analytics", icon: BarChart },
	{ id: "create", label: "Create Product", icon: PlusCircle },
	{ id: "products", label: "Products", icon: ShoppingBasket },
	{ id: "orders", label: "Orders", icon: Truck },
	{ id: "coupon", label: "Create Coupon", icon: PlusCircle },
];

const AdminPage = () => {
	const [activeTab, setActiveTab] = useState("analytics");
	const { fetchAllProducts } = useProductStore();

	useEffect(() => {
		fetchAllProducts();
	}, [fetchAllProducts]);

	return (
		<div className='min-h-screen relative overflow-hidden bg-gray-900 text-white'>
			<div className='relative z-10 container mx-auto px-4 py-16'>
				<motion.h1
					className='text-4xl font-bold mb-8 text-white text-center'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					Admin Dashboard
				</motion.h1>

				<div className='flex justify-center mb-8 flex-wrap'>
					{tabs.map((tab) => (
						<button
							key={tab.id}
							onClick={() => setActiveTab(tab.id)}
							className={`flex items-center px-4 py-2 mx-2 my-1 rounded-md transition-colors duration-200 ${
								activeTab === tab.id
									? "bg-black text-white"
									: "bg-gray-700 text-gray-300 hover:bg-gray-600"
							}`}
						>
							<tab.icon className='mr-2 h-5 w-5' />
							{tab.label}
						</button>
					))}
				</div>

				{activeTab === "analytics" && <AnalyticsTab />}
				{activeTab === "create" && <CreateProductForm />}
				{activeTab === "products" && <ProductsList />}
				{activeTab === "orders" && <OrdersList />}
				{activeTab === "coupon" && <CreateCouponForm />}
			</div>
		</div>
	);
};

export default AdminPage;
