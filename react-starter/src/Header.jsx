import React from "react";
import { Link, useLocation } from "react-router";

const Header = ({ buttonText }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isProfilePage = location.pathname === "/profile";

  return (
    <header className="w-full border-b border-gray-200 bg-white shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-gray-900 sm:hover:text-blue-600 transition-colors"
        >
          StoreApp
        </Link>
        <nav className="flex items-center gap-3">
          <Link
            to="/profile"
            className={`inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-4 py-2 rounded-lg text-base font-medium transition-colors ${
              isProfilePage
                ? "bg-blue-50 text-blue-600 font-semibold border border-blue-200"
                : "bg-gray-100 text-gray-700 sm:hover:bg-gray-200"
            }`}
          >
            Profile
          </Link>

          {isLoginPage ? (
            <Link
              to="/"
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-4 py-2 rounded-lg bg-gray-100 text-gray-800 text-base font-medium sm:hover:bg-gray-200 transition-colors"
            >
              Home
            </Link>
          ) : (
            <Link
              to="/login"
              className="inline-flex items-center justify-center min-h-[44px] min-w-[44px] px-4 py-2 rounded-lg bg-blue-600 text-white text-base font-medium sm:hover:bg-blue-700 transition-colors"
            >
              {buttonText}
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
