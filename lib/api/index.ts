// Export all API functions and types

// Configuration
export {
  API_BASE_URL,
  getAuthToken,
  setAuthToken,
  removeAuthToken,
  APIError,
} from './config';

// Types
export type {
  User,
  UserWithKycStatus,
  RegisterRequest,
  RegisterResponse,
  LoginRequest,
  LoginResponse,
  MeResponse,
  KYCSubmitRequest,
  KYCData,
  KYCSubmitResponse,
  KYCStatusResponse,
  PortalDashboardResponse,
  ErrorResponse,
} from './types';

// Auth API
export {
  register,
  login,
  getCurrentUser,
  logout,
  isAuthenticated,
} from './auth';

// KYC API
export {
  submitKYC,
  getKYCStatus,
} from './kyc';

// Portal API
export {
  getPortalDashboard,
} from './portal';

// User Storage
export {
  saveUserData,
  getUserData,
  removeUserData,
  hasUserData,
} from './user-storage';
