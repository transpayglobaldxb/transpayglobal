import { apiFormDataFetch, apiFetch } from './config';
import type {
  KYCSubmitRequest,
  KYCSubmitResponse,
  KYCStatusResponse,
} from './types';

/**
 * Submit KYC information
 * POST /api/kyc/submit
 * Requires: Authorization header with Bearer token
 * Content-Type: multipart/form-data
 */
export async function submitKYC(data: KYCSubmitRequest): Promise<KYCSubmitResponse> {
  const formData = new FormData();

  // Append text fields
  formData.append('dateOfBirth', data.dateOfBirth);
  formData.append('phoneNumber', data.phoneNumber);
  formData.append('address', data.address);
  formData.append('city', data.city);
  formData.append('country', data.country);
  formData.append('postalCode', data.postalCode);

  // Append file fields
  formData.append('idDocument', data.idDocument);
  formData.append('proofOfAddress', data.proofOfAddress);

  return apiFormDataFetch<KYCSubmitResponse>('/api/kyc/submit', formData);
}

/**
 * Get KYC status for current user
 * GET /api/kyc/status
 * Requires: Authorization header with Bearer token
 */
export async function getKYCStatus(): Promise<KYCStatusResponse> {
  return apiFetch<KYCStatusResponse>('/api/kyc/status', {
    method: 'GET',
  });
}
