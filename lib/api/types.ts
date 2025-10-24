// User types
export interface User {
  id: string;
  email: string;
  fullName: string;
  kycCompleted: boolean;
}

export interface UserWithKycStatus extends User {
  kycStatus?: string;
  memberSince?: string;
}

// Auth request/response types
export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  message: string;
  token: string;
  user: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: User;
}

export interface MeResponse extends User {}

// KYC types
export interface KYCSubmitRequest {
  dateOfBirth: string;
  phoneNumber: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  idDocument: File;
  proofOfAddress: File;
}

export interface KYCData {
  id: string;
  status: string;
  submittedAt: string;
}

export interface KYCSubmitResponse {
  message: string;
  status: string;
  kyc: KYCData;
}

export interface KYCStatusResponse {
  submitted: boolean;
  status: string;
  submittedAt: string;
  updatedAt: string;
}

// Portal types
export interface PortalDashboardResponse {
  message: string;
  user: UserWithKycStatus;
  data: {
    stats: {
      bookings: number;
      payments: number;
      stays: number;
    };
  };
}

// Error response
export interface ErrorResponse {
  error: string;
  message?: string;
}
