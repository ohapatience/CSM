import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlineCalendar,
  HiOutlineClock,
  HiOutlineVideoCamera,
} from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import PageHeroSection from "../components/PageHeroSection";

// Your links. Change them here if they ever change.
const EMAIL = "ohapatience1@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/ohapatience";
const TWITTER = "https://x.com/ohazinny";
const CALENDLY = "https://calendly.com/ohapatience1/30min";

const CONTACT_LINKS = [
  {
    icon: HiOutlineMail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "linkedin.com/in/ohapatience",
    href: LINKEDIN,
  },
  {
    icon: FaXTwitter,
    label: "Twitter / X",
    value: "@ohazinny",
    href: TWITTER,
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
});

// ── Main ──────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <div style={{ background: "#0D2622", minHeight: "100vh" }}>
      <PageHeroSection
        label="Get In Touch"
        title="Let's talk customer success."
        titleHighlight="customer success."
        subtitle="Hiring for a Customer Success role or looking to support your customer team? Send me a message or book a call, and I'll get back to you within 24 hours."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        pattern="dots"
        align="center"
        badge="Available for remote roles · UTC+1"
      />

      <section className="section" style={{ background: "#0D2622" }}>
        <div className="wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16">
            {/* ── Left: contact links ─────────────────────────────── */}
            <motion.aside {...fadeUp(0)} className="flex flex-col gap-6">
              <p
                className="text-xs font-bold tracking-widest uppercase"
                style={{
                  color: "#C9F31D",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Contact Details
              </p>
              <div className="flex flex-col gap-5">
                {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => {
                  const isMail = href.startsWith("mailto:");
                  return (
                    <a
                      key={label}
                      href={href}
                      target={isMail ? undefined : "_blank"}
                      rel={isMail ? undefined : "noopener noreferrer"}
                      className="flex items-center gap-3 group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "rgba(42,96,87,0.2)",
                          border: "1px solid rgba(42,96,87,0.4)",
                          color: "#4A7A73",
                          transition: "all 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background =
                            "rgba(201,243,29,0.1)";
                          e.currentTarget.style.borderColor =
                            "rgba(201,243,29,0.3)";
                          e.currentTarget.style.color = "#C9F31D";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background =
                            "rgba(42,96,87,0.2)";
                          e.currentTarget.style.borderColor =
                            "rgba(42,96,87,0.4)";
                          e.currentTarget.style.color = "#4A7A73";
                        }}
                      >
                        <Icon size={16} />
                      </div>
                      <div className="min-w-0">
                        <p
                          className="text-xs"
                          style={{
                            color: "#4A7A73",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {label}
                        </p>
                        <p
                          className="text-sm font-semibold break-words"
                          style={{
                            color: "var(--white)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.aside>

            {/* ── Right: booking block ────────────────────────────── */}
            <motion.div {...fadeUp(0.1)} className="lg:col-span-2">
              <p
                className="text-xs font-bold tracking-widest uppercase mb-6"
                style={{
                  color: "#C9F31D",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Book a Meeting
              </p>

              <motion.a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  y: -4,
                  boxShadow: "0 0 36px rgba(201,243,29,0.15)",
                }}
                whileTap={{ scale: 0.99 }}
                className="relative block rounded-3xl p-7 md:p-9 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(145deg, rgba(28,63,57,0.55) 0%, rgba(18,43,39,0.55) 100%)",
                  border: "1px solid rgba(42,96,87,0.5)",
                }}
              >
                {/* soft glow in the corner */}
                <div
                  className="absolute pointer-events-none"
                  style={{
                    top: "-60px",
                    right: "-60px",
                    width: "220px",
                    height: "220px",
                    background:
                      "radial-gradient(circle, rgba(201,243,29,0.12) 0%, transparent 70%)",
                  }}
                />

                <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
                  {/* Calendar icon tile */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "rgba(201,243,29,0.12)",
                      border: "1px solid rgba(201,243,29,0.3)",
                      color: "#C9F31D",
                    }}
                  >
                    <HiOutlineCalendar size={30} />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3
                      className="font-black leading-tight"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--white)",
                        fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Talk to Patience
                    </h3>
                    <p
                      className="text-sm mt-2 leading-relaxed"
                      style={{
                        color: "#7FB3AE",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Pick a time that works for you and let's talk about how I
                      can support your customers and your team.
                    </p>

                    {/* Meeting details */}
                    <div className="flex flex-wrap items-center gap-2 mt-4">
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5"
                        style={{
                          background: "rgba(42,96,87,0.3)",
                          border: "1px solid rgba(42,96,87,0.5)",
                          color: "var(--white)",
                        }}
                      >
                        <HiOutlineClock size={13} style={{ color: "#C9F31D" }} />
                        30 minutes
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 text-xs font-semibold rounded-full px-3 py-1.5"
                        style={{
                          background: "rgba(42,96,87,0.3)",
                          border: "1px solid rgba(42,96,87,0.5)",
                          color: "var(--white)",
                        }}
                      >
                        <HiOutlineVideoCamera
                          size={13}
                          style={{ color: "#C9F31D" }}
                        />
                        Online call
                      </span>
                    </div>
                  </div>
                </div>

                {/* Button row */}
                <div
                  className="relative flex items-center justify-between mt-7 pt-6"
                  style={{ borderTop: "1px solid rgba(42,96,87,0.35)" }}
                >
                  <span
                    className="text-xs"
                    style={{ color: "#4A7A73", fontFamily: "var(--font-body)" }}
                  >
                    Opens my booking calendar
                  </span>
                  <span className="btn btn-primary inline-flex items-center gap-2">
                    Book a Time
                    <HiArrowRight size={15} />
                  </span>
                </div>
              </motion.a>
            </motion.div>
          </div>

          {/* ── Availability: one long line ─────────────────────────── */}
          <motion.div
            {...fadeUp(0.15)}
            className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 py-5"
            style={{
              borderTop: "1px solid rgba(42,96,87,0.4)",
              borderBottom: "1px solid rgba(42,96,87,0.4)",
            }}
          >
            <div className="flex items-center gap-2.5">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#C9F31D" }}
              />
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{
                  color: "#C9F31D",
                  fontFamily: "var(--font-heading)",
                }}
              >
                Available for remote roles
              </span>
            </div>
            <span className="hidden sm:block w-px h-4" style={{ background: "rgba(42,96,87,0.6)" }} />
            <span
              className="text-sm"
              style={{ color: "#7FB3AE", fontFamily: "var(--font-body)" }}
            >
              Based in UTC+1
            </span>
            <span className="hidden sm:block w-px h-4" style={{ background: "rgba(42,96,87,0.6)" }} />
            <span
              className="text-sm"
              style={{ color: "#7FB3AE", fontFamily: "var(--font-body)" }}
            >
              Replies within 24 hours
            </span>
          </motion.div>
        </div>
      </section>
    </div>
  );
}