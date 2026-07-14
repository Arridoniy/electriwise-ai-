import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Lightning,
  Gauge,
  Thermometer,
  Warning,
  CheckCircle,
  WarningCircle,
} from "@phosphor-icons/react";

type ScanResult = {
  status: "safe" | "caution" | "danger";
  label: string;
  value: string;
  details: string;
};

const scanItems: ScanResult[] = [
  { status: "safe", label: "Load Balance", value: "82%", details: "Well within safe limits" },
  { status: "safe", label: "Grounding", value: "OK", details: "Proper grounding detected" },
  { status: "caution", label: "Circuit Age", value: "14 yrs", details: "Consider upgrade soon" },
  { status: "danger", label: "Outlet Temp", value: "48°C", details: "Overheating risk detected" },
];

export default function AuditSimulator() {
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState<ScanResult[]>([]);
  const [complete, setComplete] = useState(false);
  const [progress, setProgress] = useState(0);

  const startScan = () => {
    setScanning(true);
    setComplete(false);
    setResults([]);
    setProgress(0);
  };

  useEffect(() => {
    if (!scanning) return;
    if (progress >= 100) {
      setScanning(false);
      setComplete(true);
      setResults(scanItems);
      return;
    }
    const t = setTimeout(() => setProgress((p) => Math.min(p + 8, 100)), 180);
    return () => clearTimeout(t);
  }, [scanning, progress]);

  const statusIcon = (s: "safe" | "caution" | "danger") => {
    if (s === "safe") return <CheckCircle weight="fill" className="text-emerald-500" />;
    if (s === "caution") return <WarningCircle weight="fill" className="text-amber-500" />;
    return <Warning weight="fill" className="text-red-500" />;
  };

  return (
    <div className="rounded-2xl bg-white/80 dark:bg-emerald-950/80 backdrop-blur-xl border border-emerald-200/40 dark:border-emerald-800/30 p-5 sm:p-6 shadow-xl shadow-emerald-900/5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center">
            <Lightning weight="fill" className="text-amber-400 text-sm" />
          </div>
          <span className="text-sm font-semibold text-emerald-900 dark:text-white">Smart Audit</span>
        </div>
        <span className="text-xs font-medium text-emerald-500/60 dark:text-emerald-400/60">
          v2.4.1
        </span>
      </div>

      {/* Progress bar */}
      <div className="relative h-1.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 mb-5 overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-emerald-500 via-amber-500 to-amber-600"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>

      {/* Gauge Area */}
      <div className="flex items-center justify-center mb-5">
        <div className="relative w-28 h-28">
          <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
            <circle cx="60" cy="60" r="52" fill="none" stroke="oklch(0.85 0.03 145)" strokeWidth="8" />
            <motion.circle
              cx="60" cy="60" r="52"
              fill="none"
              stroke="url(#gaugeGrad)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray="326.7"
              initial={{ strokeDashoffset: 326.7 }}
              animate={{ strokeDashoffset: complete ? 326.7 * (1 - 0.72) : 326.7 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              transform="rotate(-90, 60, 60)"
            />
            <defs>
              <linearGradient id="gaugeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#059669" />
                <stop offset="50%" stopColor="#d97706" />
                <stop offset="100%" stopColor="#dc2626" />
              </linearGradient>
            </defs>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {complete ? (
              <>
                <span className="text-2xl font-bold text-emerald-900 dark:text-white">72</span>
                <span className="text-[10px] font-medium text-emerald-500/60 dark:text-emerald-400/60">Safety Score</span>
              </>
            ) : scanning ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              >
                <Gauge size={32} className="text-amber-500" />
              </motion.div>
            ) : (
              <>
                <Gauge size={28} className="text-emerald-400 mb-0.5" />
                <span className="text-[10px] font-medium text-emerald-500/60 dark:text-emerald-400/60">Ready</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Scan results */}
      <AnimatePresence>
        {results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="space-y-2 mb-4"
          >
            {results.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between px-3 py-2 rounded-xl bg-emerald-50/50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800/30"
              >
                <div className="flex items-center gap-2.5">
                  {statusIcon(item.status)}
                  <div>
                    <p className="text-xs font-semibold text-emerald-900 dark:text-white">{item.label}</p>
                    <p className="text-[10px] text-emerald-500/60 dark:text-emerald-400/60">{item.details}</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-200">{item.value}</span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <motion.button
        onClick={startScan}
        disabled={scanning}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 text-white text-sm font-semibold shadow-lg shadow-emerald-900/20 hover:shadow-xl hover:shadow-emerald-900/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
      >
        {scanning ? (
          <span className="flex items-center justify-center gap-2">
            <motion.span
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
            />
            Scanning...
          </span>
        ) : complete ? (
          <span className="flex items-center justify-center gap-2">
            <CheckCircle weight="fill" /> Scan Complete — Re-run
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Lightning weight="fill" /> Run Smart Audit
          </span>
        )}
      </motion.button>
    </div>
  );
}