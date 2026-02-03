import Navigation from "@/components/Navigation";
import SkillsSection from "@/components/SkillsSection";

const SkillsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <div className="pt-20">
        <SkillsSection />
      </div>
    </div>
  );
};

export default SkillsPage;
