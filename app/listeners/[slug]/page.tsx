'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { notFound, useParams } from 'next/navigation';
import { listenerCardsChat, listenerCardsForm, listenerCardsOther, listenerCardsPopup, listenerCardsVideo } from '../../data/listenerCards';

export default function EventListenerPage() {
  const params = useParams();
  const [isCopied, setIsCopied] = useState(false);

  const listener = [...listenerCardsChat, ...listenerCardsForm, ...listenerCardsVideo, ...listenerCardsPopup, ...listenerCardsOther].find(card => card.slug === params.slug);

  if (!listener) {
    notFound();
  }

  const { title, logoPath, code, description } = listener;

  const copyToClipboard = () => {
    if (!code) return;

    navigator.clipboard.writeText(code)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy code: ', err);
      });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-black">
      <Navbar />

      <main className="flex-grow px-4 py-4 max-w-3xl mx-auto w-full">
        <div className="w-full">

          {/* Title */}
          <h2 className="text-4xl font-bold text-center mb-4">
            {title} Listener for GTM
          </h2>

          {/* Goal */}
          <div className="text-center mb-8">
            <p className="text-lg">
              <span className="font-semibold">Goal:</span> Trigger GTM tags when a {title} is submitted or successfully completed.
            </p>
          </div>

          {/* Copy & Paste Listener Script Section */}
          <div className="mb-8">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-medium">Copy & Paste Listener Script</h3>
            </div>

            <div className="bg-gray-900 rounded-lg p-4 relative">
              <pre className="text-white font-mono text-sm overflow-x-auto max-h-60 overflow-y-auto whitespace-pre-wrap">
                {code ? code : 'No code available'}
              </pre>
              <button
                onClick={copyToClipboard}
                className="absolute top-3 right-10 text-white hover:text-gray-300 focus:outline-none"
              >
                {isCopied ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8 widget" dangerouslySetInnerHTML={{ __html: description }}>
          </div>

          {/* GTM Setup Steps */}
          <div>
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-medium">GTM Setup Steps</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Column */}
              <div>
                <div className="mb-4">
                  <p className="font-semibold mb-1">1. Create a Custom HTML Tag</p>
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    <li>Tag Type: Custom HTML</li>
                    <li>Paste the script above</li>
                  </ul>
                </div>

                <div>
                  <p className="font-semibold mb-1">2. Create a Trigger</p>
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    <li>Trigger Type: Custom Event</li>
                    <li>Event Name: {listener.slug}-success</li>
                  </ul>
                </div>
              </div>

              {/* Right Column */}
              <div>
                <div>
                  <p className="font-semibold mb-1">3. Attach to your Conversion Tag</p>
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    <li>Use the trigger to fire your GA4, Meta, or Ads tag</li>
                  </ul>
                </div>

                <div className="mt-4">
                  <p className="font-semibold mb-1">4. Verify Implementation</p>
                  <ul className="list-disc pl-5 text-sm text-gray-700">
                    <li>Test the setup in GTM Preview mode</li>
                    <li>Confirm data is being sent to your analytics platform</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* How to Test */}
          <div className="mt-8">
            <div className="flex items-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-medium">How to Test</h3>
            </div>

            <ul className="list-disc pl-5 text-sm text-gray-700">
              <li>Enable Preview Mode in GTM</li>
              <li>Submit a {title} form</li>
              <li>Check if "{listener.slug}-success" shows in GTM debug console</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Link href="/listeners">
              <div className="inline-block bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-900 transition-colors">
                Back to Listeners
              </div>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
