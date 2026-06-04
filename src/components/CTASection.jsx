import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {} from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";

export default function CTASection() {
  // ── Animation helpers ─────────────────────────────────────────────────────────
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { delay, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  });
  return (
    <AnimatePresence>
      <motion.div
        {...fadeUp(0.55)}
        className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl px-10 py-8 bg-primary"
        
      >
        <div>
          <p
            className="text-xs font-bold tracking-widest uppercase mb-1"
            style={{
              color: "var(--secondary)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Not sure where to start?
          </p>
          <p
            className="font-black text-xl"
            style={{
              color: "var(--white)",
              fontFamily: "var(--font-heading)",
            }}
          >
            Let's talk about your project.
          </p>
        </div>

        <div className="flex gap-3 flex-shrink-0">
          <motion.a
            href="#contact"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 28px rgba(201,243,29,0.28)",
            }}
            whileTap={{ scale: 0.97 }}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            Book a Call
            <HiArrowRight size={16} />
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn btn-outline inline-flex items-center gap-2"
          >
            See My Work
          </motion.a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
