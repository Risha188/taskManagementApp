import { Shield, Zap, Users, Lock, TrendingUp, GitBranch } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Security First",
    description:
      "Detect vulnerabilities and security issues before they become problems. Our AI scans for OWASP Top 10 and beyond.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get instant feedback on pull requests. Review thousands of lines of code in seconds, not hours.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless integration with your workflow. Works with GitHub, GitLab, and Bitbucket out of the box.",
  },
  {
    icon: Lock,
    title: "SOC 2 Compliant",
    description: "Enterprise-grade security with end-to-end encryption. Your code never leaves your infrastructure.",
  },
  {
    icon: TrendingUp,
    title: "Performance Insights",
    description: "Identify bottlenecks and optimization opportunities with AI-powered performance analysis.",
  },
  {
    icon: GitBranch,
    title: "Smart Suggestions",
    description: "Get actionable recommendations with code examples. Learn best practices as you go.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-b border-border/40 bg-background py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Everything you need to ship with confidence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Powerful features that help you catch issues early and maintain code quality across your entire team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/40 bg-card hover:border-accent/40 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
