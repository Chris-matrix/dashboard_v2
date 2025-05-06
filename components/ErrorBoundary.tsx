'use client';
import React, { useState, useEffect } from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export default function ErrorBoundary({ 
  children, 
  fallback = <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-700">Something went wrong. Please try again later.</div> 
}: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const errorHandler = (error: ErrorEvent) => {
      console.error('Error caught by ErrorBoundary:', error);
      setError(error.error);
      setHasError(true);
    };

    window.addEventListener('error', errorHandler);
    
    return () => {
      window.removeEventListener('error', errorHandler);
    };
  }, []);

  if (hasError) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-md">
        <h2 className="text-lg font-semibold text-red-700 mb-2">Something went wrong</h2>
        <p className="text-red-600 mb-4">
          {error?.message || 'An unexpected error occurred'}
        </p>
        <button 
          onClick={() => setHasError(false)}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Try again
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
