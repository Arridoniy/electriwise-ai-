import { motion } from "framer-motion";
import {
  Lightning,
  House,
  MagnifyingGlass,
  ChartBar,
  ArrowCounterClockwise,
  Bell,
  CheckCircle,
} from "@phosphor-icons/react";

const steps = [
  {
    icon: MagnifyingGlass,
    title: "Connect Your Panel",
    desc: "Snap a photo of your breaker panel or connect via our smart bridge. Our AI maps every circuit in seconds.",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Lightning,
    title: "AI Runs the Audit",
    desc: "Our cloud models analyze 47+ data points per circuit — load, heat signature, age, material, and code compliance.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: ChartBar,
    title: "Review Your Score",
    desc: "Get a 0-100 safety score with detailed breakdowns. See exactly which circuits need attention and why.",
    color: "from-emerald-600 to-emerald-700",
  },
  {
    icon: Bell,
    title: "Get Smart Alerts",
    desc: "Real-time notifications when a circuit is overloaded, overheating, or developing a fault. Peace of mind 24/7.",
    color: "from-amber-500 to-amber-600",
  },
  {
    icon: ArrowCounterClockwise,
    title: "Optimize & Save",
    desc: "Follow AI-guided recommendations — rebalance loads, upgrade breakers, replace aging wiring, and save up to 23% on energy.",
    color: "from-emerald-500 to-emerald-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/30 via-white to-amber-50/30 dark:from-emerald-950 dark:via-emerald-900/60 dark:to-emerald-950" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-emerald-200/10 to-transparent dark:from-emerald-700/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/4" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-700/30 text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-4">
            Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-emerald-950 dark:text-white">
            Your Home in{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              5 Steps
            </span>
          </h2>
          <p className="mt-3 text-base text-emerald-600/70 dark:text-emerald-400/70 max-w-xl mx-auto">
            From setup to savings — get your electrical system AI-optimized in under an hour.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-[18px] sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-300 via-amber-300 to-emerald-300 dark:from-emerald-700 dark:via-amber-700 dark:to-emerald-700" />

          <div className="space-y-10 sm:space-y-14">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="relative flex gap-5 sm:gap-8 pl-10 sm:pl-16"
                >
                  {/* Step circle */}
                  <div className="absolute left-0 sm:left-4 top-0 flex items-center justify-center w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-900 dark:to-emerald-800 border-2 border-emerald-200 dark:border-emerald-700 shadow-md shadow-emerald-900/5 z-10">
                    <Icon weight="fill" className={`text-sm sm:text-lg bg-gradient-to-br ${step.color} bg-clip-text text-transparent`} />
                  </div>

                  {/* Step number badge */}
                  <div className="absolute -left-2 sm:left-2 -top-3 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center z-20 shadow-md shadow-amber-500/20">
                    <span className="text-[10px] sm:text-xs font-bold text-white">{i + 1}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white/60 dark:bg-emerald-950/60 backdrop-blur-sm rounded-2xl border border-emerald-200/20 dark:border-emerald-800/20 p-4 sm:p-6 hover:bg-white/80 dark:hover:bg-emerald-950/80 hover:shadow-lg hover:shadow-emerald-900/5 transition-all duration-300">
                    <h3 className="font-semibold text-sm sm:text-lg text-emerald-900 dark:text-white mb-1.5">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-600/70 dark:text-emerald-400/70 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="#simulator"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold shadow-lg shadow-amber-500/20 hover:shadow-xl hover:shadow-amber-500/30 hover:scale-[1.03] transition-all duration-200"
          >
            <CheckCircle weight="fill" /> Start Your Audit
          </a>
        </motion.div>
      </div>
    </section>
  );
}