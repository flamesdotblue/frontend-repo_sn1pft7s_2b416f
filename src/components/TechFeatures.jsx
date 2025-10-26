import { Rocket, Zap, Sparkles, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Beast Mode Energy',
    desc: 'Optimized fizz dynamics for maximum lift-off without the crash.',
  },
  {
    icon: Zap,
    title: 'Neon Citrus Engine',
    desc: 'High-voltage lime profile tuned for a sharp, electric bite.',
  },
  {
    icon: Sparkles,
    title: 'Handmade Finish',
    desc: 'Small-batch prototype crafted for the Indian taste palette.',
  },
  {
    icon: ShieldCheck,
    title: 'Crystal Cold Clarity',
    desc: 'Micro-filtered sparkle for that glassy, ice-cold pour.',
  },
];

export default function TechFeatures() {
  return (
    <section id="features" className="relative w-full bg-[#071a0c] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-extrabold sm:text-4xl">Engineered To Thrill</h2>
          <p className="mt-2 max-w-2xl text-white/70">
            Built like a concept supercar: precise, fearless, and tuned for the streets of India.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-400/40 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-3 text-emerald-300">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-emerald-400/10 blur-2xl transition group-hover:bg-emerald-400/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
