import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { RootLayout } from '@/components/layouts/root';
import { AuthContextProvider } from '@/components/auth/auth-context';

export const Route = createRootRoute({
  component: () => {
    const isDevMode = process.env.NODE_ENV === 'development';
    
    return (
      <AuthContextProvider>
        <RootLayout>
          <Outlet />
          {isDevMode && <TanStackRouterDevtools />}
        </RootLayout>
      </AuthContextProvider>
    );
  },
  validateSearch: (search: Record<string, unknown>) => {
    return search;
  },
});