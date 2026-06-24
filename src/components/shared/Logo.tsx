"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="py-4 text-center"
      >
        <Link
          href="/"
          className="font-bold text-2xl bg-linear-to-r from-primary to-primary/70 bg-clip-text text-transparent"
        >
          Pallab Kumar Sarker
        </Link>
      </motion.div>
    </div>
  );
};

export default Logo;
