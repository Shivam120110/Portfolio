import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface Shape {
  id: number;
  type: "triangle" | "circle" | "hexagon" | "square";
  size: number;
  x: number;
  y: number;
  rotation: number;
  color: string;
  delay: number;
}

const shapes: Shape[] = [
  { id: 1, type: "triangle", size: 60, x: 10, y: 20, rotation: 45, color: "primary", delay: 0 },
  { id: 2, type: "circle", size: 40, x: 80, y: 15, rotation: 0, color: "secondary", delay: 0.2 },
  { id: 3, type: "hexagon", size: 50, x: 70, y: 70, rotation: 30, color: "accent", delay: 0.4 },
  { id: 4, type: "square", size: 35, x: 15, y: 75, rotation: 15, color: "primary", delay: 0.6 },
  { id: 5, type: "circle", size: 25, x: 90, y: 50, rotation: 0, color: "accent", delay: 0.8 },
  { id: 6, type: "triangle", size: 45, x: 50, y: 85, rotation: 180, color: "secondary", delay: 1 },
  { id: 7, type: "hexagon", size: 30, x: 25, y: 45, rotation: 60, color: "primary", delay: 1.2 },
  { id: 8, type: "square", size: 20, x: 60, y: 30, rotation: 45, color: "accent", delay: 1.4 },
];

const ShapeSVG = ({ type, color }: { type: Shape["type"]; color: string }) => {
  const colorClass = `hsl(var(--${color}))`;
  
  switch (type) {
    case "triangle":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,10 90,90 10,90"
            fill={`hsl(var(--${color}) / 0.1)`}
            stroke={colorClass}
            strokeWidth="2"
            opacity="0.6"
          />
        </svg>
      );
    case "circle":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle
            cx="50"
            cy="50"
            r="40"
            fill={`hsl(var(--${color}) / 0.1)`}
            stroke={colorClass}
            strokeWidth="2"
            opacity="0.6"
          />
        </svg>
      );
    case "hexagon":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon
            points="50,5 90,25 90,75 50,95 10,75 10,25"
            fill={`hsl(var(--${color}) / 0.1)`}
            stroke={colorClass}
            strokeWidth="2"
            opacity="0.6"
          />
        </svg>
      );
    case "square":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <rect
            x="15"
            y="15"
            width="70"
            height="70"
            fill={`hsl(var(--${color}) / 0.1)`}
            stroke={colorClass}
            strokeWidth="2"
            opacity="0.6"
          />
        </svg>
      );
  }
};

const FloatingShape = ({ 
  shape, 
  smoothX, 
  smoothY 
}: { 
  shape: Shape; 
  smoothX: ReturnType<typeof useSpring>; 
  smoothY: ReturnType<typeof useSpring>; 
}) => {
  const multiplier = (shape.id % 3 + 1) * 3;
  const shapeX = useTransform(smoothX, (v) => v * multiplier);
  const shapeY = useTransform(smoothY, (v) => v * multiplier);

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${shape.x}%`,
        top: `${shape.y}%`,
        width: shape.size,
        height: shape.size,
        x: shapeX,
        y: shapeY,
      }}
      initial={{ opacity: 0, scale: 0, rotate: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotate: shape.rotation,
      }}
      transition={{
        delay: shape.delay,
        duration: 1,
        ease: "easeOut",
      }}
    >
      <motion.div
        animate={{
          rotate: [0, 360],
          y: [0, -20, 0],
        }}
        transition={{
          rotate: {
            duration: 20 + shape.id * 2,
            repeat: Infinity,
            ease: "linear",
          },
          y: {
            duration: 3 + shape.id * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <ShapeSVG type={shape.type} color={shape.color} />
      </motion.div>
    </motion.div>
  );
};

const GradientOrb = ({ 
  color, 
  size, 
  position, 
  opacity, 
  smoothX, 
  smoothY, 
  multiplier, 
  duration 
}: { 
  color: string;
  size: string;
  position: { left?: string; right?: string; top?: string; bottom?: string };
  opacity: string;
  smoothX: ReturnType<typeof useSpring>;
  smoothY: ReturnType<typeof useSpring>;
  multiplier: number;
  duration: number;
}) => {
  const orbX = useTransform(smoothX, (v) => v * multiplier);
  const orbY = useTransform(smoothY, (v) => v * multiplier);

  return (
    <motion.div
      className={`absolute ${size} rounded-full blur-3xl ${opacity}`}
      style={{
        background: `radial-gradient(circle, hsl(var(--${color}) / 0.3), transparent)`,
        ...position,
        x: orbX,
        y: orbY,
      }}
      animate={{
        scale: [1, 1 + (duration / 20), 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

const FloatingShapes = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [mounted, setMounted] = useState(false);

  const springConfig = { damping: 50, stiffness: 100 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX - innerWidth / 2) / 50);
      mouseY.set((clientY - innerHeight / 2) / 50);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <FloatingShape 
          key={shape.id} 
          shape={shape} 
          smoothX={smoothX} 
          smoothY={smoothY} 
        />
      ))}
      
      {/* Gradient orbs - lighter for light theme */}
      <GradientOrb
        color="primary"
        size="w-96 h-96"
        position={{ left: "10%", top: "20%" }}
        opacity="opacity-30"
        smoothX={smoothX}
        smoothY={smoothY}
        multiplier={5}
        duration={8}
      />
      <GradientOrb
        color="secondary"
        size="w-80 h-80"
        position={{ right: "10%", bottom: "20%" }}
        opacity="opacity-25"
        smoothX={smoothX}
        smoothY={smoothY}
        multiplier={-3}
        duration={10}
      />
      <GradientOrb
        color="accent"
        size="w-64 h-64"
        position={{ left: "50%", top: "50%" }}
        opacity="opacity-20"
        smoothX={smoothX}
        smoothY={smoothY}
        multiplier={4}
        duration={6}
      />
    </div>
  );
};

export default FloatingShapes;
