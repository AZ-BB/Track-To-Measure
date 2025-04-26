import TagResult from './TagResult';
import Link from 'next/link';

export interface Tag {
  name: string;
  isPresent: boolean;
  id?: string;
}

interface ScanResultsProps {
  url: string;
  tags: Tag[];
  isLoading?: boolean;
}

export default function ScanResults({ url, tags, isLoading = false }: ScanResultsProps) {
  if (isLoading) {
    return (
      <div className="w-full max-w-lg mx-auto p-6 mt-8 border border-blue-100 rounded-lg animate-pulse bg-white/50">
        <div className="h-5 bg-blue-100 rounded w-3/4 mb-4"></div>
        <div className="h-4 bg-blue-100 rounded w-1/2 mb-6"></div>
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex items-center my-4">
            <div className="w-8 h-8 mr-3 bg-blue-100 rounded-full"></div>
            <div className="flex-grow">
              <div className="h-4 bg-blue-100 rounded w-1/2 mb-2"></div>
            </div>
            <div className="w-8 h-8 ml-2 bg-blue-100 rounded-full"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!url || tags.length === 0) {
    return null;
  }

  const domain = new URL(url.startsWith('http') ? url : `https://${url}`).hostname;
  
  return (
    <div className="w-full max-w-lg mx-auto p-6 mt-8 rounded-lg bg-white">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center mr-3">
          <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-800">Tag Scan Report</h2>
          <p className="text-sm text-gray-500">for {domain}</p>
        </div>
      </div>
      
      <div className="divide-y divide-blue-100">
        {tags.map((tag) => (
          <TagResult 
            key={tag.name} 
            name={tag.name} 
            isPresent={tag.isPresent}
            id={tag.id}
          />
        ))}
      </div>
      
      <div className="mt-8">
        <Link 
          href={`/report/${encodeURIComponent(domain)}`} 
          className="block w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-center font-medium rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all duration-200 ease-in-out transform hover:scale-105 shadow-md"
        >
          <span className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
            </svg>
            Download Report
          </span>
        </Link>
      </div>
    </div>
  );
} 