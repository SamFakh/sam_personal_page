"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

type SectionProps = {
  id?: string;
  children: ReactNode;
};

export default function Section({ id, children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className="py-16 sm:py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      variants={variants}
    >
      {children}
    </motion.section>
  );
}
