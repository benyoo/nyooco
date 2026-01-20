import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { StrategyImpact } from "@/components/strategy-impact";
import { Experience } from "@/components/experience";
import { GovernanceSecurity } from "@/components/governance-security";
import { TechStack } from "@/components/tech-stack";
import { Contact } from "@/components/contact";

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
        <Contact />
      </main>
    </div>
  );
}
