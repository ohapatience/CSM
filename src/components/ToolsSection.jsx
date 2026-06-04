import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import tool1 from "../assets/tools-1.jpeg";
import tool2 from "../assets/tools-2.jpeg";
import tool3 from "../assets/tools-3.jpeg";
import tool4 from "../assets/tools-4.jpg";
import tool5 from "../assets/tool-5.png";

// ── Data ──────────────────────────────────────────────────────────────────────
const TOOLS = [
  { name: "Asana", icon: "https://cdn.simpleicons.org/asana/C9F31D" },
  { name: "Jira", icon: "https://cdn.simpleicons.org/jira/C9F31D" },
  { name: "Trello", icon: "https://cdn.simpleicons.org/trello/C9F31D" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion/C9F31D" },
  { name: "ClickUp", icon: "https://cdn.simpleicons.org/clickup/C9F31D" },
  { name: "GitHub", icon: "https://cdn.simpleicons.org/github/C9F31D" },
  {
    name: "Microsoft Excel",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="#C9F31D"><path d="M23 1.5q.41 0 .7.3.3.29.3.7v19q0 .41-.3.7-.29.3-.7.3H7q-.41 0-.7-.3-.3-.29-.3-.7v-3.5H1q-.41 0-.7-.3Q0 17.41 0 17V7q0-.41.3-.7Q.59 6 1 6h5V2.5q0-.41.3-.7.29-.3.7-.3zM6 13.28l1.42 2.66h2.14l-2.38-3.87 2.34-3.8H7.46l-1.3 2.4-.05.08-.04.09-.64-1.28-.66-1.29H2.59l2.27 3.82-2.48 3.85H4.5zm14.5 5.02V16h-7v2.3zm0-4.3v-2.7h-7V14zm0-5.2V6.7h-7V9.8zm0-5.12V2.5H7V6h5q.41 0 .7.3.3.29.3.7v3h2.5V9.5q0-.41.3-.7.29-.3.7-.3H21z"/></svg>`,
  },
  {
    name: "Google Workspace",
    icon: "https://cdn.simpleicons.org/google/C9F31D",
  },
];

const SCREENSHOTS = [
  { tool: "tool1", src: tool1 },
  { tool: "tool2", src: tool2 },
  { tool: "tool3", src: tool3 },
  { tool: "tool4", src: tool4 },
  { tool: "tool5", src: tool5 },
];

const TRACK = [...TOOLS, ...TOOLS];

// ── Screenshot card — full image, no cropping ─────────────────────────────────
function ScreenshotCard({ src, index, direction }) {
  return (
    <motion.div
      custom={{ index, direction }}
      className="rounded-2xl overflow-hidden w-full"
      style={{
        border: "1px solid rgba(42,96,87,0.4)",
        background: "rgba(13,38,34,0.8)",
        boxShadow: "0 16px 48px rgba(0,0,0,0.35)",
      }}
      whileHover={{
        y: -4,
        boxShadow:
          "0 24px 64px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,243,29,0.12)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <img
        src={src}
        alt="Dashboard screenshot"
        className="w-full h-auto block"
        style={{ display: "block" }}
      />
    </motion.div>
  );
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function ToolsSection() {
  const [page, setPage] = useState(0);
  // direction: 1 = going forward (slide from right), -1 = going back (slide from left)
  const [direction, setDirection] = useState(1);

  const total = Math.ceil(SCREENSHOTS.length / 2);
  const pair = SCREENSHOTS.slice(page * 2, page * 2 + 2);

  function goNext() {
    if (page < total - 1) {
      setDirection(1);
      setPage((p) => p + 1);
    }
  }
  function goPrev() {
    if (page > 0) {
      setDirection(-1);
      setPage((p) => p - 1);
    }
  }

  // Slide variants: enter from right (dir=1) or left (dir=-1), exit to opposite
  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? "-60%" : "60%",
      opacity: 0,
    }),
  };

  return (
    <section
      id="tools"
      className="section relative overflow-hidden"
      style={{ background: "#0A1E1B" }}
    >
      {/* ── Header ─────────────────────────────────────────────── */}
      <div className="wrapper mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
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
                My Toolkit
              </span>
            </div>
            <h2
              className="font-black leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 3.5vw, 3rem)",
                color: "var(--white)",
                letterSpacing: "-0.025em",
              }}
            >
              Tools I use
            </h2>
          </div>
          <p
            className="text-sm leading-relaxed max-w-sm md:text-right"
            style={{
              color: "var(--text-light)",
              fontFamily: "var(--font-body)",
            }}
          >
            I leverage different project management tools to bring structure to
            projects, improve collaboration, and ensure smooth delivery from
            planning to execution.
          </p>
        </motion.div>
      </div>

      {/* ── Marquee ─────────────────────────────────────────────── */}
      <div className="relative mb-16">
        <div
          className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #0A1E1B, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(270deg, #0A1E1B, transparent)",
          }}
        />

        <div className="overflow-hidden">
          <motion.div
            className="flex items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, ease: "linear", repeat: Infinity }}
            style={{ width: "max-content" }}
          >
            {TRACK.map((tool, i) => (
              <div
                key={`${tool.name}-${i}`}
                className="flex items-center gap-2.5 flex-shrink-0 px-5 py-2.5 rounded-xl mx-2.5"
                style={{
                  background: "rgba(28,63,57,0.35)",
                  border: "1px solid rgba(42,96,87,0.4)",
                }}
              >
                {tool.svg ? (
                  <span
                    style={{ width: 18, height: 18, flexShrink: 0 }}
                    dangerouslySetInnerHTML={{ __html: tool.svg }}
                  />
                ) : (
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    width={18}
                    height={18}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                )}
                <span
                  className="text-sm font-semibold whitespace-nowrap"
                  style={{
                    color: "var(--white)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {tool.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Screenshots ─────────────────────────────────────────── */}
      <div className="wrapper">
        {/* Sub-header + arrows */}
        <div className="flex items-center justify-between mb-8">
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase"
            style={{ color: "#4A7A73", fontFamily: "var(--font-heading)" }}
          >
            Dashboard previews
          </p>

          <div className="flex items-center gap-3">
            <span
              className="text-xs tabular-nums mr-1"
              style={{ color: "#4A7A73", fontFamily: "var(--font-heading)" }}
            >
              {String(page + 1).padStart(2, "0")} /{" "}
              {String(total).padStart(2, "0")}
            </span>

            <button
              onClick={goPrev}
              disabled={page === 0}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
              style={{
                background: "rgba(28,63,57,0.35)",
                border: "1px solid rgba(42,96,87,0.4)",
                color: page === 0 ? "rgba(42,96,87,0.35)" : "#7FB3AE",
                cursor: page === 0 ? "not-allowed" : "pointer",
              }}
            >
              <HiChevronLeft size={18} />
            </button>

            <button
              onClick={goNext}
              disabled={page === total - 1}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all"
              style={{
                background: "rgba(28,63,57,0.35)",
                border: "1px solid rgba(42,96,87,0.4)",
                color: page === total - 1 ? "rgba(42,96,87,0.35)" : "#7FB3AE",
                cursor: page === total - 1 ? "not-allowed" : "pointer",
              }}
            >
              <HiChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Slide container — clips the outgoing/incoming panels */}
        <div className="overflow-hidden rounded-2xl">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 260, damping: 30 },
                opacity: { duration: 0.25 },
              }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {pair.map(({ src }, i) => (
                <ScreenshotCard
                  key={i}
                  src={src}
                  index={i}
                  direction={direction}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > page ? 1 : -1);
                setPage(i);
              }}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === page ? "24px" : "8px",
                height: "8px",
                background: i === page ? "#C9F31D" : "rgba(42,96,87,0.5)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
