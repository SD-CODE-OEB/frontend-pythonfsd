import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-70px)] bg-gray-50 flex flex-col justify-between">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 sm:py-24 text-center">
        <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 rounded-full border border-blue-200">
          Welcome to Our Store
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight max-w-3xl mx-auto leading-tight">
          Discover Premium Gadgets & Lifestyle Gear
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Explore top-notch devices, curated collections, and unbeatable prices.
          Please sign in to browse and manage your product catalogue.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/login"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-6 py-3 rounded-xl bg-blue-600 text-white text-base font-semibold shadow-sm sm:hover:bg-blue-700 transition-colors"
          >
            Sign In to View Products
          </Link>
          <Link
            to="/products"
            className="w-full sm:w-auto inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-6 py-3 rounded-xl bg-white text-gray-800 text-base font-medium border border-gray-300 shadow-2xs sm:hover:bg-gray-100 transition-colors"
          >
            Explore Catalog
          </Link>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="max-w-6xl mx-auto px-4 pb-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xs">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold mb-4">
              ⚡
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Performance</h3>
            <p className="text-sm text-gray-600">
              Browse through our interactive product catalog powered by client-side routing.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xs">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold mb-4">
              🔒
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Authentication</h3>
            <p className="text-sm text-gray-600">
              Instant login integration verifying user credentials before navigating to products.
            </p>
          </div>
          <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-xs">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 font-bold mb-4">
              📱
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Responsive Experience</h3>
            <p className="text-sm text-gray-600">
              Designed with mobile-first iOS touch standards and clean Tailwind CSS layouts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
