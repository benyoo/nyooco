import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { StrategyImpact } from "@/components/strategy-impact";
import { Experience } from "@/components/experience";
import { GovernanceSecurity } from "@/components/governance-security";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground scroll-smooth">
      <Nav />
      <main>
        <Hero />
        <StrategyImpact />
        <Experience />
        <GovernanceSecurity />
        <TechStack />
      </main>
      <footer className="px-6 lg:px-12 py-12 border-t border-border/50 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Ben Yoo. All rights reserved. Architected for Performance.</p>
      </footer>
    </div>
  );
}
