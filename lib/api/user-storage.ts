import type { User } from './types';

/**
 * Storage key for user data
 */
const USER_STORAGE_KEY = 'userData';

/**
 * Save user data to localStorage
 */
export function saveUserData(user: User): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
}

/**
 * Get user data from localStorage
 */
export function getUserData(): User | null {
  if (typeof window === 'undefined') return null;

  const userData = localStorage.getItem(USER_STORAGE_KEY);
  if (!userData) return null;

  try {
    return JSON.parse(userData) as User;
  } catch (error) {
    console.error('Failed to parse user data:', error);
    return null;
  }
}

/**
 * Remove user data from localStorage
 */
export function removeUserData(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(USER_STORAGE_KEY);
}

/**
 * Check if user data exists
 */
export function hasUserData(): boolean {
  return getUserData() !== null;
}
