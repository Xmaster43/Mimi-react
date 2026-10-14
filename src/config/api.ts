/**
 * API Configuration
 * 
 * Dual-mode support:
 * - Production: VITE_API_BASE_URL set -> uses API Gateway (single URL + paths)
 * - Local: VITE_API_BASE_URL unset -> uses individual service URLs from env
 * 
 * Base URL WINS when both are present.
 */

const baseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '');
const useGateway = !!baseUrl;

function buildServiceUrl(
  serviceKey: string,
  gatewayPath: string,
  localDefault: string
): string {
  if (useGateway) {
    return `${baseUrl}${gatewayPath}`;
  }
  
  const envVar = `VITE_API_${serviceKey}`;
  return import.meta.env[envVar] ?? localDefault;
}

export const API_AUTH = buildServiceUrl(
  'AUTH',
  '/api/auth',
  'http://localhost:8081/api/auth'
);

export const API_USERS = buildServiceUrl(
  'USERS',
  '/api/users',
  'http://localhost:8084/api/users'
);

export const API_PRODUCTS = buildServiceUrl(
  'PRODUCTS',
  '/api/products',
  'http://localhost:8087/api/products'
);

export const API_SERVICES = buildServiceUrl(
  'SERVICES',
  '/api/servicios',
  'http://localhost:8083/api/servicios'
);

export const API_WORKERS = buildServiceUrl(
  'WORKERS',
  '/api/users/workers',
  'http://localhost:8082/api/users/workers'
);

export const API_RESERVATIONS = buildServiceUrl(
  'RESERVATIONS',
  '/api/reservas',
  'http://localhost:8086/api/reservas'
);

export const isUsingGateway = (): boolean => useGateway;
export const getBaseUrl = (): string | undefined => baseUrl;