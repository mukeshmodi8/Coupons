import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 py-10 mt-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left">
                    <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
                        <div className="flex items-center space-x-2 mb-2">
                            <Ticket className="w-6 h-6 text-blue-400" />
                            <span className="text-xl font-bold text-white">Coupon Hub</span>
                        </div>
                        <p className="text-sm">
                            &copy; {new Date().getFullYear()} Coupon Hub. All rights reserved.
                        </p>
                    </div>
                    <div className="mb-6 md:mb-0">
                        <h4 className="text-lg font-semibold text-white mb-2">Quick Links</h4>
                        <ul className="space-y-1">
                            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                        </ul>
                    </div>
                    <div className="flex justify-center md:justify-start space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
                            <Facebook className="w-6 h-6" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
                            <Instagram className="w-6 h-6" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-200 transition-colors">
                            <Linkedin className="w-6 h-6" />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default Footer;