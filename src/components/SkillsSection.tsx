import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  TrendingUp,
  Users,
  Settings,
  Lightbulb,
  BarChart3,
  Megaphone,
  Code,
  PresentationIcon
} from "lucide-react";

const skillCategories = [
  {
    category: "Strategy",
    color: "primary",
    skills: [
      { name: "Growth Strategy", icon: TrendingUp, level: 90 },
      { name: "Market Analysis", icon: BarChart3, level: 85 },
    ],
  },
  {
    category: "Operations",
    color: "secondary",
    skills: [
      { name: "Business Operations", icon: Settings, level: 88 },
      { name: "Process Optimization", icon: Lightbulb, level: 82 },
    ],
  },
  {
    category: "Growth",
    color: "accent",
    skills: [
      { name: "User Acquisition", icon: Users, level: 85 },
      { name: "Marketing Strategy", icon: Megaphone, level: 80 },
    ],
  },
  {
    category: "Tools",
    color: "primary",
    skills: [
      { name: "Data Analytics", icon: Code, level: 75 },
      { name: "Presentation", icon: PresentationIcon, level: 90 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative" ref={ref}>
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            The arsenal I bring to every venture
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="p-6 clay-card"
            >
              <h3
                className="text-lg font-semibold mb-6 text-black"
              >
                {category.category}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <motion.div
                          className="p-2 rounded-lg glass transition-colors"
                          style={{ backgroundColor: `hsl(var(--${category.color}) / 0.1)` }}
                          whileHover={{
                            scale: 1.1,
                          }}
                        >
                          <skill.icon
                            className="w-4 h-4 text-black"
                          />
                        </motion.div>
                        <span className="text-foreground/90 font-medium">{skill.name}</span>
                      </div>
                      <span
                        className="text-sm font-medium text-black"
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress bar */}
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, black, gray)`,
                        }}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.6 + categoryIndex * 0.1 + skillIndex * 0.1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating badges */}
        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {["Problem Solver", "Strategic Thinker", "Team Player", "Fast Learner", "Creative Mind"].map((badge, index) => (
            <motion.span
              key={badge}
              className="px-4 py-2 rounded-full clay-card text-sm text-foreground/80 cursor-default font-medium"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px hsl(var(--primary) / 0.2)",
              }}
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
