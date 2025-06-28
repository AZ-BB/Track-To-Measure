'use client'

import { generateReport } from '@/app/api';
import Navbar from '@/app/components/Navbar';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Tag, TagStatus, ScanResult } from '@/app/api';
import {
    FaGoogle,
    FaFacebook,
    FaTiktok,
    FaPinterest,
    FaLinkedin,
    FaSnapchat,
    FaWordpress,
    FaCheckCircle,
    FaTimesCircle,
    FaExclamationTriangle,
    FaShopify,
    FaWix,
    FaJoomla
} from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

interface ScanData {
    tags: Tag[];
    scanResult?: ScanResult;
    domain: string;
    percentComplete: number;
    connectedCount: number;
    misconfiguredCount: number;
    incompleteCount: number;
    notFoundCount: number;
}

export default function GenerateReport() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [scanData, setScanData] = useState<ScanData | null>(null);
    const router = useRouter();
    const searchParams = useSearchParams();
    const urlParam = searchParams.get('url');
    const dataParam = searchParams.get('data');
    const { isAuthenticated, isLoading: authLoading } = useAuth();

    useEffect(() => {
        if (!urlParam) {
            setError('No URL provided');
            setLoading(false);
            return;
        }

        // Check if user is authenticated
        if (authLoading) {
            return; // Still checking auth status
        }

        if (!isAuthenticated) {
            // Redirect to auth page with return URL
            const currentUrl = window.location.pathname + window.location.search;
            const encodedRedirect = encodeURIComponent(currentUrl);
            router.push(`/auth?redirect=${encodedRedirect}`);
            return;
        }

        // Parse scan data if available
        if (dataParam) {
            try {
                const parsedData = JSON.parse(decodeURIComponent(dataParam));
                setScanData(parsedData);
                setLoading(false);
            } catch (err) {
                setError('Invalid scan data');
                setLoading(false);
            }
        } else {
            setError('No scan data provided');
            setLoading(false);
        }

    }, [urlParam, dataParam, router, isAuthenticated, authLoading]);

    // Function to get icon for tag
    const getTagIcon = (tagName: string) => {
        switch (tagName) {
            case 'Google Tag Manager':
                return <Image src="/tags/GTM.png" alt="Google Tag Manager" width={24} height={24} className="w-6 h-6" />;
            case 'GA4':
                return <Image src="/tags/GA4.png" alt="GA4" width={24} height={24} className="w-6 h-6" />;
            case 'Google Ads Conversion':
                return <Image src="/tags/GAC.svg" alt="Google Ads Conversion" width={24} height={24} className="w-6 h-6" />;
            case 'Meta Pixel':
                return <Image src="/tags/meta.png" alt="Meta Pixel" width={24} height={24} className="w-6 h-6" />;
            case 'TikTok Pixel':
                return <FaTiktok className="text-black" />;
            case 'Pinterest Tag':
                return <FaPinterest className="text-red-600" />;
            case 'LinkedIn Insight':
                return <FaLinkedin className="text-blue-700" />;
            case 'Snapchat Pixel':
                return <FaSnapchat className="text-yellow-400" />;
            default:
                return <FaGoogle className="text-gray-500" />;
        }
    };

    // Function to get status icon
    const getStatusIcon = (status: TagStatus) => {
        switch (status) {
            case TagStatus.CONNECTED:
                return <FaCheckCircle className="text-green-500" />;
            case TagStatus.MISCONFIGURED:
            case TagStatus.INCOMPLETE:
                return <FaExclamationTriangle className="text-yellow-500" />;
            case TagStatus.NOT_FOUND:
            case TagStatus.ERROR:
            default:
                return <FaTimesCircle className="text-red-500" />;
        }
    };

    // Function to get display status
    const getDisplayStatus = (status: TagStatus) => {
        switch (status) {
            case TagStatus.CONNECTED:
                return 'Installed';
            case TagStatus.MISCONFIGURED:
                return 'Missing ID';
            case TagStatus.INCOMPLETE:
                return 'Incomplete Setup';
            case TagStatus.NOT_FOUND:
                return 'Not Found';
            case TagStatus.ERROR:
                return 'Error';
            default:
                return 'Unknown';
        }
    };

    if (loading) {
        return (
            <main className="min-h-screen flex flex-col bg-white font-quicksand">
                <Navbar />
                <div className="max-w-4xl mx-auto p-6 bg-white">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
                        <div className="space-y-4">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="h-16 bg-gray-200 rounded"></div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        );
    }

    if (error || !scanData) {
        return (
            <main className="min-h-screen flex flex-col bg-white font-quicksand">
                <Navbar />
                <div className="max-w-4xl mx-auto p-6 bg-white">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-red-600 mb-4">Error</h1>
                        <p className="text-gray-600">{error || 'No scan data available'}</p>
                    </div>
                </div>
            </main>
        );
    }

    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const getCMSIcon = (cmsName: string) => {
        const lowerCMS = cmsName.toLowerCase();
        if (lowerCMS.includes('wordpress')) {
            return <FaWordpress className="text-2xl text-blue-600" />;
        } else if (lowerCMS.includes('hubspot')) {
            return <Image src="/logos/hubspot.jpg" alt="HubSpot" width={32} height={32} className="w-8 h-8 rounded" />;
        }
        else if (lowerCMS.includes('shopify')) {
            return <FaShopify className="text-2xl text-gray-600" />;
        }
        else if (lowerCMS.includes('wix')) {
            return <FaWix className="text-2xl text-gray-600" />;
        }
        else if (lowerCMS.includes('joomla')) {
            return <FaJoomla className="text-2xl text-gray-600" />
        }
        else {
            return <FaWordpress className="text-2xl text-gray-600" />;
        }
    };

    return (
        <main className="min-h-screen flex flex-col bg-white font-quicksand">

            <Navbar />

            <div className="max-w-4xl mx-auto p-6 bg-white">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Website Tag Audit Report</h1>
                    <div className="flex justify-between items-start">
                        <div>
                            {/* <p className="text-gray-600 mb-1">Website: <span className="font-medium">{scanData.domain}</span></p> */}
                            <p className="text-sm sm:text-base text-gray-500">for <a href={scanData.domain.startsWith('http') ? scanData.domain : `https://${scanData.domain}`} className="text-blue-600 font-bold">{scanData.domain}</a></p>
                            <p className="text-gray-600">Audit date: <span className="font-medium">{currentDate}</span></p>
                        </div>
                        <div className="text-right">
                            <p className="text-gray-600 text-sm mb-1">Tracking</p>
                            <p className="text-gray-600 text-sm mb-2">Health score</p>
                            <div className="text-4xl font-bold text-blue-600">{scanData.percentComplete}</div>
                        </div>
                    </div>
                </div>

                {/* Tag Detection Summary */}
                <div className="mb-8">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">Tag Detection Summary</h2>
                    <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-400">
                        {scanData.tags.map((tag, index) => (
                            <div key={index} className={`flex items-center justify-between p-4 ${index !== scanData.tags.length - 1 ? 'border-b border-gray-400' : ''}`}>
                                <div className="flex items-center space-x-3">
                                    <div className="text-xl">{getTagIcon(tag.name)}</div>
                                    <span className="font-medium text-gray-900">{tag.name}</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-gray-600">{getDisplayStatus(tag.status)}</span>
                                    <div className="text-xl">{getStatusIcon(tag.status)}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Technology Detected */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Technology Detected</h2>
                        {scanData.scanResult?.cms ? (
                            <div className="flex items-center space-x-3 mb-6">
                                {getCMSIcon(scanData.scanResult.cms)}
                                <span className="font-medium text-gray-900">{scanData.scanResult.cms}</span>
                            </div>
                        ) : (
                            <div className="flex items-center space-x-3 mb-6">
                                <FaExclamationTriangle className="text-2xl text-yellow-500" />
                                <span className="font-medium text-gray-900">No CMS detected</span>
                            </div>
                        )}

                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Need help fixing these?</h3>
                        <p className="text-gray-600 mb-4">Book a 15-min consultation with a tracking specialist</p>
                    </div>

                    {/* Recommendations */}
                    <div>
                        <h2 className="text-xl font-semibold text-gray-900 mb-4">Recommendations</h2>
                        <div className="space-y-3 mb-6">
                            {scanData.notFoundCount > 0 && (
                                <div className="flex items-start space-x-3">
                                    <FaExclamationTriangle className="text-yellow-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Add missing tracking codes ({scanData.notFoundCount} tags not found)</span>
                                </div>
                            )}
                            {scanData.misconfiguredCount > 0 && (
                                <div className="flex items-start space-x-3">
                                    <FaExclamationTriangle className="text-yellow-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Fix misconfigured tags ({scanData.misconfiguredCount} tags need attention)</span>
                                </div>
                            )}
                            {scanData.incompleteCount > 0 && (
                                <div className="flex items-start space-x-3">
                                    <FaExclamationTriangle className="text-yellow-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">Complete tag setup ({scanData.incompleteCount} tags incomplete)</span>
                                </div>
                            )}
                            {scanData.connectedCount === scanData.tags.length && (
                                <div className="flex items-start space-x-3">
                                    <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">All tags are properly configured!</span>
                                </div>
                            )}
                        </div>

                        <Link href={{
                            pathname: `/report/generate/pdf`,
                            query: {
                                url: scanData.domain
                            }
                        }}
                            className='w-full cursor-pointer bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors'
                        >
                            Download PDF
                        </Link>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                        Prepared by <span className="font-medium text-gray-700">TrackToMeasure</span> - Smart tools for marketers and freelancers
                    </p>
                </div>
            </div>
        </main>
    );
}