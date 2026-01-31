'use client';

import React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface BackgroundBeamsProps {
  className?: string;
  color?: "violet" | "yellow" | "amber" | "indigo";
}

const colorSchemes = {
  violet: {
    start: "#a855f7",
    middle: "#ec4899",
  },
  yellow: {
    start: "#eab308",
    middle: "#f59e0b",
  },
  amber: {
    start: "#f59e0b",
    middle: "#fbbf24",
  },
  indigo: {
    start: "#6366f1",
    middle: "#8b5cf6",
  },
};

export const BackgroundBeams = React.memo(
  ({ className, color = "violet" }: BackgroundBeamsProps) => {
    const colors = colorSchemes[color];
    const paths = [
      "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
      "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
      "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
      "M-359 -213C-359 -213 -291 192 173 319C637 446 705 851 705 851",
      "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
    ];

    return (
      <div
        className={cn(
          "absolute h-full w-full inset-0 [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center",
          className,
        )}
      >
        <svg
          className="z-0 h-full w-full pointer-events-none absolute"
          width="100%"
          height="100%"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {paths.map((path, index) => (
            <motion.path
              key={`path-${index}`}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity="0.4"
              strokeWidth="0.5"
            />
          ))}

          <defs>
            {paths.map((path, index) => (
              <motion.linearGradient
                id={`linearGradient-${index}`}
                key={`gradient-${index}`}
                initial={{
                  x1: "0%",
                  x2: "0%",
                  y1: "0%",
                  y2: "0%",
                }}
                animate={{
                  x1: ["0%", "100%"],
                  x2: ["0%", "95%"],
                  y1: ["0%", "100%"],
                  y2: ["0%", `${93 + Math.random() * 8}%`],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: Math.random() * 10,
                }}
              >
                <stop stopColor={colors.start} stopOpacity="0" />
                <stop stopColor={colors.start} />
                <stop offset="32.5%" stopColor={colors.middle} />
                <stop offset="100%" stopColor={colors.middle} stopOpacity="0" />
              </motion.linearGradient>
            ))}
          </defs>
        </svg>
      </div>
    )
  },
)

BackgroundBeams.displayName = "BackgroundBeams"
