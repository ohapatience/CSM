import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  HiOutlineClipboardList,
  HiOutlineChartSquareBar,
  HiOutlineGlobe,
  HiOutlineColorSwatch,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
  HiOutlineLightningBolt,
  HiOutlineUsers,
  HiOutlineBadgeCheck,
  HiOutlineCog,
  HiOutlineDocumentText,
  HiOutlineCalendar,
  HiOutlineSearch,
  HiOutlineChatAlt2,
  HiOutlineFlag,
  HiOutlineChartBar,
} from "react-icons/hi";
import { HiArrowRight, HiArrowDown } from "react-icons/hi2";
import {
  SiJira,
  SiClickup,
  SiTrello,
  SiNotion,
  SiGoogledrive,
  SiGithub,
  SiZoom,
   
} from "react-icons/si";
import { TbBrandAsana, TbFileSpreadsheet, TbCalendar } from "react-icons/tb";
import PageHeroSection from "../components/PageHeroSection";

// ── Animation helpers ──────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { delay, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
});
const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -48 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
});
const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 48 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { delay, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
});

// ── Shared UI ──────────────────────────────────────────────────────────────────
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

function BgTexture({ radialPos = "20% 50%", grid = false }) {
  return (
    <>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at ${radialPos}, rgba(201,243,29,0.04) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(28,63,57,0.6) 0%, transparent 50%)`,
        }}
      />
      {grid ? (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(42,96,87,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(42,96,87,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      ) : (
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(42,96,87,0.5) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      )}
    </>
  );
}

// ── Tool icon map ──────────────────────────────────────────────────────────────
const TOOL_ICONS = {
  Jira: { icon: SiJira, color: "#0052CC" },
  ClickUp: { icon: SiClickup, color: "#7B68EE" },
  Trello: { icon: SiTrello, color: "#0079BF" },
  Notion: { icon: SiNotion, color: "#ffffff" },
  "Google Workspace": { icon: SiGoogledrive, color: "#4285F4" },
  "Google Docs": { icon: SiGoogledrive, color: "#4285F4" },
  "Microsoft Office": { icon: TbFileSpreadsheet, color: "#D83B01" },
  Calendly: { icon: TbCalendar, color: "#006BFF" },
  Zoom: { icon: SiZoom, color: "#2D8CFF" },
  Asana: { icon: TbBrandAsana, color: "#F06A6A" },
};

function ToolChip({ name }) {
  const entry = TOOL_ICONS[name];
  const Icon = entry?.icon;
  return (
    <div
      className="flex items-center gap-2 px-3 py-2 rounded-xl"
      style={{
        background: "rgba(28,63,57,0.5)",
        border: "1px solid rgba(42,96,87,0.4)",
      }}
    >
      {Icon && <Icon size={14} style={{ color: entry.color, flexShrink: 0 }} />}
      <span
        className="text-xs font-semibold whitespace-nowrap"
        style={{ color: "#7FB3AE", fontFamily: "var(--font-body)" }}
      >
        {name}
      </span>
    </div>
  );
}

// ── Challenge + Deliverable lists ──────────────────────────────────────────────
function CheckList({ items, accent = "#C9F31D" }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            delay: i * 0.05,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-start gap-3"
        >
          <HiOutlineCheckCircle
            size={16}
            style={{ color: accent, flexShrink: 0, marginTop: 2 }}
          />
          <span
            className="text-sm leading-relaxed"
            style={{ color: "#7FB3AE" }}
          >
            {item}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

// ── Abstract service illustration ──────────────────────────────────────────────
// Each service gets a unique SVG illustration using the design system palette
function ServiceIllustration({ type }) {
  const illustrations = {
    tpm: (
      <svg
        viewBox="0 0 320 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Sprint board */}
        <rect
          x="20"
          y="20"
          width="280"
          height="200"
          rx="16"
          fill="rgba(28,63,57,0.4)"
          stroke="rgba(42,96,87,0.5)"
          strokeWidth="1"
        />
        {/* Column headers */}
        {["To Do", "In Progress", "Done"].map((label, i) => (
          <g key={i}>
            <rect
              x={32 + i * 88}
              y="34"
              width="76"
              height="22"
              rx="6"
              fill="rgba(42,96,87,0.4)"
            />
            <text
              x={70 + i * 88}
              y="49"
              textAnchor="middle"
              fontSize="8"
              fontWeight="700"
              fill="#7FB3AE"
              fontFamily="var(--font-heading)"
            >
              {label}
            </text>
          </g>
        ))}
        {/* Cards in columns */}
        {[
          { col: 0, rows: [0, 1, 2] },
          { col: 1, rows: [0, 1] },
          { col: 2, rows: [0, 1, 2, 3] },
        ].map(({ col, rows }) =>
          rows.map((row, ri) => (
            <g key={`${col}-${ri}`}>
              <rect
                x={32 + col * 88}
                y={66 + row * 36}
                width="76"
                height="28"
                rx="6"
                fill={
                  col === 2 && ri === 0
                    ? "rgba(201,243,29,0.15)"
                    : "rgba(18,43,39,0.7)"
                }
                stroke={
                  col === 2 && ri === 0
                    ? "rgba(201,243,29,0.4)"
                    : "rgba(42,96,87,0.3)"
                }
                strokeWidth="1"
              />
              <rect
                x={38 + col * 88}
                y={72 + row * 36}
                width={
                  col === 2 && ri === 0 ? 44 : (30 + Math.random() * 24) | 0
                }
                height="4"
                rx="2"
                fill={col === 2 && ri === 0 ? "#C9F31D" : "rgba(42,96,87,0.6)"}
              />
              <rect
                x={38 + col * 88}
                y={80 + row * 36}
                width="20"
                height="3"
                rx="1.5"
                fill="rgba(42,96,87,0.4)"
              />
            </g>
          )),
        )}
        {/* Active indicator */}
        <circle cx="108" cy="75" r="5" fill="#C9F31D" opacity="0.9" />
        <circle
          cx="108"
          cy="75"
          r="8"
          fill="none"
          stroke="#C9F31D"
          strokeWidth="1"
          opacity="0.3"
        />
      </svg>
    ),
    product: (
      <svg
        viewBox="0 0 320 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Roadmap timeline */}
        <rect
          x="20"
          y="20"
          width="280"
          height="200"
          rx="16"
          fill="rgba(28,63,57,0.4)"
          stroke="rgba(42,96,87,0.5)"
          strokeWidth="1"
        />
        {/* Timeline spine */}
        <line
          x1="60"
          y1="50"
          x2="60"
          y2="210"
          stroke="rgba(42,96,87,0.4)"
          strokeWidth="1.5"
          strokeDasharray="4 3"
        />
        <line
          x1="60"
          y1="50"
          x2="60"
          y2="140"
          stroke="#C9F31D"
          strokeWidth="2"
          opacity="0.7"
        />
        {/* Milestone nodes */}
        {[
          { y: 60, label: "Discovery", done: true },
          { y: 100, label: "PRD & Stories", done: true },
          { y: 140, label: "Sprint 1", done: true },
          { y: 180, label: "Sprint 2", done: false },
          { y: 210, label: "Launch", done: false },
        ].map(({ y, label, done }, i) => (
          <g key={i}>
            <circle
              cx="60"
              cy={y}
              r="7"
              fill={done ? "#C9F31D" : "rgba(28,63,57,0.8)"}
              stroke={done ? "#C9F31D" : "rgba(42,96,87,0.6)"}
              strokeWidth="1.5"
            />
            {done && (
              <path
                d={`M ${57} ${y} l 3 3 l 5 -5`}
                stroke="#0D2622"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            )}
            <text
              x="76"
              y={y + 4}
              fontSize="9"
              fontWeight={done ? "700" : "400"}
              fill={done ? "white" : "#4A7A73"}
              fontFamily="var(--font-body)"
            >
              {label}
            </text>
            {/* Feature bar */}
            <rect
              x="76"
              y={y + 8}
              width={done ? 100 + i * 12 : 60 + i * 8}
              height="5"
              rx="2.5"
              fill={done ? "rgba(201,243,29,0.3)" : "rgba(42,96,87,0.25)"}
            />
          </g>
        ))}
        {/* Priority tags */}
        <rect
          x="180"
          y="55"
          width="48"
          height="16"
          rx="8"
          fill="rgba(201,243,29,0.12)"
          stroke="rgba(201,243,29,0.3)"
          strokeWidth="1"
        />
        <text
          x="204"
          y="66"
          textAnchor="middle"
          fontSize="7"
          fontWeight="700"
          fill="#C9F31D"
          fontFamily="var(--font-heading)"
        >
          HIGH PRI
        </text>
        <rect
          x="180"
          y="95"
          width="40"
          height="16"
          rx="8"
          fill="rgba(127,179,174,0.12)"
          stroke="rgba(127,179,174,0.3)"
          strokeWidth="1"
        />
        <text
          x="200"
          y="106"
          textAnchor="middle"
          fontSize="7"
          fontWeight="700"
          fill="#7FB3AE"
          fontFamily="var(--font-heading)"
        >
          MEDIUM
        </text>
      </svg>
    ),
    website: (
      <svg
        viewBox="0 0 320 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Browser chrome */}
        <rect
          x="20"
          y="20"
          width="280"
          height="200"
          rx="14"
          fill="rgba(28,63,57,0.4)"
          stroke="rgba(42,96,87,0.5)"
          strokeWidth="1"
        />
        <rect
          x="20"
          y="20"
          width="280"
          height="36"
          rx="14"
          fill="rgba(18,43,39,0.8)"
        />
        <rect x="20" y="44" width="280" height="12" fill="rgba(18,43,39,0.8)" />
        {/* Browser dots */}
        {[0, 1, 2].map((i) => (
          <circle
            key={i}
            cx={38 + i * 14}
            cy="38"
            r="4"
            fill={["#FF5F57", "#FFBD2E", "#28C840"][i]}
            opacity="0.8"
          />
        ))}
        {/* URL bar */}
        <rect
          x="80"
          y="30"
          width="160"
          height="16"
          rx="8"
          fill="rgba(42,96,87,0.3)"
          stroke="rgba(42,96,87,0.4)"
          strokeWidth="1"
        />
        <circle cx="90" cy="38" r="3" fill="rgba(42,96,87,0.6)" />
        <rect
          x="97"
          y="35"
          width="80"
          height="5"
          rx="2"
          fill="rgba(42,96,87,0.5)"
        />
        {/* Hero section */}
        <rect
          x="32"
          y="68"
          width="180"
          height="60"
          rx="8"
          fill="rgba(201,243,29,0.08)"
          stroke="rgba(201,243,29,0.2)"
          strokeWidth="1"
        />
        <rect
          x="42"
          y="78"
          width="100"
          height="8"
          rx="4"
          fill="rgba(201,243,29,0.4)"
        />
        <rect
          x="42"
          y="92"
          width="130"
          height="5"
          rx="2.5"
          fill="rgba(42,96,87,0.5)"
        />
        <rect
          x="42"
          y="101"
          width="110"
          height="5"
          rx="2.5"
          fill="rgba(42,96,87,0.4)"
        />
        <rect x="42" y="114" width="50" height="16" rx="8" fill="#C9F31D" />
        {/* Image placeholder */}
        <rect
          x="222"
          y="68"
          width="66"
          height="60"
          rx="8"
          fill="rgba(42,96,87,0.3)"
        />
        <circle
          cx="255"
          cy="95"
          r="14"
          fill="rgba(42,96,87,0.4)"
          stroke="rgba(42,96,87,0.5)"
          strokeWidth="1"
        />
        {/* Cards row */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect
              x={32 + i * 88}
              y="142"
              width="76"
              height="52"
              rx="8"
              fill="rgba(18,43,39,0.6)"
              stroke="rgba(42,96,87,0.3)"
              strokeWidth="1"
            />
            <rect
              x={40 + i * 88}
              y="152"
              width="20"
              height="20"
              rx="6"
              fill="rgba(42,96,87,0.4)"
            />
            <rect
              x={40 + i * 88}
              y="178"
              width={40 + i * 8}
              height="4"
              rx="2"
              fill="rgba(42,96,87,0.5)"
            />
            <rect
              x={40 + i * 88}
              y="186"
              width="30"
              height="3"
              rx="1.5"
              fill="rgba(42,96,87,0.3)"
            />
          </g>
        ))}
      </svg>
    ),
    brand: (
      <svg
        viewBox="0 0 320 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect
          x="20"
          y="20"
          width="280"
          height="200"
          rx="16"
          fill="rgba(28,63,57,0.4)"
          stroke="rgba(42,96,87,0.5)"
          strokeWidth="1"
        />
        {/* Color palette */}
        <text
          x="35"
          y="48"
          fontSize="8"
          fontWeight="700"
          fill="#4A7A73"
          fontFamily="var(--font-heading)"
          letterSpacing="2"
        >
          BRAND GUIDE
        </text>
        {["#1C3F39", "#C9F31D", "#7FB3AE", "#0D2622", "#2A6057"].map(
          (color, i) => (
            <g key={i}>
              <circle
                cx={38 + i * 24}
                cy="68"
                r="10"
                fill={color}
                stroke="rgba(255,255,255,0.1)"
                strokeWidth="1"
              />
            </g>
          ),
        )}
        {/* Typography sample */}
        <rect
          x="30"
          y="90"
          width="180"
          height="50"
          rx="8"
          fill="rgba(18,43,39,0.6)"
          stroke="rgba(42,96,87,0.3)"
          strokeWidth="1"
        />
        <text
          x="42"
          y="112"
          fontSize="18"
          fontWeight="900"
          fill="white"
          fontFamily="var(--font-heading)"
        >
          Aa
        </text>
        <text
          x="80"
          y="108"
          fontSize="7"
          fontWeight="700"
          fill="#C9F31D"
          fontFamily="var(--font-heading)"
          letterSpacing="1"
        >
          RALEWAY
        </text>
        <rect
          x="80"
          y="112"
          width="60"
          height="3"
          rx="1.5"
          fill="rgba(42,96,87,0.5)"
        />
        <rect
          x="80"
          y="119"
          width="40"
          height="3"
          rx="1.5"
          fill="rgba(42,96,87,0.35)"
        />
        <rect
          x="80"
          y="126"
          width="50"
          height="3"
          rx="1.5"
          fill="rgba(42,96,87,0.25)"
        />
        {/* Pitch deck slides */}
        {[0, 1, 2, 3].map((i) => (
          <g key={i}>
            <rect
              x={30 + i * 62}
              y="154"
              width="54"
              height="36"
              rx="6"
              fill={i === 0 ? "rgba(201,243,29,0.12)" : "rgba(18,43,39,0.7)"}
              stroke={i === 0 ? "rgba(201,243,29,0.4)" : "rgba(42,96,87,0.3)"}
              strokeWidth="1"
            />
            {i === 0 && (
              <>
                <rect
                  x="36"
                  y="162"
                  width="30"
                  height="5"
                  rx="2.5"
                  fill="rgba(201,243,29,0.5)"
                />
                <rect
                  x="36"
                  y="171"
                  width="20"
                  height="3"
                  rx="1.5"
                  fill="rgba(42,96,87,0.5)"
                />
              </>
            )}
            {i > 0 && (
              <>
                <rect
                  x={36 + i * 62}
                  y="162"
                  width="24"
                  height="4"
                  rx="2"
                  fill="rgba(42,96,87,0.4)"
                />
                <rect
                  x={36 + i * 62}
                  y="170"
                  width="16"
                  height="3"
                  rx="1.5"
                  fill="rgba(42,96,87,0.3)"
                />
              </>
            )}
            {/* slide number */}
            <text
              x={57 + i * 62}
              y="184"
              textAnchor="middle"
              fontSize="7"
              fill="rgba(42,96,87,0.6)"
              fontFamily="var(--font-heading)"
            >
              {String(i + 1).padStart(2, "0")}
            </text>
          </g>
        ))}
        {/* Approval badge */}
        <circle
          cx="272"
          cy="90"
          r="22"
          fill="rgba(201,243,29,0.1)"
          stroke="rgba(201,243,29,0.3)"
          strokeWidth="1.5"
        />
        <path
          d="M263 90 l6 6 l12 -12"
          stroke="#C9F31D"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x="272"
          y="105"
          textAnchor="middle"
          fontSize="6"
          fill="#C9F31D"
          fontFamily="var(--font-heading)"
          fontWeight="700"
        >
          APPROVED
        </text>
      </svg>
    ),
    ops: (
      <svg
        viewBox="0 0 320 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <rect
          x="20"
          y="20"
          width="280"
          height="200"
          rx="16"
          fill="rgba(28,63,57,0.4)"
          stroke="rgba(42,96,87,0.5)"
          strokeWidth="1"
        />
        {/* Calendar */}
        <rect
          x="30"
          y="32"
          width="120"
          height="100"
          rx="10"
          fill="rgba(18,43,39,0.7)"
          stroke="rgba(42,96,87,0.4)"
          strokeWidth="1"
        />
        <rect
          x="30"
          y="32"
          width="120"
          height="24"
          rx="10"
          fill="rgba(42,96,87,0.5)"
        />
        <rect x="30" y="44" width="120" height="12" fill="rgba(42,96,87,0.5)" />
        <text
          x="90"
          y="48"
          textAnchor="middle"
          fontSize="8"
          fontWeight="700"
          fill="#C9F31D"
          fontFamily="var(--font-heading)"
        >
          JUNE 2025
        </text>
        {/* Days grid */}
        {Array.from({ length: 21 }, (_, i) => {
          const row = Math.floor(i / 7);
          const col = i % 7;
          const isHighlight = [2, 8, 14].includes(i);
          const isToday = i === 10;
          return (
            <g key={i}>
              {isToday && (
                <circle
                  cx={38 + col * 16}
                  cy={70 + row * 16}
                  r="7"
                  fill="#C9F31D"
                  opacity="0.9"
                />
              )}
              {isHighlight && !isToday && (
                <circle
                  cx={38 + col * 16}
                  cy={70 + row * 16}
                  r="6"
                  fill="rgba(201,243,29,0.15)"
                  stroke="rgba(201,243,29,0.35)"
                  strokeWidth="1"
                />
              )}
              <text
                x={38 + col * 16}
                y={74 + row * 16}
                textAnchor="middle"
                fontSize="7"
                fill={
                  isToday
                    ? "#0D2622"
                    : isHighlight
                      ? "#C9F31D"
                      : "rgba(127,179,174,0.7)"
                }
                fontFamily="var(--font-body)"
                fontWeight={isToday || isHighlight ? "700" : "400"}
              >
                {i + 1}
              </text>
            </g>
          );
        })}
        {/* Task list */}
        <rect
          x="162"
          y="32"
          width="128"
          height="100"
          rx="10"
          fill="rgba(18,43,39,0.7)"
          stroke="rgba(42,96,87,0.4)"
          strokeWidth="1"
        />
        <text
          x="174"
          y="50"
          fontSize="8"
          fontWeight="700"
          fill="#7FB3AE"
          fontFamily="var(--font-heading)"
          letterSpacing="1"
        >
          TASKS
        </text>
        {[
          { label: "Board sync", done: true },
          { label: "Q3 report", done: true },
          { label: "Investor deck", done: false },
          { label: "Team onboard", done: false },
          { label: "OKR review", done: false },
        ].map(({ label, done }, i) => (
          <g key={i}>
            <circle
              cx="174"
              cy={64 + i * 16}
              r="4"
              fill={done ? "#C9F31D" : "none"}
              stroke={done ? "#C9F31D" : "rgba(42,96,87,0.5)"}
              strokeWidth="1.5"
            />
            {done && (
              <path
                d={`M 171 ${64 + i * 16} l 2.5 2.5 l 4 -4`}
                stroke="#0D2622"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
            )}
            <text
              x="184"
              y={68 + i * 16}
              fontSize="8"
              fill={done ? "rgba(127,179,174,0.5)" : "#7FB3AE"}
              fontFamily="var(--font-body)"
              style={{ textDecoration: done ? "line-through" : "none" }}
            >
              {label}
            </text>
          </g>
        ))}
        {/* Email / comms */}
        <rect
          x="30"
          y="144"
          width="260"
          height="60"
          rx="10"
          fill="rgba(18,43,39,0.7)"
          stroke="rgba(42,96,87,0.4)"
          strokeWidth="1"
        />
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect
              x="40"
              y={154 + i * 16}
              width={80 + i * 30}
              height="8"
              rx="4"
              fill={i === 0 ? "rgba(201,243,29,0.15)" : "rgba(42,96,87,0.25)"}
              stroke={i === 0 ? "rgba(201,243,29,0.3)" : "none"}
              strokeWidth="1"
            />
            <text
              x="48"
              y={161 + i * 16}
              fontSize="7"
              fill={i === 0 ? "#C9F31D" : "#4A7A73"}
              fontFamily="var(--font-body)"
              fontWeight={i === 0 ? "700" : "400"}
            >
              {
                [
                  "Follow-up: Investor call",
                  "Re: Sprint review notes",
                  "Fwd: Product spec v2",
                ][i]
              }
            </text>
          </g>
        ))}
      </svg>
    ),
  };

  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden"
      style={{ background: "rgba(13,38,34,0.8)" }}
    >
      {illustrations[type]}
    </div>
  );
}

// ── SERVICE CARD SECTION ──────────────────────────────────────────────────────
const SERVICES = [
  {
    id: "01",
    slug: "tpm",
    icon: HiOutlineClipboardList,
    title: "Technical Project Management",
    tagline: "From first sprint to final delivery.",
    intro:
      "I help founders, solo founders, startups, and growing businesses plan, organize, and execute digital projects from idea to delivery. Whether you're launching a SaaS platform, mobile application, internal business system, or digital initiative, I provide the structure needed to keep projects moving forward while ensuring teams remain aligned with business objectives.",
    challenges: [
      "Projects lacking structure and direction",
      "Missed deadlines and delayed deliverables",
      "Poor communication between stakeholders and teams",
      "Unclear project ownership",
      "Difficulty tracking progress",
      "Multiple priorities competing for attention",
    ],
    deliverables: [
      "Project planning and coordination",
      "Agile and Scrum support",
      "Sprint planning and tracking",
      "Task and workflow management",
      "Timeline and milestone tracking",
      "Risk and issue management",
      "Project documentation",
      "Stakeholder communication",
      "Progress reporting",
    ],
    tools: ["Jira", "ClickUp", "Trello", "Notion", "Google Workspace"],
    accent: "#C9F31D",
    bg: "#0A1F1C",
  },
  {
    id: "02",
    slug: "product",
    icon: HiOutlineChartSquareBar,
    title: "Product Planning & Delivery Support",
    tagline: "Turn vision into development-ready plans.",
    intro:
      "I help transform ideas into actionable plans that development teams can understand and execute effectively. This service is ideal for founders who have a product vision but need help organizing requirements, priorities, and workflows before development begins.",
    challenges: [
      "Unclear product requirements",
      "Feature overload and scope creep",
      "Lack of development-ready documentation",
      "Poor prioritization",
      "Confusion between business goals and technical execution",
    ],
    deliverables: [
      "Product requirement documentation",
      "User stories",
      "Backlog creation and organization",
      "Feature prioritization",
      "Workflow planning",
      "Product roadmaps",
      "Delivery planning support",
    ],
    tools: ["Notion", "Jira", "ClickUp", "Google Docs"],
    accent: "#7FB3AE",
    bg: "#0D2622",
  },
  {
    id: "03",
    slug: "website",
    icon: HiOutlineGlobe,
    title: "Website Revamp & Digital Project Coordination",
    tagline: "Redesigns that launch — on time, on brief.",
    intro:
      "I coordinate website redesign, revamp, update, and optimization projects by serving as the bridge between founders, business stakeholders, designers, and developers. My role is to ensure requirements are clearly communicated, feedback is managed efficiently, timelines are maintained, and deliverables meet business expectations.",
    challenges: [
      "Website redesign projects becoming disorganized",
      "Endless revision cycles",
      "Poor communication between clients and designers",
      "Delayed website launches",
      "Unclear project requirements",
      "Missed deliverables",
    ],
    deliverables: [
      "Website project planning",
      "Requirement gathering",
      "Designer and developer coordination",
      "Feedback management",
      "Timeline management",
      "Progress tracking",
      "Launch readiness support",
      "Stakeholder communication",
    ],
    teams: [
      "UI/UX Designers",
      "Web Designers",
      "Developers",
      "Content Contributors",
      "Business Stakeholders",
    ],
    tools: ["ClickUp", "Trello", "Notion", "Google Workspace"],
    accent: "#C9F31D",
    bg: "#0A1F1C",
  },
  {
    id: "04",
    slug: "brand",
    icon: HiOutlineColorSwatch,
    title: "Brand, Pitch Deck & Creative Project Coordination",
    tagline: "Creative projects, delivered without the chaos.",
    intro:
      "I coordinate branding, presentation, and creative projects by ensuring designers, stakeholders, and decision-makers remain aligned throughout the project lifecycle. While I do not create brand identities, logos, or pitch deck designs myself, I help manage timelines, feedback cycles, project requirements, and communication to ensure successful delivery.",
    challenges: [
      "Delayed approvals",
      "Disorganized feedback",
      "Communication gaps between stakeholders and designers",
      "Missed deadlines",
      "Lack of project ownership",
    ],
    deliverables: [
      "Brand guide project coordination",
      "Pitch deck project coordination",
      "Creative project planning",
      "Feedback management",
      "Revision tracking",
      "Stakeholder communication",
      "Timeline management",
      "Approval tracking",
    ],
    teams: [
      "Brand Designers",
      "Graphic Designers",
      "Founders",
      "Marketing Teams",
      "Business Stakeholders",
    ],
    tools: ["Notion", "ClickUp", "Google Workspace"],
    accent: "#7FB3AE",
    bg: "#0D2622",
  },
  {
    id: "05",
    slug: "ops",
    icon: HiOutlineBriefcase,
    title: "Executive Operations & Administrative Support",
    tagline: "The operational backbone every founder needs.",
    intro:
      "I provide operational and executive support for founders, CEOs, startup teams, and business leaders who need assistance managing day-to-day operations and maintaining organizational efficiency.",
    challenges: [
      "Overloaded schedules",
      "Missed follow-ups",
      "Poor meeting organization",
      "Administrative bottlenecks",
      "Lack of operational structure",
      "Time-consuming research tasks",
    ],
    deliverables: [
      "Calendar management",
      "Appointment scheduling",
      "Meeting coordination",
      "Research and information gathering",
      "Follow-up management",
      "Documentation management",
      "Task tracking",
      "Data organization",
      "Executive support",
      "Operational support",
    ],
    tools: [
      "Google Workspace",
      "Microsoft Office",
      "Notion",
      "Calendly",
      "Zoom",
    ],
    accent: "#C9F31D",
    bg: "#0A1F1C",
  },
];

// ── Full Service Block ────────────────────────────────────────────────────────
function ServiceBlock({ service, index }) {
  const isEven = index % 2 === 0;
  const blockRef = useRef(null);
  const isInView = useInView(blockRef, { once: true, margin: "-80px" });
  const Icon = service.icon;

  return (
    <section
      ref={blockRef}
      id={service.slug}
      className="relative overflow-hidden"
      style={{ background: service.bg, paddingBlock: "6rem" }}
    >
      <BgTexture radialPos={isEven ? "10% 50%" : "90% 50%"} grid={!isEven} />

      {/* Service number watermark */}
      <div
        className="absolute pointer-events-none select-none"
        style={{
          ...(isEven ? { right: "-2rem" } : { left: "-2rem" }),
          top: "50%",
          transform: "translateY(-50%)",
          opacity: 0.04,
        }}
      >
        <span
          className="font-black"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(10rem, 20vw, 18rem)",
            color: service.accent,
            lineHeight: 1,
          }}
        >
          {service.id}
        </span>
      </div>

      <div className="wrapper relative z-10">
        {/* ── Top header bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-5 mb-14"
        >
          <div className="w-px h-8" style={{ background: service.accent }} />
          <div
            className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              background: `${service.accent}18`,
              border: `1px solid ${service.accent}35`,
            }}
          >
            <Icon size={22} style={{ color: service.accent }} />
          </div>
          <span
            className="text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: service.accent, fontFamily: "var(--font-heading)" }}
          >
            Service {service.id}
          </span>
          <div
            className="flex-1 h-px"
            style={{ background: "rgba(42,96,87,0.3)" }}
          />
        </motion.div>

        {/* ── Two-column layout ── */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-14 xl:gap-20 items-start ${isEven ? "" : ""}`}
        >
          {/* ── LEFT/RIGHT: Title + Intro + CTA ── */}
          <motion.div
            className={`flex flex-col gap-8 ${isEven ? "" : "lg:order-2"}`}
            initial={{ opacity: 0, x: isEven ? -40 : 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.85,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Title */}
            <div>
              <p
                className="text-xs font-bold tracking-[0.2em] uppercase mb-3"
                style={{
                  color: service.accent,
                  fontFamily: "var(--font-heading)",
                }}
              >
                {service.tagline}
              </p>
              <h2
                className="font-black leading-tight mb-5"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                  color: "var(--white)",
                  letterSpacing: "-0.02em",
                }}
              >
                {service.title.split(" ").map((word, i, arr) =>
                  i === arr.length - 1 ? (
                    <span key={i} style={{ color: service.accent }}>
                      {word}
                    </span>
                  ) : (
                    <span key={i}>{word} </span>
                  ),
                )}
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#7FB3AE" }}
              >
                {service.intro}
              </p>
            </div>

            {/* Illustration */}
            <motion.div
              className="relative w-full rounded-2xl overflow-hidden"
              style={{
                aspectRatio: "16/9",
                border: "1px solid rgba(42,96,87,0.4)",
              }}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{
                duration: 0.9,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.015 }}
            >
              <ServiceIllustration type={service.slug} />
              {/* Subtle overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 0% 0%, rgba(201,243,29,0.04) 0%, transparent 60%)",
                }}
              />
            </motion.div>

            {/* Tools */}
            <div>
              <p
                className="text-xs font-bold tracking-[0.18em] uppercase mb-3"
                style={{
                  color: "rgba(42,96,87,0.8)",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Tools I Use
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <ToolChip key={tool} name={tool} />
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="/contact"
              whileHover={{
                scale: 1.03,
                boxShadow: `0 0 24px ${service.accent}35`,
              }}
              whileTap={{ scale: 0.97 }}
              className="btn btn-primary inline-flex items-center gap-2 self-start"
            >
              Get Started
              <HiArrowRight size={15} />
            </motion.a>
          </motion.div>

          {/* ── RIGHT/LEFT: Challenges + Deliverables ── */}
          <motion.div
            className={`flex flex-col gap-8 ${isEven ? "" : "lg:order-1"}`}
            initial={{ opacity: 0, x: isEven ? 40 : -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
              duration: 0.85,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {/* Challenges */}
            <div
              className="rounded-2xl p-7"
              style={{
                background: "rgba(18,43,39,0.6)",
                border: "1px solid rgba(42,96,87,0.35)",
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{
                    background: "rgba(255,80,80,0.1)",
                    border: "1px solid rgba(255,80,80,0.15)",
                  }}
                >
                  <HiOutlineLightningBolt
                    size={16}
                    style={{ color: "#FF6B6B" }}
                  />
                </div>
                <h4
                  className="font-black text-sm tracking-wide"
                  style={{
                    color: "var(--white)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Common Challenges I Solve
                </h4>
              </div>
              <CheckList items={service.challenges} accent="#FF8C8C" />
            </div>

            {/* Deliverables */}
            <div
              className="rounded-2xl p-7"
              style={{
                background: `${service.accent}08`,
                border: `1px solid ${service.accent}25`,
              }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center"
                  style={{
                    background: `${service.accent}18`,
                    border: `1px solid ${service.accent}30`,
                  }}
                >
                  <HiOutlineBadgeCheck
                    size={16}
                    style={{ color: service.accent }}
                  />
                </div>
                <h4
                  className="font-black text-sm tracking-wide"
                  style={{
                    color: "var(--white)",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  What You Get
                </h4>
              </div>
              <CheckList items={service.deliverables} accent={service.accent} />
            </div>

            {/* Teams (if applicable) */}
            {service.teams && (
              <div
                className="rounded-2xl p-7"
                style={{
                  background: "rgba(18,43,39,0.6)",
                  border: "1px solid rgba(42,96,87,0.35)",
                }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{
                      background: "rgba(127,179,174,0.12)",
                      border: "1px solid rgba(127,179,174,0.2)",
                    }}
                  >
                    <HiOutlineUsers size={16} style={{ color: "#7FB3AE" }} />
                  </div>
                  <h4
                    className="font-black text-sm tracking-wide"
                    style={{
                      color: "var(--white)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Teams I Coordinate
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.teams.map((team) => (
                    <span
                      key={team}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full"
                      style={{
                        background: "rgba(127,179,174,0.1)",
                        border: "1px solid rgba(127,179,174,0.2)",
                        color: "#7FB3AE",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      {team}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Bottom divider */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(42,96,87,0.4), transparent)",
        }}
      />
    </section>
  );
}

// ── Quick-nav sidebar (desktop) ───────────────────────────────────────────────
function ServiceNav() {
  const [active, setActive] = useState("tpm");

  return (
    <motion.nav
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="hidden xl:flex flex-col gap-2 fixed left-6 top-1/2 -translate-y-1/2 z-50"
    >
      {SERVICES.map((s) => (
        <a
          key={s.slug}
          href={`#${s.slug}`}
          onClick={() => setActive(s.slug)}
          className="group flex items-center gap-3"
          title={s.title}
        >
          <div
            className="w-1.5 h-8 rounded-full transition-all duration-300"
            style={{
              background: active === s.slug ? "#C9F31D" : "rgba(42,96,87,0.5)",
              transform: active === s.slug ? "scaleY(1.3)" : "scaleY(1)",
            }}
          />
          <span
            className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap"
            style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
          >
            {s.id}
          </span>
        </a>
      ))}
    </motion.nav>
  );
}

// ── CTA section ───────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{ background: "#0D2622" }}
    >
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ opacity: 0.03 }}
      >
        <span
          className="font-black"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(12rem, 25vw, 20rem)",
            color: "#C9F31D",
            lineHeight: 1,
          }}
        >
          PM
        </span>
      </div>
      <BgTexture radialPos="50% 50%" />
      <div className="wrapper relative z-10 text-center flex flex-col items-center gap-8">
        <motion.div {...fadeUp(0)} className="flex items-center gap-4">
          <div className="w-8 h-px" style={{ background: "#C9F31D" }} />
          <span
            className="text-xs font-bold tracking-[0.25em] uppercase"
            style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
          >
            Let's Work Together
          </span>
          <div className="w-8 h-px" style={{ background: "#C9F31D" }} />
        </motion.div>
        <motion.h2
          {...fadeUp(0.08)}
          className="font-black leading-tight max-w-2xl"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            color: "var(--white)",
            letterSpacing: "-0.02em",
          }}
        >
          Ready to bring <span style={{ color: "#C9F31D" }}>structure</span> to
          your next project?
        </motion.h2>
        <motion.p
          {...fadeUp(0.14)}
          className="text-base max-w-lg leading-relaxed"
          style={{ color: "#7FB3AE" }}
        >
          Whether you need end-to-end project management or targeted
          coordination support — I'm here to help you ship.
        </motion.p>
        <motion.div
          {...fadeUp(0.2)}
          className="flex items-center gap-4 flex-wrap justify-center"
        >
          <motion.a
            href="/contact"
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 28px rgba(201,243,29,0.3)",
            }}
            whileTap={{ scale: 0.97 }}
            className="btn btn-primary inline-flex items-center gap-2"
          >
            Get in Touch <HiArrowRight size={16} />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="btn btn-outline inline-flex items-center gap-2"
          >
            Download CV <HiArrowDown size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function Services() {
  return (
    <>
      <PageHeroSection
        label="What I Do"
        title="Every project. Delivered."
        titleHighlight="Delivered."
        subtitle="Five core services built around what growing businesses actually need — structure, clarity, and execution."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        pattern="grid"
        align="left"
        badge="Available for work"
      />

      {/* Quick nav */}
      <ServiceNav />

      {/* All service blocks */}
      {SERVICES.map((service, i) => (
        <ServiceBlock key={service.slug} service={service} index={i} />
      ))}

      <CTASection />
    </>
  );
}
