import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useScroll, useTransform } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useLang } from "../context/LangContext"
import logoUrl from "../imports/logo-12.svg"

const INDUSTRIES_AR = [
  {
    num: "01", name: "الصناعات الغذائية", desc: "نقل مبرد ودرجات حرارة خاضعة للتحكم",
    details: ["شاحنات مبردة بدرجات حرارة دقيقة", "متابعة مستمرة لسلسلة التبريد", "تغطية شاملة داخل مصر وخارجها"],
  },
  {
    num: "02", name: "الصناعات الدوائية", desc: "تشغيل بمعايير GMP وسلسلة تبريد كاملة",
    details: ["التزام بمعايير GMP للنقل الدوائي", "تتبع درجة الحرارة طوال الرحلة", "توثيق كامل لكل عملية شحن"],
  },
  {
    num: "03", name: "الصناعات الهندسية", desc: "معدات ثقيلة وشحنات ضخمة الحجم",
    details: ["Flatbed وجامبو للحمولات الكبيرة", "تخطيط مسبق للطرق والتصاريح", "تأمين كامل على المعدات"],
  },
  {
    num: "04", name: "الصناعات الكيماوية", desc: "مواد خطرة وفق أعلى معايير السلامة",
    details: ["تانكرات مجهزة للمواد الكيماوية", "سائقون مدربون على بروتوكولات السلامة", "الامتثال للوائح النقل الدولية"],
  },
  {
    num: "05", name: "الاستيراد والتصدير", desc: "تخليص جمركي وخدمات الموانئ البرية",
    details: ["تنسيق كامل مع الجهات الجمركية", "خدمة نقل من الميناء للمستودع", "تتبع الشحنات عبر المنافذ البرية"],
  },
  {
    num: "06", name: "التوزيع واللوجستيات", desc: "شبكة توزيع شاملة داخل مصر وخارجها",
    details: ["توزيع لجميع المحافظات المصرية", "جدولة رحلات مرنة حسب الطلب", "تقارير تسليم دورية للعملاء"],
  },
]

const INDUSTRIES_EN = [
  {
    num: "01", name: "Food Industries", desc: "Refrigerated transport with controlled temperature",
    details: ["Reefer trucks with precise temperature control", "Continuous cold chain monitoring", "Coverage inside and outside Egypt"],
  },
  {
    num: "02", name: "Pharmaceutical", desc: "GMP-compliant operations and full cold chain",
    details: ["GMP-compliant pharmaceutical transport", "Temperature tracking throughout the journey", "Full documentation for every shipment"],
  },
  {
    num: "03", name: "Engineering Industries", desc: "Heavy equipment and oversized shipments",
    details: ["Flatbed & jumbo trucks for large loads", "Pre-planned routes and permits", "Full insurance on equipment"],
  },
  {
    num: "04", name: "Chemical Industries", desc: "Hazardous materials under highest safety standards",
    details: ["Tankers equipped for chemical materials", "Drivers trained in safety protocols", "Compliance with international transport regulations"],
  },
  {
    num: "05", name: "Import & Export", desc: "Customs clearance and inland port services",
    details: ["Full coordination with customs authorities", "Port-to-warehouse transport service", "Shipment tracking through land ports"],
  },
  {
    num: "06", name: "Distribution & Logistics", desc: "Full distribution network inside and outside Egypt",
    details: ["Distribution to all Egyptian governorates", "Flexible trip scheduling on demand", "Periodic delivery reports for clients"],
  },
]

function IndCard({
  item, index, isLeft,
}: {
  item: (typeof INDUSTRIES_AR)[0]
  index: number
  isLeft: boolean
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const { ref: inViewRef, inView } = useInView({ threshold: 0.25, triggerOnce: true })
  const controls = useAnimation()

  useEffect(() => {
    if (inView) controls.start("visible")
  }, [inView, controls])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1
    setTilt({ x, y })
  }

  return (
    <motion.div
      ref={(el) => { cardRef.current = el as HTMLDivElement; inViewRef(el) }}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: isLeft ? -40 : 40, y: 10 },
        visible: {
          opacity: 1, x: 0, y: 0,
          transition: { duration: 0.6, ease: "easeOut", delay: index * 0.1 },
        },
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); setTilt({ x: 0, y: 0 }) }}
      whileHover={{ y: -6 }}
      style={{
        transformStyle: "preserve-3d",
        transform: `perspective(900px) rotateY(${tilt.x * (isLeft ? 5 : -5)}deg) rotateX(${tilt.y * -5}deg)`,
        transition: hovered ? "transform 0.1s ease-out" : "transform 0.4s ease-out",
        position: "relative",
        overflow: "hidden",
        padding: "28px 28px 30px",
        borderRadius: 16,
        border: "1px solid rgba(0,0,0,0.08)",
        background: "rgba(255,255,255,0.55)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        display: "flex",
        flexDirection: "column",
        gap: 8,
        cursor: "default",
      }}
    >
      <span style={{
        fontFamily: "'IBM Plex Mono', monospace",
        fontSize: 11, fontWeight: 700, letterSpacing: "0.12em",
        color: "var(--primary)", opacity: 0.7,
      }}>
        {item.num}
      </span>
      <span style={{ fontSize: 17, fontWeight: 700, color: "var(--ink)", lineHeight: 1.3 }}>
        {item.name}
      </span>
      <span style={{ fontSize: 13.5, color: "var(--text-soft)", lineHeight: 1.7 }}>
        {item.desc}
      </span>

      {/* Hover details */}
      <motion.ul
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: hovered ? 1 : 0, height: hovered ? "auto" : 0 }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        style={{
          margin: "6px 0 0", padding: 0, listStyle: "none",
          overflow: "hidden", display: "flex", flexDirection: "column", gap: 6,
        }}
      >
        {item.details.map((d, di) => (
          <li key={di} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 13, color: "var(--primary)" }}>
            <span style={{ marginTop: 3, flexShrink: 0, width: 6, height: 6, borderRadius: "50%", background: "var(--primary)", display: "inline-block" }} />
            <span style={{ color: "var(--ink)", lineHeight: 1.55 }}>{d}</span>
          </li>
        ))}
      </motion.ul>

      {/* Bottom fill bar */}
      <motion.div
        initial={{ width: "0%" }}
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        style={{
          position: "absolute", bottom: 0, left: 0,
          height: 2, background: "var(--primary)",
          borderRadius: "0 0 16px 16px",
        }}
      />
    </motion.div>
  )
}

export default function IndustriesSection() {
  const { lang } = useLang()
  const isAr = lang === "ar"
  const containerRef = useRef<HTMLDivElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)
  const [lineHeight, setLineHeight] = useState(0)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const measure = () => {
      if (lineRef.current) setLineHeight(lineRef.current.getBoundingClientRect().height)
    }
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [])

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true) },
      { threshold: 0.06 }
    )
    if (containerRef.current) obs.observe(containerRef.current)
    return () => obs.disconnect()
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 15%", "end 60%"],
  })
  const fillHeight = useTransform(scrollYProgress, [0, 1], [0, lineHeight])
  const fillOpacity = useTransform(scrollYProgress, [0, 0.05], [0, 1])

  const industries = isAr ? INDUSTRIES_AR : INDUSTRIES_EN

  return (
    <section className={`ind-section${inView ? " ind-iv" : ""}`} ref={containerRef} style={{ padding: "100px 0 80px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <span className="ind-eyebrow">
            {isAr ? "القطاعات التي نخدمها" : "The Sectors We Serve"}
          </span>
          <h2 className="ind-h2" style={{ marginTop: 12 }}>
            {isAr ? "ثقة صناعات متنوعة" : "Trusted by diverse industries"}
          </h2>
          <div className="ind-accent-line" />
          <p className="ind-desc">
            {isAr
              ? "نخدم قطاعات حساسة تتطلب دقة والتزامًا في كل عملية نقل"
              : "We serve sensitive sectors that demand precision and commitment in every shipment"}
          </p>
        </div>

        {/* Timeline body */}
        <div ref={lineRef} style={{ position: "relative" }}>

          {/* Background track line */}
          <div style={{
            position: "absolute", left: "50%", top: 0,
            transform: "translateX(-50%)",
            width: 2, height: "100%",
            background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.08) 8%, rgba(0,0,0,0.08) 92%, transparent 100%)",
            maskImage: "linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 6%, black 94%, transparent 100%)",
          }} />

          {/* Animated fill */}
          <motion.div style={{
            position: "absolute", left: "50%", top: 0,
            transform: "translateX(-50%)",
            width: 2, height: fillHeight, opacity: fillOpacity,
            background: "linear-gradient(to bottom, var(--primary), rgba(48,83,229,0.2))",
            borderRadius: 9999, originY: 0,
          }} />

          {/* Cards */}
          {industries.map((item, i) => {
            const isLeft = i % 2 === 0
            return (
              <div
                key={item.num}
                style={{
                  display: "flex",
                  justifyContent: isLeft ? "flex-start" : "flex-end",
                  marginBottom: i < industries.length - 1 ? 40 : 0,
                  position: "relative",
                }}
              >
                {/* Marker dot */}
                <div style={{
                  position: "absolute", left: "50%", top: 28,
                  transform: "translateX(-50%)",
                  width: 42, height: 42, borderRadius: "50%",
                  background: "rgba(255,255,255,0.8)",
                  backdropFilter: "blur(6px)",
                  border: "1px solid rgba(0,0,0,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  zIndex: 10,
                }}>
                  <img src={logoUrl} alt="Shams Transport" style={{ width: 68, height: 68, objectFit: "contain", filter: "invert(28%) sepia(90%) saturate(600%) hue-rotate(205deg) brightness(90%)" }} />
                </div>

                {/* Card — takes up ~44% of width, offset from center */}
                <div style={{ width: "44%" }}>
                  <IndCard item={item} index={i} isLeft={isLeft} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
