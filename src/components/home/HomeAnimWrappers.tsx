"use client";
import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const scrollVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


/** Wrapper animasi untuk Hero section (animate on mount) */
export function HeroAnimWrapper({ children }: { children: ReactNode }) {
  return (
    <motion.div className="space-y-6" initial="hidden" animate="visible" variants={scrollVariant}>
      {children}
    </motion.div>
  );
}

/** Wrapper animasi scroll-triggered untuk section umum */
export function SectionAnimWrapper({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

/** Wrapper animasi kartu dengan stagger */
export function CardAnimWrapper({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      variants={scrollVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay }}
      className="bg-white p-8 border border-slate-200 rounded-[15px] space-y-6 shadow-sm hover:-translate-y-1 transition-transform"
    >
      {children}
    </motion.div>
  );
}
