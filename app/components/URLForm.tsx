import { useState } from "react"

interface URLFormProps {
  onSubmit: (url: string) => void
  isLoading?: boolean
}

export default function URLForm({ onSubmit, isLoading = false }: URLFormProps) {
  const [url, setUrl] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (url.trim()) {
      onSubmit(url)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto">
      <div className="flex flex-col sm:flex-row items-center w-full">
        <div className="relative w-full sm:w-[80%]">
          <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Enter website URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="w-full text-black h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-4 pl-8 sm:pl-10 border-2 border-blue-200 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:border-blue-400"
            disabled={isLoading}
          />
        </div>
        <button
          type="submit"
          className={`w-full sm:w-auto mt-2 sm:mt-0 h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base ${!url.trim() ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg sm:rounded-l-none hover:from-blue-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 transition-all duration-200 ease-in-out transform hover:scale-105 disabled:hover:scale-100`}
          disabled={isLoading || !url.trim()}
        >
          {isLoading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span>Checking...</span>
            </div>
          ) : (
            "Check Now"
          )}
        </button>
      </div>
    </form>
  )
}
