import React from 'react';

const ReturnsRefunds = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen flex flex-col">

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-300 pb-2">
          Returns & Refunds
        </h2>

        <section className="space-y-6 text-gray-700">
          <p>
            At <strong className="text-black">ShopNexa</strong>, we want you to be completely satisfied with your purchase. If for any reason you are not satisfied, we offer the following returns and refunds policy.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-black">1. Return Eligibility</h3>
            <p>
              You can return items within 30 days of receiving your order, as long as the item is unused, in its original packaging, and in resalable condition.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">2. Non-Returnable Items</h3>
            <p>
              Certain items are non-returnable, including but not limited to perishable goods, intimate items, and gift cards. Please refer to the product page for more information.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">3. How to Initiate a Return</h3>
            <p>
              To initiate a return, please contact our customer support team at{' '}
              <a href="mailto:support@shopnexa.com" className="text-gray-800 underline">
                support@shopnexa.com
              </a>. Provide your order number and the reason for the return, and we will guide you through the process.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">4. Refund Process</h3>
            <p>
              Once your return is received and inspected, we will notify you via email regarding your refund status. Refunds will be issued to the original payment method within 5-7 business days.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">5. Shipping Costs</h3>
            <p>
              You are responsible for the shipping costs associated with returning the item, unless the return is due to an error on our part (e.g., damaged or incorrect items).
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-8">Last updated: April 25, 2025</p>
        </section>
      </main>
    </div>
  );
};

export default ReturnsRefunds;
