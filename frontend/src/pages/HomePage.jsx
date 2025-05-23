import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';
import CouponBanner from "../components/CouponBanner";
import NewsletterSubscription from "../components/NewsletterSubscription";


const categories = [
	{ href: "/jeans", name: "Jeans", imageUrl: "/jean.png" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/image.png" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoe.png" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/jacket.png" },
	{ href: "/suits", name: "Suits", imageUrl: "/suit.jpg" },
	{ href: "/bags", name: "Bags", imageUrl: "/bag.png" },
	{ href: "/watches", name: "Watches", imageUrl: "/watch.png" },
  ];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<CouponBanner/>

		<Swiper
			modules={[Autoplay]}
			spaceBetween={50}
			slidesPerView={1}
			loop={true}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
			>
		<SwiperSlide>
			<section
			className="relative bg-cover bg-center bg-no-repeat py-32 px-4 sm:px-6 lg:px-8"
			style={{ backgroundImage: "url('/hero.png')" }}
			>
			<div className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg">
				<h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
				The center of <span className="text-white">your Style.</span>
				</h2>
				<p className="text-gray-700 mb-6">Meet the new style.</p>
			</div>
			</section>
		</SwiperSlide>

		<SwiperSlide>
			<section
			className="relative bg-cover bg-center bg-no-repeat py-32 px-4 sm:px-6 lg:px-8"
			style={{ backgroundImage: "url('/hero1.png')" }}
			>
			<div className="max-w-4xl mx-auto text-center bg-white/10 backdrop-blur-sm p-8 rounded-xl shadow-lg">
				<h2 className="text-4xl sm:text-5xl font-bold mb-4 text-gray-900">
				Discover <span className="text-white">Your Passion.</span>
				</h2>
				<p className="text-gray-700 mb-6">Unleash your inner style icon.</p>
			</div>
			</section>
		</SwiperSlide>
		</Swiper>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-white mb-4'>
					Explore Our Categories
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Discover the latest trends in eco-friendly fashion
				</p>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 border-t border-b border-gray-200 pt-10 pb-10">
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
					</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
			<NewsletterSubscription/>
		</div>
	);
};
export default HomePage;
