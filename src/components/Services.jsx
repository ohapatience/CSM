import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineClipboardList,
  HiOutlineChartSquareBar,
  HiOutlineGlobe,
  HiOutlineColorSwatch,
  HiOutlineBriefcase,
} from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";

// ── Data ──────────────────────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "01",
    icon: HiOutlineClipboardList,
    title: "Technical Project Management",
    snippet:
      "Structure, coordination, and execution for SaaS platforms, mobile apps, and digital initiatives — from first sprint to final delivery.",
    tags: ["Agile", "Scrum", "Risk Management"],
    href: "/services/technical-project-management",
    size: "large",
  },
  {
    id: "02",
    icon: HiOutlineChartSquareBar,
    title: "Product Planning & Delivery",
    snippet:
      "Transform a product vision into development-ready documentation — user stories, roadmaps, and prioritized backlogs your team can act on immediately.",
    tags: ["Roadmaps", "User Stories", "Backlog"],
    href: "/services/product-planning",
    size: "small",
  },
  {
    id: "03",
    icon: HiOutlineGlobe,
    title: "Website Revamp Coordination",
    snippet:
      "Bridging founders, designers, and developers so your website redesign ships on time, on brief, and without the endless revision cycles.",
    tags: ["Redesign", "Stakeholders", "Launch"],
    href: "/services/website-revamp",
    size: "small",
  },
  {
    id: "04",
    icon: HiOutlineColorSwatch,
    title: "Brand & Creative Coordination",
    snippet:
      "Keeping brand, pitch deck, and creative projects aligned — managing timelines, feedback cycles, and approvals so nothing falls through the cracks.",
    tags: ["Branding", "Pitch Decks", "Feedback"],
    href: "/services/brand-creative",
    size: "small",
  },
  {
    id: "05",
    icon: HiOutlineBriefcase,
    title: "Executive Operations Support",
    snippet:
      "Operational and administrative support for founders and CEOs — calendars, meeting coordination, documentation, and the day-to-day that keeps a business running.",
    tags: ["Operations", "Scheduling", "Admin"],
    href: "/services/executive-ops",
    size: "large",
  },
];

// ── Animation helpers ─────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { delay, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
});

// ── Service Card ──────────────────────────────────────────────────────────────
function ServiceCard({ service, delay }) {
  const [hovered, setHovered] = useState(false);
  const Icon = service.icon;
  const isLarge = service.size === "large";

  return (
    <motion.div
      {...fadeUp(delay)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className={`relative rounded-3xl overflow-hidden group ${
        isLarge ? "lg:col-span-2" : "lg:col-span-1"
      }`}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      style={{
        background: "rgba(20,50,45,0.55)",
        border: "1px solid rgba(42,96,87,0.4)",
        backdropFilter: "blur(14px)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.18)",
      }}
    >
      {/* Hover glow */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              background: isLarge
                ? "radial-gradient(ellipse 70% 60% at 15% 50%, rgba(201,243,29,0.07) 0%, transparent 65%)"
                : "radial-gradient(ellipse 90% 55% at 50% 0%, rgba(127,179,174,0.09) 0%, transparent 70%)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Top shimmer line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        animate={{
          background: hovered
            ? isLarge
              ? "linear-gradient(90deg, transparent 0%, #C9F31D 50%, transparent 100%)"
              : "linear-gradient(90deg, transparent 0%, #7FB3AE 50%, transparent 100%)"
            : "linear-gradient(90deg, transparent 0%, rgba(42,96,87,0.5) 50%, transparent 100%)",
        }}
        transition={{ duration: 0.4 }}
      />

      <div
        className={`p-8 h-full flex gap-8 ${
          isLarge ? "flex-row items-center" : "flex-col"
        }`}
      >
        {/* ── Primary block ── */}
        <div
          className={`flex flex-col gap-4 ${isLarge ? "flex-1 min-w-0" : ""}`}
        >
          {/* Icon + number */}
          <div className="flex items-center justify-between">
            <motion.div
              className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
              animate={{
                background: hovered
                  ? isLarge
                    ? "rgba(201,243,29,0.16)"
                    : "rgba(127,179,174,0.16)"
                  : "rgba(42,96,87,0.22)",
              }}
              style={{ border: "1px solid rgba(42,96,87,0.45)" }}
              transition={{ duration: 0.3 }}
            >
              <Icon
                size={20}
                style={{
                  color: hovered
                    ? isLarge
                      ? "#C9F31D"
                      : "#7FB3AE"
                    : "#4A7A73",
                  transition: "color 0.3s",
                }}
              />
            </motion.div>
            <span
              className="text-xs font-black tracking-widest"
              style={{
                color: "rgba(42,96,87,0.5)",
                fontFamily: "var(--font-heading)",
              }}
            >
              {service.id}
            </span>
          </div>

          {/* Title */}
          <h3
            className="font-black leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: isLarge ? "clamp(1.5rem, 2.2vw, 2rem)" : "1.1rem",
              color: "var(--white)",
              letterSpacing: "-0.02em",
            }}
          >
            {service.title}
          </h3>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-lg text-xs font-semibold"
                style={{
                  background: "rgba(42,96,87,0.2)",
                  border: "1px solid rgba(42,96,87,0.35)",
                  color: "#7FB3AE",
                  fontFamily: "var(--font-body)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* ── Secondary block ── */}
        <div
          className={`flex flex-col justify-between gap-6 ${
            isLarge ? "flex-1 min-w-0" : "flex-1"
          }`}
        >
          <p
            className="text-sm leading-relaxed"
            style={{
              color: "var(--text-light)",
              fontFamily: "var(--font-body)",
            }}
          >
            {service.snippet}
          </p>

          {/* Learn more link */}
          <motion.a
            href={service.href}
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase w-fit"
            style={{
              color: hovered
                ? isLarge
                  ? "#C9F31D"
                  : "#7FB3AE"
                : "rgba(74,122,115,0.7)",
              fontFamily: "var(--font-heading)",
              transition: "color 0.3s",
            }}
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Learn More
            <HiArrowRight size={13} />
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative overflow-hidden section"
      style={{ background: "#0A1E1B" }}
    >
      {/* Background atmosphere */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 50% 40% at 85% 15%, rgba(201,243,29,0.04) 0%, transparent 60%), radial-gradient(ellipse 55% 45% at 10% 85%, rgba(28,63,57,0.55) 0%, transparent 60%)",
        }}
      />
      {/* Fine grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(42,96,87,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(42,96,87,0.055) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="wrapper relative z-10">
        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <motion.div {...fadeUp(0)} className="flex items-center gap-4 mb-6">
              <div
                className="w-8 h-px"
                style={{ background: "var(--secondary)" }}
              />
              <span
                className="text-xs font-bold tracking-[0.25em] uppercase"
                style={{
                  color: "var(--secondary)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                What I Do
              </span>
              <div
                className="w-8 h-px"
                style={{ background: "rgba(42,96,87,0.4)" }}
              />
            </motion.div>

            <motion.h2
              {...fadeUp(0.08)}
              className="font-black leading-none"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.4rem, 5vw, 4.5rem)",
                color: "var(--white)",
                letterSpacing: "-0.03em",
              }}
            >
              Every project.
              <br />
              <span style={{ color: "var(--secondary)" }}>Delivered.</span>
            </motion.h2>
          </div>

          <motion.p
            {...fadeUp(0.15)}
            className="text-base leading-relaxed max-w-xs lg:text-right"
            style={{
              color: "var(--text-light)",
              fontFamily: "var(--font-body)",
            }}
          >
            Five core services built around what growing businesses actually
            need — structure, clarity, and execution.
          </motion.p>
        </div>

        {/* ── Bento grid ──────────────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {SERVICES.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              delay={0.08 + i * 0.08}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
