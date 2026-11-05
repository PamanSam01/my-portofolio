"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

type CharacterSet = string[] | readonly string[];

const DEFAULT_CHARACTER_SET = Object.freeze(
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("")
) as readonly string[];

const getRandomChar = (set: CharacterSet): string =>
  set[Math.floor(Math.random() * set.length)];

export interface HyperTextProps {
  children?: string;
  text?: string;
  className?: string;
  duration?: number;
  delay?: number;
  as?: keyof typeof motionElements;
  startOnView?: boolean;
  animateOnHover?: boolean;
  characterSet?: CharacterSet;
}

const motionElements = {
  span: motion.span,
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  p: motion.p,
} as const;

export function HyperText({
  children,
  text,
  className,
  duration = 800,
  delay = 0,
  as: Component = "span",
  startOnView = false,
  animateOnHover = true,
  characterSet = DEFAULT_CHARACTER_SET,
}: HyperTextProps) {
  const targetText = text !== undefined ? text : typeof children === "string" ? children : "";
  const [displayText, setDisplayText] = useState<string[]>(() => targetText.split(""));
  const [isAnimating, setIsAnimating] = useState(false);
  const iterationCount = useRef(0);
  const elementRef = useRef<HTMLElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const triggerAnimation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    iterationCount.current = 0;
    setIsAnimating(true);
  };

  // Re-trigger scramble whenever targetText changes
  const prevTextRef = useRef(targetText);
  useEffect(() => {
    if (prevTextRef.current !== targetText) {
      prevTextRef.current = targetText;
      triggerAnimation();
    }
  }, [targetText]);

  // Handle startOnView & initial delay
  useEffect(() => {
    if (startOnView) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            triggerAnimation();
            observer.disconnect();
          }
        },
        { threshold: 0.1 }
      );

      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
      return () => observer.disconnect();
    }

    if (delay > 0) {
      const timer = setTimeout(() => {
        triggerAnimation();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [delay, startOnView]);

  // Main character scramble loop
  useEffect(() => {
    if (!isAnimating) return;

    const len = Math.max(targetText.length, 1);
    const intervalDuration = Math.max(duration / (len * 8), 28);
    const maxIterations = len;

    intervalRef.current = setInterval(() => {
      if (iterationCount.current < maxIterations) {
        setDisplayText(() =>
          Array.from({ length: len }, (_, i) => {
            if (i < Math.floor(iterationCount.current)) {
              return targetText[i] || "";
            }
            if (targetText[i] === " ") {
              return " ";
            }
            return getRandomChar(characterSet);
          })
        );
        iterationCount.current += 0.25;
      } else {
        setDisplayText(targetText.split(""));
        setIsAnimating(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
      }
    }, intervalDuration);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isAnimating, targetText, duration, characterSet]);

  const MotionComponent = motionElements[Component] || motion.span;

  return (
    <MotionComponent
      ref={elementRef as any}
      className={cn("inline-flex items-baseline select-none", className)}
      onMouseEnter={() => {
        if (animateOnHover && !isAnimating) {
          triggerAnimation();
        }
      }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {displayText.map((letter, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0.85 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0.85 }}
            className={letter === " " ? "w-[0.25em] inline-block" : "inline-block"}
          >
            {letter}
          </motion.span>
        ))}
      </AnimatePresence>
    </MotionComponent>
  );
}

