import { Link } from "@tanstack/react-router";
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
import { Router, Search, FormInput, TableProperties, Database, Shield, Paintbrush, Workflow, Boxes, GitMerge, Zap, PenTool as Tool, CheckCircle2, Code2 } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About TanStackForge</h1>
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
        <h2 className="text-3xl font-bold mb-8">TanStack Suite: The Modern React Data Management Solution</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <Router className="w-8 h-8" />,
              title: "TanStack Router",
              features: [
                "Fully type-safe routes",
                "First-class search params",
                "Built-in nested layouts",
                "Optimized for performance",
                "Loader and action patterns"
              ]
            },
            {
              icon: <Search className="w-8 h-8" />,
              title: "TanStack Query",
              features: [
                "Automatic caching",
                "Background updates",
                "Request deduplication",
                "Pagination support",
                "Optimistic updates"
              ]
            },
            {
              icon: <FormInput className="w-8 h-8" />,
              title: "TanStack Form",
              features: [
                "Zero dependencies",
                "Complete type safety",
                "Flexible validation",
                "Field arrays support",
                "Smart re-rendering"
              ]
            },
            {
              icon: <TableProperties className="w-8 h-8" />,
              title: "TanStack Table",
              features: [
                "Virtual rendering",
                "Column management",
                "Sorting and filtering",
                "Built-in pagination",
                "Customizable rendering"
              ]
            }
          ].map((product) => (
            <Card key={product.title} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{product.title}</h3>
                </div>
                <ul className="space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Type Safety Section */}
      <section id="type-safety" className="container mx-auto px-4 py-16 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">End-to-End Type Safety</h2>
          <div className="grid gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Database className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-semibold">tRPC + Prisma Integration</h3>
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
          <h2 className="text-3xl font-bold mb-8">Modern Authentication with Clerk</h2>
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
          <h2 className="text-3xl font-bold mb-8">Beautiful UI with Shadcn UI and Tailwind CSS</h2>
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
                <Link to="/">
                  Get Started
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://github.com/your-repo/tanstack-forge" target="_blank" rel="noopener">
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