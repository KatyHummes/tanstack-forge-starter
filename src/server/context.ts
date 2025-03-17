import { type inferAsyncReturnType } from '@trpc/server';
import { prisma } from '@/lib/prisma';

export async function createContext() {
  return {
    prisma,
    auth: null, // Will be set by Clerk middleware
  };
}

export type Context = inferAsyncReturnType<typeof createContext>;