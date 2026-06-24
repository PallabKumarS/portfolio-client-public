"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { motion, AnimatePresence } from "framer-motion";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, theme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden border-2 p-4 rounded-full">
        <div className="h-[1.2rem] w-[1.2rem]" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <div
      className="relative w-6 h-6 flex items-center justify-center overflow-hidden border-2 p-4 rounded-full"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="moon"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute"
          >
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
