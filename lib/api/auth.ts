import { apiFetch, setAuthToken, removeAuthToken } from './config';
import { saveUserData, removeUserData } from './user-storage';
import type {
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
  MeResponse,
} from './types';

/**
 * Register a new user
 * POST /api/auth/register
 */
export async function register(data: RegisterRequest): Promise<RegisterResponse> {
  const response = await apiFetch<RegisterResponse>('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  // Save token and user data to localStorage
  if (response.token) {
    setAuthToken(response.token);
  }
  if (response.user) {
    saveUserData(response.user);
  }

  return response;
}

/**
 * Login user
 * POST /api/auth/login
 */
export async function login(data: LoginRequest): Promise<LoginResponse> {
  const response = await apiFetch<LoginResponse>('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  // Save token and user data to localStorage
  if (response.token) {
    setAuthToken(response.token);
  }
  if (response.user) {
    saveUserData(response.user);
  }

  return response;
}

/**
 * Get current authenticated user
 * GET /api/auth/me
 * Requires: Authorization header with Bearer token
 */
export async function getCurrentUser(): Promise<MeResponse> {
  const user = await apiFetch<MeResponse>('/api/auth/me', {
    method: 'GET',
  });

  // Update stored user data
  saveUserData(user);

  return user;
}

/**
 * Logout user (client-side)
 * Removes auth token and user data from localStorage
 */
export function logout(): void {
  removeAuthToken();
  removeUserData();
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  return !!localStorage.getItem('authToken');
}
