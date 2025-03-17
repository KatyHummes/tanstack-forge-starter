import { Button } from "@/components/ui/button";
import { AuthModal } from "@/components/auth/auth-modal";
import { DevAuthModal } from "@/components/auth/dev-auth-modal";
import { useAuth } from "@/components/auth/auth-context";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Code2,
  TableProperties,
  FormInput,
  Router,
  Search,
  Boxes,
  Github,
  ArrowRightCircle,
  Database,
  Paintbrush,
  Shield,
  Workflow,
} from "lucide-react";

const tanstackFeatures = {
  router: {
    icon: <Router className="w-6 h-6" />,
    color: "from-green-500/20 to-green-500/10",
    textColor: "text-green-500",
    title: "TanStack Router",
    description: "Type-safe routing with first-class search params and caching.",
    features: ["File-based routing", "Type-safe params", "Route prefetching"]
  },
  query: {
    icon: <Search className="w-6 h-6" />,
    color: "from-red-400/20 to-red-400/10",
    textColor: "text-red-400",
    title: "TanStack Query",
    description: "Powerful data synchronization with automatic background updates.",
    features: ["Auto-caching", "Background updates", "Optimistic updates"]
  },
  form: {
    icon: <FormInput className="w-6 h-6" />,
    color: "from-yellow-500/20 to-yellow-500/10",
    textColor: "text-yellow-500",
    title: "TanStack Form",
    description: "Performant, flexible and extensible forms with validation.",
    features: ["Type-safe validation", "Field arrays", "Dynamic forms"]
  },
  table: {
    icon: <TableProperties className="w-6 h-6" />,
    color: "from-blue-400/20 to-blue-400/10",
    textColor: "text-blue-400",
    title: "TanStack Table",
    description: "Headless UI for building powerful tables & datagrids.",
    features: ["Sorting & filtering", "Pagination", "Row selection"]
  }
};

export function FeaturesPage() {
  const { isAuthenticated, isDevMode } = useAuth();
  const AuthComponent = isDevMode ? DevAuthModal : AuthModal;

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-8 text-center relative">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--tw-gradient-from)_0%,transparent_100%)] from-primary/5" />
        <div className="flex items-center justify-center mb-4">
          <img 
            src="https://tanstack.com/favicon.ico" 
            alt="Tanstack Logo" 
            className="w-12 h-12"
          />
        </div>
        <h1 className="text-6xl font-bold tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/80">
          Tanstack Scaffold Starter
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
          A modern full-stack starter template with end-to-end type safety, 
          beautiful UI components, and powerful data management.
        </p>
        <div className="flex gap-4 justify-center">
          {!isAuthenticated ? (
            <AuthComponent 
              trigger={
                <Button size="lg" className="gap-2 text-lg px-8">
                  Get Started <ArrowRightCircle className="w-5 h-5" />
                </Button>
              }
            />
          ) : (
            <Button size="lg" className="gap-2 text-lg px-8">
              Dashboard <ArrowRightCircle className="w-5 h-5" />
            </Button>
          )}
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="https://tanstack.com/docs" target="_blank" rel="noopener">
              Documentation <Code2 className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>

      {/* Tanstack Features */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The TanStack Suite</h2>
        <Tabs defaultValue="router" className="w-full">
          <TabsList className="flex justify-center mb-8 w-full gap-2 bg-transparent h-auto">
            {Object.entries(tanstackFeatures).map(([key, feature]) => (
              <TabsTrigger
                key={key}
                value={key}
                className={`data-[state=active]:bg-gradient-to-r ${feature.color} px-6 py-3 data-[state=active]:${feature.textColor}`}
              >
                <div className="flex items-center gap-2">
                  <div className={feature.textColor}>{feature.icon}</div>
                  <span>{feature.title}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
          {Object.entries(tanstackFeatures).map(([key, feature]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <Card className={`border-none bg-gradient-to-r ${feature.color}`}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className={`p-3 rounded-lg ${feature.textColor} bg-background/80`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${feature.textColor}`}>
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-4">{feature.description}</p>
                      <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {feature.features.map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <ArrowRightCircle className={`w-4 h-4 ${feature.textColor}`} />
                            <span className="text-foreground/90">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Additional Features */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Additional Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Database className="w-8 h-8" />}
            title="Type Safety"
            description="End-to-end type safety with TypeScript, tRPC, and Prisma."
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8" />}
            title="Modern Auth"
            description="Secure authentication with Clerk, including social logins."
          />
          <FeatureCard
            icon={<Paintbrush className="w-8 h-8" />}
            title="Beautiful UI"
            description="Stunning components with Shadcn UI and Tailwind CSS."
          />
          <FeatureCard
            icon={<Search className="w-8 h-8" />}
            title="Data Management"
            description="Efficient data fetching with Tanstack Query and tRPC."
          />
          <FeatureCard
            icon={<Database className="w-8 h-8" />}
            title="Database Ready"
            description="MongoDB integration with Prisma ORM for type-safe queries."
          />
          <FeatureCard
            icon={<Workflow className="w-8 h-8" />}
            title="Developer Experience"
            description="Hot reload, type checking, and excellent DX out of the box."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { 
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_var(--tw-shadow-color)] hover:shadow-primary/30 border-primary/10">
      <CardContent className="p-6">
        <div className="text-primary mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}