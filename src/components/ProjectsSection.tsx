import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Lightbulb, Rocket, Target, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project Alpha",
    subtitle: "Entrepreneurial Venture #1",
    description: "An innovative solution addressing a real market need. Built from ideation to execution.",
    longDescription: "This project taught me the fundamentals of building from scratch. From market research to MVP development, I experienced the full entrepreneurial journey.",
    role: "Founder & Lead",
    impact: "Validated market fit",
    icon: Rocket,
    color: "primary",
  },
  {
    id: 2,
    title: "Project Beta",
    subtitle: "Entrepreneurial Venture #2",
    description: "A strategic initiative focused on solving problems through technology and innovation.",
    longDescription: "This venture pushed me to think strategically about scaling and operational efficiency. I learned invaluable lessons about team building and resource management.",
    role: "Co-founder",
    impact: "Scaled operations",
    icon: Target,
    color: "secondary",
  },
  {
    id: 3,
    title: "Project Gamma",
    subtitle: "Entrepreneurial Venture #3",
    description: "A creative project that combined business acumen with innovative thinking.",
    longDescription: "My most recent venture where I applied all my learnings. This project represents the culmination of my entrepreneurial journey so far.",
    role: "Founder",
    impact: "Ongoing growth",
    icon: Lightbulb,
    color: "accent",
  },
];

const ProjectsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-dots">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ventures that define my entrepreneurial spirit
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <motion.div
                className="relative p-6 h-full clay-card overflow-hidden"
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
              >
                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, hsl(var(--${project.color}) / 0.1), transparent 70%)`,
                  }}
                />

                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div
                    className="mb-4 inline-block p-3 rounded-xl glass"
                    style={{ backgroundColor: `hsl(var(--${project.color}) / 0.1)` }}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <project.icon
                      className="w-8 h-8 text-black"
                    />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-xl font-bold mb-1 text-black"
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{project.subtitle}</p>

                  {/* Description */}
                  <p className="text-foreground/80 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span
                      className="text-xs px-2 py-1 rounded-full glass"
                      style={{
                        backgroundColor: `hsl(var(--${project.color}) / 0.1)`,
                        color: `hsl(var(--${project.color}))`,
                      }}
                    >
                      {project.role}
                    </span>
                    <span
                      className="text-xs px-2 py-1 rounded-full glass text-muted-foreground"
                    >
                      {project.impact}
                    </span>
                  </div>

                  {/* View more */}
                  <div className="flex items-center gap-1 text-sm text-black group-hover:gap-2 transition-all font-medium">
                    <span>View details</span>
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-lg w-full p-8 clay-card"
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full glass hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div
              className="inline-block p-3 rounded-xl mb-4 glass"
              style={{ backgroundColor: `hsl(var(--${selectedProject.color}) / 0.1)` }}
            >
              <selectedProject.icon
                className="w-8 h-8 text-black"
              />
            </div>

            <h3
              className="text-2xl font-bold mb-1 text-black"
            >
              {selectedProject.title}
            </h3>
            <p className="text-muted-foreground mb-4">{selectedProject.subtitle}</p>

            <p className="text-foreground/80 mb-6">{selectedProject.longDescription}</p>

            <div className="flex gap-3">
              <span
                className="px-3 py-1.5 rounded-full text-sm glass"
                style={{
                  backgroundColor: `hsl(var(--${selectedProject.color}) / 0.1)`,
                  color: `hsl(var(--${selectedProject.color}))`,
                }}
              >
                {selectedProject.role}
              </span>
              <span className="px-3 py-1.5 rounded-full text-sm glass text-muted-foreground">
                {selectedProject.impact}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default ProjectsSection;
