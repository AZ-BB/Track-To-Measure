import { useState } from 'react';

export default function SubscriptionForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) return;

    setIsSubmitting(true);
    setError('');

    try {
      // This is a mock API call - would be replaced with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto font-quicksand">

      <h3 className="text-center font-bold text-lg sm:text-xl mb-4 sm:mb-6 text-gray-800">Get tracking tips & free tools</h3>

      {isSuccess ? (
        <div className="text-green-600 text-center p-4 sm:p-6 bg-green-50 rounded-lg border-2 border-green-100">
          <svg className="w-8 h-8 sm:w-12 sm:h-12 mx-auto text-green-500 mb-2 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p className="font-medium text-sm sm:text-base">Thanks for subscribing!</p>
          <p className="text-xs sm:text-sm mt-1">Check your email for confirmation.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex flex-col sm:flex-row items-center w-full">
            <div className="relative w-full sm:w-[75%]">
              <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-3 pointer-events-none">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:border-r-0 text-black h-10 sm:h-12 text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-4 pl-8 sm:pl-10 border-2 border-purple-200 rounded-lg sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:border-purple-400"
                disabled={isSubmitting}
                required
              />
            </div>
            <button
              type="submit"
              className={`transition-all w-full sm:w-[25%] mt-2 sm:mt-0 h-10 sm:h-12 px-3 sm:px-4 text-sm sm:text-base ${!email.trim() ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} bg-gradient-to-r from-purple-500 to-indigo-600 disabled:hover:from-purple-500 disabled:hover:to-indigo-600 text-white font-medium rounded-lg sm:rounded-l-none hover:from-purple-600 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-70 transition-all duration-200 ease-in-out transform hover:scale-105 disabled:hover:scale-100`}
              disabled={isSubmitting || !email.trim()}
            >
              {isSubmitting ? (
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
                  <span>Subscribing...</span>
                </div>
              ) : (
                "Subscribe"
              )}
            </button>
          </div>

          {error && (
            <div className="mt-2 sm:mt-3 text-red-600 text-xs sm:text-sm bg-red-50 p-2 rounded">{error}</div>
          )}

          <p className="text-xs text-center mt-3 sm:mt-4 text-gray-500">
            We'll send you our best marketing tips and tools. No spam, ever.
          </p>
        </form>
      )}
    </div>
  );
} 