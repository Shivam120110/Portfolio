import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <div className="pt-[30px]">
        <ProjectsSection />
      </div>
    </div>
  );
};

export default ProjectsPage;
