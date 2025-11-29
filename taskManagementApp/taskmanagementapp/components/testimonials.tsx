import { Card, CardContent } from "@/components/ui/card"
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Engineering Lead",
    company: "Stripe",
    image: "/p1.jpg",
    content:
      "CodeGuard AI has transformed our code review process. We catch bugs 3x faster and our junior developers are learning best practices in real-time.",
  },
  {
    name: "Marcus Rodriguez",
    role: "CTO",
    company: "Vercel",
    image: "/p2.jpg",
    content:
      "The security scanning alone is worth it. We found critical vulnerabilities in production code that our team missed. Absolutely essential tool.",
  },
  {
    name: "Emily Watson",
    role: "Senior Developer",
    company: "GitHub",
    image: "/p3.jpg",
    content:
      "Finally, an AI code review tool that actually understands context. The suggestions are thoughtful and the false positive rate is incredibly low.",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border/40 bg-muted/20 py-24 md:py-32">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Trusted by engineering teams worldwide
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join thousands of developers who ship better code with CodeGuard AI.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-6xl">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-border/40 bg-card">
              <CardContent className="p-6">
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="mb-6 text-card-foreground leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}