import { lazy, Suspense } from "react";
import Header from "@components/layout/header/Header";
import Footer from "@components/layout/footer/Footer";

const AboutSection = lazy(() => import("@features/aboutSection/About"));
const ContactSection = lazy(() => import("@features/contactSection/Contact"));
const HeroSection = lazy(() => import("@features/heroSection/Hero"));
const ProjectSection = lazy(() => import("@features/projectsSection/Project"));
const ServiceSection = lazy(() => import("@features/serviceSection/Service"));

function App() {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <HeroSection />
          <AboutSection />
          <ServiceSection />
          <ProjectSection />
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
