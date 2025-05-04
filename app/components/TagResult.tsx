import { FaCheckCircle, FaTimesCircle } from "react-icons/fa"

interface TagResultProps {
  name: string
  isPresent: boolean
  id?: string
}

export default function TagResult({ name, isPresent, id }: TagResultProps) {
  return (
    <div className="flex items-center py-3 sm:py-4">
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
        <span className="text-sm sm:text-base font-semibold text-gray-800">{name}</span>
        {id && <div className="text-xs text-blue-500 font-mono mt-0.5 sm:mt-1">{id}</div>}
      </div>

      <div className="ml-1 sm:ml-2 flex items-center">
        {isPresent ? (
          <div className="flex justify-center items-center bg-green-50 text-green-600 px-1 py-1 rounded-full">
            <FaCheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        ) : (
          <div className="flex justify-center items-center bg-red-50 text-red-500 px-1 py-1 rounded-full">
            <FaTimesCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
        )}
      </div>
    </div>
  )
}
