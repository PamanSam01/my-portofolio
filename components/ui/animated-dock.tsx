"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

export interface DockItem {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
  badge?: string;
}

export interface AnimatedDockProps {
  items: DockItem[];
  label?: string;
  className?: string;
}

function DockIconItem({
  mouseX,
  item,
}: {
  mouseX: MotionValue<number>;
  item: DockItem;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Measure cursor distance using clientX against getBoundingClientRect()
  // to avoid coordinate mismatch when page is scrolled
  const distance = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - (bounds.x + bounds.width / 2);
  });

  // Responsive magnification mapping:
  // Base tile size: 38px, magnifies smoothly up to 54px when pointer approaches
  const widthSync = useTransform(distance, [-110, 0, 110], [38, 54, 38]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 170, damping: 14 });

  // Icon interior scaling: 19px base, up to 26px on full magnification
  const iconSizeSync = useTransform(distance, [-110, 0, 110], [19, 26, 19]);
  const iconSize = useSpring(iconSizeSync, { mass: 0.1, stiffness: 170, damping: 14 });

  const Icon = item.icon;

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center justify-center rounded-xl bg-[#180e11]/90 border border-white/10 hover:border-[#ff3838]/70 shadow-md backdrop-blur-md transition-colors group cursor-pointer shrink-0 select-none"
    >
      {/* Subtle orange/red chakra glow on hover */}
      <div className="absolute -inset-1 rounded-xl bg-gradient-to-tr from-[#ff3838]/30 via-[#ff7844]/20 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

      {/* Brand Icon with smooth spring magnification */}
      <motion.div
        style={{ width: iconSize, height: iconSize }}
        className="relative z-10 flex items-center justify-center"
      >
        <Icon className="w-full h-full object-contain" />
      </motion.div>

      {/* Floating Tooltip displaying technology or ecosystem name */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.92 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-[#160b0e]/95 border border-[#ff3838]/60 text-white font-mono text-[10px] sm:text-xs shadow-[0_0_15px_rgba(255,56,56,0.45)] backdrop-blur-md pointer-events-none whitespace-nowrap z-50 flex items-center gap-1.5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff7844] shadow-[0_0_6px_#ff3838]" />
            <span className="font-semibold tracking-wide">{item.name}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );

  if (item.href) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="focus:outline-none"
        aria-label={item.name}
      >
        {content}
      </a>
    );
  }

  return content;
}

export function AnimatedDock({
  items,
  label,
  className = "",
}: AnimatedDockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <div className={cn("flex flex-col items-start gap-1.5 max-w-full", className)}>
      {label && (
        <div className="flex items-center gap-2 pl-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff3838] shadow-[0_0_6px_#ff3838]" />
          <span className="text-[10px] sm:text-[11px] font-mono font-semibold tracking-wider text-zinc-400 uppercase">
            {label}
          </span>
        </div>
      )}

      {/* Responsive Dock Container with horizontal scroll safety on ultra-narrow screens */}
      <motion.div
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className="flex items-center gap-1.5 sm:gap-2.5 p-1.5 sm:p-2.5 rounded-2xl bg-[#120a0c]/85 border border-[#ff3838]/25 shadow-[0_10px_25px_rgba(0,0,0,0.5),0_0_15px_rgba(255,56,56,0.15)] hover:border-[#ff3838]/50 hover:shadow-[0_0_25px_rgba(255,56,56,0.25)] backdrop-blur-xl transition-all max-w-full overflow-x-auto sm:overflow-visible scrollbar-none"
      >
        {items.map((item) => (
          <DockIconItem key={item.name} mouseX={mouseX} item={item} />
        ))}
      </motion.div>
    </div>
  );
}
