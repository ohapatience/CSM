import { motion } from "framer-motion";
import { HiOutlineDownload } from "react-icons/hi";
import { HiArrowRight } from "react-icons/hi2";
import PageHeroSection from "../components/PageHeroSection";

// ── Links ────────────────────────────────────────────────────────────────────
// When your CV is in the public folder, change "#" to "/cv.pdf"
const CV_URL = "#";
const CONTACT_URL = "/contact";

// ── Experience (newest first) ────────────────────────────────────────────────
const EXPERIENCE = [
  {
    role: "Customer Success Manager",
    company: "Digital Witch",
    location: "Remote",
    period: "2026 to Present",
    points: [
      "Guided 1,000+ learners through enrolment and onboarding across IT support, virtual assistant, and other training programs.",
      "Ensured learners got value from their courses, helping them reach early milestones.",
      "Re-engaged inactive learners to bring them back to their courses.",
      "Supported learners who had completed one course in moving on to higher-level training.",
    ],
  },
  {
    role: "Customer Onboarding & Project Coordinator",
    company: "Solid Fiction",
    location: "Remote",
    period: "Apr 2026 to Sept 2026",
    points: [
      "Onboarded new clients from the first meeting, introducing the company, its services, and how working together would run.",
      "Followed up after onboarding through emails and check-ins to keep projects moving and expectations clear.",
      "Led product walkthroughs for new websites, web apps, and mobile apps so clients could use them with confidence.",
      "Onboarded client team members on the website, app, or software built for their organisation.",
      "Guided clients through go-live, completing training and handing over the product and documentation.",
      "Coordinated between clients, developers, and QA, relaying feedback and handling client inquiries and issues.",
    ],
  },
  {
    role: "Customer Support & Onboarding Officer",
    company: "Imo State Data Management Center",
    location: "Owerri, Nigeria",
    period: "Apr 2021 to Dec 2023",
    points: [
      "Supported the onboarding and adoption of a digital records process for 2,000+ civil servants, guiding users through registration, accreditation, system setup, and inquiries.",
      "Served as the main point of contact for onboarding questions, resolving blockers and keeping records accurate.",
      "Contributed to a records accreditation exercise that helped eliminate ghost workers, saving over ₦15 million.",
      "Maintained process documentation and reports, coordinating with audit and compliance teams before sign-off.",
      "Prepared status updates for my supervisor on rollout progress and user adoption.",
    ],
  },
];

// ── Animation helper ─────────────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 36 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { delay, duration: 0.75, ease: [0.22, 1, 0.36, 1] },
});

// ── Timeline (straight vertical line, no markers) ────────────────────────────
function Timeline() {
  return (
    <div className="relative pl-8">
      {/* Straight vertical line */}
      <div
        className="absolute top-0 bottom-0 left-0 w-px"
        style={{
          background: "linear-gradient(to bottom, #C9F31D, rgba(42,96,87,0.3))",
        }}
      />

      {EXPERIENCE.map((job) => (
        <motion.div
          key={`${job.company}-${job.role}`}
          {...fadeUp(0)}
          className="relative mb-14 last:mb-0"
        >
          <p
            className="text-xs font-bold tracking-[0.2em] uppercase mb-2"
            style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
          >
            {job.period}
          </p>

          <h3
            className="font-black leading-tight mb-1"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)",
              color: "var(--white)",
            }}
          >
            {job.role}
          </h3>

          <p className="text-sm mb-5" style={{ color: "#4A7A73" }}>
            {job.company} · {job.location}
          </p>

          <ul className="flex flex-col gap-3">
            {job.points.map((point) => (
              <li
                key={point}
                className="flex gap-3 text-sm leading-relaxed"
                style={{ color: "#7FB3AE" }}
              >
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "#C9F31D" }}
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}

// ── Closing block: write-up + buttons ────────────────────────────────────────
function ClosingBlock() {
  return (
    <motion.div
      {...fadeUp(0)}
      className="mt-20 p-8 md:p-10 rounded-3xl"
      style={{
        background: "rgba(20,50,45,0.55)",
        border: "1px solid rgba(42,96,87,0.4)",
        boxShadow: "0 4px 32px rgba(0,0,0,0.18)",
      }}
    >
      <p
        className="text-xs font-bold tracking-[0.2em] uppercase mb-4"
        style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
      >
        Customer success, customer onboarding, product adoption, and retention.
      </p>

      <h3
        className="font-black mb-3"
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
          color: "var(--white)",
          letterSpacing: "-0.02em",
        }}
      >
        Let's build better customer experiences together.
      </h3>

      <p className="text-sm leading-relaxed mb-8 max-w-xl" style={{ color: "#7FB3AE" }}>
        I'm open to remote customer success, onboarding, and client coordination
        roles. Download my full CV for the complete work history, or get in touch
        to talk about how I can help your team.
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <motion.a
          href={CONTACT_URL}
          whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(201,243,29,0.3)" }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm tracking-wide"
          style={{
            background: "#C9F31D",
            color: "#1C3F39",
            fontFamily: "var(--font-heading)",
          }}
        >
          Get in Touch
          <HiArrowRight size={16} />
        </motion.a>

        <motion.a
          href={CV_URL}
          download
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm tracking-wide"
          style={{
            border: "1px solid #C9F31D",
            color: "#C9F31D",
            fontFamily: "var(--font-heading)",
          }}
        >
          <HiOutlineDownload size={18} />
          Download CV
        </motion.a>
      </div>
    </motion.div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
const Experience = () => {
  return (
    <>
      <PageHeroSection
        label="My Experience"
        title="Experience that builds lasting customer value."
        titleHighlight="lasting customer value."
        subtitle="Customer success, customer onboarding, product adoption, and retention."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Experience" }]}
        pattern="dots"
        align="left"
        badge="Open to work"
      />

      <section
        className="relative overflow-hidden section"
        style={{ background: "#0D2622" }}
      >
        <div className="wrapper relative z-10 max-w-3xl">
          <Timeline />
          <ClosingBlock />
        </div>
      </section>
    </>
  );
};

export default Experience;