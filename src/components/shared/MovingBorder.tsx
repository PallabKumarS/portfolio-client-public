/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const MovingGradientBorder = ({
  children,
  className,
  borderWidth = 2,
  duration = 8,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  borderWidth?: number;
  duration?: number;
  gradientColors?: string;
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className={cn("relative p-[2px] group overflow-hidden rounded-3xl")}>
      {mounted && (
        <>
          {/* Moving gradient border */}
          <motion.div
            className="absolute inset-0 z-0"
            style={
              {
                background: `linear-gradient(var(--rotate), var(--primary), var(--secondary), var(--accent), var(--primary))`,
                backgroundSize: "300% 300%",
                "--rotate": "0deg",
              } as any
            }
            animate={
              {
                "--rotate": ["0deg", "360deg"],
                backgroundPosition: ["0% 0%", "100% 100%"],
              } as any
            }
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />

          {/* Blur effect for the border */}
          <motion.div
            className="absolute inset-0 z-0 opacity-50 blur-sm"
            style={
              {
                background: `linear-gradient(var(--rotate), var(--primary), var(--secondary), var(--accent), var(--primary))`,
                backgroundSize: "300% 300%",
                "--rotate": "0deg",
              } as any
            }
            animate={
              {
                "--rotate": ["0deg", "360deg"],
                backgroundPosition: ["0% 0%", "100% 100%"],
              } as any
            }
            transition={{
              duration: duration * 1.2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear",
            }}
          />
        </>
      )}

      {/* Content container */}
      <div
        className={cn(
          "relative z-10 bg-background rounded-[calc(1.5rem-2px)] h-full w-full",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default MovingGradientBorder;
