import { motion } from "framer-motion";

// ── Your tools (the same tools shown on your About page) ────────────────────
// If a logo doesn't load, the tool's first letter is shown instead.
const TOOLS = [
  { name: "HubSpot", icon: "https://cdn.simpleicons.org/hubspot/C9F31D" },
  { name: "Zendesk", icon: "https://cdn.simpleicons.org/zendesk/C9F31D" },
  { name: "Freshdesk" },
  { name: "Jira", icon: "https://cdn.simpleicons.org/jira/C9F31D" },
  { name: "Notion", icon: "https://cdn.simpleicons.org/notion/C9F31D" },
  { name: "Trello", icon: "https://cdn.simpleicons.org/trello/C9F31D" },
  { name: "Asana", icon: "https://cdn.simpleicons.org/asana/C9F31D" },
  { name: "Slack", icon: "https://cdn.simpleicons.org/slack/C9F31D" },
  { name: "Google Workspace", icon: "https://cdn.simpleicons.org/google/C9F31D" },
  { name: "Calendly", icon: "https://cdn.simpleicons.org/calendly/C9F31D" },
  { name: "Canva", icon: "https://cdn.simpleicons.org/canva/C9F31D" },
  { name: "Mixpanel", icon: "https://cdn.simpleicons.org/mixpanel/C9F31D" },
  { name: "Intercom", icon: "https://cdn.simpleicons.org/intercom/C9F31D" },
  { name: "Zoom", icon: "https://cdn.simpleicons.org/zoom/C9F31D" },
  { name: "Claude" },
  { name: "Gemini" },
];

// Repeat the list so the scrolling loop looks continuous
const TRACK = [...TOOLS, ...TOOLS];

function ToolLogo({ tool }) {
  if (tool.icon) {
    return (
      <img
        src={tool.icon}
        alt={tool.name}
        width={18}
        height={18}
        onError={(e) => {
          e.target.style.display = "none";
        }}
      />
    );
  }
  return (
    <span
      className="w-[18px] h-[18px] flex items-center justify-center text-[10px] font-black rounded"
      style={{ color: "#C9F31D", background: "rgba(201,243,29,0.12)" }}
    >
      {tool.name.charAt(0)}
    </span>
  );
}

export default function ToolsSection() {
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
              <div className="w-8 h-px" style={{ background: "var(--secondary)" }} />
              <span
                className="text-xs font-bold tracking-[0.25em] uppercase"
                style={{ color: "var(--secondary)", fontFamily: "var(--font-heading)" }}
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
            style={{ color: "var(--text-light)", fontFamily: "var(--font-body)" }}
          >
            I use customer success and support tools to onboard clients, keep
            customers engaged, track every interaction, and keep customers
            moving from first contact to long-term retention.
          </p>
        </motion.div>
      </div>

      {/* ── Scrolling tool logos ───────────────────────────────── */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(90deg, #0A1E1B, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
          style={{ background: "linear-gradient(270deg, #0A1E1B, transparent)" }}
        />

        <div className="overflow-hidden">
          <motion.div
            className="flex items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
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
                <ToolLogo tool={tool} />
                <span
                  className="text-sm font-semibold whitespace-nowrap"
                  style={{ color: "var(--white)", fontFamily: "var(--font-body)" }}
                >
                  {tool.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}