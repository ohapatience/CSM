import { motion } from "framer-motion";

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="flex flex-col gap-4">
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
          </motion.div>
        </div>

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