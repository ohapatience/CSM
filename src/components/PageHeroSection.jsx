import { motion } from "framer-motion";
import PropTypes from "prop-types";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
});

function Breadcrumb({ crumbs }) {
  if (!crumbs?.length) return null;
  return (
    <nav
      className="flex items-center gap-2 text-xs mb-8"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {crumbs.map((crumb, i) => (
        <span key={crumb.label} className="flex items-center gap-2">
          {i > 0 && <span style={{ color: "rgba(42,96,87,0.5)" }}>/</span>}
          {crumb.href && i < crumbs.length - 1 ? (
            <a
              href={crumb.href}
              style={{ color: "#4A7A73" }}
              onMouseEnter={(e) => (e.target.style.color = "#C9F31D")}
              onMouseLeave={(e) => (e.target.style.color = "#4A7A73")}
            >
              {crumb.label}
            </a>
          ) : (
            <span
              style={{ color: i === crumbs.length - 1 ? "#C9F31D" : "#4A7A73" }}
            >
              {crumb.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}

export default function PageHeroSection({
  label = "Page",
  title = "Page Title",
  titleHighlight = "",
  subtitle = "",
  breadcrumbs = [],
  pattern = "lines",
  align = "center",
  badge = "",
}) {
  const isCenter = align === "center";

  // Split title so we can colour the highlight word
  const parts = titleHighlight
    ? title.split(new RegExp(`(${titleHighlight})`, "i"))
    : [title];

  // Pattern definitions — pure SVG, rendered inline
  const patterns = {
    lines: (
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="ph-lines"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(35)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="40"
              stroke="rgba(42,96,87,0.15)"
              strokeWidth="1"
            />
          </pattern>
          <radialGradient id="ph-lines-fade" cx="50%" cy="50%" r="65%">
            <stop offset="0%" stopColor="#0D2622" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#0D2622" stopOpacity="1" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#ph-lines)" />
        <rect width="100%" height="100%" fill="url(#ph-lines-fade)" />
      </svg>
    ),
    dots: (
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="ph-dots"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="rgba(42,96,87,0.3)" />
          </pattern>
          <radialGradient id="ph-dots-fade" cx="50%" cy="50%" r="65%">
            <stop offset="20%" stopColor="#0D2622" stopOpacity="0" />
            <stop offset="100%" stopColor="#0D2622" stopOpacity="1" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#ph-dots)" />
        <rect width="100%" height="100%" fill="url(#ph-dots-fade)" />
      </svg>
    ),
    cross: (
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern
            id="ph-cross"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M24 10V38 M10 24H38"
              stroke="rgba(42,96,87,0.18)"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
          <radialGradient id="ph-cross-fade" cx="50%" cy="50%" r="65%">
            <stop offset="15%" stopColor="#0D2622" stopOpacity="0" />
            <stop offset="100%" stopColor="#0D2622" stopOpacity="1" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#ph-cross)" />
        <rect width="100%" height="100%" fill="url(#ph-cross-fade)" />
      </svg>
    ),
    arcs: (
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 340"
        preserveAspectRatio="xMidYMid slice"
      >
        {[160, 260, 360, 460, 560, 660, 760, 860].map((r, i) => (
          <circle
            key={r}
            cx="0"
            cy="340"
            r={r}
            fill="none"
            stroke="rgba(42,96,87,0.16)"
            strokeWidth="1"
            opacity={1 - i * 0.1}
          />
        ))}
        <defs>
          <radialGradient id="ph-arcs-fade" cx="75%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#0D2622" stopOpacity="0" />
            <stop offset="100%" stopColor="#0D2622" stopOpacity="1" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#ph-arcs-fade)" />
      </svg>
    ),
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "#0D2622",
        paddingTop: "9rem",
        paddingBottom: "4.5rem",
      }}
    >
      {/* Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {patterns[pattern] ?? patterns.lines}
      </div>

      {/* Subtle centre glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isCenter
            ? "radial-gradient(ellipse 55% 65% at 50% 50%, rgba(201,243,29,0.04) 0%, transparent 70%)"
            : "radial-gradient(ellipse 45% 65% at 12% 50%, rgba(201,243,29,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Bottom fade into page */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: "linear-gradient(transparent, #0D2622)" }}
      />

      {/* Content */}
      <div className="wrapper relative z-10">
        <div
          className={`flex flex-col ${isCenter ? "items-center text-center mx-auto max-w-2xl" : "items-start max-w-2xl"}`}
        >
          <Breadcrumb crumbs={breadcrumbs} />

          {/* Eyebrow */}
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-5">
            <div
              className="w-6 h-px flex-shrink-0"
              style={{ background: "#C9F31D" }}
            />
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase"
              style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
            >
              {label}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            {...fadeUp(0.18)}
            className="font-black leading-tight mb-5"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: "var(--white)",
              letterSpacing: "-0.025em",
            }}
          >
            {parts.map((part, i) =>
              part.toLowerCase() === titleHighlight.toLowerCase() ? (
                <span key={i} style={{ color: "var(--secondary)" }}>
                  {part}
                </span>
              ) : (
                part
              ),
            )}
          </motion.h1>

          {/* Subtitle */}
          {subtitle && (
            <motion.p
              {...fadeUp(0.26)}
              className="text-base leading-relaxed mb-8"
              style={{
                color: "var(--text-light)",
                fontFamily: "var(--font-body)",
                maxWidth: "42ch",
              }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Badge */}
          {badge && (
            <motion.span
              {...fadeUp(0.32)}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide"
              style={{
                background: "rgba(201,243,29,0.07)",
                border: "1px solid rgba(201,243,29,0.2)",
                color: "#C9F31D",
                fontFamily: "var(--font-heading)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#C9F31D" }}
              />
              {badge}
            </motion.span>
          )}

          {/* Accent line */}
          <motion.div
            className="mt-10 h-px w-12"
            style={{
              background: "linear-gradient(90deg, #C9F31D, transparent)",
            }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              delay: 0.45,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        </div>
      </div>
    </section>
  );
}

PageHeroSection.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  titleHighlight: PropTypes.string,
  subtitle: PropTypes.string,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({ label: PropTypes.string, href: PropTypes.string }),
  ),
  pattern: PropTypes.oneOf(["lines", "dots", "cross", "arcs"]),
  align: PropTypes.oneOf(["left", "center"]),
  badge: PropTypes.string,
};
