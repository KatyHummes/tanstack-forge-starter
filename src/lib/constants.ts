// Application Constants
export const APP_NAME = "TanStackForge";
export const APP_DESCRIPTION = "A modern toolkit forged around TanStack principles";
export const APP_VERSION = "1.0.0";

// Feature Flags
export const FEATURES = {
  DARK_MODE: true,
  ANALYTICS: false,
  BETA_FEATURES: false,
} as const;

// API Constants
export const API = {
  BASE_URL: "/api",
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3,
  STALE_TIME: 1000 * 60 * 5, // 5 minutes
  CACHE_TIME: 1000 * 60 * 30, // 30 minutes
} as const;

// Authentication
export enum AuthProvider {
  EMAIL = "email",
  GOOGLE = "google",
  GITHUB = "github",
}

// User Related
export enum UserRole {
  ADMIN = "admin",
  USER = "user",
  GUEST = "guest",
}

export enum UserStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  SUSPENDED = "suspended",
}

// Content Types
export enum ContentType {
  POST = "post",
  COMMENT = "comment",
  PAGE = "page",
}

// UI Constants
export const UI = {
  SIDEBAR_WIDTH: 280,
  HEADER_HEIGHT: 64,
  FOOTER_HEIGHT: 64,
  ANIMATION_DURATION: 200,
  TOAST_DURATION: 5000,
  MODAL_SIZES: {
    sm: 400,
    md: 600,
    lg: 800,
    xl: 1000,
  },
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

// Date Formats
export const DATE_FORMATS = {
  FULL: "MMMM dd, yyyy",
  SHORT: "MM/dd/yyyy",
  WITH_TIME: "MM/dd/yyyy HH:mm",
  ISO: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
} as const;

// HTTP Status Codes
export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  INTERNAL_ERROR = 500,
}

// Error Messages
export const ERROR_MESSAGES = {
  UNAUTHORIZED: "You must be logged in to perform this action",
  FORBIDDEN: "You don't have permission to perform this action",
  NOT_FOUND: "The requested resource was not found",
  INTERNAL_ERROR: "An unexpected error occurred",
  VALIDATION_ERROR: "Please check your input and try again",
} as const;