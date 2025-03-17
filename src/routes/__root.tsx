import { createRootRoute, Outlet } from '@tanstack/react-router';
import { RootLayout } from '@/components/layouts/root';
import { AuthContextProvider } from '@/components/auth/auth-context';

export const Route = createRootRoute({
  component: () => (
    <AuthContextProvider>
      <RootLayout>
        <Outlet />
      </RootLayout>
    </AuthContextProvider>
  ),
});