import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaQuestionCircle, FaExclamation, FaExclamationCircle } from "react-icons/fa"
import { TagStatus } from "../api"
import { CSSProperties, useState } from "react"

interface TagResultProps {
  name: string
  isPresent: boolean
  status: TagStatus
  id?: string
  ids?: string[]
  details?: string
  dataLayer?: boolean
  style?: CSSProperties
  index: number
}

export default function TagResult({ name, isPresent, status, id, ids, details, dataLayer, style, index }: TagResultProps) {
  const [expanded, setExpanded] = useState(false);
  
  // Generate status badge based on status
  const renderStatusBadge = () => {
    switch (status) {
      case TagStatus.CONNECTED:
        return (
          <div className="flex justify-center items-center text-green-500 p-[2px] rounded-full">
            <FaCheckCircle className="w-[24px] h-[24px]" />
          </div>
        )
      case TagStatus.MISCONFIGURED:
        return (
          <div className="flex justify-center items-center text-yellow-500 p-[2px] rounded-full" title="Misconfigured">
            <FaExclamationCircle   className="w-[24px] h-[24px]" />
          </div>
        )
      case TagStatus.INCOMPLETE:
        return (
          <div className="flex justify-center items-center text-orange-500 p-[2px] rounded-full" title="Incomplete Setup">
            <FaExclamationCircle   className="w-[24px] h-[24px]" />
          </div>
        )
      case TagStatus.ERROR:
        return (
          <div className="flex justify-center items-center bg-purple-500 text-white p-1 rounded-full" title="Error">
            <FaQuestionCircle className="w-[24px] h-[24px]" />
          </div>
        )
      case TagStatus.NOT_FOUND:
      default:
        return (
          <div className="flex justify-center items-center bg-white text-red-600 p-[2px] rounded-full">
            <FaTimesCircle className="w-[24px] h-[24px]" />
          </div>
        )
    }
  }

  // Render IDs section with improved UI for multiple tags
  const renderIds = () => {
    // If no IDs at all, return null
    if ((!ids || ids.length === 0) && !id) {
      return null;
    }
    
    // Get all valid IDs
    const allIds = ids && ids.length > 0 ? ids : (id ? [id] : []);
    
    // Debug IDs 
    console.log(`Tag ${name} has ${allIds.length} IDs:`, allIds);
    
    // Single ID display (compact)
    if (allIds.length === 1) {
      return (
        <div className="text-xs text-blue-500 font-mono mt-1">
          {allIds[0]}
        </div>
      );
    }
    
    // Multiple IDs display - restore conditional rendering
    return (
      <div className="mt-1">
        <div 
          className="flex items-center cursor-pointer select-none" 
          onClick={() => setExpanded(!expanded)}
        >
          <div className="text-xs text-blue-500 font-mono">
            {allIds[0]} <span className="inline-flex items-center justify-center bg-blue-500 text-white text-xs rounded-full h-4 w-4 ml-1">{allIds.length}</span>
          </div>
          <div className="text-xs text-gray-500 ml-2">
            {expanded ? 'Hide' : 'Show all'}
          </div>
        </div>
        
        {expanded && (
          <div className="mt-1 pl-1 border-l-2 border-blue-100">
            {allIds.map((tagId, idx) => (
              <div key={idx} className="text-xs text-blue-500 font-mono mt-0.5 flex items-center">
                <span className="w-2 h-2 rounded-full bg-blue-500 mr-1.5"></span>
                {tagId}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex items-center py-3 sm:py-4 opacity-0" style={{
      ...style,
      animation: `fadeIn ${index * 1}s ease-in-out forwards`,
      // animationDelay: `${index * 100}ms`
    }}>
      <div className="mr-3 sm:mr-4">
        {name === "Google Tag Manager" && (
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg">
            <img
              src="/tags/GTM.png"
              alt="Google Tag Manager"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          </div>
        )}

        {name === "GA4" && (
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg">
            <img
              src="/tags/GA4.png"
              alt="Google Analytics 4"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          </div>
        )}

        {name === "Google Ads Conversion" && (
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg">
            <img
              src="/tags/GAC.svg"
              alt="Google Ads Conversion"
              className="w-6 h-6 sm:w-8 sm:h-8"
            />
          </div>
        )}

        {name === "Meta Pixel" && (
          <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-lg">
            <img src="/tags/meta.png" alt="Meta Pixel" className="w-6 h-6 sm:w-8 sm:h-8" />
          </div>
        )}
      </div>

      <div className="flex-grow text-left">
        <span className="font-semibold text-gray-800">{name}</span>
        {renderIds()}
        {details && status !== TagStatus.CONNECTED && status !== TagStatus.NOT_FOUND && (
          <div className="text-xs text-gray-500 mt-1">{details}</div>
        )}
      </div>

      <div className="ml-2 flex items-center">
        {renderStatusBadge()}
      </div>
    </div>
  )
}
