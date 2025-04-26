'use client';

import { useState } from 'react';
import Navbar from './components/Navbar';
import URLForm from './components/URLForm';
import ScanResults, { Tag } from './components/ScanResults';
import SubscriptionForm from './components/SubscriptionForm';

export default function Home() {
  const [url, setUrl] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResults, setScanResults] = useState<Tag[]>([]);

  const handleScan = async (inputUrl: string) => {
    setUrl(inputUrl);
    setIsScanning(true);
    
    try {
      // Mock API call - this would be replaced with a real API call to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock results - this would come from the backend in a real implementation
      setScanResults([
        { name: 'Google Tag Manager', isPresent: true, id: 'GTM-ABC123' },
        { name: 'GA4', isPresent: true, id: 'G-XY27990' },
        { name: 'Google Ads Conversion', isPresent: true },
        { name: 'Meta Pixel', isPresent: false },
      ]);
    } catch (error) {
      console.error('Error scanning URL:', error);
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-indigo-50 via-blue-50 to-white">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center px-4 py-12">
        <div className="w-full max-w-3xl mx-auto text-center mb-8">
          <div className="mb-10">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              Track Your Marketing Tags in Seconds
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Instantly check GTM, GA4, Google Ads & Meta Pixel on any site
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
            <URLForm onSubmit={handleScan} isLoading={isScanning} />
            
            {/* Show scan results or skeleton loader */}
            <ScanResults 
              url={url} 
              tags={scanResults} 
              isLoading={isScanning && url.length > 0} 
            />
          </div>
          
          <div className="mt-16">
            <SubscriptionForm />
          </div>
        </div>
      </main>
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-60 right-10 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
    </div>
  );
}
