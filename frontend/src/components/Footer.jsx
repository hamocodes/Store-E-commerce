import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, ShieldCheck, CreditCard } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="bg-gray-900 text-gray-300 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand column */}
                    <div className="space-y-4">
                        <h2 className="text-white text-2xl font-bold tracking-tight">ShopNexa</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Elevating your shopping experience with premium products and seamless service.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-400 transition-colors">
                                <Twitter size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500 transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold text-lg">Shop</h3>
                        <ul className="space-y-2">
                            <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors text-sm">All Products</Link></li>
                            <li><Link to="/categories" className="text-gray-400 hover:text-white transition-colors text-sm">Categories</Link></li>
                            <li><Link to="/new-arrivals" className="text-gray-400 hover:text-white transition-colors text-sm">New Arrivals</Link></li>
                            <li><Link to="/deals" className="text-gray-400 hover:text-white transition-colors text-sm">Deals & Offers</Link></li>
                            <li><Link to="/cart" className="text-gray-400 hover:text-white transition-colors text-sm">Your Cart</Link></li>
                        </ul>
                    </div>

                    {/* Company info */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold text-lg">Company</h3>
                        <ul className="space-y-2">
                            <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</Link></li>
                            <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</Link></li>
                            <li><Link to="/press" className="text-gray-400 hover:text-white transition-colors text-sm">Press</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Legal/help */}
                    <div className="space-y-4">
                        <h3 className="text-white font-semibold text-lg">Support</h3>
                        <ul className="space-y-2">
                            <li><Link to="/faq" className="text-gray-400 hover:text-white transition-colors text-sm">FAQs</Link></li>
                            <li><Link to="/shipping" className="text-gray-400 hover:text-white transition-colors text-sm">Shipping Policy</Link></li>
                            <li><Link to="/returns" className="text-gray-400 hover:text-white transition-colors text-sm">Returns & Refunds</Link></li>
                            <li><Link to="/privacy-policy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center space-x-2">
                        <ShieldCheck size={18} className="text-emerald-400" />
                        <span className="text-sm text-gray-400">Secure Payments Via Stripe</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        <CreditCard className="text-gray-400" size={18} />
                        <span className="text-xs text-gray-500">We accept:</span>
                        <div className="flex space-x-2">
                            <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300">Visa</span>
                            <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300">Mastercard</span>
                            <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300">Amex</span>
                            <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300">PayPal</span>
                        </div>
                    </div>
                    
                    <p className="text-sm text-gray-500 text-center md:text-right">
                        &copy; {currentYear} ShopNexa. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;