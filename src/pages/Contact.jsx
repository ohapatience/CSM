import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlineUser,
  HiOutlineOfficeBuilding,
  HiOutlineChat,
} from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import PageHeroSection from "../components/PageHeroSection";

const PROJECT_TYPES = [
  "Project Management",
  "Website Revamp",
  "Product Planning & Delivery",
  "Executive Operations Support",
  "Other",
];

const CONTACT_LINKS = [
  {
    icon: HiOutlineMail,
    label: "Email",
    value: "patience@example.com",
    href: "mailto:patience@example.com",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    value: "linkedin.com/in/patienceezinne",
    href: "https://linkedin.com/in/patienceezinne",
  },
  {
    icon: FaXTwitter,
    label: "Twitter / X",
    value: "@patienceezinne",
    href: "https://twitter.com/patienceezinne",
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
});

// ── Reusable field wrapper ────────────────────────────────────────────────────
function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: "#7FB3AE", fontFamily: "var(--font-heading)" }}
      >
        {label}
        {required && <span style={{ color: "#C9F31D" }}> *</span>}
      </label>
      {children}
    </div>
  );
}

// ── Input styles ──────────────────────────────────────────────────────────────
const inputBase = {
  background: "rgba(28,63,57,0.3)",
  border: "1px solid rgba(42,96,87,0.45)",
  color: "var(--white)",
  fontFamily: "var(--font-body)",
  borderRadius: "12px",
  outline: "none",
  width: "100%",
  fontSize: "0.875rem",
  transition: "border-color 0.2s",
};

function useInputFocus() {
  return {
    onFocus: (e) => (e.target.style.borderColor = "rgba(201,243,29,0.5)"),
    onBlur: (e) => (e.target.style.borderColor = "rgba(42,96,87,0.45)"),
  };
}

// ── Main ──────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  const focus = useInputFocus();
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200)); // replace with real submission
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div style={{ background: "#0D2622", minHeight: "100vh" }}>
      <PageHeroSection
        label="Get In Touch"
        title="Let's work together."
        titleHighlight="together."
        subtitle="Have a project in mind or want to explore how I can help? Send a message and I'll get back to you within 24 hours."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        pattern="dots"
        align="center"
        badge="Available for new projects"
      />

      <section className="section" style={{ background: "#0D2622" }}>
        <div className="wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-16">
            {/* ── Left — contact info ─────────────────────────────── */}
            <motion.aside {...fadeUp(0)} className="flex flex-col gap-8">
              <div>
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-5"
                  style={{
                    color: "#C9F31D",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  Contact Details
                </p>
                <div className="flex flex-col gap-4">
                  {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
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
                        <Icon size={15} />
                      </div>
                      <div>
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
                          className="text-sm font-semibold"
                          style={{
                            color: "var(--white)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          {value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability note */}
              <div
                className="rounded-2xl p-5"
                style={{
                  background: "rgba(28,63,57,0.3)",
                  border: "1px solid rgba(42,96,87,0.4)",
                }}
              >
                <div className="flex items-center gap-2 mb-3">
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
                    Availability
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: "var(--text-light)",
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Currently accepting new projects. Typical response time is
                  within{" "}
                  <strong style={{ color: "var(--white)" }}>24 hours</strong>.
                </p>
              </div>
            </motion.aside>

            {/* ── Right — form ────────────────────────────────────── */}
            <motion.div {...fadeUp(0.1)} className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {submitted ? (
                  // ── Success state ──
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center rounded-3xl p-16 h-full"
                    style={{
                      background: "rgba(28,63,57,0.25)",
                      border: "1px solid rgba(42,96,87,0.4)",
                      minHeight: "420px",
                    }}
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                      style={{
                        background: "rgba(201,243,29,0.12)",
                        border: "1px solid rgba(201,243,29,0.25)",
                      }}
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#C9F31D"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <h3
                      className="font-black text-2xl mb-3"
                      style={{
                        fontFamily: "var(--font-heading)",
                        color: "var(--white)",
                      }}
                    >
                      Message sent!
                    </h3>
                    <p
                      className="text-sm leading-relaxed max-w-xs"
                      style={{
                        color: "var(--text-light)",
                        fontFamily: "var(--font-body)",
                      }}
                    >
                      Thanks for reaching out, {form.name.split(" ")[0]}. I'll
                      review your message and get back to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  // ── Form ──
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="rounded-3xl p-8 md:p-10 flex flex-col gap-6"
                    style={{
                      background: "rgba(20,50,45,0.45)",
                      border: "1px solid rgba(42,96,87,0.4)",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Full Name" required>
                        <div className="relative">
                          <HiOutlineUser
                            size={15}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                            style={{ color: "#4A7A73" }}
                          />
                          <input
                            type="text"
                            placeholder="Patience Ezinne"
                            required
                            value={form.name}
                            onChange={set("name")}
                            style={{
                              ...inputBase,
                              padding: "0.75rem 0.875rem 0.75rem 2.5rem",
                            }}
                            {...focus}
                          />
                        </div>
                      </Field>

                      <Field label="Email Address" required>
                        <div className="relative">
                          <HiOutlineMail
                            size={15}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                            style={{ color: "#4A7A73" }}
                          />
                          <input
                            type="email"
                            placeholder="you@company.com"
                            required
                            value={form.email}
                            onChange={set("email")}
                            style={{
                              ...inputBase,
                              padding: "0.75rem 0.875rem 0.75rem 2.5rem",
                            }}
                            {...focus}
                          />
                        </div>
                      </Field>
                    </div>

                    {/* Company + Project Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <Field label="Company / Startup">
                        <div className="relative">
                          <HiOutlineOfficeBuilding
                            size={15}
                            className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                            style={{ color: "#4A7A73" }}
                          />
                          <input
                            type="text"
                            placeholder="Optional"
                            value={form.company}
                            onChange={set("company")}
                            style={{
                              ...inputBase,
                              padding: "0.75rem 0.875rem 0.75rem 2.5rem",
                            }}
                            {...focus}
                          />
                        </div>
                      </Field>

                      <Field label="Project Type" required>
                        <select
                          required
                          value={form.projectType}
                          onChange={set("projectType")}
                          style={{
                            ...inputBase,
                            padding: "0.75rem 0.875rem",
                            appearance: "none",
                            cursor: "pointer",
                          }}
                          {...focus}
                        >
                          <option value="" disabled>
                            Select a service
                          </option>
                          {PROJECT_TYPES.map((t) => (
                            <option
                              key={t}
                              value={t}
                              style={{ background: "#1C3F39" }}
                            >
                              {t}
                            </option>
                          ))}
                        </select>
                      </Field>
                    </div>

                    {/* Message */}
                    <Field label="Message" required>
                      <div className="relative">
                        <HiOutlineChat
                          size={15}
                          className="absolute left-3.5 top-3.5 pointer-events-none"
                          style={{ color: "#4A7A73" }}
                        />
                        <textarea
                          rows={5}
                          placeholder="Briefly describe your project or what you need help with…"
                          required
                          value={form.message}
                          onChange={set("message")}
                          style={{
                            ...inputBase,
                            padding: "0.75rem 0.875rem 0.75rem 2.5rem",
                            resize: "vertical",
                          }}
                          {...focus}
                        />
                      </div>
                    </Field>

                    {/* Submit */}
                    <motion.button
                      type="submit"
                      disabled={loading}
                      whileHover={
                        !loading
                          ? {
                              scale: 1.02,
                              boxShadow: "0 0 24px rgba(201,243,29,0.25)",
                            }
                          : {}
                      }
                      whileTap={!loading ? { scale: 0.98 } : {}}
                      className="btn btn-primary self-start inline-flex items-center gap-2 mt-2"
                      style={{
                        opacity: loading ? 0.7 : 1,
                        cursor: loading ? "not-allowed" : "pointer",
                      }}
                    >
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                          </svg>
                          Sending…
                        </>
                      ) : (
                        <>
                          Send Message
                          <HiArrowRight size={15} />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
