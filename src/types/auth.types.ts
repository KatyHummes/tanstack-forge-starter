import { AuthProvider, UserRole, UserStatus } from '@/lib/constants';

export interface AuthUser {
  id: string;
  clerkId: string;
  email: string;
  name?: string;
  role: UserRole;
  status: UserStatus;
  provider: AuthProvider;
  emailVerified: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthSession {
  user: AuthUser;
  token: string;
  expiresAt: Date;
}

export interface AuthContext {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}