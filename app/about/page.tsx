import Navbar from '../components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">About Track To Measure</h1>
          
          <div className="prose max-w-none">
            <p className="text-lg mb-4">
              Track To Measure is a specialized marketing tool that helps you verify the correct implementation 
              of tracking tags on your website.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Our Mission</h2>
            <p>
              Our mission is to empower marketers and website owners to easily verify their tracking setup,
              ensuring accurate data collection for better marketing decisions.
            </p>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Why Tag Verification Matters</h2>
            <p>
              Proper tag implementation is crucial for:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Accurate conversion tracking</li>
              <li>Proper attribution of marketing campaigns</li>
              <li>Optimized ad spending</li>
              <li>Better understanding of user behavior</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">How It Works</h2>
            <p>
              Track To Measure uses advanced scanning technology to analyze your website and detect the presence
              of popular marketing tags. Our system can identify:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Google Tag Manager</li>
              <li>Google Analytics 4</li>
              <li>Google Ads Conversion tags</li>
              <li>Meta Pixel</li>
              <li>LinkedIn Insight Tag</li>
              <li>Pinterest Tag</li>
              <li>And many more...</li>
            </ul>
            
            <h2 className="text-xl font-semibold mt-8 mb-4">Contact Us</h2>
            <p>
              Have questions or feedback? We'd love to hear from you. Please reach out to 
              <a href="mailto:support@tracktomeasure.com" className="text-blue-600 hover:underline ml-1">
                support@tracktomeasure.com
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
} 