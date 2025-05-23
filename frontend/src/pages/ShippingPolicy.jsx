import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen flex flex-col">

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-300 pb-2">
          Shipping Policy
        </h2>

        <section className="space-y-6 text-gray-700">
          <p>
            At <strong className="text-black">ShopNexa</strong>, we are committed to delivering your orders in a timely and efficient manner. Below is our shipping policy that explains how we handle your order's shipping.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-black">1. Shipping Methods</h3>
            <p>
              We offer various shipping methods depending on your location. Shipping fees are calculated at checkout based on your delivery address and the chosen shipping method.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">2. Processing Time</h3>
            <p>
              Orders are processed within 1-2 business days. Orders placed on weekends or holidays will be processed the next business day.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">3. Delivery Time</h3>
            <p>
              Estimated delivery times vary depending on the shipping method and destination. Typically, orders are delivered within 5-7 business days, but please allow up to 14 days for international shipments.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">4. Shipping Restrictions</h3>
            <p>
              We currently ship to the following countries: [list of countries]. If your location is not available, we may not be able to fulfill your order.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">5. Shipping Charges</h3>
            <p>
              Shipping charges are calculated at checkout based on the weight of your order and the destination address. Free shipping is available for orders over $[amount].
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-8">Last updated: April 25, 2025</p>
        </section>
      </main>
    </div>
  );
};

export default ShippingPolicy;
