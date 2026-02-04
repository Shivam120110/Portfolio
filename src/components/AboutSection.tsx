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
    <section className="pb-24 pt-0 px-4 relative overflow-hidden bg-dots -mt-12">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Header Removed */}

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 mt-[40px]"
          >
            <p className="text-muted-foreground text-lg font-medium">
              The story behind the ambition
            </p>

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

          {/* Character Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-end mt-[40px]"
          >
            <img
              src="/about-character.jpg"
              alt="Character"
              className="w-[80%] max-w-sm rounded-[10px] object-cover shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
