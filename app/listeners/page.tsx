import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { listenerCards } from '../data/listenerCards';

interface ListenerCardProps {
    title: string;
    description: string;
    slug: string;
    logoPath: string;
    code?: string;
    descriptionMarkdown?: string;
}

export default function ListenersPage() {
    // Filter out any undefined items (in case some are commented out in the data file)
    const activeListenerCards = listenerCards.filter(card => card);

    return (
        <div className="min-h-screen flex flex-col bg-white text-black">
            <Navbar />

            <main className="flex-grow flex flex-col items-center px-4 py-8">
                <div className="w-full max-w-6xl mx-auto">
                    <h1 className="text-5xl font-bold text-center mb-3">Tracking Library</h1>
                    <p className="text-lg text-gray-700 text-center mb-12">
                        Pre-built event listeners for Google Tag Manager.<br />
                        Easily track form submissions, video plays, and more.
                    </p>

                    {/* Form Tools Section */}
                    <h2 className="text-2xl font-bold mb-6">Form Tools</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <Link href="/listeners/hubspot-form" className="block">
                            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 relative mr-4">
                                        <Image
                                            src="/logos/hubspot.svg"
                                            alt="HubSpot logo"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold">HubSpot</h3>
                                </div>
                                <p className="text-gray-700">Google Tag Manager app-listener for HubSpot submissions</p>
                            </div>
                        </Link>

                        <Link href="/listeners/gravity-forms" className="block">
                            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 relative mr-4">
                                        <Image
                                            src="/logos/gravity.png"
                                            alt="Gravity Forms logo"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold">Gravity Forms</h3>
                                </div>
                                <p className="text-gray-700">Google Tag Manager formlister for form submissions</p>
                            </div>
                        </Link>

                        <Link href="/listeners/mailchimp" className="block">
                            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 relative mr-4">
                                        <Image
                                            src="/logos/mailchimp.png"
                                            alt="Mailchimp logo"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold">Mailchimp</h3>
                                </div>
                                <p className="text-gray-700">Google Tag Manager app-listener for Google to submissions</p>
                            </div>
                        </Link>

                        <Link href="/listeners/typeform" className="block">
                            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 relative mr-4">
                                        <Image
                                            src="/logos/typeform.png"
                                            alt="Typeform logo"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold">Typeform</h3>
                                </div>
                                <p className="text-gray-700">Google Tag Manager form listener for form submissions</p>
                            </div>
                        </Link>
                    </div>

                    {/* Video Tools Section */}
                    <h2 className="text-2xl font-bold mb-6">Video Tools</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                        <Link href="/listeners/youtube" className="block">
                            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 relative mr-4">
                                        <Image
                                            src="/logos/youtube.png"
                                            alt="YouTube logo"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold">YouTube</h3>
                                </div>
                                <p className="text-gray-700">Google Tag Manager listener for video plays</p>
                            </div>
                        </Link>

                        <Link href="/listeners/vimeo" className="block">
                            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 relative mr-4">
                                        <Image
                                            src="/logos/vimeo.png"
                                            alt="Vimeo logo"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold">Vimeo</h3>
                                </div>
                                <p className="text-gray-700">Google Tag Manager listener for video plays</p>
                            </div>
                        </Link>
                    </div>

                    {/* Popups & Interactions Section */}
                    <h2 className="text-2xl font-bold mb-6">Popups & Interactions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Link href="/listeners/optin-monster" className="block">
                            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 relative mr-4">
                                        <Image
                                            src="/logos/monster.jpg"
                                            alt="OptinMonster logo"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold">OptinMonster</h3>
                                </div>
                                <p className="text-gray-700">Google Tag Manager listener for OptinMonster interactions</p>
                            </div>
                        </Link>

                        <Link href="/listeners/sumo" className="block">
                            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 relative mr-4">
                                        <Image
                                            src="/logos/sumo.jpg"
                                            alt="Sumo logo"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold">Sumo</h3>
                                </div>
                                <p className="text-gray-700">Google Tag Manager listener for Popups interactions</p>
                            </div>
                        </Link>

                        <Link href="/listeners/optin-munter" className="block">
                            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 relative mr-4 flex items-center justify-center bg-green-100 rounded-full">
                                        <span className="text-green-500 text-2xl font-bold">O</span>
                                    </div>
                                    <h3 className="text-xl font-bold">OptinMunter</h3>
                                </div>
                                <p className="text-gray-700">Google Tag Manager listener for OptinMonster interactions</p>
                            </div>
                        </Link>

                        <Link href="/listeners/convertful" className="block">
                            <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 relative mr-4">
                                        <Image
                                            src="/logos/conver.png"
                                            alt="Convertful logo"
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold">Convertful</h3>
                                </div>
                                <p className="text-gray-700">Google Tag Manager listener for Active user Interactions</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
} 