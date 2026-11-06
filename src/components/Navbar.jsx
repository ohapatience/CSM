import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineHome,
  HiOutlineDesktopComputer,
  HiOutlineCollection,
  HiOutlineBriefcase,
} from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

const MotionLink = motion(Link);

const NAV_ITEMS = [
  { label: "Home", href: "/", icon: <HiOutlineHome size={15} /> },
  {
    label: "About",
    href: "/about",
    icon: <HiOutlineDesktopComputer size={15} />,
  },
  {
    label: "Experience",
    href: "/experience",
    icon: <HiOutlineBriefcase size={15} />,
  },
  {
    label: "Case Studies",
    href: "/projects",
    icon: <HiOutlineCollection size={15} />,
  },
];

export default function Navbar() {
  const [hovered, setHovered] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;600;700;800&family=Lato:wght@300;400;700&display=swap"
        rel="stylesheet"
      />

      {/* ── Desktop Island Navbar ───────────────────────────────── */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            animate={{
              boxShadow: scrolled
                ? "0 8px 40px rgba(0,0,0,0.45), 0 0 0 1px rgba(201,243,29,0.12)"
                : "0 4px 24px rgba(0,0,0,0.3), 0 0 0 1px rgba(42,96,87,0.4)",
              background: scrolled
                ? "rgba(10, 28, 25, 0.92)"
                : "rgba(18, 43, 39, 0.85)",
            }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-1 px-3 py-2.5 rounded-[22px]"
            style={{
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Logo pill */}
            <MotionLink
              to="/"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded-[14px] mr-2"
              style={{ background: "rgba(201,243,29,0.1)" }}
            >
              <div
                className="w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black"
                style={{
                  background: "#C9F31D",
                  color: "#1C3F39",
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                P
              </div>
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{
                  color: "#C9F31D",
                  fontFamily: "'Raleway', sans-serif",
                }}
              >
                Patience
              </span>
            </MotionLink>

            {/* Divider */}
            <div
              className="w-px h-5 mx-1"
              style={{ background: "rgba(42,96,87,0.6)" }}
            />

            {/* Nav items */}
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.href;
              const isHovered = hovered === item.label;

              return (
                <MotionLink
                  key={item.label}
                  to={item.href}
                  onHoverStart={() => setHovered(item.label)}
                  onHoverEnd={() => setHovered(null)}
                  className="relative flex items-center gap-2 px-4 py-2 rounded-[14px] text-sm font-semibold transition-colors select-none"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color: isActive
                      ? "#1C3F39"
                      : isHovered
                        ? "#C9F31D"
                        : "#7FB3AE",
                    zIndex: 1,
                  }}
                >
                  {/* Active / hover background pill */}
                  <AnimatePresence>
                    {(isActive || isHovered) && (
                      <motion.span
                        layoutId={isActive ? "active-pill" : undefined}
                        key={isActive ? "active" : `hover-${item.label}`}
                        className="absolute inset-0 rounded-[14px]"
                        style={{
                          background: isActive
                            ? "#C9F31D"
                            : "rgba(201,243,29,0.08)",
                          zIndex: -1,
                        }}
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.85 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                      />
                    )}
                  </AnimatePresence>

                  {/* Icon */}
                  <motion.span
                    animate={{
                      color: isActive
                        ? "#1C3F39"
                        : isHovered
                          ? "#C9F31D"
                          : "#4A7A73",
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.icon}
                  </motion.span>

                  {item.label}

                  {/* Active dot */}
                  {isActive && (
                    <motion.span
                      layoutId="active-dot"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: "#1C3F39", opacity: 0 }}
                    />
                  )}
                </MotionLink>
              );
            })}

            {/* Divider */}
            <div
              className="w-px h-5 mx-1"
              style={{ background: "rgba(42,96,87,0.6)" }}
            />

            {/* CTA button */}
            <MotionLink
              to="/contact"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 20px rgba(201,243,29,0.3)",
              }}
              whileTap={{ scale: 0.96 }}
              className="ml-1 px-4 py-2 rounded-[14px] text-xs font-bold tracking-wide uppercase"
              style={{
                background: "#1C3F39",
                color: "#C9F31D",
                fontFamily: "'Raleway', sans-serif",
                border: "1px solid rgba(201,243,29,0.25)",
              }}
            >
              Let's Talk
            </MotionLink>
          </motion.div>
        </motion.nav>
      </div>

      {/* ── Mobile Island Navbar ────────────────────────────────── */}
      <div className="fixed top-5 left-4 right-4 z-50 md:hidden">
        <motion.div
          initial={{ y: -60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-between px-4 py-3 rounded-[20px]"
          style={{
            background: "rgba(13, 38, 34, 0.92)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(42,96,87,0.4)",
            boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
          }}
        >
          {/* Logo */}
          <MotionLink
            to="/"
            className="flex items-center gap-2"
            onClick={() => setMobileOpen(false)}
          >
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black"
              style={{
                background: "#C9F31D",
                color: "#1C3F39",
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              P
            </div>
            <span
              className="text-xs font-bold tracking-widest uppercase"
              style={{ color: "#C9F31D", fontFamily: "'Raleway', sans-serif" }}
            >
              Patience
            </span>
          </MotionLink>

          {/* Hamburger */}
          <motion.button
            onClick={() => setMobileOpen((o) => !o)}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 flex flex-col items-center justify-center gap-1.5"
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                className="block h-px rounded-full"
                style={{ background: "#C9F31D", originX: "center" }}
                animate={
                  mobileOpen
                    ? i === 1
                      ? { opacity: 0, scaleX: 0 }
                      : i === 0
                        ? { rotate: 45, y: 7, width: "20px" }
                        : { rotate: -45, y: -7, width: "20px" }
                    : {
                        rotate: 0,
                        y: 0,
                        opacity: 1,
                        width: i === 1 ? "12px" : "20px",
                      }
                }
                transition={{ duration: 0.25 }}
              />
            ))}
          </motion.button>
        </motion.div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="mt-2 rounded-[20px] overflow-hidden"
              style={{
                background: "rgba(13,38,34,0.97)",
                border: "1px solid rgba(42,96,87,0.5)",
                backdropFilter: "blur(20px)",
              }}
            >
              {NAV_ITEMS.map((item, i) => (
                <MotionLink
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-3 px-5 py-4 text-sm font-semibold transition-colors"
                  style={{
                    fontFamily: "'Raleway', sans-serif",
                    color:
                      location.pathname === item.href ? "#C9F31D" : "#7FB3AE",
                    borderBottom:
                      i < NAV_ITEMS.length - 1
                        ? "1px solid rgba(42,96,87,0.3)"
                        : "none",
                    background:
                      location.pathname === item.href
                        ? "rgba(201,243,29,0.06)"
                        : "transparent",
                  }}
                >
                  <span
                    style={{
                      color:
                        location.pathname === item.href ? "#C9F31D" : "#4A7A73",
                    }}
                  >
                    {item.icon}
                  </span>
                  {item.label}
                  {location.pathname === item.href && (
                    <motion.span
                      layoutId="mobile-dot"
                      className="ml-auto w-1.5 h-1.5 rounded-full"
                      style={{ background: "#C9F31D" }}
                    />
                  )}
                </MotionLink>
              ))}
              <div className="p-3">
                <MotionLink
                  to="/contact"
                  className="block text-center py-3 rounded-xl text-xs font-bold tracking-widest uppercase"
                  style={{
                    background: "#C9F31D",
                    color: "#1C3F39",
                    fontFamily: "'Raleway', sans-serif",
                  }}
                >
                  Let's Talk
                </MotionLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}