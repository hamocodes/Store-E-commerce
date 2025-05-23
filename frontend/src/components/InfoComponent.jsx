import React from "react";

const InfoComponent = () => {
	return (
		<div className="space-y-4 bg-black p-5 rounded-lg shadow">
			<h2 className="text-xl font-semibold">Shipping Information</h2>
			<form className="space-y-4">
				<div>
					<label className="block text-sm font-medium">Full Name</label>
					<input
						type="text"
						className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black"
						placeholder="Hamza A" required
					/>
				</div>
				<div>
					<label className="block text-sm font-medium">Email</label>
					<input
						type="email"
						className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black"
						placeholder="you@example.com" required
					/>
				</div>
				<div>
					<label className="block text-sm font-medium">Phone Number</label>
					<input
						type="tel"
						className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black"
						placeholder="+212 600000000"
					/>
				</div>
				<div>
					<label className="block text-sm font-medium">Address</label>
					<textarea
						className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black text-black"
						placeholder="123 Main St, City, Country"
						rows="3" required
					/>
				</div>
			</form>
		</div>
	);
};

export default InfoComponent;