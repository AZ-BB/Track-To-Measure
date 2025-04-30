'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getAuthToken } from '../utils/auth';

export interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name?: string) => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
  token: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper to safely access localStorage
const getLocalStorage = () => {
  if (typeof window !== 'undefined') {
    return window.localStorage;
  }
  return null;
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check for stored session on initial load
    const checkSession = async () => {
      try {
        // Check for auth token first
        const authToken = getAuthToken();
        setToken(authToken);
        
        // If we have a token, check for user data
        const storage = getLocalStorage();
        if (storage) {
          const storedUser = storage.getItem('user');
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          }
        }
      } catch (error) {
        console.error('Session check failed:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkSession();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Make API call to your backend login endpoint
      const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Login failed');
      }
      
      const data = await response.json();
      
      // Store the token and user data
      const storage = getLocalStorage();
      if (storage) {
        storage.setItem('auth_token', data.token);
        storage.setItem('user', JSON.stringify(data.user));
      }
      
      setToken(data.token);
      setUser(data.user);
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (email: string, password: string, name?: string) => {
    setIsLoading(true);
    try {
      // Make API call to your backend signup endpoint
      const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/user/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, name }),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Signup failed');
      }
      
      const data = await response.json();
      
      // Store the token and user data
      const storage = getLocalStorage();
      if (storage) {
        storage.setItem('auth_token', data.token);
        storage.setItem('user', JSON.stringify(data.user));
      }
      
      setToken(data.token);
      setUser(data.user);
    } catch (error) {
      console.error('Signup failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      // Clear the stored auth data
      const storage = getLocalStorage();
      if (storage) {
        storage.removeItem('auth_token');
        storage.removeItem('user');
      }
      
      setToken(null);
      setUser(null);
    } catch (error) {
      console.error('Logout failed:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ 
      user, 
      isLoading, 
      login, 
      signup, 
      logout,
      isAuthenticated: !!token,
      token
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
} 