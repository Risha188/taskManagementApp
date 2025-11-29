import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for individual developers",
    features: [
      "Up to 10 reviews per month",
      "Basic security scanning",
      "GitHub integration",
      "Email support",
      "7-day history",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Professional",
    price: "$49",
    description: "For growing teams",
    features: [
      "Unlimited reviews",
      "Advanced security scanning",
      "All Git integrations",
      "Priority support",
      "Unlimited history",
      "Custom rules & patterns",
      "Team analytics",
    ],
    cta: "Start Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Everything in Professional",
      "On-premise deployment",
      "SSO & SAML",
      "Dedicated support",
      "Custom AI training",
      "SLA guarantees",
      "Audit logs",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-border/40 bg-background py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Choose the plan that fits your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mx-auto max-w-6xl">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative border-border/40 bg-card ${
                plan.popular ? "border-accent shadow-lg shadow-accent/20" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-block rounded-full bg-accent px-4 py-1 text-sm font-semibold text-accent-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-card-foreground">{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-card-foreground leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button className="w-full" variant={plan.popular ? "default" : "outline"} size="lg">
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          All plans include SSL certificates, automated backups, and 99.9% uptime SLA.
        </p>
      </div>
    </section>
  )
}
