import { motion } from "framer-motion";
import { ArrowRight, Lightning, ShieldCheck } from "@phosphor-icons/react";
import AuditSimulator from "./AuditSimulator";

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/80 via-white to-amber-50/30 dark:from-emerald-950 dark:via-emerald-900/80 dark:to-emerald-950" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-amber-200/20 to-transparent dark:from-amber-500/5 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-200/20 to-transparent dark:from-emerald-700/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-700/30 mb-6">
              <ShieldCheck weight="fill" className="text-emerald-600 dark:text-emerald-400 text-sm" />
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-300 tracking-wide">
                Built for Nigeria - Grid, Solar & Inverters
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-emerald-950 dark:text-white leading-[1.08]">
              Smarter Electrical{" "}
              <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                Decisions.
              </span>
              <br />
              Safer Homes.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-emerald-700/70 dark:text-emerald-300/70 max-w-lg leading-relaxed">
              AI-powered safety scanning, load calculations, and energy optimization
              designed to protect your home and wallet.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#simulator"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.03] transition-all duration-200"
              >
                Get Started
                <ArrowRight weight="bold" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-emerald-200 dark:border-emerald-700/50 text-emerald-800 dark:text-emerald-200 font-semibold hover:bg-emerald-100 dark:hover:bg-emerald-800/30 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-200"
              >
                <Lightning weight="fill" className="text-amber-500" />
                Interactive Demo
              </a>
            </div>

            {/* Trust bar */}
            <div className="mt-10 flex items-center gap-6 text-xs text-emerald-600/60 dark:text-emerald-400/60">
              <span className="flex items-center gap-1.5">
                <ShieldCheck weight="fill" className="text-emerald-500" />
                NISD Certified
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck weight="fill" className="text-emerald-500" />
                AR-RIDONIY Pros
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck weight="fill" className="text-emerald-500" />
                IEE Wiring Regs
              </span>
            </div>
          </motion.div>

          {/* Right: Interactive Simulator */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-300/20 to-emerald-300/20 dark:from-amber-500/10 dark:to-emerald-500/10 rounded-3xl blur-2xl" />
            <div className="relative">
              <AuditSimulator />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}