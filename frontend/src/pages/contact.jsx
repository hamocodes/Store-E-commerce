import { useState } from 'react';
import toast from 'react-hot-toast';

const ContactPage = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Simulate form submission
		if (formData.name && formData.email && formData.message) {
			toast.success("Message sent successfully!");
			setFormData({ name: '', email: '', message: '' });
		} else {
			toast.error("Please fill out all fields.");
		}
	};

	return (
		<div className='min-h-screen text-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl font-bold text-white mb-4'>
					Contact Us
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					We’d love to hear from you! Please reach out with any questions.
				</p>

				<div className='flex justify-center'>
					<form
						onSubmit={handleSubmit}
						className='w-full max-w-lg bg-black p-8 rounded-xl shadow-lg'
					>
						<div className='mb-6'>
							<label htmlFor='name' className='block text-lg font-medium text-white'>
								Name
							</label>
							<input
								type='text'
								id='name'
								name='name'
								value={formData.name}
								onChange={handleChange}
								className='mt-2 w-full p-3 bg-gray-100 border border-gray-300 rounded-md'
								placeholder='Your Name'
							/>
						</div>

						<div className='mb-6'>
							<label htmlFor='email' className='block text-lg font-medium text-white'>
								Email
							</label>
							<input
								type='email'
								id='email'
								name='email'
								value={formData.email}
								onChange={handleChange}
								className='mt-2 w-full p-3 bg-gray-100 border border-gray-300 rounded-md'
								placeholder='Your Email'
							/>
						</div>

						<div className='mb-6'>
							<label htmlFor='message' className='block text-lg font-medium text-white'>
								Message
							</label>
							<textarea
								id='message'
								name='message'
								value={formData.message}
								onChange={handleChange}
								className='mt-2 w-full p-3 bg-gray-100 border border-gray-300 rounded-md'
								placeholder='Your Message'
								rows='6'
							></textarea>
						</div>

						<button
							type='submit'
							className='w-full bg-white text-black py-3 px-4 rounded-md hover:bg-gray-500 focus:outline-none focus:ring-4 focus:gray'
						>
							Submit
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactPage;
