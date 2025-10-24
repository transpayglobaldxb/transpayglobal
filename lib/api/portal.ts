import { apiFetch } from './config';
import type { PortalDashboardResponse } from './types';

/**
 * Get portal dashboard data
 * GET /api/portal/dashboard
 * Requires: Authorization header with Bearer token
 * Requires: User must have completed KYC
 */
export async function getPortalDashboard(): Promise<PortalDashboardResponse> {
  return apiFetch<PortalDashboardResponse>('/api/portal/dashboard', {
    method: 'GET',
  });
}
