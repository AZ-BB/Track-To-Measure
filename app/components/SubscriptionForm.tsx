import { useState } from 'react';

export default function SubscriptionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: ''
  });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.website.trim()) return;

    setIsSubmitting(true);
    setError('');

    try {
      // This is a mock API call - would be replaced with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));

      setIsSuccess(true);
      setFormData({ name: '', email: '', website: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    // Mock newsletter subscription
    await new Promise(resolve => setTimeout(resolve, 500));
    setNewsletterEmail('');
    alert('Subscribed to newsletter!');
  };

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-8">
          {/* Left Column - Contact Form */}
          <div className="bg-white rounded-lg p-8 border border-gray-200 max-w-2xl mx-auto w-full">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Found tracking issues?</h2>
              <p className="text-gray-600">Request a free 15-min audit call with a specialist</p>
            </div>

            {isSuccess ? (
              <div className="text-green-600 text-center p-6 bg-green-50 rounded-lg border-2 border-green-100">
                <svg className="w-12 h-12 mx-auto text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <p className="font-medium">Thanks for your request!</p>
                <p className="text-sm mt-1">We'll contact you soon to schedule your audit call.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className=" space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <input
                    type="url"
                    name="website"
                    placeholder="Website URL"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 placeholder:text-gray-400 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>

                {error && (
                  <div className="mt-3 text-red-600 text-sm bg-red-50 p-3 rounded">{error}</div>
                )}
              </form>
            )}

            {/* Service Icons */}
            <div className="flex justify-center items-center space-x-8 mt-8 pt-6 border-t border-gray-200 flex-col">

              <p className="text-xl text-gray-600 font-medium text-center">Our Services</p>

              <div className="flex justify-center items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">GTM<br />Setup</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">GA4<br />Tag Fixing</p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-600 font-medium">Quick<br />Fixes</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Services & Newsletter */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Our Services */}
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  GTM Setup
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Tag Fixing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  Full PPC Launch
                </li>
              </ul>
            </div>

            {/* Newsletter Subscription */}
            <div className="flex-1 bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Get tracking tips & free tools</h3>

              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="flex-1 px-4 py-2 placeholder:text-gray-400 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-r-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">T</span>
            </div>
            <span className="text-gray-600 font-medium">TRACKTOMEASURE</span>
          </div>
          <div className="text-gray-500 text-sm">
            © 2024 TrackToMeasure
          </div>
        </div>
      </div>
    </div>
  );
} 