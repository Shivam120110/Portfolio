import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Rocket, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: GraduationCap,
    label: "Digital Business Student",
    value: "Education",
    color: "primary",
  },
  {
    icon: Rocket,
    label: "Entrepreneurial Projects",
    value: "3",
    color: "secondary",
  },
  {
    icon: TrendingUp,
    label: "Strategic Internships",
    value: "2",
    color: "accent",
  },
];

const AboutSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 relative overflow-hidden bg-dots">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-black">About Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            The story behind the ambition
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 glass p-8 rounded-3xl"
          >
            <p className="text-lg text-black leading-relaxed">
              I'm a passionate <span className="text-black font-semibold">Digital Business & Entrepreneurship</span> student
              who believes in building things that matter. My journey combines strategic thinking with hands-on execution.
            </p>
            <p className="text-lg text-black leading-relaxed">
              With experience at <span className="text-black font-semibold">India's biggest ed-tech company</span>,
              I've learned how to drive growth, optimize operations, and turn ideas into impact. From growth strategy
              to business operations, I thrive where creativity meets business.
            </p>
            <p className="text-lg text-black leading-relaxed">
              When I'm not strategizing, you'll find me launching new ventures, exploring emerging technologies,
              or connecting with fellow entrepreneurs who dream big.
            </p>
          </motion.div>

          {/* Stats cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className="group relative p-6 clay-card cursor-default"
              >
                <div className="relative flex items-center gap-4">
                  <div
                    className="p-3 rounded-xl transition-colors"
                    style={{ backgroundColor: `hsl(var(--${stat.color}) / 0.15)` }}
                  >
                    <stat.icon
                      className="w-8 h-8 text-black"
                    />
                  </div>
                  <div>
                    <p
                      className="text-3xl font-bold text-black"
                    >
                      {stat.value}
                    </p>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
