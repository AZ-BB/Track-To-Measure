import { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

interface TagInfo {
    name: string;
    image: string;
    description: string;
}

export default function TagSlideshow() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState<'left' | 'right'>('right');
    const [nextIndex, setNextIndex] = useState<number | null>(null);

    const tags: TagInfo[] = [
        {
            name: 'Google Tag Manager',
            image: '/tags/GTM.png',
            description: 'Track & manage all your marketing tags through one central system'
        },
        {
            name: 'GA4',
            image: '/tags/GA4.png',
            description: 'Next-generation analytics that provides deeper insights about customer behavior'
        },
        {
            name: 'Google Ads',
            image: '/tags/GAC.svg',
            description: 'Track conversions from your Google Ads campaigns effectively'
        },
        {
            name: 'Meta Pixel',
            image: '/tags/meta.png',
            description: 'Track visitor activity and build audiences for Facebook advertising'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3500);

        return () => clearInterval(interval);
    }, [currentIndex, isAnimating]);

    const nextSlide = () => {
        if (isAnimating) return;

        setIsAnimating(true);
        setDirection('right');
        const next = (currentIndex + 1) % tags.length;
        setNextIndex(next);

        setTimeout(() => {
            setCurrentIndex(next);
            setNextIndex(null);
            setIsAnimating(false);
        }, 500);
    };

    const getSlideAnimation = (index: number) => {
        if (!isAnimating) return '';

        if (index === currentIndex) {
            return direction === 'right' ? 'animate-[slideOutToLeft_500ms_ease-in-out_forwards]' : 'animate-[slideOutToRight_500ms_ease-in-out_forwards]';
        }

        if (nextIndex !== null && index === nextIndex) {
            return direction === 'right' ? 'animate-[slideInFromRight_500ms_ease-in-out_forwards]' : 'animate-[slideInFromLeft_500ms_ease-in-out_forwards]';
        }

        return 'hidden';
    };

    return (
        <div className="w-full max-w-xl mx-auto mt-6 sm:mt-10 mb-8 bg-white rounded-lg overflow-hidden">
            <div className="relative h-[280px] sm:h-[320px] overflow-hidden">
                {/* Slides */}
                {tags.map((tag, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 flex items-center justify-center ${index === currentIndex || index === nextIndex ? getSlideAnimation(index) : 'hidden'
                            } ${index !== currentIndex && index !== nextIndex ? 'hidden' : ''}`}
                    >
                        <div className="flex items-center justify-center px-6 py-8 text-center">
                            <div className="mb-5 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center border border-gray-200 p-2">
                                <img
                                    src={tag.image}
                                    alt={tag.name}
                                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                                />
                            </div>
                            <div className="w-[70%] flex flex-col items-start justify-center px-6 py-8 text-center">
                                <h3 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-3">
                                    {tag.name}
                                </h3>
                                <p className="text-left text-gray-700 text-base mb-6">
                                    {tag.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
} 