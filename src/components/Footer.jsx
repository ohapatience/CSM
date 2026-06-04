import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const SOCIALS = [
  { label: "LinkedIn", href: "#", icon: <FaLinkedinIn size={16} /> },
  { label: "Twitter / X", href: "#", icon: <FaXTwitter size={16} /> },
];

const LINKS = {
  Navigate: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],
  Services: [
    { label: "Technical Project Management", href: "/services#tpm" },
    { label: "Product Planning & Delivery", href: "/services#product" },
    { label: "Website Revamp Coordination", href: "/services#website" },
    { label: "Brand & Creative Coordination", href: "/services#brand" },
    { label: "Executive Operations Support", href: "/services#ops" },
  ],
};

function FooterLink({ label, href }) {
  return (
    <motion.a
      href={href}
      whileHover={{ x: 5, color: "#C9F31D" }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-2 text-sm py-1 transition-colors"
      style={{ color: "#4A7A73", fontFamily: "var(--font-body)" }}
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
      whileHover={{
        y: -4,
        color: "#C9F31D",
        borderColor: "rgba(201,243,29,0.4)",
      }}
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
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const year = new Date().getFullYear();

  const fadeUp = (delay) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <footer style={{ background: "#0A1E1B", fontFamily: "var(--font-body)" }}>
      {/* ── Top divider ────────────────────────────────────────── */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(42,96,87,0.5), transparent)",
        }}
      />

      {/* ── Main footer body ───────────────────────────────────── */}
      <div className="wrapper pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <motion.div {...fadeUp(0)} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm"
                style={{
                  background: "#C9F31D",
                  color: "#1C3F39",
                  fontFamily: "var(--font-heading)",
                }}
              >
                PO
              </div>
              <div>
                <p
                  className="font-black text-sm leading-none"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "#F4F8F4",
                  }}
                >
                  Patience Oha
                </p>
                <p className="text-xs mt-0.5" style={{ color: "#4A7A73" }}>
                  Technical Project Manager
                </p>
              </div>
            </div>

            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#4A7A73" }}
            >
              Turning complex visions into delivered outcomes — with precision,
              clarity, and a human touch.
            </p>

            <div className="flex gap-2">
              {SOCIALS.map((s) => (
                <SocialButton key={s.label} {...s} />
              ))}
            </div>
          </motion.div>

          {/* Navigate + Services columns */}
          {Object.entries(LINKS).map(([group, items], gi) => (
            <motion.div key={group} {...fadeUp(0.1 + gi * 0.05)}>
              <h4
                className="text-xs font-bold tracking-widest uppercase mb-5"
                style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
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
              style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
            >
              Stay Updated
            </h4>
            <p className="text-sm mb-4" style={{ color: "#4A7A73" }}>
              PM insights, case studies, and leadership frameworks — delivered
              monthly.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold"
                style={{
                  background: "rgba(201,243,29,0.1)",
                  border: "1px solid rgba(201,243,29,0.25)",
                  color: "#C9F31D",
                }}
              >
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
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                You're on the list!
              </motion.div>
            ) : (
              <div className="flex flex-col gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                  style={{
                    background: "rgba(42,96,87,0.15)",
                    border: "1px solid rgba(42,96,87,0.4)",
                    color: "#F4F8F4",
                    fontFamily: "var(--font-body)",
                  }}
                  onFocus={(e) =>
                    (e.target.style.borderColor = "rgba(201,243,29,0.4)")
                  }
                  onBlur={(e) =>
                    (e.target.style.borderColor = "rgba(42,96,87,0.4)")
                  }
                />
                <motion.button
                  onClick={() => {
                    if (email) {
                      setSubmitted(true);
                      setEmail("");
                    }
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full py-3 rounded-xl text-xs font-bold tracking-widest uppercase"
                  style={{
                    background: "#1C3F39",
                    color: "#C9F31D",
                    border: "1px solid rgba(201,243,29,0.25)",
                    fontFamily: "var(--font-heading)",
                    cursor: "pointer",
                  }}
                >
                  Subscribe
                </motion.button>
              </div>
            )}

            <div
              className="mt-5 flex items-center gap-2 text-xs"
              style={{ color: "#4A7A73" }}
            >
              <span
                className="w-2 h-2 rounded-full animate-pulse flex-shrink-0"
                style={{ background: "#C9F31D" }}
              />
              Available for new projects
            </div>
          </motion.div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────────── */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid rgba(42,96,87,0.3)" }}
        >
          <p
            className="text-xs text-center md:text-left"
            style={{ color: "#2A6057" }}
          >
            © {year} Patience Oha. Crafted with intention.
          </p>

          <div className="hidden md:flex items-center gap-3">
            <div
              className="w-16 h-px"
              style={{
                background: "linear-gradient(to right, transparent, #2A6057)",
              }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#C9F31D" }}
            />
            <div
              className="w-16 h-px"
              style={{
                background: "linear-gradient(to left, transparent, #2A6057)",
              }}
            />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
