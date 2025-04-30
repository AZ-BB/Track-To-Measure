import Link from 'next/link';
import AuthButton from './AuthButton';

export default function Navbar() {
  return (
    <nav className="w-full bg-white bg-opacity-90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 py-4 w-full max-w-7xl mx-auto">
        <Link href="/" className="flex items-center">
          <div className="w-8 h-8 mr-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
            <svg 
              className="w-5 h-5 text-white" 
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
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 text-sm sm:text-base">TRACK TO MEASURE</span>
        </Link>
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-6 text-sm">
            <Link href="/guides" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Guides</Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</Link>
          </div>
          <AuthButton />
        </div>
      </div>
    </nav>
  );
} 