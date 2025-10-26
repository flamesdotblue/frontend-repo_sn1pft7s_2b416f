import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function CanOverlay() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], ['-5vw', '10vw']);
  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '-5vh']);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 25]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <motion.div
      style={{ x, y, rotate, scale }}
      className="pointer-events-none fixed bottom-6 right-3 z-30 h-[200px] w-[200px] sm:bottom-10 sm:right-8 sm:h-[260px] sm:w-[260px]"
      aria-hidden
    >
      <div className="h-full w-full overflow-visible rounded-xl">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
    </motion.div>
  );
}
