import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import heroImage from "../assets/ezinne.png";
import { LINKEDIN_URL, UPWORK_URL, EMAIL } from "../links";

// Titles that scroll in and out, one after another
const ROLES = [
  "Customer Success Manager",
  "Onboarding Specialist",
  "Retention & Account Recovery",
];

// ── Auto-typing hook ──────────────────────────────────────────────────────────
function useTypewriter(
  words,
  { typingSpeed = 80, deletingSpeed = 45, pause = 1800 } = {},
) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [phase, setPhase] = useState("typing");

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

// ── Count-up from 1 to 100 (runs once) ────────────────────────────────────────
function CountUp({ target = 100, duration = 2000, delay = 1000 }) {
  const [value, setValue] = useState(1);

  useEffect(() => {
    let interval;
    const start = setTimeout(() => {
      const stepTime = duration / target;
      let current = 1;
      interval = setInterval(() => {
        current += 1;
        setValue(current);
        if (current >= target) clearInterval(interval);
      }, stepTime);
    }, delay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [target, duration, delay]);

  return <>{value}%</>;
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

// ── Stats ─────────────────────────────────────────────────────────────────────
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
function SocialLink({ href, icon, label, delay }) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={label}
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
  const typed = useTypewriter(ROLES, {
    typingSpeed: 70,
    deletingSpeed: 40,
    pause: 2000,
  });

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
        <CursorBlob />

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
          {/* Social sidebar: LinkedIn, Upwork, Email */}
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
              href={LINKEDIN_URL}
              label="LinkedIn"
              delay={1.3}
              icon={<FaLinkedinIn size={16} />}
            />
            <SocialLink
              href={UPWORK_URL}
              label="Upwork"
              delay={1.4}
              icon={<SiUpwork size={16} />}
            />
            <SocialLink
              href={`mailto:${EMAIL}`}
              label="Email"
              delay={1.5}
              icon={<FaEnvelope size={16} />}
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
                Available for remote roles · UTC+1
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
                fontSize: "clamp(2.8rem, 6vw, 6rem)",
                color: "#F4F8F4",
                letterSpacing: "-0.02em",
              }}
            >
              Patience<span style={{ color: "#C9F31D" }}>.</span>
            </motion.h1>

            {/* Auto-typing role */}
            <motion.div {...enter(0.65)} className="flex items-center gap-3 mb-8">
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

            {/* Tagline */}
            <motion.p
              {...enter(0.75)}
              className="text-base leading-relaxed mb-10 max-w-md"
              style={{ color: "#4A7A73" }}
            >
              Helping B2B businesses create better customer experiences, deliver
              lasting value, and build relationships that drive retention and
              growth.
            </motion.p>

            {/* Buttons side by side */}
            <motion.div
              {...enter(0.85)}
              className="flex items-center gap-4 flex-wrap mb-14"
            >
              <motion.a
                href={`mailto:${EMAIL}`}
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
                Send Me a Message
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
                href={UPWORK_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-4 rounded-xl font-bold text-sm tracking-wide inline-flex items-center gap-2"
                style={{
                  border: "1px solid #C9F31D",
                  color: "#C9F31D",
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Hire Me
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0 }}
              className="flex items-center gap-10 flex-wrap"
            >
              <StatItem value="2+" label="Years exp." delay={1.05} />
              <div className="w-px h-10" style={{ background: "#2A6057" }} />
              <StatItem value="3+" label="Case studies" delay={1.1} />
              <div className="w-px h-10" style={{ background: "#2A6057" }} />
              <StatItem
                value={<CountUp target={100} duration={2000} delay={1200} />}
                label="Retention focus"
                delay={1.15}
              />
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
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
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
          <div
            className="absolute left-0 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(transparent, #2A6057 30%, #2A6057 70%, transparent)",
            }}
          />

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

          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full"
            style={{ border: "1px dashed rgba(201,243,29,0.15)" }}
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
            alt="Patience Oha"
            className="w-[90%] max-h-[90%] object-cover"
          />

          {/* Vertical text */}
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
            Patience Oha · CSM
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}