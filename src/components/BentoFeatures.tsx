import { motion } from "framer-motion";
import {
  Cpu,
  Sun,
  Plug,
  ShieldCheck,
  Brain,
  GraduationCap,
  ClipboardText,
  Wrench,
} from "@phosphor-icons/react";

const features = [
  {
    icon: Cpu,
    title: "Home Load Calculator",
    desc: "Calculate total power load for your home or facility. Plan circuits accurately for Nigerian grid, solar, or inverter setups.",
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/30",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Sun,
    title: "Solar & Inverter Calculator",
    desc: "Size your solar panels, batteries, and inverters correctly. Get precise recommendations for off-grid or hybrid systems.",
    color: "from-amber-500 to-amber-600",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Plug,
    title: "Cable Size Calculator",
    desc: "Determine optimal cable gauges based on current, distance, and voltage drop. Prevent overheating and energy waste.",
    color: "from-emerald-500 to-amber-500",
    bg: "bg-gradient-to-br from-emerald-50 to-amber-50 dark:from-emerald-900/20 dark:to-amber-900/20",
    span: "md:col-span-2 md:row-span-1",
  },
  {
    icon: ShieldCheck,
    title: "Circuit Breaker Recommendation",
    desc: "Match current ratings to the right breakers for every circuit. Ensure compliance with safety standards and prevent tripping.",
    color: "from-emerald-600 to-emerald-700",
    bg: "bg-emerald-50 dark:bg-emerald-900/30",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Brain,
    title: "AI Electrical Assistant",
    desc: "Get real-time fault explanations, safety diagnostics, and troubleshooting guidance powered by electrical engineering knowledge.",
    color: "from-amber-500 to-amber-600",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: GraduationCap,
    title: "Electrical Safety Learning Centre",
    desc: "Access courses, interactive quizzes, and practical guides. Build your knowledge of safe electrical practices and standards.",
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/30",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: ClipboardText,
    title: "Inspection Report Generator",
    desc: "Create professional PDF reports of your findings. Document inspections, faults, and recommendations for clients or records.",
    color: "from-amber-500 to-amber-600",
    bg: "bg-amber-50 dark:bg-amber-900/20",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    icon: Wrench,
    title: "Book an Electrician",
    desc: "Connect with certified AR-RIDONIY professionals for installations, repairs, and inspections across Nigeria.",
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50 dark:bg-emerald-900/30",
    span: "md:col-span-1 md:row-span-1",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function BentoFeatures() {
  return (
    <section id="features" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-white to-emerald-50/30 dark:from-emerald-950 dark:via-emerald-900/60 dark:to-emerald-950" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-amber-200/10 to-emerald-200/10 dark:from-amber-500/5 dark:to-emerald-500/5 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 border border-emerald-200 dark:border-emerald-700/30 text-xs font-semibold text-emerald-700 dark:text-emerald-300 mb-4">
            Eight Powerful Modules
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-emerald-950 dark:text-white">
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Electrical Excellence
            </span>
          </h2>
          <p className="mt-3 text-base text-emerald-600/70 dark:text-emerald-400/70 max-w-xl mx-auto">
            From load calculations to professional bookings, eight integrated tools designed
            for Nigeria&apos;s electrical ecosystem.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4"
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                variants={item}
                className={`group relative overflow-hidden rounded-2xl border border-emerald-200/40 dark:border-emerald-800/30 ${f.bg} backdrop-blur-sm p-5 sm:p-6 ${f.span} transition-all duration-300 hover:shadow-xl hover:shadow-emerald-900/5 hover:-translate-y-0.5`}
              >
                {/* Gradient accent bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${f.color} opacity-50`} />
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center shadow-md`}>
                    <Icon weight="fill" className="text-white text-lg" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-sm sm:text-base text-emerald-900 dark:text-white mb-1">
                      {f.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-emerald-600/70 dark:text-emerald-400/70 leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </div>
                {/* Hover shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
