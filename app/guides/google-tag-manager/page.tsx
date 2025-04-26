import Link from 'next/link';
import Navbar from '../../components/Navbar';

export default function GoogleTagManagerGuidePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex flex-col items-center px-4 py-8">
        <div className="w-full max-w-3xl mx-auto">
          <div className="mb-6">
            <Link href="/guides" className="text-blue-600 hover:underline flex items-center">
              <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to Guides
            </Link>
          </div>
          
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 mr-4 flex items-center justify-center text-blue-600">
              <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 7V17L9 20L15 17L20 20V7L15 4L9 7L4 4V7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 7L9 10M9 10V20M9 10L15 7M20 7L15 10M15 10V17M15 10L9 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="text-3xl font-bold">Google Tag Manager Guide</h1>
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg">
              Google Tag Manager (GTM) is a tag management system that allows you to quickly and easily update 
              tracking codes and related code fragments collectively known as tags on your website or mobile app.
            </p>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Why Use Google Tag Manager?</h2>
            <ul>
              <li>Centralize all your marketing and analytics tags in one place</li>
              <li>Implement tags without editing website code</li>
              <li>Use built-in debugging tools to verify your implementations</li>
              <li>Set up tag firing rules and triggers for precise control</li>
              <li>Collaborate with team members with user permissions</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Getting Started with GTM</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Step 1: Create a GTM Account</h3>
            <ol className="list-decimal pl-6 mb-4">
              <li>Go to <a href="https://tagmanager.google.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Tag Manager</a></li>
              <li>Click "Create Account"</li>
              <li>Enter your company information</li>
              <li>Set up a container (Web, iOS, Android, or AMP)</li>
              <li>Accept the Terms of Service</li>
            </ol>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Step 2: Install the GTM Code</h3>
            <p>After creating your account, you'll receive two code snippets to add to your website:</p>
            
            <div className="bg-gray-100 p-4 rounded-md my-4 overflow-x-auto">
              <p className="font-medium mb-2">Add this code as high as possible in the <code>&lt;head&gt;</code> of the page:</p>
              <pre className="text-sm">
{`<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXX');</script>
<!-- End Google Tag Manager -->`}
              </pre>
            </div>
            
            <div className="bg-gray-100 p-4 rounded-md my-4 overflow-x-auto">
              <p className="font-medium mb-2">Add this code immediately after the opening <code>&lt;body&gt;</code> tag:</p>
              <pre className="text-sm">
{`<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->`}
              </pre>
            </div>
            
            <div className="bg-yellow-50 p-4 border-l-4 border-yellow-400 my-6">
              <p className="font-medium">Important:</p>
              <p>Replace GTM-XXXX with your actual GTM container ID.</p>
            </div>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Step 3: Add Tags, Triggers, and Variables</h3>
            <p>
              Once GTM is installed, you can add marketing and analytics tags through the GTM interface:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li>Go to "Tags" section and click "New"</li>
              <li>Select the tag type (GA4, Meta Pixel, etc.)</li>
              <li>Configure the tag with your tracking ID</li>
              <li>Set up triggers to control when the tag fires</li>
              <li>Test using Preview mode before publishing</li>
            </ol>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Verifying Your GTM Implementation</h2>
            <p>
              To verify that GTM is properly implemented on your site, you can:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Use our TrackToMeasure tool to scan your website</li>
              <li>Check browser developer tools (look for gtm.js network requests)</li>
              <li>Use the GTM Preview mode to debug tags</li>
              <li>Install the <a href="https://chrome.google.com/webstore/detail/tag-assistant-legacy-by-g/kejbdjndbnbjgmefkgdddjlbokphdefk" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Google Tag Assistant</a> Chrome extension</li>
            </ul>
            
            <h2 className="text-2xl font-semibold mt-8 mb-4">Best Practices</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>Use a consistent naming convention for tags, triggers, and variables</li>
              <li>Document your GTM implementation</li>
              <li>Use folders to organize tags by marketing platform</li>
              <li>Implement version control by using workspaces</li>
              <li>Regularly audit your tags to remove outdated implementations</li>
              <li>Use built-in templates when possible instead of custom HTML</li>
            </ul>
            
            <div className="mt-10 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-3">Need help with your GTM implementation?</h3>
              <p className="mb-4">
                Use our TrackToMeasure tool to verify your tag implementation or contact our team for assistance.
              </p>
              <Link 
                href="/" 
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
              >
                Scan Your Website
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 