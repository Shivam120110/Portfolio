import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: "mailto:beushivam@gmail.com",
    color: "primary",
    label: "beushivam@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/beushivam/",
    color: "secondary",
    label: "/in/beushivam",
  },
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/Shivam120110",
    color: "accent",
    label: "@Shivam120110",
  },
];

const ContactSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.3), hsl(var(--secondary) / 0.2), transparent)",
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative" ref={ref}>
        <div
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-black">Let's Build Something Amazing</span>
            <br />
            <span className="text-black">Together!</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you have a project in mind, want to collaborate, or just want to say hi —
            <br />
            I'd love to hear from you.
          </p>
        </div>

        {/* Social links - all 3 in one row */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className="group relative p-5 clay-card transition-all duration-300"
              whileHover={{
                y: -5,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="p-3 rounded-xl glass transition-colors"
                    style={{
                      backgroundColor: `hsl(var(--${link.color}) / 0.1)`,
                    }}
                  >
                    <link.icon
                      className="w-5 h-5 transition-colors text-black"
                    />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-black"
                    >
                      {link.name}
                    </p>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                  </div>
                </div>
                <ArrowUpRight
                  className="w-5 h-5 text-muted-foreground group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.p
          className="text-center text-muted-foreground text-sm mt-16"
        >
          Designed & Built with 💜 • {new Date().getFullYear()}
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
