'use client';

import { Suspense, useState } from 'react';
import Navbar from './components/Navbar';
import URLForm from './components/URLForm';
import ScanResults from './components/ScanResults';
import SubscriptionForm from './components/SubscriptionForm';
import TagSlideshow from './components/TagSlideshow';
import { scanUrl, ScanResult } from './api';

export default function Home() {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [scanResults, setScanResults] = useState<ScanResult | null>(null);

  const handleScan = async (inputUrl: string) => {
    setUrl(inputUrl);
    setIsScanning(true);
    setError(null);

    try {
      // Call the backend API to scan the URL
      const result = await scanUrl({
        url: inputUrl,
        includeCmsDetection: true
      });

      setScanResults(result);
    } catch (err) {
      console.error('Error scanning URL:', err);
      setError(err instanceof Error ? err.message : 'Failed to scan URL');
      setScanResults(null);
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-quicksand">
      <Navbar />

      <main className="flex-grow flex flex-col items-center px-4 sm:px-6 py-8 sm:py-12">
        <div className="w-full max-w-3xl mx-auto text-center mb-6 sm:mb-8">
          <div className="mb-6 sm:mb-10">
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 px-2">
              Track Your Marketing Tags in Seconds
            </h1>
            <p className="font-quicksand text-lg sm:text-xl text-gray-700 mb-6 sm:mb-8 px-2">
              Instantly check GTM, GA4, Google Ads & Meta Pixel on any site
            </p>
          </div>

          <div className="p-4 sm:p-6 md:p-8 rounded-xl">
            <URLForm onSubmit={handleScan} isLoading={isScanning} />

            {error && (
              <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm sm:text-base">
                {error}
              </div>
            )}

            {/* Show scan results or skeleton loader */}
            {(scanResults || isScanning) && (
              <ScanResults
                url={url}
                tags={scanResults?.tags || []}
                isLoading={isScanning}
                scanResult={scanResults}
              />
            )}

            {/* Show TagSlideshow when not scanning and no results */}
            {!scanResults && !isScanning && (
              <TagSlideshow />
            )}

            <div className="mt-10 sm:mt-16">
              <SubscriptionForm />
            </div>

          </div>

        </div>
      </main>

    </div>
  );
}
