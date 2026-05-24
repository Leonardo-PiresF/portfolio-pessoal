import { createFileRoute } from "@tanstack/react-router";
import { ModeProvider } from "@/components/portfolio/ModeContext";
import { Splash } from "@/components/portfolio/Splash";
import { Header } from "@/components/portfolio/Header";
import { MobileNav } from "@/components/portfolio/MobileNav";
import { Hero } from "@/components/portfolio/Hero";
import { Services } from "@/components/portfolio/Services";
import { Calculator } from "@/components/portfolio/Calculator";
import { Process } from "@/components/portfolio/Process";
import { Projects } from "@/components/portfolio/Projects";
import { Stack } from "@/components/portfolio/Stack";
import { FAQ, Contact, Footer } from "@/components/portfolio/Sections";
import { BriefingDialog } from "@/components/portfolio/BriefingDialog";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <ModeProvider>
      <Splash />
      <Header />
      <MobileNav />
      <main className="pb-24 md:pb-0">
        <Hero />
        <Stack />
        <Services />
        <Calculator />
        <Process />
        <Projects />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BriefingDialog />
    </ModeProvider>
  );
}
