"use client";

import React, { useState, useEffect, useId } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { BrandColors } from "@/constants/colors";

export function ContainerTextFlip({
  words = ["Keren", "Modern", "Cepat", "Inovatif", "Pintar"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700,
}: {
  words?: string[];
  interval?: number;
  className?: string;
  textClassName?: string;
  animationDuration?: number;
}) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const [bgGradient, setBgGradient] = useState("");
  const [shadow, setShadow] = useState("");
  const [textColor, setTextColor] = useState("#000000");

  const textRef = React.useRef(null);

  // Get random 2 color gradient
  const getRandomGradient = () => {
    const [color1, color2] = BrandColors
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    return {
      background: `linear-gradient(to right, ${color1}, ${color2})`,
      shadow: `inset 0 -1px ${color2}, inset 0 0 0 1px ${color1}, 0 4px 8px ${color2}`,
    };
  };

  const updateWidthForWord = () => {
    if (textRef.current) {
      // @ts-expect-error
      const textWidth = textRef.current.scrollWidth + 30;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      const { background, shadow } = getRandomGradient();
      setBgGradient(background);
      setShadow(shadow);
      setTextColor(
        BrandColors[Math.floor(Math.random() * BrandColors.length)]
      );
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.div
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      style={{
        background: bgGradient,
        boxShadow: shadow,
            color: textColor,

      }}
      className={cn(
        "relative inline-block rounded-lg pt-2 pb-3 text-center text-4xl font-bold text-black md:text-7xl dark:text-white",
        className
      )}
      key={words[currentWordIndex]}
    >
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}
      >
        <motion.div className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.02,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
