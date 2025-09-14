import React from 'react';
import { Ticket } from 'lucide-react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-slate-900 shadow-xl sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Ticket className="w-8 h-8 text-yellow-400" />
                    <Link to="/" className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors">
                        Coupon Hub
                    </Link>
                </div>
                <div className="hidden sm:flex items-center space-x-6">
                    <Link to="/" className="text-gray-300 hover:text-yellow-400 font-semibold transition-colors">
                        Home
                    </Link>
                    <Link to="/about" className="text-gray-300 hover:text-yellow-400 font-semibold transition-colors">
                        About
                    </Link>
                    <Link to="/contact" className="text-gray-300 hover:text-yellow-400 font-semibold transition-colors">
                        Contact
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;