import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaXTwitter, FaGithub, FaDribbble } from "react-icons/fa6";

const SOCIALS = [
  { label: "LinkedIn",   href: "#", icon: <FaLinkedinIn size={16} /> },
  { label: "Twitter / X",href: "#", icon: <FaXTwitter size={16} /> },
  { label: "GitHub",     href: "#", icon: <FaGithub size={16} /> },
  { label: "Dribbble",   href: "#", icon: <FaDribbble size={16} /> },
];

const LINKS = {
  Navigate: [
    { label: "Home",     href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Blog",     href: "#blog" },
    { label: "Contact",  href: "#contact" },
  ],
  Services: [
    { label: "Project Planning",       href: "#" },
    { label: "Agile Coaching",         href: "#" },
    { label: "Risk Management",        href: "#" },
    { label: "Stakeholder Management", href: "#" },
  ],
};

const CERTIFICATIONS = ["PMP", "CSM", "PRINCE2", "PMI-ACP"];

function FooterLink({ label, href }) {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 5, color: "#C9F31D" }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-2 text-sm py-1 transition-colors"
      style={{ color: "#4A7A73", fontFamily: "'Lato', sans-serif" }}
    >
      <motion.span
        className="w-3 h-px flex-shrink-0"
        style={{ background: "#2A6057" }}
        whileHover={{ width: "16px", background: "#C9F31D" }}
      />
      {label}
    </motion.a>
  );
}

function SocialButton({ label, href, icon }) {
  return (
    <motion.a
      href={href}
      aria-label={label}
      whileHover={{ y: -4, color: "#C9F31D", borderColor: "rgba(201,243,29,0.4)" }}
      whileTap={{ scale: 0.92 }}
      transition={{ duration: 0.2 }}
      className="w-9 h-9 rounded-xl flex items-center justify-center"
      style={{
        background: "rgba(42,96,87,0.15)",
        border: "1px solid rgba(42,96,87,0.4)",
        color: "#4A7A73",
      }}
    >
      {icon}
    </motion.a>
  );
}

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) { setSubmitted(true); setEmail(""); }
  };

  const year = new Date().getFullYear();

  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700;800;900&family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />

      <footer style={{ background: "#0A1E1B", fontFamily: "'Lato', sans-serif" }}>

        {/* ── CTA band ───────────────────────────────────────────── */}
        <div
          className="relative overflow-hidden"
          style={{ background: "#1C3F39", borderTop: "1px solid rgba(42,96,87,0.5)" }}
        >
          <div
            className="absolute right-0 top-0 w-96 h-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 100% at 100% 50%, rgba(201,243,29,0.08) 0%, transparent 70%)",
            }}
          />

          <div className="max-w-6xl mx-auto px-8 md:px-16 py-16 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <motion.div {...fadeUp(0)} className="max-w-md">
              <p className="text-xs tracking-widest uppercase mb-3" style={{ color: "#7FB3AE" }}>
                Ready to deliver?
              </p>
              <h2
                className="text-3xl md:text-4xl font-black leading-tight"
                style={{ fontFamily: "'Raleway', sans-serif", color: "#F4F8F4" }}
              >
                Let's build something{" "}
                <span style={{ color: "#C9F31D" }}>remarkable</span>{" "}
                together.
              </h2>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="flex gap-3 flex-wrap">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(201,243,29,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide inline-flex items-center gap-2"
                style={{
                  background: "#C9F31D",
                  color: "#1C3F39",
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Start a Project
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </motion.a>
              <motion.a
                href="#cv"
                whileHover={{ scale: 1.04, color: "#C9F31D" }}
                whileTap={{ scale: 0.97 }}
                className="px-7 py-3.5 rounded-xl font-bold text-sm tracking-wide transition-colors"
                style={{
                  border: "1.5px solid rgba(201,243,29,0.3)",
                  color: "#F4F8F4",
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                View CV
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* ── Main footer body ───────────────────────────────────── */}
        <div className="max-w-6xl mx-auto px-8 md:px-16 pt-16 pb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

            {/* Brand column */}
            <motion.div {...fadeUp(0)} className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm"
                  style={{ background: "#C9F31D", color: "#1C3F39", fontFamily: "'Raleway', sans-serif" }}
                >
                  PE
                </div>
                <div>
                  <p className="font-black text-sm leading-none" style={{ fontFamily: "'Raleway', sans-serif", color: "#F4F8F4" }}>
                    Patience Ezinne
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#4A7A73" }}>Project Manager</p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "#4A7A73" }}>
                Turning complex visions into delivered outcomes — with precision, clarity, and a human touch.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {CERTIFICATIONS.map((cert) => (
                  <span
                    key={cert}
                    className="px-2.5 py-1 rounded-lg text-xs font-bold"
                    style={{
                      background: "rgba(201,243,29,0.08)",
                      color: "#C9F31D",
                      border: "1px solid rgba(201,243,29,0.2)",
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    {cert}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                {SOCIALS.map((s) => (
                  <SocialButton key={s.label} {...s} />
                ))}
              </div>
            </motion.div>

            {/* Link columns */}
            {Object.entries(LINKS).map(([group, items], gi) => (
              <motion.div key={group} {...fadeUp(0.1 + gi * 0.05)}>
                <h4
                  className="text-xs font-bold tracking-widest uppercase mb-5"
                  style={{ color: "#C9F31D", fontFamily: "'Raleway', sans-serif" }}
                >
                  {group}
                </h4>
                <div className="flex flex-col gap-1">
                  {items.map((item) => (
                    <FooterLink key={item.label} {...item} />
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Newsletter column */}
            <motion.div {...fadeUp(0.2)}>
              <h4
                className="text-xs font-bold tracking-widest uppercase mb-5"
                style={{ color: "#C9F31D", fontFamily: "'Raleway', sans-serif" }}
              >
                Stay Updated
              </h4>
              <p className="text-sm mb-4" style={{ color: "#4A7A73" }}>
                PM insights, case studies, and leadership frameworks — delivered monthly.
              </p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold"
                  style={{ background: "rgba(201,243,29,0.1)", border: "1px solid rgba(201,243,29,0.25)", color: "#C9F31D" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5" /></svg>
                  You're on the list!
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                    style={{
                      background: "rgba(42,96,87,0.15)",
                      border: "1px solid rgba(42,96,87,0.4)",
                      color: "#F4F8F4",
                      fontFamily: "'Lato', sans-serif",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(201,243,29,0.4)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(42,96,87,0.4)")}
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full py-3 rounded-xl text-xs font-bold tracking-widest uppercase"
                    style={{
                      background: "#1C3F39",
                      color: "#C9F31D",
                      border: "1px solid rgba(201,243,29,0.25)",
                      fontFamily: "'Raleway', sans-serif",
                    }}
                  >
                    Subscribe
                  </motion.button>
                </form>
              )}

              <div
                className="mt-5 flex items-center gap-2 text-xs"
                style={{ color: "#4A7A73" }}
              >
                <span className="w-2 h-2 rounded-full animate-pulse flex-shrink-0" style={{ background: "#C9F31D" }} />
                Available for Q3 2025 projects
              </div>
            </motion.div>
          </div>

          {/* ── Bottom bar ──────────────────────────────────────── */}
          <motion.div
            {...fadeUp(0.3)}
            className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
            style={{ borderTop: "1px solid rgba(42,96,87,0.3)" }}
          >
            <p className="text-xs text-center md:text-left" style={{ color: "#2A6057" }}>
              © {year} Patience Ezinne. Crafted with intention.
            </p>

            <div className="hidden md:flex items-center gap-3">
              <div className="w-16 h-px" style={{ background: "linear-gradient(to right, transparent, #2A6057)" }} />
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#C9F31D" }} />
              <div className="w-16 h-px" style={{ background: "linear-gradient(to left, transparent, #2A6057)" }} />
            </div>

            <p className="text-xs" style={{ color: "#2A6057" }}>
              PMP · CSM · PRINCE2 · PMI-ACP
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
}