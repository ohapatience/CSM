import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const TESTIMONIALS = [
  {
    quote:
      "She consistently delivers high-quality work with strong attention to detail. She is reliable, focused, and easy to work with.",
    name: "Manfort",
    role: null,
  },
  {
    quote:
      "Working with her has been a smooth experience. She communicates clearly, stays committed to her tasks, and always follows through. You can trust her to take ownership and get things done without constant follow-up.",
    name: "Pelumi",
    role: "CEO, Solid Fiction",
  },
  {
    quote:
      "Patience brings structure and clarity to every task she handles. Her work style improves team efficiency, reduces confusion, and ensures deadlines are met without compromising quality. She's the kind of person you want in your team.",
    name: "Supervisor",
    role: "DMC",
  },
];

const AUTOPLAY_DELAY = 5000;

function QuoteIcon() {
  return (
    <svg width="36" height="28" viewBox="0 0 36 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 28V17.6C0 14.4 0.666667 11.4667 2 8.8C3.33333 6.13333 5.13333 3.93333 7.4 2.2C9.66667 0.466667 12.2667 -0.266667 15.2 0.0666667L14 3.6C12 3.33333 10.2 3.86667 8.6 5.2C7 6.53333 5.86667 8.2 5.2 10.2H10.4V28H0ZM20.8 28V17.6C20.8 14.4 21.4667 11.4667 22.8 8.8C24.1333 6.13333 25.9333 3.93333 28.2 2.2C30.4667 0.466667 33.0667 -0.266667 36 0.0666667L34.8 3.6C32.8 3.33333 31 3.86667 29.4 5.2C27.8 6.53333 26.6667 8.2 26 10.2H31.2V28H20.8Z"
        fill="rgba(201,243,29,0.15)"
      />
    </svg>
  );
}

export default function RecommendationSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back
  const timerRef = useRef(null);

  const go = (next) => {
    const d = next > index ? 1 : -1;
    setDirection(d);
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const prev = () => go(index - 1);
  const next = () => go(index + 1);

  // Autoplay
  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, AUTOPLAY_DELAY);
    return () => clearTimeout(timerRef.current);
  }, [index]);

  const variants = {
    enter: (d) => ({ opacity: 0, x: d * 40 }),
    center: { opacity: 1, x: 0 },
    exit: (d) => ({ opacity: 0, x: d * -40 }),
  };

  const t = TESTIMONIALS[index];

  return (
    <section
      id="testimonials"
      className="section relative overflow-hidden"
      style={{ background: "#0D2622" }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(42,96,87,0.28) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.4,
        }}
      />

      <div className="wrapper relative z-10">

        {/* ── Header ──────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="w-8 h-px" style={{ background: "var(--secondary)" }} />
          <span
            className="text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: "var(--secondary)", fontFamily: "var(--font-heading)" }}
          >
            Recommendations
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(42,96,87,0.4)" }} />
        </motion.div>

        {/* ── Carousel card ────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">

          {/* Prev arrow */}
          <div className="hidden lg:flex justify-end">
            <motion.button
              onClick={prev}
              whileHover={{ scale: 1.08, borderColor: "rgba(201,243,29,0.45)" }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-2xl flex items-center justify-center"
              style={{
                background: "rgba(28,63,57,0.35)",
                border: "1px solid rgba(42,96,87,0.4)",
                color: "#4A7A73",
              }}
            >
              <HiChevronLeft size={20} />
            </motion.button>
          </div>

          {/* Quote card */}
          <div className="lg:col-span-3 relative" style={{ minHeight: "280px" }}>
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex flex-col justify-between rounded-3xl p-8 md:p-10"
                style={{
                  background: "rgba(20,50,45,0.55)",
                  border: "1px solid rgba(42,96,87,0.4)",
                  backdropFilter: "blur(12px)",
                }}
              >
                {/* Quote icon + top accent */}
                <div className="flex items-start justify-between mb-6">
                  <QuoteIcon />
                  <span
                    className="text-xs font-black tracking-widest tabular-nums"
                    style={{ color: "rgba(42,96,87,0.55)", fontFamily: "var(--font-heading)" }}
                  >
                    {String(index + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
                  </span>
                </div>

                {/* Quote text */}
                <blockquote
                  className="flex-1 text-base md:text-lg leading-relaxed mb-8"
                  style={{
                    color: "var(--white)",
                    fontFamily: "var(--font-body)",
                    fontStyle: "italic",
                    opacity: 0.9,
                  }}
                >
                  "{t.quote}"
                </blockquote>

                {/* Author + bottom line */}
                <div className="flex items-center gap-3">
                  {/* Avatar initials */}
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black flex-shrink-0"
                    style={{
                      background: "rgba(201,243,29,0.12)",
                      border: "1px solid rgba(201,243,29,0.2)",
                      color: "var(--secondary)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div>
                    <p
                      className="text-sm font-bold leading-none"
                      style={{ color: "var(--white)", fontFamily: "var(--font-heading)" }}
                    >
                      {t.name}
                    </p>
                    {t.role && (
                      <p
                        className="text-xs mt-1"
                        style={{ color: "#4A7A73", fontFamily: "var(--font-body)" }}
                      >
                        {t.role}
                      </p>
                    )}
                  </div>

                  {/* Right accent line */}
                  <div
                    className="ml-auto h-px w-12"
                    style={{ background: "linear-gradient(90deg, transparent, rgba(201,243,29,0.3))" }}
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next arrow */}
          <div className="hidden lg:flex justify-start">
            <motion.button
              onClick={next}
              whileHover={{ scale: 1.08, borderColor: "rgba(201,243,29,0.45)" }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-2xl flex items-center justify-center"
              style={{
                background: "rgba(28,63,57,0.35)",
                border: "1px solid rgba(42,96,87,0.4)",
                color: "#4A7A73",
              }}
            >
              <HiChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* ── Mobile controls + dots ────────────────────────────── */}
        <div className="flex items-center justify-center gap-5 mt-10">

          {/* Mobile prev */}
          <motion.button
            onClick={prev}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center"
            style={{
              background: "rgba(28,63,57,0.35)",
              border: "1px solid rgba(42,96,87,0.4)",
              color: "#4A7A73",
            }}
          >
            <HiChevronLeft size={16} />
          </motion.button>

          {/* Dot indicators */}
          <div className="flex items-center gap-2.5">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === index ? "24px" : "6px",
                  height: "6px",
                  background: i === index ? "#C9F31D" : "rgba(42,96,87,0.5)",
                }}
              />
            ))}
          </div>

          {/* Mobile next */}
          <motion.button
            onClick={next}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center"
            style={{
              background: "rgba(28,63,57,0.35)",
              border: "1px solid rgba(42,96,87,0.4)",
              color: "#4A7A73",
            }}
          >
            <HiChevronRight size={16} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}