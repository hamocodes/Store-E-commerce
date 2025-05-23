import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-white text-black font-sans min-h-screen flex flex-col">

      <main className="flex-grow max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-black mb-6 border-b border-gray-300 pb-2">
          About Us
        </h2>

        <section className="space-y-6 text-gray-700">
          <div className="flex flex-col md:flex-row md:space-x-8">
            {/* Left side - Images of Products */}
            <div className="w-full md:w-1/2">
              <img
                src="/jean.png"
                alt="Jeans"
                className="w-full h-auto mb-4 rounded-lg shadow-lg"
              />
              
              
            </div>

            {/* Right side - About Us Text */}
            <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
              <h3 className="text-xl font-semibold text-black">Welcome to ShopNexa!</h3>
              <p>
                At ShopNexa, we offer a wide range of premium fashion products including stylish
                jeans, elegant watches, trendy t-shirts, comfortable jackets, fashionable shoes,
                and much more. We are dedicated to bringing the best of fashion right to your
                doorstep.
              </p>
              <p>
                We believe that shopping for clothes should be easy, convenient, and fun. Whether
                you’re looking for a casual t-shirt or a sleek watch, we’ve got something for every
                occasion.
              </p>
              <p>
                Our website makes it simple to explore and find the latest styles, and we offer
                seamless payment options via <strong>Stripe</strong>, ensuring secure transactions every time.
              </p>
              <p>
                We are committed to providing the best customer service and making your shopping
                experience smooth and enjoyable. Happy shopping!
              </p>
            </div>
          </div>

          {/* Product Highlights Section */}
          <section className="mt-12">
            <h3 className="text-xl font-semibold text-black mb-4">Our Product Categories</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <img
                  src="/jacket.png"
                  alt="Jacket"
                  className="w-full h-auto rounded-lg shadow-lg mb-2"
                />
                <p>Jackets</p>
              </div>
              <div className="text-center">
                <img
                  src="shoe.png"
                  alt="Shoes"
                  className="w-full h-auto rounded-lg shadow-lg mb-2"
                />
                <p>Shoes</p>
              </div>
              <div className="text-center">
                <img
                  src="/watch.png"
                  alt="Watches"
                  className="w-full h-auto rounded-lg shadow-lg mb-2"
                />
                <p>Watches</p>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
