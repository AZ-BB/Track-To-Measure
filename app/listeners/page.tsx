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

function ListenerCard({ title, description, slug, logoPath }: ListenerCardProps) {
    return (
        <div className="rounded-lg overflow-hidden shadow-sm border border-gray-200 flex flex-col">
            <div className="relative w-full h-48">
                <Image
                    src={logoPath}
                    alt={`${title} logo`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="w-full"
                />
            </div>
            <div className="p-6 flex-1">
                <h3 className="text-xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700 mb-4">{description}</p>
                <Link href={`/listeners/${slug}`}>
                    <div className="bg-gray-900 text-white px-4 py-2 rounded text-center hover:bg-gray-800 transition-colors w-full md:w-auto inline-block">
                        See Event Listener
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default function ListenersPage() {
    return (
        <div className="min-h-screen flex flex-col bg-white text-black">
            <Navbar />

            <main className="flex-grow flex flex-col items-center px-4 py-8">
                <div className="w-full max-w-6xl mx-auto">
                    <h1 className="text-3xl font-bold mb-3">Event Listeners</h1>
                    <p className="text-lg text-gray-800 mb-8">
                        Set up event listeners to track and measure marketing interactions on your website.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {listenerCards.map((card, index) => (
                            <ListenerCard
                                key={index}
                                title={card.title}
                                description={card.description}
                                slug={card.slug}
                                logoPath={card.logoPath}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
} 