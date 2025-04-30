'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { generateReport } from '../../api';
import { useAuth } from '../../context/AuthContext';

export default function GenerateReport() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const urlParam = searchParams.get('url');
  const { isAuthenticated, isLoading: authLoading } = useAuth();

  useEffect(() => {
    if (!urlParam) {
      setError('No URL provided');
      setLoading(false);
      return;
    }

    // Check if user is authenticated
    if (authLoading) {
      return; // Still checking auth status
    }

    if (!isAuthenticated) {
      // Redirect to auth page with return URL
      const currentUrl = window.location.pathname + window.location.search;
      const encodedRedirect = encodeURIComponent(currentUrl);
      router.push(`/auth?redirect=${encodedRedirect}`);
      return;
    }

    const fetchReport = async () => {
      try {
        setLoading(true);
        const url = decodeURIComponent(urlParam);
        
        // Request the PDF generation
        const pdfBlob = await generateReport(url, {
          includeRecommendations: true,
          includeCmsInfo: true,
          includeHeader: true,
          colorScheme: 'default'
        });
        
        // Create a download link
        const downloadUrl = URL.createObjectURL(pdfBlob);
        const link = document.createElement('a');
        
        // Extract domain for file name
        let domain = url;
        try {
          domain = new URL(url.startsWith('http') ? url : `https://${url}`).hostname;
        } catch (e) {
          console.error('Could not parse URL for domain:', e);
        }
        
        // Set download attributes
        link.href = downloadUrl;
        link.download = `tag-report-${domain}.pdf`;
        document.body.appendChild(link);
        
        // Trigger download
        link.click();
        
        // Clean up
        document.body.removeChild(link);
        URL.revokeObjectURL(downloadUrl);
        
        // Navigate back to home page
        setTimeout(() => {
          router.push('/');
        }, 1000);
      } catch (err) {
        console.error('Error generating report:', err);
        setError(err instanceof Error ? err.message : 'Failed to generate report');
      } finally {
        setLoading(false);
      }
    };

    if (isAuthenticated) {
      fetchReport();
    }
  }, [urlParam, router, isAuthenticated, authLoading]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 via-blue-50 to-white p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg text-center">
        {loading ? (
          <>
            <div className="animate-spin w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-6"></div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Generating Your Report</h1>
            <p className="text-gray-600">Please wait while we prepare your PDF report...</p>
          </>
        ) : error ? (
          <>
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Error</h1>
            <p className="text-red-500 mb-6">{error}</p>
            <button 
              onClick={() => router.push('/')}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Return to Home
            </button>
          </>
        ) : (
          <>
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Download Complete</h1>
            <p className="text-gray-600 mb-6">Your report has been generated and downloaded.</p>
            <button 
              onClick={() => router.push('/')}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Return to Home
            </button>
          </>
        )}
      </div>
    </div>
  );
} 