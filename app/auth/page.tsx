"use client"

import { useState, useEffect, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "../context/AuthContext"
import Link from "next/link"
import { storeRedirectUrl } from "../utils/auth"

type AuthMode = "login" | "signup"

// Client component that uses search params
function AuthForm() {
  const [mode, setMode] = useState<AuthMode>("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectUrl = searchParams.get("redirect") || "/"
  const initialMode = (searchParams.get("mode") as AuthMode) || "login"

  const { login, signup, isAuthenticated } = useAuth()

  useEffect(() => {
    setMode(initialMode)

    // If user is already authenticated, redirect
    if (isAuthenticated) {
      router.push(redirectUrl)
    }
  }, [initialMode, isAuthenticated, redirectUrl, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsSubmitting(true)

    try {
      if (mode === "login") {
        await login(email, password)
      } else {
        await signup(email, password, name)
      }
      router.push(redirectUrl)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Authentication failed")
    } finally {
      setIsSubmitting(false)
    }
  }

  const toggleMode = () => {
    setMode(mode === "login" ? "signup" : "login")
    setError(null)
  }

  const handleGoogleSignIn = () => {
    // Store the redirect URL before redirecting to Google auth
    storeRedirectUrl(redirectUrl)

    // Redirect to the backend's Google OAuth route with the correct path
    const backendUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000"
    window.location.href = `${backendUrl}/api/user/auth/google`
  }

  return (
    <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
      <Link href="/" className="flex items-center justify-center mb-8">
        <div className="w-8 h-8 mr-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600 text-sm sm:text-base">
          TRACK TO MEASURE
        </span>
      </Link>

      <h2 className="text-2xl text-black font-bold mb-6 text-center">
        {mode === "login" ? "Log In to Your Account" : "Create an Account"}
      </h2>

      {error && (
        <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Google Sign In Button */}
      {/* <button
        onClick={handleGoogleSignIn}
        className="w-full mb-6 py-2 px-4 bg-white hover:bg-gray-50 text-gray-800 font-medium border border-gray-300 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2 flex items-center justify-center"
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        {mode === "login" ? "Sign in with Google" : "Sign up with Google"}
      </button> */}

      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">
            Or continue with email
          </span>
        </div>
      </div>

      <form className="text-black" onSubmit={handleSubmit}>
        {mode === "signup" && (
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
        )}

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
              Processing...
            </span>
          ) : mode === "login" ? (
            "Log In"
          ) : (
            "Sign Up"
          )}
        </button>
      </form>

      <div className="mt-6 text-center text-sm">
        <span className="text-gray-600">
          {mode === "login"
            ? "Don't have an account? "
            : "Already have an account? "}
        </span>
        <button
          onClick={toggleMode}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          {mode === "login" ? "Sign Up" : "Log In"}
        </button>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
        <Link href="/" className="text-blue-600 hover:text-blue-800">
          Return to Home
        </Link>
      </div>
    </div>
  )
}

// Loading fallback for Suspense
function AuthLoading() {
  return (
    <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg flex items-center justify-center">
      <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"></div>
      <span className="ml-3 text-gray-700">Loading...</span>
    </div>
  )
}

// Main page component with Suspense boundary
export default function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-indigo-50 via-blue-50 to-white p-4">
      <Suspense fallback={<AuthLoading />}>
        <AuthForm />
      </Suspense>
    </div>
  )
}
