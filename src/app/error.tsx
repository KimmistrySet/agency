'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold mb-4 text-white">
          Something went wrong!
        </h1>
        
        <p className="text-gray-300 mb-8 leading-relaxed">
          We apologize for the inconvenience. Our AI agents are working to resolve this issue.
        </p>
        
        <div className="space-y-4">
          <button
            onClick={reset}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black px-6 py-3 rounded-xl font-bold transition-all duration-300 transform hover:scale-105"
          >
            Try Again
          </button>
          
          <button
            onClick={() => window.location.href = '/'}
            className="w-full border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 px-6 py-3 rounded-xl font-medium transition-all duration-300"
          >
            Return Home
          </button>
        </div>
        
        {error.digest && (
          <p className="text-xs text-gray-500 mt-6">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}

