import { AuthProvider, UserRole, UserStatus } from '@/lib/constants';

export interface AuthUser {
  id: string;
  clerkId: string;
  name: string;
  email: string;
  image?: string;
  role?: UserRole;
  status?: UserStatus;
  provider?: AuthProvider;
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