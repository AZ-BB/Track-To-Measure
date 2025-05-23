'use client';

import { useAuth } from '../context/AuthContext';
import Link from 'next/link';

export default function AuthButton() {
  const { user, logout, isLoading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (isLoading) {
    return (
      <div className="h-7 sm:h-8 w-20 sm:w-24 bg-gray-200 animate-pulse rounded"></div>
    );
  }

  if (user) {
    return (
      <div className="relative group">
        <button className="flex items-center space-x-1 text-xs sm:text-sm font-medium text-gray-700 hover:text-blue-600 font-poppins">
          <span>{user.name || user.email}</span>
          <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        <div className="absolute right-0 mt-2 w-40 sm:w-48 bg-white rounded-lg shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-gray-100 font-poppins"
          >
            Log out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center space-x-2 sm:space-x-3 font-poppins">
      <Link
        href="/auth?mode=login"
        className="text-gray-700 hover:text-blue-600 text-xs sm:text-sm font-medium"
      >
        Log in
      </Link>
      <Link
        href="/auth?mode=signup"
        className="py-1 sm:py-1.5 px-2 sm:px-3 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium rounded-lg transition-colors"
      >
        Sign up
      </Link>
    </div>
  );
} 