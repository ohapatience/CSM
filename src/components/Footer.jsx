import { motion } from "framer-motion";
import { FaLinkedinIn, FaEnvelope } from "react-icons/fa6";
import { SiUpwork } from "react-icons/si";
import { HiArrowRight } from "react-icons/hi2";
import { LINKEDIN_URL, UPWORK_URL, EMAIL } from "../links";

export default function Footer() {
  return (
    <footer
      className="relative py-16"
      style={{
        background: "#0A1F1C",
        borderTop: "1px solid rgba(42,96,87,0.4)",
      }}
    >
      <div className="wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Identity */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center font-black"
                style={{
                  background: "#C9F31D",
                  color: "#0D2622",
                  fontFamily: "var(--font-heading)",
                }}
              >
                PO
              </div>
              <div>
                <p
                  className="font-black leading-tight"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--white)" }}
                >
                  Patience Oha
                </p>
                <p className="text-xs" style={{ color: "#7FB3AE" }}>
                  Customer Success Manager
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: "#4A7A73" }}>
              Helping businesses build stronger customer relationships and deliver
              lasting customer value.
            </p>
          </div>

          {/* Upwork invitation */}
          <motion.a
            href={UPWORK_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            className="group flex items-center justify-between gap-4 p-6 rounded-2xl"
            style={{
              background: "rgba(28,63,57,0.3)",
              border: "1px solid rgba(20,168,0,0.35)",
            }}
          >
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(20,168,0,0.12)" }}
              >
                <SiUpwork size={24} color="#14A800" />
              </div>
              <div>
                <p
                  className="text-xs font-bold tracking-[0.2em] uppercase mb-1"
                  style={{ color: "#7FB3AE" }}
                >
                  Hire me on Upwork
                </p>
                <p
                  className="font-black"
                  style={{ fontFamily: "var(--font-heading)", color: "var(--white)" }}
                >
                  Invite me to your job
                </p>
              </div>
            </div>
            <HiArrowRight
              size={18}
              className="flex-shrink-0 transition-transform group-hover:translate-x-1"
              style={{ color: "#C9F31D" }}
            />
          </motion.a>

          {/* Let's connect */}
          <div className="flex flex-col gap-4 lg:items-end">
            <p
              className="text-xs font-bold tracking-[0.2em] uppercase"
              style={{ color: "#C9F31D", fontFamily: "var(--font-heading)" }}
            >
              Let's Connect
            </p>
            <div className="flex gap-3">
              <motion.a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ y: -2, color: "#C9F31D" }}
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(42,96,87,0.3)",
                  color: "#7FB3AE",
                  border: "1px solid rgba(42,96,87,0.5)",
                }}
              >
                <FaLinkedinIn size={16} />
              </motion.a>
              <motion.a
                href={`mailto:${EMAIL}`}
                aria-label="Email"
                whileHover={{ y: -2, color: "#C9F31D" }}
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background: "rgba(42,96,87,0.3)",
                  color: "#7FB3AE",
                  border: "1px solid rgba(42,96,87,0.5)",
                }}
              >
                <FaEnvelope size={16} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-14 pt-6 text-xs"
          style={{ borderTop: "1px solid rgba(42,96,87,0.3)", color: "#4A7A73" }}
        >
          © 2026 Patience Oha. All rights reserved.
        </div>
      </div>
    </footer>
  );
}