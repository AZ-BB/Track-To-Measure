import TagResult from './TagResult';
import Link from 'next/link';
import { Tag, ScanResult, TagStatus } from '../api';
import { useEffect, useRef } from 'react';

interface ScanResultsProps {
  url: string;
  tags: Tag[];
  isLoading?: boolean;
  scanResult?: ScanResult | null;
}

export default function ScanResults({ url, tags, isLoading = false, scanResult }: ScanResultsProps) {

  if (isLoading) {
    return (
      <div className="w-full max-w-xl mx-auto p-3 sm:p-6 mt-4 sm:mt-8 border border-blue-100 rounded-lg animate-pulse bg-white/50">
        <div className="h-4 sm:h-5 bg-blue-100 rounded w-3/4 mb-3 sm:mb-4"></div>
        <div className="h-3 sm:h-4 bg-blue-100 rounded w-1/2 mb-4 sm:mb-6"></div>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center my-3 sm:my-4">
            <div className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3 bg-blue-100 rounded-full"></div>
            <div className="flex-grow">
              <div className="h-3 sm:h-4 bg-blue-100 rounded w-1/2 mb-1 sm:mb-2"></div>
            </div>
            <div className="w-6 h-6 sm:w-8 sm:h-8 ml-1 sm:ml-2 bg-blue-100 rounded-full"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!url || tags.length === 0) {
    return null;
  }

  const domain = new URL(url.startsWith('http') ? url : `https://${url}`).hostname;

  // Consider fully connected tags only
  const fullyConnectedTags = tags.filter(tag => tag.status === TagStatus.CONNECTED).length;
  const totalTags = tags.length;
  const percentComplete = Math.round((fullyConnectedTags / totalTags) * 100);

  // Count status types for summary
  const connectedCount = tags.filter(tag => tag.status === TagStatus.CONNECTED).length;
  const misconfiguredCount = tags.filter(tag => tag.status === TagStatus.MISCONFIGURED).length;
  const incompleteCount = tags.filter(tag => tag.status === TagStatus.INCOMPLETE).length;
  const notFoundCount = tags.filter(tag => tag.status === TagStatus.NOT_FOUND).length;

  return (
    <div className="w-full max-w-xl mx-auto p-3 sm:p-6 mt-2 rounded-lg bg-white font-quicksand">
      <div className="flex justify-center items-center mb-3 sm:mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Tag Scan Report</h2>
          <p className="text-sm sm:text-base text-gray-500">for <a href={domain.startsWith('http') ? domain : `https://${domain}`} className="text-blue-600 font-bold">{domain}</a></p>
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4 sm:mb-6">
        <div className="flex justify-between mb-1">
          <span className="text-xs font-medium text-blue-700">{fullyConnectedTags} of {totalTags} tags properly connected</span>
          <span className="text-xs font-medium text-blue-700">{percentComplete}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 sm:h-2.5">
          <div
            className={`h-2 sm:h-2.5 rounded-full ${percentComplete < 33 ? 'bg-red-500' :
              percentComplete < 66 ? 'bg-yellow-500' :
                'bg-green-500'
              }`}
            style={{ width: `${percentComplete}%` }}
          ></div>
        </div>
      </div>

      {/* Status summary */}
      <div className="flex justify-between mb-4 text-xs text-gray-600 bg-gray-50 p-3 rounded border border-gray-200">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
          <span>Connected: {connectedCount}</span>
        </div>
        {misconfiguredCount > 0 && (
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
            <span>Misconfigured: {misconfiguredCount}</span>
          </div>
        )}
        {incompleteCount > 0 && (
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-orange-500 mr-1"></div>
            <span>Incomplete: {incompleteCount}</span>
          </div>
        )}
        {notFoundCount > 0 && (
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
            <span>Not Found: {notFoundCount}</span>
          </div>
        )}
      </div>

      <div className="divide-y divide-blue-100">
        {tags.map((tag, index) => (
          <TagResult
            index={index}
            key={tag.name}
            name={tag.name}
            isPresent={tag.isPresent}
            status={tag.status}
            id={tag.id}
            details={tag.details}
            dataLayer={tag.dataLayer}
            style={{ animationDelay: `${index * 100}ms` }}
          />
        ))}
      </div>

      {/* {scanResult && scanResult.recommendations && scanResult.recommendations.length > 0 && (
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-lg">
          <h3 className="text-sm sm:text-md font-semibold text-blue-800 mb-1 sm:mb-2">Recommendations</h3>
          <ul className="list-disc list-inside text-xs sm:text-sm text-blue-700 space-y-1">
            {scanResult.recommendations.map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
      )} */}

      <div className="mt-6 sm:mt-8">
        <Link
          href={{
            pathname: `/report/generate`,
            query: { url: encodeURIComponent(url) }
          }}
          className="block w-full py-2 sm:py-3 px-3 sm:px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center text-sm sm:text-base font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 ease-in-out transform hover:scale-105 shadow-md"
        >
          <span className="flex items-center justify-center">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download Report
          </span>
        </Link>
      </div>

      {
        (() => {
          const ref = useRef<HTMLDivElement>(null);

          useEffect(() => {
            ref.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }, []);

          return (
            <div ref={ref} className="h-1"></div>
          )
        })()
      }
    </div>
  );
} 