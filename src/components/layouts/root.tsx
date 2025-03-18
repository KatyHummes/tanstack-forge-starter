import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { SiGithub } from 'react-icons/si';
import { useAuth } from '@/components/auth/auth-context';
import { AuthModal } from '@/components/auth/auth-modal';
import { UserMenu } from '@/components/auth/user-menu';
import { DevAuthModal } from '@/components/auth/dev-auth-modal';
import { DevUserMenu } from '@/components/auth/dev-user-menu';

interface RootLayoutProps {
  children: React.ReactNode;
}

export function RootLayout({ children }: RootLayoutProps) {
  const { isAuthenticated, isDevMode } = useAuth();
  const AuthComponent = isDevMode ? DevAuthModal : AuthModal;
  const UserMenuComponent = isDevMode ? DevUserMenu : UserMenu;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/50">
      <nav className="fixed w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/forge-logo.png" alt="TanStackForge Logo" className="w-8 h-8" />
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
              <a href="https://github.com/kryptobaseddev/tanstack-forge-starter" target="_blank" rel="noopener">
                <SiGithub className="mr-2 h-4 w-4" />
                Star on GitHub
              </a>
            </Button>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
}