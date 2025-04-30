'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { processGoogleAuthCallback } from '../../utils/auth';

// Component that uses search params
function AuthCallbackContent() {
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>('loading');
  const [errorMessage, setErrorMessage] = useState('');
  const searchParams = useSearchParams();
  
  useEffect(() => {
    const token = searchParams.get('token');
    const error = searchParams.get('error');
    
    if (error) {
      setStatus('error');
      setErrorMessage(error);
      return;
    }
    
    if (!token) {
      setStatus('error');
      setErrorMessage('Authentication failed: No token received');
      return;
    }
    
    // Parse the user data from URL parameters
    try {
      const userId = searchParams.get('userId') || '';
      const email = searchParams.get('email') || '';
      const name = searchParams.get('name') || undefined;
      
      // Process the authentication data
      processGoogleAuthCallback(token, { id: userId, email, name });
      setStatus('success');
      
      // Redirect will happen in processGoogleAuthCallback
    } catch (err) {
      console.error('Failed to process authentication:', err);
      setStatus('error');
      setErrorMessage('Failed to process authentication data');
    }
  }, [searchParams]);
  
  if (status === 'loading') {
    return (
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
        <div className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"></div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Completing Authentication</h1>
        <p className="text-gray-600">Please wait while we complete your sign-in...</p>
      </div>
    );
  }
  
  if (status === 'error') {
    return (
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Authentication Failed</h1>
        <p className="text-red-500 mb-6">{errorMessage}</p>
        <a 
          href="/auth"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors inline-block"
        >
          Try Again
        </a>
      </div>
    );
  }
  
  return (
    <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Authentication Successful</h1>
      <p className="text-gray-600 mb-6">You have been successfully authenticated.</p>
    </div>
  );
}

// Loading fallback for Suspense
function AuthCallbackLoading() {
  return (
    <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg flex items-center justify-center">
      <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      <span className="ml-3 text-gray-700">Loading...</span>
    </div>
  );
}

// Main page component with Suspense boundary
export default function AuthCallback() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 via-blue-50 to-white p-4">
      <Suspense fallback={<AuthCallbackLoading />}>
        <AuthCallbackContent />
      </Suspense>
    </div>
  );
} 