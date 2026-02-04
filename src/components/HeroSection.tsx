import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import TypewriterText from "./TypewriterText";

const HeroSection = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const { currentTarget, clientX, clientY } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Calculate distance from center normalized to [-1, 1]
    const normX = (clientX - centerX) / (width / 2);
    // Rotate Y axis based on X position (left/right)
    x.set(normX * 15); // 15 degrees max rotation

    // Optional: Rotate X axis based on Y position (up/down) - keep it subtle
    const normY = (clientY - centerY) / (height / 2);
    y.set(normY * -10); // -10 degrees max rotation (inverted for natural feel)
  }

  const rotateY = useTransform(mouseX, (val) => `${val}deg`);
  const rotateX = useTransform(mouseY, (val) => `${val}deg`);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-8 items-center">
        {/* Left - Text Content */}
        <motion.div
          className="text-center lg:text-left"
          style={{ paddingLeft: '75px', marginTop: '50px' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.p
            className="text-black text-sm md:text-base tracking-widest uppercase mb-4 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Welcome to my Game Zone
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <TypewriterText text="Shivam Kumar" delay={1200} speed={100} />
          </motion.h1>

          <motion.div
            className="text-lg md:text-xl text-black/80 mb-8 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            <p>
              Endless Ambition
              <span className="text-black"> | </span>
              Builder
              <span className="text-black/60"> | </span>
              Trader
              <span className="text-black"> | </span>
              Strategist
              <span className="text-black/60"> | </span>
              Gamer
            </p>
            <p className="mt-2">
              Digital Business & Entrepreneurship Student - IIM Bangalore
            </p>
          </motion.div>

          <motion.div
            className="flex gap-4 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            <Link to="/projects">
              <motion.button
                className="px-6 py-3 rounded-lg font-semibold bg-black text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                className="px-6 py-3 rounded-lg font-semibold bg-black text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get in Touch
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Right - 3D Sketchfab Model */}
        <motion.div
          className="hidden lg:block relative h-[500px]"
          // Apply scale and 3D perspective transform
          style={{
            scale: 0.75,
            perspective: 1000,
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { x.set(0); y.set(0); }}
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 0.75 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Container with overflow hidden to clip the Sketchfab UI */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Wrapper that's larger than container to hide UI elements at edges */}
            <div
              className="sketchfab-embed-wrapper"
              style={{
                position: 'absolute',
                top: '-60px',
                left: '-10px',
                right: '-10px',
                bottom: '-250px',
              }}
            >
              <iframe
                title="Forest Elf Set (Pubg/Bgmi) Look Around Animation"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; fullscreen; xr-spatial-tracking"
                src="https://sketchfab.com/models/92481c37e4824644967d3b493add5206/embed?ui_controls=0&ui_infos=0&ui_stop=0&ui_hint=0&ui_ar=0&ui_help=0&ui_settings=0&ui_inspector=0&ui_watermark=0&ui_watermark_link=0&ui_annotations=0&transparent=1&autospin=0.3&autostart=1&ui_theme=dark"
                style={{
                  width: '100%',
                  height: '100%',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
