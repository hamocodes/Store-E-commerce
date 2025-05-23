import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen flex flex-col">

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-300 pb-2">
          Privacy Policy
        </h2>

        <section className="space-y-6 text-gray-700">
          <p>
            At <strong className="text-black">ShopNexa</strong>, your privacy is a top priority. This Privacy Policy explains
            how we collect, use, and protect your information when you use our website.
          </p>

          <div>
            <h3 className="text-xl font-semibold text-black">1. Information We Collect</h3>
            <p>
              We may collect personal information such as your name, email address, shipping address,
              payment details, and browsing behavior when you use our site or make a purchase.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">2. How We Use Your Information</h3>
            <p>
              The information we collect is used to:
            </p>
            <ul className="list-disc pl-6">
              <li>Process and fulfill your orders</li>
              <li>Improve our website and services</li>
              <li>Send updates, promotions, and newsletters</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">3. Cookies & Tracking</h3>
            <p>
              We use cookies to enhance your browsing experience and collect usage data. You can control
              cookie preferences through your browser settings.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">4. Sharing Your Data</h3>
            <p>
              We do not sell your personal information. We may share data with trusted partners only for
              order processing, payment handling, and service improvement.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">5. Security</h3>
            <p>
              We implement industry-standard security measures to protect your data. However, no method
              of transmission over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">6. Your Rights</h3>
            <p>
              You have the right to access, modify, or delete your personal data. Contact us at{' '}
              <a href="mailto:support@shopnexa.com" className="text-gray-800 underline">
                support@shopnexa.com
              </a>{' '}
              to make a request.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-black">7. Changes to This Policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page
              with a revised date.
            </p>
          </div>

          <p className="text-sm text-gray-500 mt-8">Last updated: April 25, 2025</p>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
