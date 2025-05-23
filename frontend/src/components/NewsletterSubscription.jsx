import { useState } from 'react';
import toast from 'react-hot-toast';

const NewsletterSubscription = () => {
	const [email, setEmail] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleChange = (e) => {
		setEmail(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		if (!email) {
			toast.error('Please enter a valid email address.');
			setIsSubmitting(false);
			return;
		}

		// Simulate an API request to handle the email subscription
		try {
			// Mock submission (replace this with actual API request)
			setTimeout(() => {
				toast.success('Thank you for subscribing to our newsletter!');
				setEmail('');
				setIsSubmitting(false);
			}, 1500);
		} catch (error) {
			toast.error('Something went wrong. Please try again later.');
			setIsSubmitting(false);
		}
	};

	return (
		<div className="bg-black text-white py-12 ">
			<div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
					Subscribe to Our Newsletter
				</h2>
				<p className="text-lg text-gray-300 mb-8">
					Stay updated with the latest trends and offers. Sign up for our newsletter!
				</p>
				<form onSubmit={handleSubmit} className="flex justify-center items-center">
					<input
						type="email"
						placeholder="Enter your email"
						value={email}
						onChange={handleChange}
						className="px-6 py-3 w-full sm:w-80 md:w-96 bg-gray-700 text-white rounded-l-lg focus:outline-none focus:ring-2 "
					/>
					<button
						type="submit"
						disabled={isSubmitting}
						className="px-6 py-3 bg-white text-black rounded-r-lg focus:outline-none hover:bg-gray-500 disabled:bg-gray-500"
					>
						{isSubmitting ? 'Subscribing...' : 'Subscribe'}
					</button>
				</form>
			</div>
		</div>
	);
};

export default NewsletterSubscription;
