import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import heroImage from "../assets/ezinne.png";

// ── Animation helpers ─────────────────────────────────────────────────────────
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

// ── Social links shown under the photo ────────────────────────────────────────
// TODO: replace the placeholder links with your real profiles
const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/YOUR-PROFILE",
    icon: FaLinkedinIn,
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/YOUR-UPWORK-PROFILE",
    icon: SiUpwork,
  },
  {
    label: "Email",
    href: "mailto:your@email.com",
    icon: FaEnvelope,
  },
];

// ── Main component ────────────────────────────────────────────────────────────
export default function AboutSection() {
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
          {/* ── LEFT — Photo card ──────────────────────────────────── */}
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
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
                  background: "linear-gradient(145deg, #1C3F39 0%, #122B27 100%)",
                  border: "1px solid rgba(42,96,87,0.6)",
                  boxShadow:
                    "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                {/* Photo area */}
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <img
                    src={heroImage}
                    alt="Patience Oha"
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
                    alt="Patience Oha"
                    className="w-[90%] max-h-[90%] object-cover"
                  />

                  {/* Bottom gradient + name strip */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-40"
                    style={{
                      background: "linear-gradient(transparent, rgba(18,43,39,0.95))",
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
                      Customer Success Manager
                    </p>
                  </div>
                </div>

                {/* Card footer: CSM + social icons */}
                <div
                  className="px-6 py-4 flex items-center justify-between"
                  style={{ borderTop: "1px solid rgba(42,96,87,0.3)" }}
                >
                  <span
                    className="text-xs font-black tracking-widest"
                    style={{
                      color: "var(--secondary)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    CSM
                  </span>
                  <div className="flex gap-2">
                    {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target={href.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        aria-label={label}
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
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
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
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
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
            {/* Heading and paragraphs */}
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
                Turning customer experiences into{" "}
                <span
                  className="relative inline-block"
                  style={{ color: "var(--secondary)" }}
                >
                  lasting value
                  <motion.span
                    className="absolute -bottom-1 left-0 h-px w-full"
                    style={{ background: "rgba(201,243,29,0.4)" }}
                    initial={{ scaleX: 0, originX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  />
                </span>
                .
              </h2>
              <p className="text-base leading-relaxed text-text-light">
                I'm Patience Oha, a Customer Success professional with a
                background in customer-facing roles, customer support, and
                technical project coordination.
              </p>
              <p className="text-base mt-2 leading-relaxed text-text-light">
                My experience spans supporting the adoption of digital systems
                by over 2,000 users, working with software clients, and helping
                customers navigate products and services. I bring this experience
                into Customer Success, focusing on onboarding, product adoption,
                customer engagement, and retention.
              </p>
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
                Learn More
                <HiArrowRight size={16} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}