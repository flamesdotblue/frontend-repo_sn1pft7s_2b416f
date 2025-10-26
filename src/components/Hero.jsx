import { motion } from 'framer-motion';
import { Zap, Droplets, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-[#030d05] text-white">
      {/* Animated neon gradient orbs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gradient-to-br from-[#00ff5f]/30 via-[#00ffd1]/20 to-transparent blur-3xl"
          animate={{ y: [0, 20, -10, 0], rotate: [0, 10, -5, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-gradient-to-tr from-[#00ff5f]/25 via-[#00b341]/20 to-transparent blur-3xl"
          animate={{ y: [0, -25, 0], x: [0, 10, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Futuristic grid overlay */}
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(65%_65%_at_50%_35%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,95,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-emerald-400" />
          <span className="text-sm tracking-wide text-emerald-200">Limited Indian Prototype</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="text-center text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl"
        >
          Unleash The Beast
          <span className="block bg-gradient-to-r from-emerald-400 via-lime-300 to-emerald-500 bg-clip-text text-transparent">
            Mountain Dew India
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-5 max-w-2xl text-center text-base leading-relaxed text-white/70 sm:text-lg"
        >
          Crafted for the daring. Charged with neon citrus. A handmade, futuristic prototype that roars with energy.
          Jo jeeta wahi sikandar.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#flavors"
            className="group relative inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 text-black transition hover:bg-emerald-400"
          >
            <Zap className="h-5 w-5" />
            Taste The Charge
            <span className="absolute inset-0 -z-10 rounded-xl bg-emerald-400 opacity-0 blur-md transition group-hover:opacity-40" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-white backdrop-blur transition hover:bg-white/10"
          >
            <Droplets className="h-5 w-5 text-emerald-300" />
            Why It Hits Different
          </a>
        </motion.div>
      </div>
    </section>
  );
}
