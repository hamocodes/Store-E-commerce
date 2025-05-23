import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen flex flex-col">

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-300 pb-2">
          Terms & Conditions
        </h2>

        <section className="space-y-6 text-gray-700">
          <p>
            Welcome to <strong className="text-black">ShopNexa</strong>. These terms and conditions outline the
            rules and regulations for the use of our website and services. By accessing this website, we assume
            you accept these terms.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-black">1. Intellectual Property</h3>
            <p>
              All content on this site, including logos, text, graphics, and images, is the property of
              ShopNexa and protected by applicable copyright laws. You may not reproduce or redistribute
              any material without our permission.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">2. Use of Website</h3>
            <p>
              You agree not to misuse the website or help anyone else do so. You must not engage in
              activities that may harm or interfere with the functionality of the platform.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">3. Products & Pricing</h3>
            <p>
              We strive to display accurate product descriptions and prices. However, errors may occur.
              We reserve the right to correct pricing or product details without prior notice.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">4. Payment & Orders</h3>
            <p>
              All orders are subject to acceptance and availability. Payment must be made at the time
              of ordering using accepted methods (e.g., credit card, PayPal, etc.).
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">5. Shipping & Returns</h3>
            <p>
              We aim to ship all items promptly. Our return policy allows returns within 14 days of
              delivery. Please refer to our{' '}
              <a href="/returns-policy" className="text-gray-800 underline">
                Returns Policy
              </a>{' '}
              for more details.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">6. Limitation of Liability</h3>
            <p>
              ShopNexa shall not be liable for any indirect or consequential loss or damage. We do not
              guarantee uninterrupted or error-free service.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">7. Changes to Terms</h3>
            <p>
              We may update these Terms & Conditions from time to time. Continued use of the website
              implies acceptance of any modifications.
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-8">Last updated: April 25, 2025</p>
        </section>
      </main>
    </div>
  );
};

export default TermsAndConditions;
