import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

const flavors = [
  {
    name: 'Citrus Blast',
    accent: 'from-emerald-400 to-lime-300',
    desc: 'Electric lime with bold fizz. The classic DEW kick.',
  },
  {
    name: 'Code Red India',
    accent: 'from-rose-400 to-orange-300',
    desc: 'Cherry heat meets street energy. Limited regional drop.',
  },
  {
    name: 'Ice Surge',
    accent: 'from-cyan-400 to-sky-300',
    desc: 'Frost-cold citrus with a clean finish. Ultra crisp.',
  },
  {
    name: 'Masala Shock',
    accent: 'from-amber-400 to-lime-300',
    desc: 'Zesty spice collides with neon citrus. Desi experimental.',
  },
];

export default function FlavorCarousel() {
  const controls = useAnimation();

  useEffect(() => {
    const loop = async () => {
      while (true) {
        await controls.start({ x: ['0%', '-50%'], transition: { duration: 18, ease: 'linear' } });
        await controls.start({ x: '0%', transition: { duration: 0 } });
      }
    };
    loop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="flavors" className="relative w-full bg-[#06140a] py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-extrabold sm:text-4xl">Flavors That Roar</h2>
            <p className="mt-2 text-white/70">Hand-tuned variants for every kind of beast mode.</p>
          </div>
          <div className="hidden text-sm text-emerald-300/80 sm:block">Auto-scroll showcase</div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <motion.div animate={controls} className="flex w-[200%] gap-6 px-6">
          {[...flavors, ...flavors].map((f, idx) => (
            <div
              key={idx}
              className="relative min-w-[280px] flex-1 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur sm:min-w-[360px]"
            >
              <div className={`mb-4 h-1.5 w-24 rounded-full bg-gradient-to-r ${f.accent}`} />
              <h3 className="text-xl font-bold">{f.name}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              <div className="mt-6 flex items-center gap-2 text-emerald-300/90">
                <span className="inline-flex h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
                <span className="text-xs uppercase tracking-wider">Prototype</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
