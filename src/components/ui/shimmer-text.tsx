import { motion } from "motion/react"

interface ShimmerTextProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  duration?: number
  delay?: number
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div"
}

export function ShimmerText({
  children,
  className = "",
  style,
  duration = 2,
  delay = 0.8,
  as: Tag = "div",
}: ShimmerTextProps) {
  return (
    <Tag className={className} style={{ overflow: "visible", paddingBottom: "0.12em", ...style }}>
      <motion.span
        style={{
          display: "inline-block",
          WebkitTextFillColor: "transparent",
          background:
            "currentColor linear-gradient(to right, currentColor 0%, rgba(255,255,255,0.75) 40%, rgba(255,255,255,0.75) 60%, currentColor 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          backgroundRepeat: "no-repeat",
          backgroundSize: "50% 200%",
        } as React.CSSProperties}
        initial={{ backgroundPositionX: "250%" }}
        animate={{ backgroundPositionX: ["-100%", "250%"] }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatDelay: 2,
          ease: "linear",
        }}
      >
        {children}
      </motion.span>
    </Tag>
  )
}

export default ShimmerText
