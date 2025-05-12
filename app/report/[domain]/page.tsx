'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import TagResult from '../../components/TagResult';
import { Tag, TagStatus } from '../../api';

export default function ReportPage() {
  const params = useParams();
  const domain = params.domain as string;
  const [isLoading, setIsLoading] = useState(true);
  const [tags, setTags] = useState<Tag[]>([]);

  useEffect(() => {
    const fetchReport = async () => {
      setIsLoading(true);
      try {
        // Mock API call - would be replaced with actual backend call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        setTags([
          { 
            name: 'Google Tag Manager', 
            isPresent: true, 
            id: 'GTM-ABC123', 
            status: TagStatus.CONNECTED,
            statusReason: 'GTM is properly implemented and activated.'
          },
          { 
            name: 'GA4', 
            isPresent: true, 
            id: 'G-XY27990', 
            status: TagStatus.CONNECTED,
            statusReason: 'GA4 tracking is properly implemented and sending data to Google Analytics.'
          },
          { 
            name: 'Google Ads Conversion', 
            isPresent: true, 
            id: 'AW-123456789', 
            status: TagStatus.CONNECTED,
            statusReason: 'Google Ads conversion tracking is properly configured.'
          },
          { 
            name: 'Meta Pixel', 
            isPresent: false, 
            status: TagStatus.NOT_FOUND,
            statusReason: 'No Meta Pixel implementation detected.'
          },
          { 
            name: 'LinkedIn Insight', 
            isPresent: false, 
            status: TagStatus.NOT_FOUND,
            statusReason: 'No LinkedIn Insight Tag detected on this site.'
          },
          { 
            name: 'Pinterest Tag', 
            isPresent: false, 
            status: TagStatus.NOT_FOUND,
            statusReason: 'No Pinterest Tag implementation detected.'
          },
          { 
            name: 'Twitter Pixel', 
            isPresent: false, 
            status: TagStatus.NOT_FOUND,
            statusReason: 'No Twitter Pixel implementation detected.'
          },
        ]);
      } catch (error) {
        console.error('Error fetching report:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (domain) {
      fetchReport();
    }
  }, [domain]);

  const handleDownloadPDF = () => {
    // In a real implementation, this would trigger a PDF download
    // For now, we'll just show an alert
    alert(`PDF report for ${domain} would download here`);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col items-center px-4 py-8">
          <div className="w-full max-w-3xl mx-auto text-center">
            <div className="animate-pulse p-6 border rounded-lg">
              <div className="h-6 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto mb-8"></div>
              
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="mb-4 flex items-center">
                  <div className="h-8 w-8 bg-gray-200 rounded-full mr-3"></div>
                  <div className="flex-grow">
                    <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/4"></div>
                  </div>
                  <div className="h-8 w-8 bg-gray-200 rounded-full ml-2"></div>
                </div>
              ))}
              
              <div className="h-10 bg-gray-200 rounded mt-6"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-3xl mx-auto">
          <div className="p-6 border rounded-lg shadow-sm">
            <h1 className="text-2xl font-bold mb-2 text-center">Tag Scan Report</h1>
            <p className="text-gray-500 mb-6 text-center">for {decodeURIComponent(domain)}</p>
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Marketing Tags</h2>
              <div className="border rounded-lg overflow-hidden">
                <div className="divide-y">
                  {tags.map((tag, index) => (
                    <div key={tag.name} className="p-3">
                      <TagResult 
                        name={tag.name} 
                        isPresent={tag.isPresent} 
                        id={tag.id} 
                        status={tag.status}
                        statusReason={tag.statusReason}
                        index={index}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-3">Recommendations</h2>
              <div className="bg-blue-50 p-4 rounded-lg">
                <ul className="list-disc list-inside space-y-2 text-sm">
                  {!tags.find(t => t.name === 'Google Tag Manager')?.isPresent && (
                    <li>Install Google Tag Manager to centralize your marketing tags</li>
                  )}
                  {!tags.find(t => t.name === 'GA4')?.isPresent && (
                    <li>Add Google Analytics 4 for detailed website analytics</li>
                  )}
                  {!tags.find(t => t.name === 'Meta Pixel')?.isPresent && (
                    <li>Install Meta Pixel to track Facebook/Instagram ad conversions</li>
                  )}
                </ul>
              </div>
            </div>
            
            <button
              onClick={handleDownloadPDF}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download PDF Report
            </button>
          </div>
        </div>
      </main>
    </div>
  );
} 