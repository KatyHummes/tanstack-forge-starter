import { Link, Outlet } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Boxes, Github } from 'lucide-react';
import { useAuth } from '@/components/auth/auth-context';
import { AuthModal } from '@/components/auth/auth-modal';
import { UserMenu } from '@/components/auth/user-menu';
import { DevAuthModal } from '@/components/auth/dev-auth-modal';
import { DevUserMenu } from '@/components/auth/dev-user-menu';

export function RootLayout() {
  const { isAuthenticated, isDevMode } = useAuth();
  const AuthComponent = isDevMode ? DevAuthModal : AuthModal;
  const UserMenuComponent = isDevMode ? DevUserMenu : UserMenu;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/50">
      <nav className="fixed w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Boxes className="w-6 h-6 text-primary" />
            <span className="font-bold text-lg">TanStackForge</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost">Home</Button>
            </Link>
            <Link to="/about">
              <Button variant="ghost">About</Button>
            </Link>
            <Link to="/examples">
              <Button variant="ghost">Examples</Button>
            </Link>
            {isAuthenticated ? (
              <UserMenuComponent />
            ) : (
              <AuthComponent />
            )}
            <Button asChild>
              <a href="https://github.com/your-repo/tanstack-forge" target="_blank" rel="noopener">
                <Github className="mr-2 h-4 w-4" />
                Star on GitHub
              </a>
            </Button>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
}