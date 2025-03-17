import { createContext, useContext, ReactNode } from "react";
import { useUser } from "@clerk/clerk-react";
import { useUnifiedAuth } from "./auth-provider";

interface AuthContextType {
  isAuthenticated: boolean;
  isDevMode: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function AuthContextProvider({ children }: { children: ReactNode }) {
  const isDevMode = import.meta.env.VITE_DEV_MODE === 'true';
  
  if (isDevMode) {
    const unifiedAuth = useUnifiedAuth();
    return (
      <AuthContext.Provider value={unifiedAuth}>
        {children}
      </AuthContext.Provider>
    );
  }

  const { isSignedIn } = useUser();
  return (
    <AuthContext.Provider value={{
      isAuthenticated: isSignedIn ?? false,
      isDevMode: false
    }}>
      {children}
    </AuthContext.Provider>
  );
}