import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi2";
import { SiUpwork } from "react-icons/si";
import PageHeroSection from "../components/PageHeroSection";

// The one place clients contact you: your Upwork profile.
const UPWORK_URL = "https://www.upwork.com/freelancers/~011f1b4e4710ce0f2b";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
});

export default function ContactPage() {
  return (
    <div style={{ background: "#0D2622", minHeight: "100vh" }}>
      <PageHeroSection
        label="Get In Touch"
        title="Hire me on Upwork."
        titleHighlight="Upwork."
        subtitle="The fastest way to work with me is through my Upwork profile, where you can invite me to your job."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        pattern="dots"
        align="center"
        badge="Available for remote roles · UTC+1"
      />

      <section className="section" style={{ background: "#0D2622" }}>
        <div className="wrapper">
          <motion.div {...fadeUp(0)} className="max-w-2xl mx-auto">
            <motion.a
              href={UPWORK_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4, boxShadow: "0 0 36px rgba(201,243,29,0.15)" }}
              whileTap={{ scale: 0.99 }}
              className="block rounded-3xl p-7 md:p-9"
              style={{
                background:
                  "linear-gradient(145deg, rgba(28,63,57,0.55) 0%, rgba(18,43,39,0.55) 100%)",
                border: "1px solid rgba(42,96,87,0.5)",
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(20,168,0,0.12)",
                    border: "1px solid rgba(20,168,0,0.35)",
                  }}
                >
                  <SiUpwork size={28} color="#14A800" />
                </div>
                <div className="flex-1">
                  <h3
                    className="font-black leading-tight"
                    style={{
                      fontFamily: "var(--font-heading)",
                      color: "var(--white)",
                      fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)",
                    }}
                  >
                    Invite me to your job
                  </h3>
                  <p className="text-sm mt-2 leading-relaxed" style={{ color: "#7FB3AE" }}>
                    Post your project or send an invitation through my Upwork
                    profile. I reply there, where your work and payment are
                    protected.
                  </p>
                </div>
              </div>

              <div
                className="flex items-center justify-between mt-7 pt-6"
                style={{ borderTop: "1px solid rgba(42,96,87,0.35)" }}
              >
                <span className="text-xs" style={{ color: "#4A7A73" }}>
                  Opens my Upwork profile
                </span>
                <span className="btn btn-primary inline-flex items-center gap-2">
                  View on Upwork
                  <HiArrowRight size={15} />
                </span>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}