'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import { notFound } from 'next/navigation';
import { listenerCards } from '../../data/listenerCards';

export default function EventListenerPage({ params }: { params: { slug: string } }) {
  const [isCopied, setIsCopied] = useState(false);
  
  const listener = listenerCards.find(card => card.slug === params.slug);

  if (!listener) {
    notFound();
  }

  const { title, logoPath, description, code, descriptionMarkdown } = listener;
  const wordArr = title.split(' ');
  const firstPart = wordArr.length > 1 ? wordArr.slice(0, 2).join(' ') : title;
  const secondPart = 'Event Listener';

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
      
      <main className="flex-grow px-4 py-8">
        <div className="w-full max-w-6xl mx-auto">
          {/* Logo and Title Section */}
          <div className="flex flex-col items-center mb-10">
            <div className="w-40 h-20 relative mb-8">
              <Image
                src={logoPath}
                alt={`${title} logo`}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            
            <h1 className="text-center">
              <span className="text-4xl font-bold">{firstPart}</span>
              <span className="text-4xl font-bold text-slate-600 ml-2">{secondPart}</span>
            </h1>
          </div>
          
          {/* Description Section */}
          <div className="text-center mb-8 max-w-3xl mx-auto">
            <p className="text-lg text-gray-700">
              {description}
            </p>
          </div>
        
          
          {/* Content Section */}
          {descriptionMarkdown && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  How To Track {title} Submission With Google Tag Manager
                </h2>
                
                <div className="prose max-w-none">
                  {descriptionMarkdown.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 text-gray-700">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
              
              {/* Code Section */}
              {code && (
                <div className="bg-gray-900 text-white rounded-lg p-5 relative">
                  <div className="flex justify-between items-center mb-4">
                    <p className="text-white text-sm">
                      {isCopied ? 'Copied!' : 'Click Here To Copy me'}
                    </p>
                    <button 
                      onClick={copyToClipboard} 
                      className="text-white hover:text-gray-300 focus:outline-none"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                  <pre 
                    className="text-green-400 text-sm overflow-x-auto h-full p-1 font-mono "
                    onClick={copyToClipboard}
                    style={{ cursor: 'pointer' }}
                  >
                    {code}
                  </pre>
                </div>
              )}
            </div>
          )}
          
          <div className="mt-12 text-center">
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
