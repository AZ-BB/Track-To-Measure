import Link from 'next/link';
import Navbar from '../components/Navbar';

interface GuideCardProps {
  title: string;
  description: string;
  slug: string;
  icon: React.ReactNode;
}

function GuideCard({ title, description, slug, icon }: GuideCardProps) {
  return (
    <Link href={`/guides/${slug}`} className="block">
      <div className="border border-gray-300 rounded-lg p-6 hover:shadow-md transition-shadow">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 mr-3 flex items-center justify-center text-blue-600">
            {icon}
          </div>
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <p className="text-gray-800">{description}</p>
      </div>
    </Link>
  );
}

export default function GuidesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-3">Marketing Tag Guides</h1>
          <p className="text-lg text-gray-800 mb-8">
            Learn how to properly implement and verify marketing tags on your website.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GuideCard
              title="Google Tag Manager"
              description="Learn how to set up and verify Google Tag Manager on your website."
              slug="google-tag-manager"
              icon={
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 7V17L9 20L15 17L20 20V7L15 4L9 7L4 4V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 7L9 10M9 10V20M9 10L15 7M20 7L15 10M15 10V17M15 10L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
            
            <GuideCard
              title="Google Analytics 4"
              description="Set up GA4 for detailed website analytics and event tracking."
              slug="google-analytics-4"
              icon={
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 16V12L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              }
            />
            
            <GuideCard
              title="Meta Pixel"
              description="Implement Facebook's Meta Pixel for conversion tracking and audience building."
              slug="meta-pixel"
              icon={
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
                </svg>
              }
            />
            
            <GuideCard
              title="Google Ads Conversion"
              description="Track conversions from Google Ads campaigns accurately."
              slug="google-ads-conversion"
              icon={
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 7H21V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
            
            <GuideCard
              title="LinkedIn Insight Tag"
              description="Implement LinkedIn's tracking for better B2B campaign performance."
              slug="linkedin-insight-tag"
              icon={
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
            
            <GuideCard
              title="Event Tracking Best Practices"
              description="Learn how to effectively track user interactions and conversions."
              slug="event-tracking-best-practices"
              icon={
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              }
            />
          </div>
        </div>
      </main>
    </div>
  );
} 