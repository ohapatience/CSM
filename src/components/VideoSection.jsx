import { motion } from "framer-motion";
import { FaPlay } from "react-icons/fa6";

// ── Your content ─────────────────────────────────────────────────────────────
const VIDEO_URL = "https://youtu.be/-AEP5VoJc4E";

const SECTION_LABEL = "Meet Me";
const HEADING = "A quick introduction";
const TAGLINE =
  "A short introduction to how I help customers get value, from first demo to long-term retention.";

// Converts a normal YouTube link into the embed link the page needs
function getYouTubeEmbedUrl(url) {
  if (!url) return null;
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{11})/);
  return match ? `https://www.youtube.com/embed/${match[1]}` : null;
}

export default function VideoSection() {
  const embedUrl = getYouTubeEmbedUrl(VIDEO_URL);

  return (
    <section
      className="relative overflow-hidden section"
      style={{ background: "#0D2622" }}
    >
      <div className="wrapper relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <span
            className="block text-xs font-bold tracking-[0.25em] uppercase mb-4"
            style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
          >
            {SECTION_LABEL}
          </span>
          <h2
            className="font-black leading-tight mb-3"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--white)",
              letterSpacing: "-0.02em",
            }}
          >
            {HEADING}
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "#7FB3AE" }}>
            {TAGLINE}
          </p>
        </motion.div>

        {/* Video frame: full width of the page */}
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full aspect-video rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(145deg, #1C3F39 0%, #122B27 100%)",
            border: "1px solid rgba(42,96,87,0.6)",
            boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
          }}
        >
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title="Introduction video"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{
                  background: "rgba(201,243,29,0.12)",
                  border: "1px solid rgba(201,243,29,0.3)",
                }}
              >
                <FaPlay size={18} color="#C9F31D" style={{ marginLeft: 4 }} />
              </div>
              <p className="text-sm" style={{ color: "#7FB3AE" }}>
                Intro video coming soon
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}