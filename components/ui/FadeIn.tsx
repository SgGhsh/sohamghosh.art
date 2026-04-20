'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { ReactNode } from 'react';

/* ─── Shared easing ─── */
const EASE_OUT_EXPO: [number, number, number, number] = [0.19, 1, 0.22, 1];

/* ─── FadeIn ─────────────────────────────────────────── */
interface FadeInProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  once?: boolean;
}

const offsets = {
  up:    { y: 28, x: 0 },
  down:  { y: -28, x: 0 },
  left:  { x: 28, y: 0 },
  right: { x: -28, y: 0 },
  none:  { y: 0,  x: 0 },
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  direction = 'up',
  once = true,
  ...props
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration, delay, ease: EASE_OUT_EXPO }}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger container ───────────────────────────────── */
interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function Stagger({ children, className, stagger = 0.09, delay = 0 }: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: delay },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── StaggerItem — use as child of <Stagger> ────────── */
export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: EASE_OUT_EXPO },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
