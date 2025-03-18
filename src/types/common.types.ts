import { type ClassValue } from 'clsx';

// Generic Types
export type Nullable<T> = T | null;
export type Optional<T> = T | undefined;
export type Primitive = string | number | boolean | null | undefined;

// Utility Types
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export interface RecordWithId {
  id: string;
  createdAt: Date;
  updatedAt: Date;
}

// Status Types
export type Status = 'idle' | 'loading' | 'success' | 'error';
export type LoadingState = 'idle' | 'loading' | 'loaded' | 'error';

// UI Types
export interface StyleProps {
  className?: string;
  style?: React.CSSProperties;
  css?: ClassValue[];
}

// Pagination Types
export interface PaginationParams {
  page: number;
  limit: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  status: Status;
  error?: string;
}

export interface ApiError {
  code: string;
  message: string;
  details?: unknown;
}