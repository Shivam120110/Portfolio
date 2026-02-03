import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <AboutSection />
      </div>
    </div>
  );
};

export default AboutPage;
