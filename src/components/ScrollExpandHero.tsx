import { useEffect, useRef, useState, type ReactNode } from "react"

interface ScrollExpandHeroProps {
  imageSrc: string
  imageAlt?: string
  firstLine: string
  secondLine: string
  scrollHint?: string
  children?: ReactNode
}

/**
 * Scroll-to-expand hero. On the first scroll the centered rounded image
 * grows from a small card to a full-bleed band while the intro headline
 * splits apart and fades; once fully expanded the real hero content
 * (eyebrow / headline / CTA) fades in and normal page scrolling resumes.
 * Adapted (dependency-free) from the pasted scroll-expansion-hero block.
 */
export default function ScrollExpandHero({
  imageSrc,
  imageAlt = "",
  firstLine,
  secondLine,
  scrollHint,
  children,
}: ScrollExpandHeroProps) {
  const [progress, setProgress] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const touchStartY = useRef(0)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  useEffect(() => {
    const clamp = (v: number) => Math.min(Math.max(v, 0), 1)

    const advance = (delta: number) => {
      const next = clamp(progress + delta)
      setProgress(next)
      if (next >= 1) {
        setExpanded(true)
        setShowContent(true)
      } else if (next < 0.75) {
        setShowContent(false)
      }
    }

    const onWheel = (e: WheelEvent) => {
      if (expanded && e.deltaY < 0 && window.scrollY <= 5) {
        setExpanded(false)
        e.preventDefault()
      } else if (!expanded) {
        e.preventDefault()
        advance(e.deltaY * 0.0005)
      }
    }

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY
    }

    const onTouchMove = (e: TouchEvent) => {
      if (!touchStartY.current) return
      const touchY = e.touches[0].clientY
      const deltaY = touchStartY.current - touchY
      if (expanded && deltaY < -20 && window.scrollY <= 5) {
        setExpanded(false)
        e.preventDefault()
      } else if (!expanded) {
        e.preventDefault()
        advance(deltaY * (deltaY < 0 ? 0.004 : 0.003))
        touchStartY.current = touchY
      }
    }

    const onTouchEnd = () => {
      touchStartY.current = 0
    }

    const onScroll = () => {
      if (!expanded) window.scrollTo(0, 0)
    }

    window.addEventListener("wheel", onWheel, { passive: false })
    window.addEventListener("touchstart", onTouchStart, { passive: false })
    window.addEventListener("touchmove", onTouchMove, { passive: false })
    window.addEventListener("touchend", onTouchEnd)
    window.addEventListener("scroll", onScroll)
    return () => {
      window.removeEventListener("wheel", onWheel)
      window.removeEventListener("touchstart", onTouchStart)
      window.removeEventListener("touchmove", onTouchMove)
      window.removeEventListener("touchend", onTouchEnd)
      window.removeEventListener("scroll", onScroll)
    }
  }, [progress, expanded])

  const vw = typeof window !== "undefined" ? window.innerWidth : 1440
  const vh = typeof window !== "undefined" ? window.innerHeight : 900
  const initialMediaW = isMobile ? Math.min(vw * 0.54, 210) : 300
  const initialMediaH = isMobile ? Math.min(vh * 0.42, 290) : 400
  const mediaWidth = initialMediaW + progress * (vw - initialMediaW)
  const mediaHeight = initialMediaH + progress * (vh - initialMediaH)
  const textTranslateX = progress * (isMobile ? 160 : 150)

  return (
    <div className="se-hero-root hero">
      {/* Fading background */}
      <div className="se-bg" style={{ opacity: 1 - progress }}>
        <img src={imageSrc} alt="" aria-hidden="true" />
        <div className="se-bg-tint" />
      </div>

      <div className="se-stage">
        {/* Expanding media card */}
        <div
          className="se-media"
          style={{
            width: `${mediaWidth}px`,
            height: `${mediaHeight}px`,
            maxWidth: progress >= 1 ? "100vw" : (isMobile ? "94vw" : "95vw"),
            maxHeight: progress >= 1 ? "100vh" : (isMobile ? "85vh" : "85vh"),
            borderRadius: `${20 * (1 - progress)}px`,
            boxShadow: progress >= 1 ? "none" : undefined,
          }}
        >
          <img src={imageSrc} alt={imageAlt} />
          <div className="se-media-tint" style={{ opacity: 0.7 - progress * 0.3 }} />
          {/* Real hero content, revealed once fully expanded */}
          <div
            className="se-content"
            style={{ opacity: showContent ? 1 : 0, pointerEvents: showContent ? "auto" : "none" }}
          >
            {children}
          </div>
        </div>

        {/* Intro headline that splits apart and fades out while expanding */}
        <div className="se-title" style={{ opacity: 1 - progress }}>
          <h2 style={{ transform: `translateX(-${textTranslateX}vw)` }}>{firstLine}</h2>
          <h2 style={{ transform: `translateX(${textTranslateX}vw)` }}>{secondLine}</h2>
          {scrollHint && <p className="se-hint">{scrollHint}</p>}
        </div>
      </div>
    </div>
  )
}
