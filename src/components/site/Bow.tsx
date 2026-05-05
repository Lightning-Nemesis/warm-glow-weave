import { motion } from "framer-motion";

type Props = { className?: string; size?: number };

export const Bow = ({ className = "", size = 64 }: Props) => (
  <motion.svg
    initial={{ opacity: 0, y: -6 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    width={size}
    height={size * 0.6}
    viewBox="0 0 100 60"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M50 30 Q20 5 8 18 Q-2 30 8 42 Q22 55 50 30 Z"
      fill="hsl(var(--sky))"
      stroke="hsl(var(--sky-deep))"
      strokeWidth="1"
    />
    <path
      d="M50 30 Q80 5 92 18 Q102 30 92 42 Q78 55 50 30 Z"
      fill="hsl(var(--sky))"
      stroke="hsl(var(--sky-deep))"
      strokeWidth="1"
    />
    <ellipse cx="50" cy="30" rx="6" ry="9" fill="hsl(var(--sky-deep))" />
    <path d="M44 38 L36 58" stroke="hsl(var(--sky))" strokeWidth="6" strokeLinecap="round" />
    <path d="M56 38 L64 58" stroke="hsl(var(--sky))" strokeWidth="6" strokeLinecap="round" />
  </motion.svg>
);

export default Bow;