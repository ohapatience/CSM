import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineLightningBolt,
  HiOutlineGlobe,
  HiOutlineBadgeCheck,
  HiOutlineUsers,
  HiOutlineChartBar,
  HiOutlineCog,
  HiOutlineDocumentText,
  HiOutlineChat,
  HiOutlineClock,
} from "react-icons/hi";
import { HiArrowRight, HiArrowDown } from "react-icons/hi2";
import PageHeroSection from "../components/PageHeroSection";
import heroImage from "../assets/ezinne.png";

import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

// ── Animation helpers ──────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { delay, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -48 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 48 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
});

// ── Section Label ──────────────────────────────────────────────────────────────
function SectionLabel({ children }) {
  return (
    <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-14">
      <div className="w-8 h-px" style={{ background: "#C9F31D" }} />
      <span
        className="text-xs font-bold tracking-[0.25em] uppercase"
        style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
      >
        {children}
      </span>
      <div
        className="flex-1 h-px"
        style={{ background: "rgba(42,96,87,0.4)" }}
      />
    </motion.div>
  );
}

// ── Background texture shared ──────────────────────────────────────────────────
function BgTexture({ radialPos = "20% 50%" }) {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at ${radialPos}, rgba(201,243,29,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(28,63,57,0.6) 0%, transparent 50%)`,
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(42,96,87,0.5) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
    </>
  );
}

// ── Scroll-reveal paragraph ────────────────────────────────────────────────────
// Each paragraph fades up from slightly below as it enters the viewport,
// with a bottom-to-top gradient mask that "uncovers" the text on scroll.
function RevealParagraph({ children, delay = 0, highlight = null }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      {highlight && (
        <span
          className="block text-xs font-bold tracking-[0.22em] uppercase mb-2"
          style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
        >
          {highlight}
        </span>
      )}
      <p className="text-base leading-[1.85] " style={{ color: "#7FB3AE" }}>
        {children}
      </p>
    </motion.div>
  );
}

// ── Stat card ─────────────────────────────────────────────────────────────────
function StatCard({ value, label, icon: Icon, delay }) {
  return (
    <motion.div
      {...fadeUp(delay)}
      whileHover={{
        y: -6,
        boxShadow:
          "0 16px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(201,243,29,0.15)",
      }}
      className="flex flex-col gap-2 p-4 rounded-2xl transition-all"
      style={{
        background: "rgba(28,63,57,0.4)",
        border: "1px solid rgba(42,96,87,0.4)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div
        className="w-8 h-8 rounded-xl flex items-center justify-center"
        style={{ background: "rgba(201,243,29,0.12)", color: "#C9F31D" }}
      >
        <Icon size={16} />
      </div>
      <p
        className="text-2xl font-black leading-none"
        style={{ fontFamily: "var(--font-heading)", color: "#C9F31D" }}
      >
        {value}
      </p>
      <p className="text-xs leading-tight" style={{ color: "#4A7A73" }}>
        {label}
      </p>
    </motion.div>
  );
}

const STATS = [
  { value: "8+", label: "Years of experience", icon: HiOutlineBriefcase },
  { value: "60+", label: "Projects delivered", icon: HiOutlineLightningBolt },
];

// ── Main component ────────────────────────────────────────────────────────────
function AboutSection() {
  const sectionRef = useRef(null);
  useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden section"
      style={{ background: "#0D2622" }}
    >
      {/* ── Background texture ──────────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(201,243,29,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(28,63,57,0.6) 0%, transparent 50%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(42,96,87,0.4) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="wrapper relative z-10">
        {/* ── Section label ──────────────────────────────────────── */}
        <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-16">
          <div className="w-8 h-px" style={{ background: "#C9F31D" }} />
          <span
            className="text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
          >
            About Me
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "rgba(42,96,87,0.4)" }}
          />
        </motion.div>

        {/* ── Two-column layout ──────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* ── LEFT — Creative Photo Card ─────────────────────────── */}
          <motion.div
            {...fadeLeft(0.1)}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-sm">
              {/* Animated lime offset border */}
              <motion.div
                className="absolute rounded-3xl"
                style={{
                  inset: 0,
                  border: "1.5px solid rgba(201,243,29,0.25)",
                  borderRadius: "24px",
                  transform: "translate(14px, 14px)",
                  zIndex: 0,
                }}
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Second decorative offset */}
              <div
                className="absolute rounded-3xl"
                style={{
                  inset: 0,
                  border: "1px solid rgba(42,96,87,0.3)",
                  borderRadius: "24px",
                  transform: "translate(28px, 28px)",
                  zIndex: 0,
                }}
              />

              {/* Main photo card */}
              <div
                className="relative z-10 rounded-3xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(145deg, #1C3F39 0%, #122B27 100%)",
                  border: "1px solid rgba(42,96,87,0.6)",
                  boxShadow:
                    "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                {/* Photo area */}
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Hero"
                    className="w-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(201,243,29,0.06) 0%, transparent 70%)",
                    }}
                  />

                  <img
                    src={heroImage}
                    alt="Hero"
                    className="w-[90%] max-h-[90%] object-cover"
                  />

                  {/* Bottom gradient + name strip */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-40"
                    style={{
                      background:
                        "linear-gradient(transparent, rgba(18,43,39,0.95))",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 z-10">
                    <p
                      className="text-lg font-black leading-none"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--white)",
                      }}
                    >
                      Patience Oha
                    </p>
                    <p className="text-xs mt-1" style={{ color: "#7FB3AE" }}>
                      Technical Project Manager
                    </p>
                  </div>
                </div>

                {/* Card footer */}
                <div
                  className="px-6 py-4 flex items-center justify-between"
                  style={{ borderTop: "1px solid rgba(42,96,87,0.3)" }}
                >
                  {["PMP", "CSM", "PRINCE2"].map((cert) => (
                    <span
                      key={cert}
                      className="text-xs font-black tracking-widest"
                      style={{
                        color: "var(--secondary)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {cert}
                    </span>
                  ))}
                  <div className="flex gap-2">
                    {[FaLinkedinIn, FaXTwitter].map((Icon, i) => (
                      <motion.a
                        key={i}
                        href="#"
                        whileHover={{ y: -2, color: "#C9F31D" }}
                        className="w-7 h-7 rounded-lg flex items-center justify-center transition-colors"
                        style={{
                          background: "rgba(42,96,87,0.3)",
                          color: "#4A7A73",
                        }}
                      >
                        <Icon size={12} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating checkmark badge — top right */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl z-20 flex items-center justify-center"
                style={{
                  background: "var(--secondary)",
                  boxShadow: "0 8px 24px rgba(201,243,29,0.3)",
                }}
                animate={{ rotate: [0, 10, 0, -10, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <HiOutlineBadgeCheck size={22} color="var(--primary)" />
              </motion.div>

              {/* Floating "Open to work" pill — bottom left */}
              <motion.div
                className="absolute -bottom-5 -left-5 z-20 px-4 py-3 rounded-2xl"
                style={{
                  background: "rgba(13,38,34,0.95)",
                  border: "1px solid rgba(42,96,87,0.6)",
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ background: "var(--secondary)" }}
                  />
                  <span
                    className="text-xs font-bold"
                    style={{
                      color: "var(--white)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Open to work
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT — Content ────────────────────────────────────── */}
          <div className="flex flex-col gap-8">
            {/* Heading */}
            <motion.div {...fadeRight(0.15)}>
              <h2
                className="font-black leading-tight mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 4vw, 3.2rem)",
                  color: "var(--white)",
                  letterSpacing: "-0.02em",
                }}
              >
                Turning strategy into{" "}
                <span
                  className="relative inline-block"
                  style={{ color: "var(--secondary)" }}
                >
                  results
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px w-full"
                    style={{ background: "rgba(201,243,29,0.4)" }}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  />
                </span>
                , every time.
              </h2>
              <p className="text-base leading-relaxed text-text-light">
                I'm Patience Oha, a Technical Project Manager focused on helping
                founders, startups and growing businesses turn ideas into
                successful SaaS, web, and mobile products through structured
                execution and customer-focused project management.
              </p>
              <p className="text-base mt-2 leading-relaxed text-text-light">
                I specialize in coordinating projects from idea to execution,
                ensuring teams stay aligned, workflows remain organized, and
                products are built with both business goals and user experience
                in mind.
              </p>
            </motion.div>

            {/* Stats grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className="grid grid-cols-2 gap-3"
            >
              {STATS.map((s, i) => (
                <StatCard key={s.label} {...s} delay={0.28 + i * 0.07} />
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              {...fadeRight(0.55)}
              className="flex items-center gap-4 flex-wrap pt-2"
            >
              <motion.a
                href="/about"
                whileHover={{
                  scale: 1.04,
                  boxShadow: "0 0 28px rgba(201,243,29,0.3)",
                }}
                whileTap={{ scale: 0.97 }}
                className="btn btn-primary inline-flex items-center gap-2"
              >
                Explore My Services
                <HiArrowRight size={16} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 1: My Journey ──────────────────────────────────────────────────────
const JOURNEY_PARAGRAPHS = [
  {
    highlight: "The Foundation",
    text: "My professional journey started with experience in customer support and administrative assistance, where I developed strong communication, organization, problem-solving, and stakeholder management skills. Working closely with customers and teams helped me understand the importance of operational efficiency, user satisfaction, and clear communication in fast-paced environments.",
  },
  {
    highlight: "The Pivot",
    text: "As I transitioned into project management, I became increasingly interested in how digital products are planned, developed, and managed from concept to delivery. This led me to build my knowledge in Agile project management, Scrum practices, workflow coordination, and product execution for SaaS, web, and mobile products.",
  },
  {
    highlight: "Growing Experience",
    text: "Over time, I developed experience in coordinating tasks, managing workflows, supporting cross-functional collaboration, and ensuring projects move efficiently through each stage of development. My background in customer support also allows me to approach projects with a strong customer-centered mindset, helping teams build solutions that not only meet business goals but also improve user experience.",
  },
  {
    highlight: "Today",
    text: "Today, I combine project coordination, customer-focused thinking, and structured execution to support teams in delivering organized, efficient, and user-focused digital products.",
  },
];

const JOURNEY_MARKERS = [
  { value: "8+", label: "Years of experience" },
  { value: "60+", label: "Projects delivered" },
  { value: "PMP · CSM", label: "Certifications" },
];

function JourneySection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  // Vertical fill line driven by scroll
  const lineHeight = useTransform(scrollYProgress, [0, 0.7], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden section"
      style={{ background: "#0A1F1C" }}
    >
      <BgTexture radialPos="85% 20%" />

      {/* Large faded watermark word */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ opacity: 0.03 }}
      >
        <span
          className="font-black"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(8rem, 18vw, 16rem)",
            color: "#C9F31D",
            lineHeight: 1,
          }}
        >
          Story
        </span>
      </div>

      <div className="wrapper relative z-10">
        <SectionLabel>My Journey</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-14 xl:gap-24">
          {/* LEFT — Sticky markers column */}
          <motion.div
            {...fadeLeft(0.05)}
            className="lg:sticky lg:top-28 flex flex-col gap-10 self-start"
          >
            <div>
              <motion.h2
                {...fadeLeft(0.08)}
                className="font-black leading-tight mb-5"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  color: "var(--white)",
                  letterSpacing: "-0.02em",
                }}
              >
                A path built on <span style={{ color: "#C9F31D" }}>people</span>{" "}
                & process.
              </motion.h2>
              <motion.p
                {...fadeLeft(0.12)}
                className="text-sm leading-relaxed"
                style={{ color: "#4A7A73" }}
              >
                Scroll to read the full story.
              </motion.p>
            </div>

            {/* Scroll-driven vertical progress line + markers */}
            <div className="relative flex flex-col gap-6 pl-6">
              {/* Track */}
              <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: "rgba(42,96,87,0.3)" }}
              />
              {/* Animated fill */}
              <motion.div
                className="absolute left-0 top-0 w-px origin-top"
                style={{
                  height: lineHeight,
                  background:
                    "linear-gradient(to bottom, #C9F31D, rgba(201,243,29,0.3))",
                }}
              />

              {JOURNEY_MARKERS.map(({ value, label }, i) => (
                <motion.div
                  key={label}
                  {...fadeUp(0.18 + i * 0.08)}
                  className="flex flex-col gap-0.5"
                >
                  <span
                    className="font-black"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                      color: "#C9F31D",
                    }}
                  >
                    {value}
                  </span>
                  <span className="text-xs" style={{ color: "#4A7A73" }}>
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Floating "Open to work" chip */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl self-start"
              style={{
                background: "rgba(13,38,34,0.9)",
                border: "1px solid rgba(42,96,87,0.5)",
                backdropFilter: "blur(10px)",
              }}
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#C9F31D" }}
              />
              <span
                className="text-xs font-bold"
                style={{
                  color: "var(--white)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Open to work
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Scroll-reveal paragraphs */}
          <div className="flex flex-col gap-10">
            {/* Top decorative rule */}
            <motion.div
              {...fadeRight(0.1)}
              className="h-px w-full"
              style={{
                background:
                  "linear-gradient(to right, rgba(201,243,29,0.4), transparent)",
              }}
            />

            {JOURNEY_PARAGRAPHS.map((p, i) => (
              <div key={p.highlight} className="relative">
                {/* Faded bottom reveal mask — only visible before the element is in view */}
                <RevealParagraph delay={0} highlight={p.highlight}>
                  {p.text}
                </RevealParagraph>

                {/* Separator line between paragraphs */}
                {i < JOURNEY_PARAGRAPHS.length - 1 && (
                  <motion.div
                    {...fadeUp(0.05)}
                    className="mt-10 h-px w-full"
                    style={{ background: "rgba(42,96,87,0.25)" }}
                  />
                )}
              </div>
            ))}

            {/* Bottom highlight quote */}
            <motion.blockquote
              {...fadeUp(0.1)}
              className="relative mt-4 pl-6 py-1"
              style={{ borderLeft: "2px solid #C9F31D" }}
            >
              <p
                className="text-base font-bold leading-relaxed italic"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                "I combine project coordination, customer-focused thinking, and
                structured execution to help teams ship products that truly
                work."
              </p>
              <span
                className="block mt-2 text-xs font-bold tracking-widest uppercase"
                style={{ color: "#C9F31D" }}
              >
                — Patience Oha
              </span>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 2: Problems I Solve ────────────────────────────────────────────────
const PROBLEMS = [
  {
    icon: HiOutlineCog,
    title: "Poor project coordination",
    description:
      "Unclear workflows and misaligned processes that slow your team down and create confusion.",
  },
  {
    icon: HiOutlineChat,
    title: "Miscommunication delays",
    description:
      "Breakdowns between teams that cause missed deadlines and costly rework.",
  },
  {
    icon: HiOutlineDocumentText,
    title: "Unstructured execution",
    description:
      "Lack of structure in product development that leads to scope creep and inconsistent output.",
  },
  {
    icon: HiOutlineLightningBolt,
    title: "Ideas stuck in limbo",
    description:
      "Difficulty translating product ideas into clear, actionable tasks and sprint-ready stories.",
  },
  {
    icon: HiOutlineUsers,
    title: "Inefficient collaboration",
    description:
      "Task tracking gaps and siloed teams that reduce throughput and cause duplicated effort.",
  },
  {
    icon: HiOutlineGlobe,
    title: "Customer experience gaps",
    description:
      "Products shipped without enough focus on user experience and customer-centered delivery.",
  },
];

function ProblemsSection() {
  return (
    <section
      className="relative overflow-hidden section"
      style={{ background: "#0A1F1C" }}
    >
      <BgTexture radialPos="80% 30%" />
      <div className="wrapper relative z-10">
        <SectionLabel>Problems I Solve</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16">
          <motion.h2
            {...fadeLeft(0.05)}
            className="font-black leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--white)",
              letterSpacing: "-0.02em",
            }}
          >
            Common challenges I{" "}
            <span style={{ color: "#C9F31D" }}>eliminate</span> for teams.
          </motion.h2>
          <motion.p
            {...fadeRight(0.1)}
            className="text-base leading-relaxed"
            style={{ color: "#7FB3AE" }}
          >
            My goal is to help teams stay organized, improve execution, and
            deliver products more efficiently — removing friction at every stage
            of the journey.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp(0.08 + i * 0.06)}
              whileHover={{
                y: -6,
                boxShadow:
                  "0 24px 48px rgba(0,0,0,0.4), 0 0 0 1px rgba(201,243,29,0.15)",
              }}
              className="group relative rounded-2xl p-6 cursor-default transition-all"
              style={{
                background: "rgba(28,63,57,0.25)",
                border: "1px solid rgba(42,96,87,0.35)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 30% 20%, rgba(201,243,29,0.05) 0%, transparent 70%)",
                }}
              />

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: "rgba(201,243,29,0.1)",
                  border: "1px solid rgba(201,243,29,0.15)",
                  color: "#C9F31D",
                }}
              >
                <p.icon size={20} />
              </div>

              <h4
                className="font-black mb-2"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--white)",
                  fontSize: "1rem",
                }}
              >
                {p.title}
              </h4>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "#4A7A73" }}
              >
                {p.description}
              </p>

              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-6 right-6 h-px"
                style={{ background: "rgba(201,243,29,0)" }}
                whileHover={{ background: "rgba(201,243,29,0.3)" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SECTION 3: My Approach ─────────────────────────────────────────────────────
const APPROACH_PILLARS = [
  {
    number: "01",
    title: "Agile & Scrum",
    description:
      "I use Agile and Scrum principles to help teams break projects into manageable tasks, prioritize effectively, track progress consistently, and adapt quickly to changing project needs. Every sprint is a commitment — to clarity, velocity, and continuous improvement.",
    tags: [
      "Sprint Planning",
      "Backlog Grooming",
      "Retrospectives",
      "Daily Standups",
    ],
  },
  {
    number: "02",
    title: "Structured SDLC",
    description:
      "I understand the importance of the Software Development Life Cycle in guiding projects from planning and requirements gathering to development, testing, deployment, and maintenance. Structure doesn't slow teams down — it speeds them up by removing ambiguity at every stage.",
    tags: [
      "Requirements Gathering",
      "Testing Gates",
      "Deployment Planning",
      "Maintenance",
    ],
  },
  {
    number: "03",
    title: "Customer-Centered Delivery",
    description:
      "By combining structured workflows, customer-centered thinking, and collaborative practices, I help teams maintain clarity, improve productivity, and deliver products that align with both business objectives and the real needs of the people who use them.",
    tags: [
      "User Stories",
      "UX Alignment",
      "Stakeholder Mgmt",
      "Customer Feedback",
    ],
  },
];

function ApproachPillarCard({ pillar, i }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div
        className="relative rounded-2xl p-8 group overflow-hidden"
        style={{
          background: "rgba(28,63,57,0.28)",
          border: "1px solid rgba(42,96,87,0.35)",
        }}
      >
        {/* Hover glow */}
        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 20% 20%, rgba(201,243,29,0.06) 0%, transparent 65%)",
          }}
        />
        {/* Big number watermark */}
        <span
          className="absolute right-6 top-4 font-black leading-none pointer-events-none select-none"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "5rem",
            color: "rgba(42,96,87,0.25)",
          }}
        >
          {pillar.number}
        </span>

        <div className="relative z-10 flex flex-col gap-5">
          <h3
            className="font-black"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--white)",
              fontSize: "clamp(1.15rem, 2vw, 1.5rem)",
            }}
          >
            {pillar.title}
          </h3>
          <p className="text-base leading-[1.85]" style={{ color: "#7FB3AE" }}>
            {pillar.description}
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            {pillar.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-bold px-3 py-1.5 rounded-full"
                style={{
                  background: "rgba(201,243,29,0.08)",
                  border: "1px solid rgba(201,243,29,0.15)",
                  color: "#C9F31D",
                  fontFamily: "var(--font-heading)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {i < APPROACH_PILLARS.length - 1 && (
        <div
          className="mt-10 h-px w-full"
          style={{ background: "rgba(42,96,87,0.25)" }}
        />
      )}
    </motion.div>
  );
}

function ApproachSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.75], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden section"
      style={{ background: "#0D2622" }}
    >
      <BgTexture radialPos="15% 70%" />

      {/* Faded watermark */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ opacity: 0.03 }}
      >
        <span
          className="font-black"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(8rem, 18vw, 16rem)",
            color: "#C9F31D",
            lineHeight: 1,
          }}
        >
          How
        </span>
      </div>

      <div className="wrapper relative z-10">
        <SectionLabel>My Approach</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-14 xl:gap-24">
          {/* LEFT — Sticky anchor */}
          <motion.div
            {...fadeLeft(0.05)}
            className="lg:sticky lg:top-28 flex flex-col gap-10 self-start"
          >
            <div>
              <motion.h2
                {...fadeLeft(0.08)}
                className="font-black leading-tight mb-5"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  color: "var(--white)",
                  letterSpacing: "-0.02em",
                }}
              >
                How I turn <span style={{ color: "#C9F31D" }}>complexity</span>{" "}
                into clarity.
              </motion.h2>
              <motion.p
                {...fadeLeft(0.12)}
                className="text-sm leading-relaxed"
                style={{ color: "#4A7A73" }}
              >
                Three pillars that underpin every project I touch.
              </motion.p>
            </div>

            {/* Scroll-driven line + pillar index */}
            <div className="relative flex flex-col gap-6 pl-6">
              <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: "rgba(42,96,87,0.3)" }}
              />
              <motion.div
                className="absolute left-0 top-0 w-px origin-top"
                style={{
                  height: lineHeight,
                  background:
                    "linear-gradient(to bottom, #C9F31D, rgba(201,243,29,0.3))",
                }}
              />
              {APPROACH_PILLARS.map((p, i) => (
                <motion.div
                  key={p.number}
                  {...fadeUp(0.18 + i * 0.08)}
                  className="flex items-center gap-3"
                >
                  <span
                    className="font-black text-lg"
                    style={{
                      color: "#C9F31D",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {p.number}
                  </span>
                  <span
                    className="text-xs font-bold"
                    style={{
                      color: "#4A7A73",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    {p.title}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Methodology badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl self-start"
              style={{
                background: "rgba(201,243,29,0.08)",
                border: "1px solid rgba(201,243,29,0.2)",
              }}
              animate={{ y: [0, -4, 0] }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <HiOutlineBadgeCheck size={14} style={{ color: "#C9F31D" }} />
              <span
                className="text-xs font-bold"
                style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
              >
                Agile · Scrum · SDLC
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT — Pillar cards */}
          <div className="flex flex-col gap-10">
            <motion.div
              {...fadeRight(0.1)}
              className="h-px w-full"
              style={{
                background:
                  "linear-gradient(to right, rgba(201,243,29,0.4), transparent)",
              }}
            />
            {APPROACH_PILLARS.map((pillar, i) => (
              <ApproachPillarCard key={pillar.number} pillar={pillar} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ── SECTION 4: Skills ──────────────────────────────────────────────────────────
const SKILL_BLOCKS = [
  {
    category: "Project Management & Methodologies",
    icon: HiOutlineChartBar,
    skills: [
      "Agile Project Management",
      "Scrum Framework",
      "Software Development Life Cycle (SDLC)",
      "Sprint Planning & Execution",
      "Task & Workflow Management",
    ],
  },
  {
    category: "Product & Technical Coordination",
    icon: HiOutlineCog,
    skills: [
      "Product Requirements Documentation (PRDs)",
      "User Stories & Backlog Management",
      "Cross-functional Team Coordination",
      "Project Tracking & Reporting",
      "Process Improvement",
    ],
  },
  {
    category: "Communication & Operations",
    icon: HiOutlineChat,
    skills: [
      "Stakeholder Communication",
      "Customer Support & Client Management",
      "Administrative Support",
      "Problem Solving & Issue Resolution",
      "Time Management & Organization",
    ],
  },
];

function SkillsSection() {
  return (
    <section
      className="relative overflow-hidden section"
      style={{ background: "#0A1F1C" }}
    >
      <BgTexture radialPos="70% 60%" />
      <div className="wrapper relative z-10">
        <SectionLabel>Skills</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16">
          <motion.h2
            {...fadeLeft(0.05)}
            className="font-black leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--white)",
              letterSpacing: "-0.02em",
            }}
          >
            The expertise behind{" "}
            <span style={{ color: "#C9F31D" }}>every delivery.</span>
          </motion.h2>
          <motion.p
            {...fadeRight(0.1)}
            className="text-base leading-relaxed"
            style={{ color: "#7FB3AE" }}
          >
            A carefully developed skill set spanning methodology, execution,
            communication, and product thinking — built from real-world project
            delivery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_BLOCKS.map((block, i) => (
            <motion.div
              key={block.category}
              {...fadeUp(0.08 + i * 0.1)}
              whileHover={{ y: -5, boxShadow: "0 20px 48px rgba(0,0,0,0.3)" }}
              className="rounded-2xl p-7 flex flex-col gap-6"
              style={{
                background: "rgba(28,63,57,0.3)",
                border: "1px solid rgba(42,96,87,0.35)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(201,243,29,0.1)",
                    border: "1px solid rgba(201,243,29,0.2)",
                    color: "#C9F31D",
                  }}
                >
                  <block.icon size={22} />
                </div>
                <h3
                  className="font-black leading-tight"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--white)",
                    fontSize: "0.95rem",
                  }}
                >
                  {block.category}
                </h3>
              </div>

              {/* Skills list */}
              <ul className="flex flex-col gap-3">
                {block.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#C9F31D" }}
                    />
                    <span className="text-sm" style={{ color: "#7FB3AE" }}>
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const About = () => {
  return (
    <>
      <PageHeroSection
        label="My Story"
        title="Driven by clarity. Defined by results."
        titleHighlight="results."
        subtitle="A technical project manager helping founders and startups turn ideas into shipped products."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        pattern="dots"
        align="left"
        badge="Open to work"
      />
      <AboutSection />

      <JourneySection />
      <ProblemsSection />
      <ApproachSection />
      <SkillsSection />
    </>
  );
};

export default About;
