import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Ticket } from "lucide-react";
import axios from "axios";

function Home() {
    const [coupons, setCoupons] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const res = axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                setCoupons(response.data.slice(0, 5));
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching coupons:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="text-center text-xl font-semibold text-gray-700 animate-pulse">
                    Loading Coupons...
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center text-blue-500">
                        <Ticket className="w-10 h-10" />
                        <h1 className="text-4xl font-extrabold text-gray-900 ml-3">
                            Available Coupons
                        </h1>
                    </div>
                    <p className="mt-4 text-lg text-gray-600">
                        Explore and claim exclusive discounts from your favorite brands.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {coupons.map((coupon) => (
                        <div
                            key={coupon.id}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                        >
                            <div className="p-6">
                                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-800 ring-1 ring-inset ring-blue-700/10 mb-2">
                                    SAVE 20%
                                </span>
                                <h3 className="text-2xl font-bold text-gray-800 leading-tight mt-2">
                                    {coupon.title}
                                </h3>
                                <p className="mt-2 text-gray-600 line-clamp-3">
                                    {coupon.body}
                                </p>
                                <div className="mt-6">
                                    <Link
                                        to={`/claim/${coupon.id}`}
                                        state={{ title: coupon.title }}
                                    >
                                        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300 ease-in-out">
                                            Claim Now
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;