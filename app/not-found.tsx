"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Optional: If using shadcn/ui

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="p-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 bg-indigo-100 rounded-full opacity-20" />
              <svg
                className="absolute w-full h-full text-indigo-600 p-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-2">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">
            Page Not Found
          </h2>

          <p className="text-gray-600 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="default">
              <Link href="/">Go Home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href="#"
                onClick={(e) => {
                  e.preventDefault(); 
                  window.history.back(); 
                }}
              >
                Go Back
              </Link>
            </Button>
          </div>
        </div>

        <div className="bg-gray-50 px-8 py-6 text-center">
          <p className="text-gray-500 text-sm">
            Need help?{" "}
            <Link
              href="mailto:support@example.com"
              className="text-indigo-600 hover:underline"
            >
              Contact support
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}