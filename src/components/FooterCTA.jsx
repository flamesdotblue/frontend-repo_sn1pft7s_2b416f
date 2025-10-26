import { ArrowRight } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer className="relative w-full bg-[#040b06] py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.12),transparent_55%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8 backdrop-blur sm:p-12">
          <h3 className="text-2xl font-extrabold sm:text-3xl">Switch On Your Beast</h3>
          <p className="mt-2 max-w-xl text-white/70">
            This is a concept web design prototype for Mountain Dew India. Made for impact, tuned for speed.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-black transition hover:bg-emerald-400"
            >
              Get Notified
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
            <span className="text-xs text-white/50">No spam. Only high voltage drops.</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
            <p>© {new Date().getFullYear()} Dew Prototype • Handmade futuristic concept</p>
            <div className="flex items-center gap-4">
              <a href="#flavors" className="hover:text-emerald-300">Flavors</a>
              <a href="#features" className="hover:text-emerald-300">Tech</a>
              <a href="#" className="hover:text-emerald-300">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
