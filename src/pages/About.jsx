import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import PageHeroSection from "../components/PageHeroSection";
import heroImage from "../assets/ezinne.png";
import { LINKEDIN_URL, UPWORK_URL, EMAIL } from "../links";

// ── Content ──────────────────────────────────────────────────────────────────
const SOCIALS = [
  { label: "LinkedIn", href: LINKEDIN_URL, icon: FaLinkedinIn },
  { label: "Upwork", href: UPWORK_URL, icon: SiUpwork },
  { label: "Email", href: `mailto:${EMAIL}`, icon: FaEnvelope },
];

const JOURNEY_MARKERS = [
  { value: "2,000+", label: "Users supported through digital system adoption" },
  { value: "3+", label: "Case studies" },
  { value: "CSM", label: "Customer Success focus" },
];

const JOURNEY = [
  {
    highlight: "The Foundation",
    text: "My professional journey began in customer-facing and administrative roles, where I developed strong communication, organization, problem-solving, and relationship-building skills. Working closely with customers and teams helped me understand the importance of customer experience, service delivery, and meaningful interactions.",
  },
  {
    highlight: "The Transition",
    text: "As I grew into technical project coordination, I became increasingly interested in what happens beyond product delivery. I wanted to understand how customers actually use products, adopt new solutions, and realize value. This curiosity sparked my interest in Customer Success.",
  },
  {
    highlight: "Growing Experience",
    text: "Through customer support and software project coordination, I gained experience supporting digital system adoption for over 2,000 users and working with software clients. These experiences strengthened my understanding of customer needs, onboarding challenges, product usability, and the importance of helping customers achieve their goals.",
  },
  {
    highlight: "Today",
    text: "Today, I'm focused on bringing my experience in customer support, technical coordination, and customer-centered thinking into Customer Success, helping businesses improve onboarding, product adoption, engagement, and retention.",
  },
];

const CS_THINKING = [
  {
    title: "Customers Don't Leave Overnight",
    text: "By the time a customer decides to leave, disengagement may have been happening for weeks. Declining usage, missed interactions, and unanswered concerns can be early signs. Paying attention early creates opportunities to understand what's changed.",
  },
  {
    title: "Onboarding Sets the Pace",
    text: "A successful signup doesn't always mean a successful start. Customers need clear guidance, relevant support, and a smooth path to experiencing the value of a product.",
  },
  {
    title: "Adoption Is More Than Usage",
    text: "A customer logging in doesn't necessarily mean they're getting value. What matters is whether they're using the right features to achieve the outcomes they signed up for.",
  },
  {
    title: "Engagement Should Have Purpose",
    text: "Customer communication should go beyond checking in. Every interaction should help uncover needs, address concerns, share relevant guidance, or move the customer closer to their goals.",
  },
  {
    title: "Feedback Should Lead Somewhere",
    text: "Customer feedback is only valuable when businesses listen, identify patterns, and use those insights to improve the customer experience and product.",
  },
  {
    title: "Retention Begins With Consistent Value",
    text: "Customers are more likely to stay when they continue to see the value of a product. Building that relationship requires attention, proactive support, and an understanding of changing customer needs.",
  },
];

// "level" is how full the bar is (0 to 100). Change any number you like.
const SKILLS = [
  { name: "Customer Onboarding", level: 90 },
  { name: "Customer Relationship Management", level: 85 },
  { name: "Product Adoption", level: 80 },
  { name: "Customer Engagement", level: 85 },
  { name: "Customer Support", level: 95 },
  { name: "Client Communication", level: 90 },
  { name: "Customer Feedback", level: 75 },
  { name: "Issue Resolution", level: 90 },
  { name: "Retention Support", level: 70 },
  { name: "Account Coordination", level: 80 },
];

// Certifications and education, most relevant first
const CERTIFICATIONS = [
  { name: "Customer Success Management Fundamentals", issuer: "LinkedIn Learning" },
  { name: "Customer Success: Skills for Successful Client Interactions", issuer: "LinkedIn Learning" },
  { name: "Google Project Management Certificate", issuer: "Google" },
  { name: "Customer Success Management in Training", issuer: "Digital Witch" },
  { name: "HubSpot Sales Hub Certification", issuer: "HubSpot" },
];

const EDUCATION = [
  { name: "B.Sc. Library and Information Science", issuer: "2019" },
];

// ── Animation helper ─────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { delay, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
});

// ── Section label ────────────────────────────────────────────────────────────
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
      <div className="flex-1 h-px" style={{ background: "rgba(42,96,87,0.4)" }} />
    </motion.div>
  );
}

// ── Section 1: Intro with photo card ─────────────────────────────────────────
function IntroSection() {
  return (
    <section
      className="relative overflow-hidden section"
      style={{ background: "#0D2622" }}
    >
      <div className="wrapper relative z-10">
        <SectionLabel>About Me</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center">
          {/* Photo card */}
          <motion.div
            initial={{ opacity: 0, x: -48 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="relative w-full max-w-sm">
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

              <div
                className="relative z-10 rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(145deg, #1C3F39 0%, #122B27 100%)",
                  border: "1px solid rgba(42,96,87,0.6)",
                  boxShadow:
                    "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden">
                  <img src={heroImage} alt="Patience Oha" className="w-full object-cover" />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(ellipse 70% 60% at 50% 80%, rgba(201,243,29,0.06) 0%, transparent 70%)",
                    }}
                  />
                  <div
                    className="absolute bottom-0 left-0 right-0 h-40"
                    style={{
                      background: "linear-gradient(transparent, rgba(18,43,39,0.95))",
                    }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 px-6 pb-5 z-10">
                    <p
                      className="text-lg font-black leading-none"
                      style={{ fontFamily: "var(--font-heading)", color: "var(--white)" }}
                    >
                      Patience Oha
                    </p>
                    <p className="text-xs mt-1" style={{ color: "#7FB3AE" }}>
                      Customer Success Manager
                    </p>
                  </div>
                </div>

                {/* Footer: CSM and social icons */}
                <div
                  className="px-6 py-4 flex items-center justify-between"
                  style={{ borderTop: "1px solid rgba(42,96,87,0.3)" }}
                >
                  <span
                    className="text-xs font-black tracking-widest"
                    style={{ color: "var(--secondary)", fontFamily: "var(--font-heading)" }}
                  >
                    CSM
                  </span>
                  <div className="flex gap-2">
                    {SOCIALS.map(({ label, href, icon: Icon }) => (
                      <motion.a
                        key={label}
                        href={href}
                        target={href.startsWith("mailto:") ? undefined : "_blank"}
                        rel="noopener noreferrer"
                        aria-label={label}
                        whileHover={{ y: -2, color: "#C9F31D" }}
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{ background: "rgba(42,96,87,0.3)", color: "#4A7A73" }}
                      >
                        <Icon size={12} />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>

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
                    style={{ color: "var(--white)", fontFamily: "var(--font-heading)" }}
                  >
                    Open to work
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Intro text */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
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
                <span style={{ color: "var(--secondary)" }}>lasting value.</span>
              </h2>
              <p className="text-base leading-relaxed text-text-light">
                I'm Patience Oha, a Customer Success professional with a background
                in customer-facing roles, customer support, and technical project
                coordination.
              </p>
              <p className="text-base mt-2 leading-relaxed text-text-light">
                My experience spans supporting the adoption of digital systems by
                over 2,000 users, working with software clients, and helping
                customers navigate products and services. I bring this experience
                into Customer Success, focusing on onboarding, product adoption,
                customer engagement, and retention.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 flex-wrap pt-2"
            >
              {/* Change /projects if your case studies page uses a different address */}
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(201,243,29,0.3)" }}
                whileTap={{ scale: 0.97 }}
                className="btn btn-primary inline-flex items-center gap-2"
              >
                Explore My Case Study
                <HiArrowRight size={16} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 2: Journey ───────────────────────────────────────────────────────
function JourneySection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 0.7], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden section"
      style={{ background: "#0A1F1C" }}
    >
      <div className="wrapper relative z-10">
        <SectionLabel>My Journey</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-14 xl:gap-24">
          {/* Left: heading and markers */}
          <motion.div
            {...fadeUp(0.05)}
            className="lg:sticky lg:top-28 flex flex-col gap-10 self-start"
          >
            <h2
              className="font-black leading-tight"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                color: "var(--white)",
                letterSpacing: "-0.02em",
              }}
            >
              From support to <span style={{ color: "#C9F31D" }}>success.</span>
            </h2>

            <div className="relative flex flex-col gap-6 pl-6">
              <div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: "rgba(42,96,87,0.3)" }}
              />
              <motion.div
                className="absolute left-0 top-0 w-px origin-top"
                style={{
                  height: lineHeight,
                  background: "linear-gradient(to bottom, #C9F31D, rgba(201,243,29,0.3))",
                }}
              />
              {JOURNEY_MARKERS.map(({ value, label }, i) => (
                <motion.div
                  key={value}
                  {...fadeUp(0.18 + i * 0.08)}
                  className="flex flex-col gap-0.5"
                >
                  <span
                    className="font-black"
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.4rem, 2.5vw, 1.8rem)",
                      color: "#C9F31D",
                    }}
                  >
                    {value}
                  </span>
                  <span className="text-xs" style={{ color: "#4A7A73" }}>
                    {label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: story */}
          <div className="flex flex-col gap-10">
            {JOURNEY.map((p, i) => (
              <div key={p.highlight}>
                <motion.div {...fadeUp(0)}>
                  <span
                    className="block text-xs font-bold tracking-[0.22em] uppercase mb-2"
                    style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
                  >
                    {p.highlight}
                  </span>
                  <p className="text-base leading-[1.85]" style={{ color: "#7FB3AE" }}>
                    {p.text}
                  </p>
                </motion.div>
                {i < JOURNEY.length - 1 && (
                  <div
                    className="mt-10 h-px w-full"
                    style={{ background: "rgba(42,96,87,0.25)" }}
                  />
                )}
              </div>
            ))}

            <motion.blockquote
              {...fadeUp(0.1)}
              className="relative mt-4 pl-6 py-1"
              style={{ borderLeft: "2px solid #C9F31D" }}
            >
              <p
                className="text-base font-bold leading-relaxed italic"
                style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-heading)" }}
              >
                "When customers succeed with a product, businesses grow with them."
              </p>
              <span
                className="block mt-2 text-xs font-bold tracking-widest uppercase"
                style={{ color: "#C9F31D" }}
              >
                — Patience Oha
              </span>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 3: How I Think About Customer Success ───────────────────────────
function ThinkingSection() {
  return (
    <section
      className="relative overflow-hidden section"
      style={{ background: "#0D2622" }}
    >
      <div className="wrapper relative z-10">
        <SectionLabel>How I Think</SectionLabel>

        <motion.h2
          {...fadeUp(0.05)}
          className="font-black leading-tight mb-4"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--white)",
            letterSpacing: "-0.02em",
          }}
        >
          How I Think About <span style={{ color: "#C9F31D" }}>Customer Success</span>
        </motion.h2>
        <motion.p
          {...fadeUp(0.1)}
          className="text-lg font-bold mb-14"
          style={{ color: "rgba(255,255,255,0.75)", fontFamily: "var(--font-heading)" }}
        >
          Success starts with understanding the customer.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {CS_THINKING.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp(0.05 + i * 0.05)}
              className="relative rounded-2xl p-7"
              style={{
                background: "rgba(28,63,57,0.28)",
                border: "1px solid rgba(42,96,87,0.35)",
              }}
            >
              <span
                className="block font-black leading-none mb-4"
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2rem",
                  color: "rgba(201,243,29,0.6)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3
                className="font-black mb-3"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "var(--white)",
                  fontSize: "1.05rem",
                }}
              >
                {item.title}
              </h3>
              <p className="text-sm leading-[1.8]" style={{ color: "#7FB3AE" }}>
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 4: What Makes Me Human ─────────────────────────────────────────
function HumanSection() {
  return (
    <section
      className="relative overflow-hidden section"
      style={{ background: "#0A1F1C" }}
    >
      <div className="wrapper relative z-10">
        <SectionLabel>What Makes Me Human</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp(0.05)}>
            <p className="text-base leading-[1.85]" style={{ color: "#7FB3AE" }}>
              I'm a great listener, a curious mind, and a quick learner. Outside
              work, I enjoy the little things that make life interesting.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div
              {...fadeUp(0.1)}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(28,63,57,0.28)",
                border: "1px solid rgba(42,96,87,0.35)",
              }}
            >
              <span
                className="block text-xs font-bold tracking-[0.22em] uppercase mb-3"
                style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
              >
                Favourite Book
              </span>
              <p className="text-base" style={{ color: "var(--white)" }}>
                <em>The Alchemist</em> by Paulo Coelho
              </p>
            </motion.div>

            <motion.div
              {...fadeUp(0.15)}
              className="rounded-2xl p-6"
              style={{
                background: "rgba(28,63,57,0.28)",
                border: "1px solid rgba(42,96,87,0.35)",
              }}
            >
              <span
                className="block text-xs font-bold tracking-[0.22em] uppercase mb-3"
                style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
              >
                Favourite Pastime
              </span>
              <p className="text-base" style={{ color: "var(--white)" }}>
                Watching good TV shows and series, especially a great Christmas series.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Section 5: Skills (animated bars) ───────────────────────────────────────
function SkillsSection() {
  return (
    <section
      className="relative overflow-hidden section"
      style={{ background: "#0D2622" }}
    >
      <div className="wrapper relative z-10">
        <SectionLabel>Skills</SectionLabel>

        <div className="flex flex-col gap-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              {...fadeUp(0.05 + i * 0.05)}
              className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-14 lg:items-center"
            >
              {/* Skill name */}
              <div className="flex items-center gap-3">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#C9F31D" }}
                />
                <span className="text-sm" style={{ color: "#7FB3AE" }}>
                  {skill.name}
                </span>
              </div>

              {/* Animated bar */}
              <div
                className="w-full h-2 rounded-full overflow-hidden"
                style={{ background: "rgba(42,96,87,0.35)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: "linear-gradient(to right, rgba(201,243,29,0.5), #C9F31D)",
                    boxShadow: "0 0 12px rgba(201,243,29,0.35)",
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.2 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Section 6: Certifications & Education ───────────────────────────────────
function CertificationsSection() {
  return (
    <section
      className="relative overflow-hidden section"
      style={{ background: "#0A1F1C" }}
    >
      <div className="wrapper relative z-10">
        <SectionLabel>Certifications & Education</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Certifications */}
          <motion.div {...fadeUp(0.05)}>
            <h3
              className="font-black mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--white)",
                fontSize: "1.4rem",
              }}
            >
              Certifications
            </h3>
            <div className="flex flex-col gap-3">
              {CERTIFICATIONS.map((c) => (
                <div
                  key={c.name}
                  className="p-4 rounded-xl"
                  style={{
                    background: "rgba(28,63,57,0.3)",
                    border: "1px solid rgba(42,96,87,0.35)",
                  }}
                >
                  <p className="text-sm font-semibold" style={{ color: "var(--white)" }}>
                    {c.name}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#4A7A73" }}>
                    {c.issuer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div {...fadeUp(0.1)}>
            <h3
              className="font-black mb-6"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--white)",
                fontSize: "1.4rem",
              }}
            >
              Education
            </h3>
            <div className="flex flex-col gap-3">
              {EDUCATION.map((e) => (
                <div
                  key={e.name}
                  className="p-4 rounded-xl"
                  style={{
                    background: "rgba(28,63,57,0.3)",
                    border: "1px solid rgba(42,96,87,0.35)",
                  }}
                >
                  <p className="text-sm font-semibold" style={{ color: "var(--white)" }}>
                    {e.name}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "#4A7A73" }}>
                    {e.issuer}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
const About = () => {
  return (
    <>
      <PageHeroSection
        label="About Me"
        title="Helping customers succeed from day one."
        titleHighlight="succeed"
        subtitle="A customer success professional helping businesses build stronger customer relationships."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        pattern="dots"
        align="left"
        badge="Open to work"
      />
      <IntroSection />
      <JourneySection />
      <ThinkingSection />
      <HumanSection />
      <SkillsSection />
      <CertificationsSection />
    </>
  );
};

export default About;