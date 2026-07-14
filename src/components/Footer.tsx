import { Lightning, Envelope, House, Article, CheckCircle } from "@phosphor-icons/react";
import { motion } from "framer-motion";

const footerLinks = [
  {
    title: "Tools",
    links: ["Load Calculator", "Solar Sizing", "Cable Planner", "Breaker Guide"],
  },
  {
    title: "Learn",
    links: ["Safety Courses", "AI Assistant", "Inspection Reports", "Book Electrician"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Careers", "Press"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookies", "Licenses"],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Top gradient divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-300/50 dark:via-emerald-700/50 to-transparent" />

      <div className="relative bg-gradient-to-b from-emerald-50/80 to-white dark:from-emerald-950 dark:to-emerald-950">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:py-20">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            {/* Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-1"
            >
              <a href="#" className="flex items-center gap-2 mb-4">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-800 shadow-inner">
                  <Lightning weight="fill" className="text-amber-400 text-sm" />
                </div>
                <span className="font-semibold text-sm tracking-tight text-emerald-900 dark:text-white">
                  Electri<span className="text-amber-600 dark:text-amber-400">Wise</span> AI
                </span>
              </a>
              <p className="text-xs text-emerald-600/60 dark:text-emerald-400/60 leading-relaxed mb-5 max-w-xs">
                AI-powered electrical tools for Nigeria — load calculations, solar sizing,
                cable planning, and certified electrician bookings.
              </p>
              <div className="flex items-center gap-2 text-xs text-emerald-500/60 dark:text-emerald-400/60">
                <CheckCircle weight="fill" className="text-emerald-500" />
                <span>NISD & IEE Compliant</span>
              </div>
            </motion.div>

            {/* Link columns */}
            {footerLinks.map((col) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h4 className="font-semibold text-xs uppercase tracking-wider text-emerald-800 dark:text-emerald-200 mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-xs text-emerald-600/60 dark:text-emerald-400/60 hover:text-emerald-800 dark:hover:text-emerald-200 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-14 pt-6 border-t border-emerald-200/40 dark:border-emerald-800/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-[11px] text-emerald-500/50 dark:text-emerald-400/50">
              &copy; {new Date().getFullYear()} ElectriWise AI. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-emerald-500/50 dark:text-emerald-400/50 hover:text-emerald-700 dark:hover:text-emerald-200 transition-colors">
                <Envelope size={16} />
              </a>
              <a href="#" className="text-emerald-500/50 dark:text-emerald-400/50 hover:text-emerald-700 dark:hover:text-emerald-200 transition-colors">
                <House size={16} />
              </a>
              <a href="#" className="text-emerald-500/50 dark:text-emerald-400/50 hover:text-emerald-700 dark:hover:text-emerald-200 transition-colors">
                <Article size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}