import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import { listenerCardsChat, listenerCardsForm, listenerCardsOther, listenerCardsPopup, listenerCardsVideo } from '../data/listenerCards';

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
    const activeListenerCards = listenerCardsChat.filter(card => card);

    const activeListenerCardsForm = listenerCardsForm.filter(card => card);
    const activeListenerCardsVideo = listenerCardsVideo.filter(card => card);
    const activeListenerCardsPopup = listenerCardsPopup.filter(card => card);
    const activeListenerCardsOther = listenerCardsOther.filter(card => card);

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

                    {/* All Cards Section */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Chat Widgets</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activeListenerCards.map((card, index) => (
                            <Link key={index} href={`/listeners/${card.slug}`} className="block">
                                <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 relative mr-4">
                                            <Image
                                                src={card.logoPath}
                                                alt={`${card.title} logo`}
                                                fill
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold">{card.title}</h3>
                                    </div>
                                    <p className="text-gray-700">{card.listDescription}</p>
                                </div>
                            </Link>
                        ))}
                    </div>


                    <div>
                        <h2 className="text-2xl font-bold my-4">Form</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activeListenerCardsForm.map((card, index) => (
                            <Link key={index} href={`/listeners/${card.slug}`} className="block">
                                <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 relative mr-4">
                                            <Image
                                                src={card.logoPath}
                                                alt={`${card.title} logo`}
                                                fill
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold">{card.title}</h3>
                                    </div>
                                    <p className="text-gray-700">{card.listDescription}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold my-4">Video</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activeListenerCardsVideo.map((card, index) => (
                            <Link key={index} href={`/listeners/${card.slug}`} className="block">
                                <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 relative mr-4">
                                            <Image
                                                src={card.logoPath}
                                                alt={`${card.title} logo`}
                                                fill
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold">{card.title}</h3>
                                    </div>
                                    <p className="text-gray-700">{card.listDescription}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold my-4">Popup</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activeListenerCardsPopup.map((card, index) => (
                            <Link key={index} href={`/listeners/${card.slug}`} className="block">
                                <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                                    <div className="flex items-center mb-4">
                                        <div className="w-12 h-12 relative mr-4">
                                            <Image
                                                src={card.logoPath}
                                                alt={`${card.title} logo`}
                                                fill
                                                style={{ objectFit: 'contain' }}
                                            />
                                        </div>
                                        <h3 className="text-xl font-bold">{card.title}</h3>
                                    </div>
                                    <p className="text-gray-700">{card.listDescription}</p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold my-4">Other</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activeListenerCardsOther.map((card, index) => (
                            <Link key={index} href={`/listeners/${card.slug}`} className="block">
                                <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow"></div>
                                <div className="flex items-center mb-4">
                                    <div className="w-12 h-12 relative mr-4">
                                        <Image
                                            src={card.logoPath}
                                            alt={`${card.title} logo`}
                                            fill
                                            style={{ objectFit: 'contain' }}
                                        />
                                    </div>
                                    <h3 className="text-xl font-bold">{card.title}</h3>
                                </div>
                                <p className="text-gray-700">{card.listDescription}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
} 