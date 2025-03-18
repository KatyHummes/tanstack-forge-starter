import { prisma } from '../lib/prisma';

export type AuthContext = {
  userId: string;
  // Add other auth-related fields if needed
};

export async function createContext() {
  return {
    prisma,
    auth: null as AuthContext | null, // Will be set by Clerk middleware
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;