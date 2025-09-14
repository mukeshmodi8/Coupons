import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";

function Claim() {
  const { id } = useParams();
  const location = useLocation();
  const { title } = location.state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 w-full max-w-lg text-center transform transition-transform duration-500 ease-in-out">
        <div className="flex justify-center mb-8 my-5">
          <CheckCircle className="w-20 h-20 text-green-500 animate-bounce" />
        </div>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-2">
          Congratulations! 🎉
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          Your coupon has been successfully claimed.
        </p>
        <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-100">
          {title && (
            <p className="text-gray-700 text-lg mb-2">
              <h1 className="font-semibold text-gray-900 block mb-1"> This Coupon </h1>
              <span className="font-bold text-blue-600 text-xl">{title}</span>
            </p>
          )}
          <p className="text-gray-700 text-lg">
            <span className="font-semibold text-gray-900 block mb-1">Coupon ID</span>
            <span className="font-bold text-blue-600 text-xl">{id}</span>
          </p>
        </div>

        <Link to="/">
          <button className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Coupons
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Claim;