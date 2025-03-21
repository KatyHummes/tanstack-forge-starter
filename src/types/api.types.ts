import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import type { AppRouter } from '@/server/routers/_app';

// tRPC API Types
export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;

// API Context Types
export interface ApiContext {
  userId?: string;
  isAuthenticated: boolean;
}