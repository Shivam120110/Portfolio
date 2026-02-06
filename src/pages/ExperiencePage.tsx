import Navigation from "@/components/Navigation";
import ExperienceSection from "@/components/ExperienceSection";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen w-full relative bg-background">
      <Navigation />
      <div className="absolute top-0 left-0 w-full pt-20">
        <ExperienceSection />
      </div>
    </div>
  );
};

export default ExperiencePage;
