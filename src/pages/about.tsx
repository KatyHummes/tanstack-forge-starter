import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Router, Search, FormInput, TableProperties, Database, Shield, Paintbrush, Workflow, Boxes, GitMerge, Zap, PenTool as Tool, CheckCircle2, Code2, Github, ExternalLink, ArrowRight } from "lucide-react";
import { HoverGlow } from '@/components/ui/hover-glow';
import { SiTrpc, SiPrisma, SiMongodb, SiTailwindcss, SiClerk, SiShadcnui } from 'react-icons/si';

type TanStackProduct = {
  icon: React.ReactNode;
  title: string;
  color: string;
  textColor: string;
  glowColor: "primary" | "secondary" | "accent" | "ember";
  features: string[];
  link: string;
};

export function AboutPage() {
  const tanstackProducts: TanStackProduct[] = [
    {
      icon: <Router className="w-8 h-8" />,
      title: "TanStack Router",
      color: "from-green-500/20",
      textColor: "text-green-500",
      glowColor: "primary",
      features: [
        "Fully type-safe routes",
        "First-class search params",
        "Built-in nested layouts",
        "Optimized for performance",
        "Loader and action patterns"
      ],
      link: "https://tanstack.com/router"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "TanStack Query",
      color: "from-red-400/20",
      textColor: "text-red-400",
      glowColor: "ember",
      features: [
        "Automatic caching",
        "Background updates",
        "Request deduplication",
        "Pagination support",
        "Optimistic updates"
      ],
      link: "https://tanstack.com/query"
    },
    {
      icon: <FormInput className="w-8 h-8" />,
      title: "TanStack Form",
      color: "from-yellow-500/20",
      textColor: "text-yellow-500",
      glowColor: "accent",
      features: [
        "Zero dependencies",
        "Complete type safety",
        "Flexible validation",
        "Field arrays support",
        "Smart re-rendering"
      ],
      link: "https://tanstack.com/form"
    },
    {
      icon: <TableProperties className="w-8 h-8" />,
      title: "TanStack Table",
      color: "from-blue-400/20",
      textColor: "text-blue-400",
      glowColor: "secondary",
      features: [
        "Virtual rendering",
        "Column management",
        "Sorting and filtering",
        "Built-in pagination",
        "Customizable rendering"
      ],
      link: "https://tanstack.com/table"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center mb-8">
          <img src="/forge-logo.png" alt="TanStackForge Logo" className="w-16 h-16 mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About TanStackForge</h1>
        </div>
        <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
          A modern toolkit forged around TanStack principles, combining best-in-class tools for building
          type-safe, high-performance web applications.
        </p>
      </div>

      {/* Quick Navigation */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: <Boxes className="w-6 h-6" />,
              title: "TanStack Suite",
              href: "#tanstack-suite",
              description: "Modern React data management solution"
            },
            {
              icon: <GitMerge className="w-6 h-6" />,
              title: "Type Safety",
              href: "#type-safety",
              description: "End-to-end type safety with tRPC"
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Authentication",
              href: "#authentication",
              description: "Modern auth with Clerk"
            },
            {
              icon: <Paintbrush className="w-6 h-6" />,
              title: "UI Components",
              href: "#ui",
              description: "Beautiful UI with Shadcn"
            }
          ].map((item) => (
            <Card key={item.href} className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <a href={item.href} className="flex flex-col items-center text-center gap-2">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* TanStack Suite Section */}
      <section id="tanstack-suite" className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center gap-3 mb-8">
          <img 
            src="https://tanstack.com/favicon.ico" 
            alt="Tanstack Logo" 
            className="w-8 h-8"
          />
          <h2 className="text-3xl font-bold text-center">TanStack Suite: The Modern React Data Management Solution</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tanstackProducts.map((product) => (
            <HoverGlow key={product.title} color={product.glowColor}>
              <Card className={`overflow-hidden h-full bg-gradient-to-r ${product.color} to-transparent backdrop-blur-sm`}>
                <CardContent className="p-6 relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-2 rounded-lg bg-background/80 ${product.textColor}`}>
                      {product.icon}
                    </div>
                    <h3 className="text-xl font-semibold">
                      <a 
                        href={product.link} 
                        target="_blank" 
                        rel="noopener" 
                        className={`${product.textColor} hover:bg-${product.textColor}/5 transition-all rounded px-2 py-1 -ml-2 flex items-center gap-2 group`}
                      >
                        {product.title}
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 ${product.textColor}`} />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </HoverGlow>
          ))}
        </div>
      </section>

      {/* Type Safety Section */}
      <section id="type-safety" className="container mx-auto px-4 py-16 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <GitMerge className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-center">End-to-End Type Safety</h2>
          </div>
          <div className="grid gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    <SiTrpc className="w-8 h-8 text-[#398CCB]" />
                    <span className="text-xl font-semibold">
                      <a 
                        href="https://trpc.io/docs" 
                        target="_blank" 
                        rel="noopener" 
                        className="hover:text-[#398CCB] hover:bg-[#398CCB]/5 transition-all rounded px-2 py-1 -ml-2 flex items-center gap-2 group"
                      >
                        tRPC
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </span>
                    <span className="mx-2">+</span>
                    <SiPrisma className="w-8 h-8 text-[#2D3748]" />
                    <span className="text-xl font-semibold">
                      <a 
                        href="https://www.prisma.io/docs/orm" 
                        target="_blank" 
                        rel="noopener" 
                        className="hover:text-[#2D3748] hover:bg-[#2D3748]/5 transition-all rounded px-2 py-1 flex items-center gap-2 group"
                      >
                        Prisma
                        <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </span>
                    <span className="ml-2">Integration</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  Experience seamless type safety from your database to your UI with our integrated approach:
                </p>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Feature</TableHead>
                      <TableHead>Benefit</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {[
                      ["Schema Sharing", "Automatic type generation across layers"],
                      ["Input Validation", "Runtime safety with Zod integration"],
                      ["IDE Support", "Full IntelliSense and autocompletion"],
                      ["Error Handling", "Type-safe error boundaries"],
                      ["Query Building", "Type-safe database queries"]
                    ].map(([feature, benefit]) => (
                      <TableRow key={feature}>
                        <TableCell className="font-medium">{feature}</TableCell>
                        <TableCell>{benefit}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <section id="authentication" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <SiClerk className="w-8 h-8 text-[#6C47FF]" />
            <h2 className="text-3xl font-bold text-center">
              <a 
                href="https://clerk.com/docs" 
                target="_blank" 
                rel="noopener" 
                className="hover:text-[#6C47FF] hover:bg-[#6C47FF]/5 transition-all rounded px-2 py-1 -ml-2 flex items-center gap-2 group inline-flex"
              >
                Modern Authentication with Clerk
                <ExternalLink className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </h2>
          </div>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Enterprise-Grade Security</h3>
                  <p className="text-muted-foreground">Complete authentication solution with modern features</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Code2 className="w-6 h-6" />,
                    title: "Developer Experience",
                    features: ["Simple API", "TypeScript Support", "Flexible Integration"]
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Security Features",
                    features: ["MFA Support", "JWT Handling", "CSRF Protection"]
                  },
                  {
                    icon: <Tool className="w-6 h-6" />,
                    title: "Management Tools",
                    features: ["User Dashboard", "Analytics", "Role Management"]
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Modern Auth",
                    features: ["Social Login", "Passwordless", "Magic Links"]
                  }
                ].map((section) => (
                  <div key={section.title} className="space-y-2">
                    <div className="flex items-center gap-2 mb-2">
                      {section.icon}
                      <h4 className="font-semibold">{section.title}</h4>
                    </div>
                    <ul className="space-y-1">
                      {section.features.map((feature) => (
                        <li key={feature} className="text-muted-foreground text-sm flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* UI Section */}
      <section id="ui" className="container mx-auto px-4 py-16 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-3 mb-8">
            <h2 className="text-3xl font-bold">Beautiful UI with</h2>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <SiShadcnui className="w-8 h-8 text-[#000000] dark:text-white" />
                <a 
                  href="https://ui.shadcn.com/docs" 
                  target="_blank" 
                  rel="noopener" 
                  className="hover:text-foreground hover:bg-foreground/5 transition-all rounded px-2 py-1 flex items-center gap-2 group text-2xl font-bold"
                >
                  Shadcn UI
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
              <span className="text-2xl font-bold mx-2">and</span>
              <div className="flex items-center gap-2">
                <SiTailwindcss className="w-8 h-8 text-[#38BDF8]" />
                <a 
                  href="https://tailwindcss.com/" 
                  target="_blank" 
                  rel="noopener" 
                  className="hover:text-[#38BDF8] hover:bg-[#38BDF8]/5 transition-all rounded px-2 py-1 flex items-center gap-2 group text-2xl font-bold"
                >
                  Tailwind CSS
                  <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
          <div className="grid gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Paintbrush className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">Component-Driven Development</h3>
                    <p className="text-muted-foreground">Flexible, accessible, and beautiful by default</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4">Shadcn UI Benefits</h4>
                    <ul className="space-y-2">
                      {[
                        "Copy-and-paste components",
                        "Full customization control",
                        "Built on Radix UI primitives",
                        "Zero runtime bundle impact",
                        "Consistent design language"
                      ].map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Tailwind CSS Features</h4>
                    <ul className="space-y-2">
                      {[
                        "Utility-first styling",
                        "Design system constraints",
                        "Responsive design built-in",
                        "Dark mode support",
                        "Performance optimized"
                      ].map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 justify-center mb-8">
            <Workflow className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold">Application Architecture & Data Flow</h2>
          </div>
          <Card>
            <CardContent className="p-8">
              {/* Architecture Overview */}
              <div className="relative py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Client Layer */}
                  <div className="relative pt-4">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                      <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20">
                        Frontend
                      </span>
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 h-full border border-primary/10 hover:border-primary/30 transition-colors">
                      <div className="flex flex-col items-center mb-4">
                        <Boxes className="w-12 h-12 text-primary mb-3" />
                        <h4 className="font-semibold text-lg">Client Layer</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Router className="w-4 h-4 text-primary" />
                          <span>TanStack Router</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Search className="w-4 h-4 text-primary" />
                          <span>TanStack Query</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <FormInput className="w-4 h-4 text-primary" />
                          <span>TanStack Form</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <TableProperties className="w-4 h-4 text-primary" />
                          <span>TanStack Table</span>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-primary/30" />
                    </div>
                  </div>

                  {/* API Layer */}
                  <div className="relative pt-4">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                      <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20">
                        Backend
                      </span>
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 h-full border border-primary/10 hover:border-primary/30 transition-colors">
                      <div className="flex flex-col items-center mb-4">
                        <GitMerge className="w-12 h-12 text-primary mb-3" />
                        <h4 className="font-semibold text-lg">API Layer</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Code2 className="w-4 h-4 text-primary" />
                          <span>tRPC Endpoints</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Shield className="w-4 h-4 text-primary" />
                          <span>Type-safe Routes</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          <span>Zod Validation</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Tool className="w-4 h-4 text-primary" />
                          <span>Middleware</span>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                      <ArrowRight className="w-8 h-8 text-primary/30" />
                    </div>
                  </div>

                  {/* Data Layer */}
                  <div className="relative pt-4">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-10">
                      <span className="bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full border border-primary/20">
                        Database
                      </span>
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 h-full border border-primary/10 hover:border-primary/30 transition-colors">
                      <div className="flex flex-col items-center mb-4">
                        <Database className="w-12 h-12 text-primary mb-3" />
                        <h4 className="font-semibold text-lg">Data Layer</h4>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Tool className="w-4 h-4 text-primary" />
                          <span>Prisma ORM</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <SiMongodb className="w-4 h-4 text-[#00ED64]" />
                          <span>MongoDB</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Code2 className="w-4 h-4 text-primary" />
                          <span>Type Generation</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Shield className="w-4 h-4 text-primary" />
                          <span>Data Validation</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Flow Description */}
              <div className="mt-12 bg-secondary/5 rounded-lg p-6 border border-primary/10">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-primary" />
                  Type-Safe Data Flow Process
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h5 className="font-semibold text-primary">Request Flow ↓</h5>
                    <ol className="space-y-3 list-none">
                      <li className="flex items-start gap-3">
                        <div className="flex-none flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold">1</div>
                        <span className="text-sm">Client initiates request using TanStack Query hooks</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-none flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold">2</div>
                        <span className="text-sm">tRPC client transforms and validates request data</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-none flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold">3</div>
                        <span className="text-sm">Backend receives and validates request with Zod</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-none flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold">4</div>
                        <span className="text-sm">Prisma executes type-safe database queries</span>
                      </li>
                    </ol>
                  </div>
                  <div className="space-y-4">
                    <h5 className="font-semibold text-primary">Response Flow ↑</h5>
                    <ol className="space-y-3 list-none">
                      <li className="flex items-start gap-3">
                        <div className="flex-none flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold">1</div>
                        <span className="text-sm">MongoDB returns requested data to Prisma</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-none flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold">2</div>
                        <span className="text-sm">tRPC transforms response to type-safe objects</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-none flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold">3</div>
                        <span className="text-sm">TanStack Query caches and manages response data</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="flex-none flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-sm font-semibold">4</div>
                        <span className="text-sm">UI components receive and render type-safe data</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2 text-sm bg-secondary/5 rounded-lg p-3">
                  <Shield className="w-5 h-5 text-primary flex-none" />
                  <span>End-to-end type safety</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-secondary/5 rounded-lg p-3">
                  <Zap className="w-5 h-5 text-primary flex-none" />
                  <span>Automatic cache management</span>
                </div>
                <div className="flex items-center gap-2 text-sm bg-secondary/5 rounded-lg p-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-none" />
                  <span>Runtime data validation</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Building?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get started with TanStackForge today and experience the perfect balance of developer
              experience and production-ready features.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" asChild>
                <a 
                  href="https://github.com/kryptobaseddev/tanstack-forge-starter/blob/main/README.md" 
                  target="_blank" 
                  rel="noopener" 
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  Get Started
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://github.com/kryptobaseddev/tanstack-forge-starter" 
                  target="_blank" 
                  rel="noopener" 
                  className="flex items-center gap-2"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}