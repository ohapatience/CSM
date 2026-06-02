import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowLeft } from "react-icons/hi";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-primary flex items-center justify-center px-6 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full blur-[140px]"
          style={{
            background: "rgba(201,243,29,0.12)",
          }}
        />
      </div>

      <div className="wrapper relative z-10 text-center">
        {/* 404 */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading font-extrabold text-[7rem] md:text-[10rem] leading-none"
          style={{ color: "#C9F31D" }}
        >
          404
        </motion.h1>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="mt-4"
          style={{ color: "#FFFFFF" }}
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="max-w-xl mx-auto mt-5 text-lg"
          style={{
            color: "rgba(173,221,214,0.9)",
          }}
        >
          The page you're looking for may have been moved, deleted,
          or the URL might be incorrect.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <Link
            to="/"
            className="btn"
            style={{
              background: "#C9F31D",
              color: "#1C3F39",
            }}
          >
            <HiArrowLeft />
            Back Home
          </Link>

          <Link
            to="/projects"
            className="btn"
            style={{
              border: "1px solid rgba(201,243,29,0.35)",
              color: "#C9F31D",
            }}
          >
            View Projects
          </Link>
        </motion.div>

        {/* Decorative Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-16"
        >
          <span
            className="uppercase tracking-[0.35em] text-xs font-bold"
            style={{
              color: "rgba(173,221,214,0.5)",
            }}
          >
            Ezinne Project Manager Portfolio
          </span>
        </motion.div>
      </div>
    </section>
  );
}