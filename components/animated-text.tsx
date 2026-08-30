"use client"

import { motion } from "framer-motion"

interface AnimatedTextProps {
  text: string
  delay?: number
}

export function AnimatedText({ text, delay = 0 }: AnimatedTextProps) {
  const words = text.split(" ")
  let charIndex = 0

  return (
    <motion.span
      className="inline-block"
      initial="hidden"
      animate="visible"
      style={{ display: "inline-block" }}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((char, index) => {
            const currentIndex = charIndex++
            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(12px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  delay: delay + currentIndex * 0.04,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                  display: "inline",
                }}
              >
                {char}
              </motion.span>
            )
          })}
          {wordIndex < words.length - 1 && "\u00A0"}
        </span>
      ))}
    </motion.span>
  )
}
