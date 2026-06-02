import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import heroImage from "../assets/ezinne.png";

// ── Auto-typing hook ──────────────────────────────────────────────────────────
function useTypewriter(
  words,
  { typingSpeed = 80, deletingSpeed = 45, pause = 1800 } = {},
) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState("typing"); // typing | pausing | deleting

  useEffect(() => {
    const word = words[wordIdx % words.length];
    let timeout;

    if (phase === "typing") {
      if (display.length < word.length) {
        timeout = setTimeout(
          () => setDisplay(word.slice(0, display.length + 1)),
          typingSpeed,
        );
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pause);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 200);
    } else {
      if (display.length > 0) {
        timeout = setTimeout(
          () => setDisplay(display.slice(0, -1)),
          deletingSpeed,
        );
      } else {
        setWordIdx((i) => i + 1);
        setPhase("typing");
      }
    }
    return () => clearTimeout(timeout);
  }, [display, phase, wordIdx, words, typingSpeed, deletingSpeed, pause]);

  return display;
}

// ── Magnetic cursor blob ──────────────────────────────────────────────────────
function CursorBlob() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 60, damping: 18 });
  const sy = useSpring(y, { stiffness: 60, damping: 18 });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 160);
      y.set(e.clientY - 160);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{ left: sx, top: sy }}
      className="pointer-events-none fixed z-0 w-80 h-80 rounded-full opacity-[0.07]"
      css={{
        background: "radial-gradient(circle, #C9F31D 0%, transparent 70%)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          background: "radial-gradient(circle, #C9F31D 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
}

// ── Floating decorative shapes ────────────────────────────────────────────────
function FloatingShape({ className, delay = 0, duration = 6, style }) {
  return (
    <motion.div
      className={className}
      style={style}
      animate={{ y: [0, -14, 0], rotate: [0, 8, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}

// ── Stats counter ─────────────────────────────────────────────────────────────
function StatItem({ value, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col"
    >
      <span
        className="text-3xl font-black leading-none"
        style={{ fontFamily: "'Raleway', sans-serif", color: "#C9F31D" }}
      >
        {value}
      </span>
      <span
        className="text-xs mt-1 tracking-widest uppercase"
        style={{ color: "#7FB3AE" }}
      >
        {label}
      </span>
    </motion.div>
  );
}

// ── Social link ───────────────────────────────────────────────────────────────
function SocialLink({ icon, delay }) {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, x: -16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ x: 6, color: "#C9F31D" }}
      className="flex items-center justify-center w-8 h-8 transition-colors"
      style={{ color: "#4A7A73" }}
    >
      {icon}
    </motion.a>
  );
}

// ── Main Hero ─────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const roles = ["Technical Project Manager"];
  const typed = useTypewriter(roles, {
    typingSpeed: 70,
    deletingSpeed: 40,
    pause: 2000,
  });

  // Stagger config
  const enter = (delay) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { delay, duration: 0.72, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Raleway:wght@500;600;700;800;900&display=swap"
        rel="stylesheet"
      />

      <section
        className="relative h-[120vh] flex overflow-hidden"
        style={{ background: "#0D2622", fontFamily: "'Lato', sans-serif" }}
      >
        {/* Cursor glow */}
        <CursorBlob />

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(201,243,29,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,243,29,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* ── LEFT PANEL ─────────────────────────────────────────── */}
        <div className="relative z-10 flex flex-col justify-between w-full lg:w-[55%] px-8 md:px-16 py-12">
          {/* Social sidebar */}
          <motion.div
            className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div
              className="w-px h-16"
              style={{ background: "linear-gradient(transparent, #2A6057)" }}
            />
            <SocialLink
              delay={1.3}
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              }
            />
            <SocialLink
              delay={1.4}
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              }
            />
            <SocialLink
              delay={1.5}
              icon={
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              }
            />
            <div
              className="w-px h-16"
              style={{ background: "linear-gradient(#2A6057, transparent)" }}
            />
          </motion.div>

          {/* Main content */}
          <div className="flex flex-col justify-center flex-1 mt-8 lg:mt-0 lg:pl-10">
            {/* Availability badge */}
            <motion.div {...enter(0.3)} className="mb-8 inline-flex">
              <div
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-widest uppercase"
                style={{
                  border: "1px solid #2A6057",
                  color: "#7FB3AE",
                  background: "rgba(42,96,87,0.15)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "#C9F31D" }}
                />
                Available for new projects
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.p
              {...enter(0.45)}
              className="text-base mb-2 font-light tracking-widest uppercase"
              style={{ color: "#7FB3AE", fontFamily: "'Lato', sans-serif" }}
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              {...enter(0.55)}
              className="font-black leading-none mb-3"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
                color: "#F4F8F4",
                letterSpacing: "-0.02em",
              }}
            >
              Patience<span className="text-[#C9F31D]">.</span>
            </motion.h1>

            {/* Auto-typing role */}
            <motion.div
              {...enter(0.65)}
              className="flex items-center gap-3 mb-8"
            >
              <div className="w-8 h-px" style={{ background: "#C9F31D" }} />
              <div
                className="text-xl font-semibold h-8 flex items-center"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  color: "#F4F8F4",
                  minWidth: "260px",
                }}
              >
                {typed}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="ml-0.5 inline-block w-0.5 h-6 rounded-full"
                  style={{ background: "#C9F31D" }}
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              {...enter(0.75)}
              className="text-base leading-relaxed mb-10 max-w-md"
              style={{ color: "#4A7A73" }}
            >
              Transforming complex visions into delivered outcomes. I bridge
              strategy and execution — leading cross-functional teams with
              clarity, purpose, and relentless focus on results.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...enter(0.85)}
              className="flex items-center gap-4 flex-wrap mb-14"
            >
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-4 rounded-xl font-bold text-sm tracking-wide inline-flex items-center gap-2"
                style={{
                  background: "#C9F31D",
                  color: "#1C3F39",
                  fontFamily: "'Raleway', sans-serif",
                  boxShadow: "0 0 32px rgba(201,243,29,0.25)",
                }}
              >
                Hire Me
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>

              <motion.a
                href="#cv"
                whileHover={{ scale: 1.04, y: -2, color: "#C9F31D" }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-4 rounded-xl font-bold text-sm tracking-wide inline-flex items-center gap-2 transition-colors"
                style={{
                  border: "1.5px solid #2A6057",
                  color: "#F4F8F4",
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Download CV
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="flex items-center gap-10"
            >
              <StatItem value="8+" label="Years exp." delay={1.05} />
              <div className="w-px h-10" style={{ background: "#2A6057" }} />
              <StatItem value="60+" label="Projects led" delay={1.1} />
              <div className="w-px h-10" style={{ background: "#2A6057" }} />
              <StatItem value="12" label="Industries" delay={1.15} />
            </motion.div>
          </div>

          {/* Bottom scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="hidden lg:flex items-center gap-3 text-xs tracking-widest uppercase"
            style={{ color: "#2A6057" }}
          >
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </motion.div>
            Scroll to explore
          </motion.div>
        </div>

        {/* ── RIGHT PANEL ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="hidden lg:flex relative w-[45%] items-end overflow-hidden"
          style={{ background: "#122B27" }}
        >
          {/* Decorative vertical stripe */}
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(transparent, #2A6057 30%, #2A6057 70%, transparent)",
            }}
          />

          {/* Geometric decorative shapes */}
          <FloatingShape
            className="absolute top-12 right-12 w-14 h-14 rounded-2xl"
            style={{ background: "#C9F31D", opacity: 0.9, rotate: "12deg" }}
            delay={0.3}
            duration={5}
          />
          <FloatingShape
            className="absolute top-1/3 left-12 w-6 h-6 rounded-full"
            style={{ background: "#7FB3AE", opacity: 0.6 }}
            delay={1}
            duration={7}
          />
          <FloatingShape
            className="absolute bottom-24 right-16 w-10 h-10 rounded-full"
            style={{ background: "#C9F31D", opacity: 0.8 }}
            delay={0.6}
            duration={6}
          />

          {/* Dashed decorative ring */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full"
            style={{
              border: "1px dashed rgba(201,243,29,0.15)",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full"
            style={{ border: "1px dashed rgba(42,96,87,0.3)" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          />

          <img
            src={heroImage}
            alt="Hero"
            className="w-[90%] max-h-[90%] object-cover"
          />

          {/* "scroll" vertical text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="absolute right-5 top-1/2 -translate-y-1/2"
            style={{
              writingMode: "vertical-rl",
              fontSize: "10px",
              letterSpacing: "0.25em",
              color: "#2A6057",
              textTransform: "uppercase",
            }}
          >
            Patience Ezinne · PM
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
