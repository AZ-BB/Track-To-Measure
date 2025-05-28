import TagResult from './TagResult';
import Link from 'next/link';
import { Tag, ScanResult, TagStatus } from '../api';
import { useEffect, useRef, useState } from 'react';

interface ScanResultsProps {
  url: string;
  tags: Tag[];
  isLoading?: boolean;
  scanResult?: ScanResult | null;
}

export default function ScanResults({ url, tags, isLoading = false, scanResult }: ScanResultsProps) {
  const [expandedTags, setExpandedTags] = useState<Set<string>>(new Set());

  const toggleTagExpansion = (tagName: string) => {
    const newExpanded = new Set(expandedTags);
    if (newExpanded.has(tagName)) {
      newExpanded.delete(tagName);
    } else {
      newExpanded.add(tagName);
    }
    setExpandedTags(newExpanded);
  };

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
      {/* <div className="flex justify-center items-center mb-3 sm:mb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Tag Scan Report</h2>
          <p className="text-sm sm:text-base text-gray-500">for <a href={domain.startsWith('http') ? domain : `https://${domain}`} className="text-blue-600 font-bold">{domain}</a></p>
        </div>
      </div> */}

      {/* Progress bar */}
      {/* <div className="mb-4 sm:mb-6">
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
      </div> */}

      {/* Status summary */}
      {/* <div className="flex justify-between mb-4 text-xs text-gray-600 bg-gray-50 p-3 rounded border border-gray-200">
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
      </div> */}

      <div className="divide-y divide-blue-100">
        <div className="bg-gray-50 px-3 py-2 rounded-t-lg">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-700">Tag</span>
            <span className="text-sm font-semibold text-gray-700">Status</span>
          </div>
        </div>
        <div className="divide-y divide-gray-200">
          {tags.map((tag, index) => (
            <div key={tag.name} className="opacity-0" style={{ animation: `fadeIn 0.5s ease-in-out forwards`, animationDelay: `${index * 100}ms` }}>
              {/* Main tag row */}
              <div
                className="py-3 px-3 cursor-pointer hover:bg-gray-50 transition-colors duration-150"
                onClick={() => toggleTagExpansion(tag.name)}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="mr-3">
                      {tag.name === "Google Tag Manager" && (
                        <img src="/tags/GTM.png" alt="Google Tag Manager" className="w-6 h-6" />
                      )}
                      {tag.name === "GA4" && (
                        <img src="/tags/GA4.png" alt="Google Analytics 4" className="w-6 h-6" />
                      )}
                      {tag.name === "Google Ads Conversion" && (
                        <img src="/tags/GAC.svg" alt="Google Ads Conversion" className="w-6 h-6" />
                      )}
                      {tag.name === "Meta Pixel" && (
                        <img src="/tags/meta.png" alt="Meta Pixel" className="w-6 h-6" />
                      )}
                    </div>
                    <span className="font-semibold text-gray-800">{tag.name}</span>
                    <div className="ml-2">
                      <svg
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${expandedTags.has(tag.name) ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {tag.status === TagStatus.CONNECTED && (
                      <div className="inline-flex justify-center items-center text-green-500">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    )}
                    {tag.status === TagStatus.MISCONFIGURED && (
                      <div className="inline-flex justify-center items-center text-yellow-500">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    )}
                    {tag.status === TagStatus.INCOMPLETE && (
                      <div className="inline-flex justify-center items-center text-orange-500">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    )}
                    {tag.status === TagStatus.NOT_FOUND && (
                      <div className="inline-flex justify-center items-center text-red-600">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Expanded content */}
              {expandedTags.has(tag.name) && (
                <div className="px-3 pb-3 bg-gray-50 border-t border-gray-200">
                  <div className="pt-3 space-y-3">
                    {/* Tag IDs */}
                    {(tag.id || (tag.ids && tag.ids.length > 0)) && (
                      <div>
                        <h4 className="text-xs font-semibold text-gray-600 mb-1">Tag ID(s):</h4>
                        {tag.ids && tag.ids.length > 0 && (
                          <div className="space-y-1">
                            {tag.ids.map((id, idIndex) => (
                              <div key={idIndex} className="text-xs text-blue-500 font-mono bg-white px-2 py-1 rounded border">
                                {id}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Status reason/description */}
                    {tag.statusReason && (
                      <div>
                        <h4 className="text-xs font-semibold text-gray-600 mb-1">Details:</h4>
                        <div className="text-xs p-2 rounded-md border bg-white text-gray-600">
                          {tag.statusReason}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CMS Information */}
      {scanResult?.cms && (
        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center">
            <div className="mr-3">
              <div className="bg-blue-100 p-1.5 sm:p-2 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-gray-700">CMS Platform</p>
              <p className="text-sm sm:text-base font-medium text-blue-700">{scanResult.cms}</p>
            </div>
          </div>
        </div>
      )}

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
            query: {
              url: encodeURIComponent(url),
              data: encodeURIComponent(JSON.stringify({
                tags,
                scanResult,
                domain,
                percentComplete,
                connectedCount,
                misconfiguredCount,
                incompleteCount,
                notFoundCount
              }))
            }
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