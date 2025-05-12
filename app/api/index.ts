// API endpoints for Track-to-Measure backend
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface ScanRequest {
  url: string;
  includeCmsDetection?: boolean;
}

export interface ReportOptions {
  includeRecommendations: boolean;
  includeCmsInfo: boolean;
  includeHeader: boolean;
  colorScheme?: 'default' | 'modern' | 'professional';
}

export enum TagStatus {
  CONNECTED = 'Connected',
  MISCONFIGURED = 'Misconfigured',
  INCOMPLETE = 'Incomplete Setup',
  NOT_FOUND = 'Not Found',
  ERROR = 'Error'
}

export interface Tag {
  name: string;
  isPresent: boolean;
  status: TagStatus;
  id?: string;
  ids?: string[];
  details?: string;
  dataLayer?: boolean;
  statusReason?: string;
}

export interface ScanResult {
  url: string;
  domain: string;
  scanTime: string;
  tags: Tag[];
  cms?: string;
  recommendations?: string[];
}

/**
 * Scan a URL for marketing tags
 */
export async function scanUrl(data: ScanRequest): Promise<ScanResult> {
  const response = await fetch(`${API_BASE_URL}/api/scan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`Failed to scan URL: ${response.status} ${response.statusText}`);
  }

  const result = await response.json();
  return result.data;
}

/**
 * Get scan history
 */
export async function getScanHistory(): Promise<any[]> {
  const response = await fetch(`${API_BASE_URL}/api/scan/history`);

  if (!response.ok) {
    throw new Error(`Failed to get scan history: ${response.status} ${response.statusText}`);
  }

  const result = await response.json();
  return result.data;
}

/**
 * Get scan result by ID
 */
export async function getScanById(id: string): Promise<ScanResult | null> {
  const response = await fetch(`${API_BASE_URL}/api/scan/${id}`);

  if (!response.ok) {
    throw new Error(`Failed to get scan result: ${response.status} ${response.statusText}`);
  }

  const result = await response.json();
  return result.data;
}

/**
 * Generate a PDF report for a URL
 */
export async function generateReport(url: string, options?: ReportOptions): Promise<Blob> {
  const response = await fetch(`${API_BASE_URL}/api/report/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ url, options }),
  });

  if (!response.ok) {
    throw new Error(`Failed to generate report: ${response.status} ${response.statusText}`);
  }

  return await response.blob();
}

/**
 * Generate a PDF report from existing scan results
 */
export async function generateReportFromScan(scanResult: ScanResult, options?: ReportOptions): Promise<Blob> {
  const response = await fetch(`${API_BASE_URL}/api/report/generate-from-scan`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ scanResult, options }),
  });

  if (!response.ok) {
    throw new Error(`Failed to generate report: ${response.status} ${response.statusText}`);
  }

  return await response.blob();
}

/**
 * Check API health
 */
export async function checkHealth(): Promise<{ status: string; timestamp: string }> {
  const response = await fetch(`${API_BASE_URL}/api/health`);

  if (!response.ok) {
    throw new Error(`Health check failed: ${response.status} ${response.statusText}`);
  }

  return await response.json();
} 