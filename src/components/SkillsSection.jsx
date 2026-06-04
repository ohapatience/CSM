import { HiOutlineChartBar, HiOutlineChat, HiOutlineCog } from "react-icons/hi";

const SKILL_BLOCKS = [
  {
    category: "Project Management & Methodologies",
    icon: HiOutlineChartBar,
    skills: [
      "Agile Project Management",
      "Scrum Framework",
      "Software Development Life Cycle (SDLC)",
      "Sprint Planning & Execution",
      "Task & Workflow Management",
    ],
  },
  {
    category: "Product & Technical Coordination",
    icon: HiOutlineCog,
    skills: [
      "Product Requirements Documentation (PRDs)",
      "User Stories & Backlog Management",
      "Cross-functional Team Coordination",
      "Project Tracking & Reporting",
      "Process Improvement",
    ],
  },
  {
    category: "Communication & Operations",
    icon: HiOutlineChat,
    skills: [
      "Stakeholder Communication",
      "Customer Support & Client Management",
      "Administrative Support",
      "Problem Solving & Issue Resolution",
      "Time Management & Organization",
    ],
  },
];

function SkillsSection() {
  return (
    <section
      className="relative overflow-hidden section"
      style={{ background: "#0A1F1C" }}
    >
      <BgTexture radialPos="70% 60%" />
      <div className="wrapper relative z-10">
        <SectionLabel>Skills</SectionLabel>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16">
          <motion.h2
            {...fadeLeft(0.05)}
            className="font-black leading-tight"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--white)",
              letterSpacing: "-0.02em",
            }}
          >
            The expertise behind{" "}
            <span style={{ color: "#C9F31D" }}>every delivery.</span>
          </motion.h2>
          <motion.p {...fadeRight(0.1)} className="text-base leading-relaxed" style={{ color: "#7FB3AE" }}>
            A carefully developed skill set spanning methodology, execution, communication,
            and product thinking — built from real-world project delivery.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SKILL_BLOCKS.map((block, i) => (
            <motion.div
              key={block.category}
              {...fadeUp(0.08 + i * 0.1)}
              whileHover={{ y: -5, boxShadow: "0 20px 48px rgba(0,0,0,0.3)" }}
              className="rounded-2xl p-7 flex flex-col gap-6"
              style={{
                background: "rgba(28,63,57,0.3)",
                border: "1px solid rgba(42,96,87,0.35)",
                transition: "all 0.3s ease",
              }}
            >
              {/* Header */}
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(201,243,29,0.1)",
                    border: "1px solid rgba(201,243,29,0.2)",
                    color: "#C9F31D",
                  }}
                >
                  <block.icon size={22} />
                </div>
                <h3
                  className="font-black leading-tight"
                  style={{
                    fontFamily: "var(--font-heading)",
                    color: "var(--white)",
                    fontSize: "0.95rem",
                  }}
                >
                  {block.category}
                </h3>
              </div>

              {/* Skills list */}
              <ul className="flex flex-col gap-3">
                {block.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: "#C9F31D" }}
                    />
                    <span className="text-sm" style={{ color: "#7FB3AE" }}>
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
