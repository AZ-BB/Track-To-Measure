interface TagResultProps {
  name: string;
  isPresent: boolean;
  id?: string;
}

export default function TagResult({ name, isPresent, id }: TagResultProps) {
  return (
    <div className="flex items-center py-4">
      <div className="mr-4">
        {name === 'Google Tag Manager' && (
          <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-lg">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 7V17L9 20L15 17L20 20V7L15 4L9 7L4 4V7Z" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 7L9 10M9 10V20M9 10L15 7M20 7L15 10M15 10V17M15 10L9 13" stroke="#4285F4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
        
        {name === 'GA4' && (
          <div className="w-10 h-10 flex items-center justify-center bg-blue-50 rounded-lg">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="#4285F4" strokeWidth="2"/>
              <path d="M12 16V12L16 8" stroke="#4285F4" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
        )}
        
        {name === 'Google Ads Conversion' && (
          <div className="w-10 h-10 flex items-center justify-center bg-yellow-50 rounded-lg">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 17L9 11L13 15L21 7" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M14 7H21V14" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )}
        
        {name === 'Meta Pixel' && (
          <div className="w-10 h-10 flex items-center justify-center bg-red-50 rounded-lg">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 8V16M8 12H16" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <rect x="4" y="4" width="16" height="16" rx="2" stroke="#FF0000" strokeWidth="2"/>
            </svg>
          </div>
        )}
      </div>
      
      <div className="flex-grow">
        <span className="font-semibold text-gray-800">{name}</span>
        {id && <div className="text-xs text-blue-500 font-mono mt-1">{id}</div>}
      </div>
      
      <div className="ml-2 flex items-center">
        {isPresent ? (
          <div className="flex items-center bg-green-50 text-green-600 px-3 py-1 rounded-full">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 13L10 16L17 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="text-xs font-medium">Detected</span>
          </div>
        ) : (
          <div className="flex items-center bg-red-50 text-red-500 px-3 py-1 rounded-full">
            <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 9L9 15M9 9L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
            </svg>
            <span className="text-xs font-medium">Missing</span>
          </div>
        )}
      </div>
    </div>
  );
} 