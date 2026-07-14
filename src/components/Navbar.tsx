import { Lightning, House, ArrowRight, List, XCircle } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { useState } from "react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Simulator", href: "#simulator" },
  { label: "How It Works", href: "#how-it-works" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 h-16"
    >
      <div className="mx-auto max-w-7xl px-4 h-full">
        <div className="relative h-full rounded-2xl mt-2 px-5 flex items-center justify-between backdrop-blur-xl bg-white/70 dark:bg-emerald-950/70 border border-emerald-200/40 dark:border-emerald-800/30 shadow-lg shadow-emerald-900/5">
          {/* Brand */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-800 shadow-inner">
              <Lightning weight="fill" className="text-amber-400 text-lg" />
            </div>
            <span className="font-semibold text-sm tracking-tight text-emerald-900 dark:text-white">
              Electri<span className="text-amber-600 dark:text-amber-400">Wise</span> AI
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-emerald-700/70 dark:text-emerald-300/70 hover:text-emerald-900 dark:hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#simulator"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 hover:scale-[1.02] transition-all duration-200"
            >
              Get Started
              <ArrowRight weight="bold" className="text-xs" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-800/50 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <XCircle size={20} /> : <List size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-7xl px-4 mt-1 md:hidden"
        >
          <div className="rounded-2xl backdrop-blur-xl bg-white/80 dark:bg-emerald-950/80 border border-emerald-200/40 dark:border-emerald-800/30 p-4 flex flex-col gap-3 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 dark:hover:bg-emerald-800/50 transition-colors"
              >
                <House size={16} />
                {link.label}
              </a>
            ))}
            <a
              href="#simulator"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 mt-1 px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold"
            >
              Get Started <ArrowRight weight="bold" />
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}