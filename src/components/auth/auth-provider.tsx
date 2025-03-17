import { ClerkProvider, ClerkProviderProps } from "@clerk/clerk-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";
import { createContext, useContext, useState, ReactNode } from "react";

interface DevAuthContextType {
  isSignedIn: boolean;
  setIsSignedIn: (value: boolean) => void;
}

const DevAuthContext = createContext<DevAuthContextType | null>(null);

export function useDevAuth() {
  const context = useContext(DevAuthContext);
  if (!context) {
    throw new Error("useDevAuth must be used within a DevAuthProvider");
  }
  return context;
}

export interface UnifiedAuthContextType {
  isDevMode: boolean;
  isAuthenticated: boolean;
}

const UnifiedAuthContext = createContext<UnifiedAuthContextType | null>(null);

export function useUnifiedAuth() {
  const context = useContext(UnifiedAuthContext);
  if (!context) {
    throw new Error("useUnifiedAuth must be used within an AuthProvider");
  }
  return context;
}

function DevAuthProvider({ children }: { children: ReactNode }) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <DevAuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
      <UnifiedAuthContext.Provider 
        value={{ 
          isDevMode: true, 
          isAuthenticated: isSignedIn 
        }}
      >
        <Alert variant="warning" className="mb-4 mx-4">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Development Mode</AlertTitle>
          <AlertDescription>
            Using development mode authentication.
          </AlertDescription>
        </Alert>
        {children}
      </UnifiedAuthContext.Provider>
    </DevAuthContext.Provider>
  );
}

function ClerkAuthProvider({ children, ...props }: Omit<ClerkProviderProps, "publishableKey">) {
  const publishableKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
  
  if (!publishableKey) {
    console.error("Missing VITE_CLERK_PUBLISHABLE_KEY environment variable");
    return <div>Authentication configuration error</div>;
  }

  return (
    <ClerkProvider publishableKey={publishableKey} {...props}>
      <UnifiedAuthContext.Provider 
        value={{ 
          isDevMode: false, 
          isAuthenticated: false // This will be updated by the auth-context
        }}
      >
        {children}
      </UnifiedAuthContext.Provider>
    </ClerkProvider>
  );
}

export function AuthProvider({ children, ...props }: Omit<ClerkProviderProps, "publishableKey">) {
  const isDevMode = import.meta.env.VITE_DEV_MODE === 'true';

  if (isDevMode) {
    return <DevAuthProvider>{children}</DevAuthProvider>;
  }

  return <ClerkAuthProvider {...props}>{children}</ClerkAuthProvider>;
}