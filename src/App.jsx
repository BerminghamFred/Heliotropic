import { CapillaryBackground } from "./components/CapillaryBackground.jsx";
import { ContactSection } from "./components/ContactSection.jsx";
import { Footer } from "./components/Footer.jsx";
import { Hero } from "./components/Hero.jsx";

export default function App() {
  return (
    <>
      <CapillaryBackground />
      <a
        href="#main"
        className="focus:ring-heli-orange sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-heli-deep focus:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-heli-deep"
      >
        Skip to main content
      </a>
      <header className="relative">
        <Hero />
      </header>
      <main id="main">
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
