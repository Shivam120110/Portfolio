import Navigation from "@/components/Navigation";
import ExperienceSection from "@/components/ExperienceSection";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <ExperienceSection />
      </div>
    </div>
  );
};

export default ExperiencePage;
