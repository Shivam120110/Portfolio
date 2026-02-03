import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, TrendingUp, Settings } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Growth & Strategy Intern",
    company: "India's Biggest Ed-Tech",
    period: "2023",
    icon: TrendingUp,
    color: "primary",
    description: "Spearheaded growth initiatives and strategic planning for one of the most impactful ed-tech platforms in India.",
    achievements: [
      "Analyzed market trends and competitor strategies",
      "Developed growth frameworks and KPI dashboards",
      "Collaborated with cross-functional teams on strategic projects",
      "Contributed to user acquisition and retention strategies",
    ],
  },
  {
    id: 2,
    role: "Business Operations Intern",
    company: "India's Biggest Ed-Tech",
    period: "2023",
    icon: Settings,
    color: "secondary",
    description: "Optimized operational workflows and processes to enhance efficiency across multiple business units.",
    achievements: [
      "Streamlined internal processes for better efficiency",
      "Created operational documentation and SOPs",
      "Worked on data-driven decision making initiatives",
      "Supported scaling operations during peak periods",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="max-w-4xl mx-auto relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The journey that shaped my skills
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <motion.div
            className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-secondary to-accent rounded-full"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
          />

          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.3 }}
                className={`relative flex items-start gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full -translate-x-1/2 z-10 clay-card"
                  style={{ backgroundColor: `hsl(var(--${exp.color}))` }}
                  whileHover={{ scale: 1.5 }}
                />

                {/* Content card */}
                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <motion.div
                    className="p-6 clay-card cursor-pointer"
                    onClick={() => setExpandedId(expandedId === exp.id ? null : exp.id)}
                    whileHover={{ 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div 
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: `hsl(var(--${exp.color}) / 0.15)` }}
                        >
                          <exp.icon 
                            className="w-5 h-5"
                            style={{ color: `hsl(var(--${exp.color}))` }}
                          />
                        </div>
                        <div>
                          <h3 
                            className="font-bold text-lg"
                            style={{ color: `hsl(var(--${exp.color}))` }}
                          >
                            {exp.role}
                          </h3>
                          <p className="text-muted-foreground text-sm">{exp.company}</p>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground glass px-2 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-foreground/80 text-sm mb-4">{exp.description}</p>

                    <motion.div
                      initial={false}
                      animate={{ 
                        height: expandedId === exp.id ? "auto" : 0,
                        opacity: expandedId === exp.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={expandedId === exp.id ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span 
                              className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ backgroundColor: `hsl(var(--${exp.color}))` }}
                            />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>

                    <button className="flex items-center gap-1 text-xs text-primary hover:text-primary/80 transition-colors">
                      {expandedId === exp.id ? "Show less" : "Show more"}
                      <motion.div
                        animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </motion.div>
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
