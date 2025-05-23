import React from 'react';

const FAQs = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen flex flex-col">

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-300 pb-2">
          Frequently Asked Questions (FAQs)
        </h2>

        <section className="space-y-6 text-gray-700">
          <p>
            Welcome to our Frequently Asked Questions page. Here, you'll find answers to common questions about our products, services, and policies.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-black">1. What products do you sell?</h3>
            <p>
              We offer a wide range of high-quality clothing, watches, and more. Check out our product catalog for the full selection.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">2. How can I track my order?</h3>
            <p>
              Once your order has shipped, you will receive an email with a tracking number and a link to track your package. You can also track your order through your account on our website.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">3. Do you offer international shipping?</h3>
            <p>
              Yes, we offer international shipping to select countries. Shipping fees and delivery times vary depending on the destination.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">4. How do I return an item?</h3>
            <p>
              To initiate a return, please refer to our <a href="/returns" className="text-gray-800 underline">Returns & Refunds</a> policy. If you need further assistance, you can reach out to our customer support team.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">5. Can I cancel my order?</h3>
            <p>
              Orders can be canceled within 24 hours of placing the order. After that, the order will be processed and shipped, and we are unable to cancel it.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">6. What payment methods do you accept?</h3>
            <p>
              We accept a variety of payment methods, including credit/debit cards, PayPal, and other secure payment gateways.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">7. How can I contact customer support?</h3>
            <p>
              You can contact our customer support team at{' '}
              <a href="mailto:support@shopnexa.com" className="text-gray-800 underline">
                support@shopnexa.com
              </a>{' '}
              for any questions or assistance.
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-8">Last updated: April 25, 2025</p>
        </section>
      </main>
    </div>
  );
};

export default FAQs;
