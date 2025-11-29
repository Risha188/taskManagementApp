import { Button } from "@/components/ui/button"
import { Code2 } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto w-full max-w-7xl flex h-16 items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Code2 className="h-6 w-6 text-accent" />
          <span className="text-xl font-bold text-foreground">CodeGuard AI</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-md text-muted-foreground hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#testimonials" className="text-md text-muted-foreground hover:text-foreground transition-colors">
            Testimonials
          </a>
          <a href="#pricing" className="text-md text-muted-foreground hover:text-foreground transition-colors">
            Pricing
          </a>
          <a href="#" className="text-md text-muted-foreground hover:text-foreground transition-colors">
            Docs
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  )
}
