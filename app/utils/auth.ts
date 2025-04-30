/**
 * Authentication utility functions
 */

// Define the User type locally to avoid circular dependencies
interface User {
  id: string;
  email: string;
  name?: string;
}

const getLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage;
  }
  return null;
};

/**
 * Process the authentication callback from Google OAuth
 * @param token JWT token received from the backend
 * @param userData User data received from the backend
 */
export const processGoogleAuthCallback = (token: string, userData: User) => {
  const storage = getLocalStorage();
  if (storage) {
    // Store the authentication token
    storage.setItem('auth_token', token);
    
    // Store the user data
    storage.setItem('user', JSON.stringify(userData));
  }
  
  // Redirect to the appropriate page
  // Check if there's a stored redirect URL
  const redirectUrl = storage?.getItem('auth_redirect') || '/';
  storage?.removeItem('auth_redirect'); // Clean up
  
  window.location.href = redirectUrl;
};

/**
 * Store the current URL for redirecting back after authentication
 */
export const storeRedirectUrl = (url: string) => {
  const storage = getLocalStorage();
  if (storage) {
    storage.setItem('auth_redirect', url);
  }
};

/**
 * Get the stored authentication token
 */
export const getAuthToken = (): string | null => {
  const storage = getLocalStorage();
  return storage ? storage.getItem('auth_token') : null;
};

/**
 * Check if the user is authenticated
 */
export const isAuthenticated = (): boolean => {
  return !!getAuthToken();
}; 