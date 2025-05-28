'use client';
import Link from 'next/link';
import AuthButton from './AuthButton';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-3 sm:py-4 w-full max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <div className="w-7 h-7 sm:w-8 sm:h-8 mr-1 sm:mr-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span className="font-poppins font-bold text-black text-xs sm:text-sm md:text-base">TRACK TO MEASURE</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="flex items-center space-x-6 text-sm font-poppins">
            <Link href="/listeners" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Listeners</Link>
            <Link href="/guides" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Guides</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
          </div>
          <AuthButton />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            type="button"
            className="text-gray-600 hover:text-blue-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-3 bg-white border-t border-gray-100 shadow-inner">
          <div className="flex flex-col space-y-3 font-poppins">
            <Link
              href="/listeners"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Listeners
            </Link>
            <Link
              href="/guides"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Guides
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-2 border-t border-gray-100">
              <AuthButton />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 