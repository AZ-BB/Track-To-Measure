import { FaCheckCircle, FaTimesCircle, FaExclamationTriangle, FaQuestionCircle } from "react-icons/fa"
import { TagStatus } from "../api"

interface TagResultProps {
  name: string
  isPresent: boolean
  status: TagStatus
  id?: string
  details?: string
  dataLayer?: boolean
}

export default function TagResult({ name, isPresent, status, id, details }: TagResultProps) {
  // Generate status badge based on status
  const renderStatusBadge = () => {
    switch (status) {
      case TagStatus.CONNECTED:
        return (
          <div className="flex justify-center items-center bg-green-50 text-green-600 px-1 py-1 rounded-full">
            <FaCheckCircle className="w-6 h-6" />
          </div>
        )
      case TagStatus.MISCONFIGURED:
        return (
          <div className="flex justify-center items-center bg-yellow-50 text-yellow-600 px-1 py-1 rounded-full" title="Misconfigured">
            <FaExclamationTriangle className="w-6 h-6" />
          </div>
        )
      case TagStatus.INCOMPLETE:
        return (
          <div className="flex justify-center items-center bg-orange-50 text-orange-500 px-1 py-1 rounded-full" title="Incomplete Setup">
            <FaExclamationTriangle className="w-6 h-6" />
          </div>
        )
      case TagStatus.ERROR:
        return (
          <div className="flex justify-center items-center bg-purple-50 text-purple-500 px-1 py-1 rounded-full" title="Error">
            <FaQuestionCircle className="w-6 h-6" />
          </div>
        )
      case TagStatus.NOT_FOUND:
      default:
        return (
          <div className="flex justify-center items-center bg-red-50 text-red-500 px-1 py-1 rounded-full">
            <FaTimesCircle className="w-6 h-6" />
          </div>
        )
    }
  }

  return (
    <div className="flex items-center py-4">
      <div className="mr-4">
        {name === "Google Tag Manager" && (
          <div className="w-10 h-10 flex items-center justify-center rounded-lg">
            <img
              src="/tags/GTM.png"
              alt="Google Tag Manager"
              className="w-8 h-8"
            />
          </div>
        )}

        {name === "GA4" && (
          <div className="w-10 h-10 flex items-center justify-center rounded-lg">
            <img
              src="/tags/GA4.png"
              alt="Google Analytics 4"
              className="w-8 h-8"
            />
          </div>
        )}

        {name === "Google Ads Conversion" && (
          <div className="w-10 h-10 flex items-center justify-center rounded-lg">
            <img
              src="/tags/GAC.svg"
              alt="Google Ads Conversion"
              className="w-8 h-8"
            />
          </div>
        )}

        {name === "Meta Pixel" && (
          <div className="w-10 h-10 flex items-center justify-center rounded-lg">
            <img src="/tags/meta.png" alt="Meta Pixel" className="w-8 h-8" />
          </div>
        )}
      </div>

      <div className="flex-grow text-left">
        <span className="font-semibold text-gray-800">{name}</span>
        {id && <div className="text-xs text-blue-500 font-mono mt-1">{id}</div>}
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
