import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useLang } from "../context/LangContext";

interface Pillar {
  labelAr: string;
  labelEn: string;
  descAr: string;
  descEn: string;
  tagsAr: string[];
  tagsEn: string[];
  images: { src: string; alt: string }[];
}

const PILLARS: Pillar[] = [
  {
    labelAr: "الموثوقية",
    labelEn: "Reliability",
    descAr: "أكثر من 500 عملية نقل ناجحة سنويًا بمعدل التزام يتجاوز 98٪ — شريكك اللوجستي الذي لا يخذلك في أي ظرف.",
    descEn: "Over 500 successful shipments per year with a 98%+ on-time rate — the logistics partner that never lets you down.",
    tagsAr: ["98٪ التزام بالمواعيد", "تتبع فوري", "دعم على مدار الساعة"],
    tagsEn: ["98% on-time rate", "Live tracking", "24/7 support"],
    images: [
      { src: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=700&h=440&fit=crop&auto=format", alt: "Truck fleet" },
      { src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&h=440&fit=crop&auto=format", alt: "Container logistics" },
    ],
  },
  {
    labelAr: "التغطية الشاملة",
    labelEn: "Full Coverage",
    descAr: "من العاشر من رمضان إلى دول الخليج والعالم العربي — شبكة واسعة تصل حيث يصل عملاؤنا.",
    descEn: "From 10th of Ramadan City to the Gulf states and the Arab world — a wide network reaching wherever your clients are.",
    tagsAr: ["مصر كاملًا", "6 دول إقليمية", "شحن دولي"],
    tagsEn: ["All of Egypt", "6 regional countries", "International shipping"],
    images: [
      { src: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=700&h=440&fit=crop&auto=format", alt: "Port shipping" },
      { src: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=700&h=440&fit=crop&auto=format", alt: "Refrigerated containers" },
    ],
  },
  {
    labelAr: "الخبرة المتعمقة",
    labelEn: "Deep Expertise",
    descAr: "أكثر من 20 عامًا في خدمة المصانع والشركات الصناعية — نفهم متطلبات قطاعك قبل أن تشرحها.",
    descEn: "Over 20 years serving factories and industrial companies — we understand your sector's requirements before you explain them.",
    tagsAr: ["20+ سنة خبرة", "قطاعات متخصصة", "فريق متمرس"],
    tagsEn: ["20+ years", "Specialized sectors", "Seasoned team"],
    images: [
      { src: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&h=440&fit=crop&auto=format", alt: "Warehouse logistics" },
      { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=440&fit=crop&auto=format", alt: "Tanker truck" },
    ],
  },
  {
    labelAr: "الأمان والسلامة",
    labelEn: "Safety First",
    descAr: "معايير سلامة صارمة لكل شحنة — من المواد الغذائية والدوائية إلى الكيماويات والمعدات الثقيلة.",
    descEn: "Strict safety standards for every shipment — from food and pharma to chemicals and heavy equipment.",
    tagsAr: ["معايير GMP", "مواد خطرة", "سلسلة تبريد كاملة"],
    tagsEn: ["GMP standards", "Hazardous materials", "Full cold chain"],
    images: [
      { src: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&h=440&fit=crop&auto=format", alt: "Air freight safety" },
      { src: "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?w=700&h=440&fit=crop&auto=format", alt: "Cargo securing" },
    ],
  },
];

export default function JourneySection() {
  const { lang } = useLang();
  const isAr = lang === "ar";

  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (ref.current) setHeight(ref.current.getBoundingClientRect().height);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div ref={containerRef} style={{ width: "100%", fontFamily: "'IBM Plex Sans Arabic', sans-serif" }}>
      {/* Section header */}
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "100px 40px 60px" }}>
        <div className="eyebrow" style={{ marginBottom: 16 }}>
          {isAr ? "لماذا الشمس للنقل" : "Why Shams Transport"}
        </div>
        <h2 style={{
          fontSize: 40, fontWeight: 700, letterSpacing: "-0.02em",
          color: "var(--ink)", maxWidth: 520, lineHeight: 1.2, marginBottom: 16,
        }}>
          {isAr ? "معايير تميزنا عن غيرنا" : "The standards that set us apart"}
        </h2>
        <p style={{ color: "var(--text-soft)", fontSize: 15, maxWidth: 480, lineHeight: 1.85 }}>
          {isAr
            ? "أربعة ركائز تبني كل عملية نقل ننفذها — من أول اتصال حتى آخر تسليم."
            : "Four pillars behind every shipment we run — from first contact to final delivery."}
        </p>
      </div>

      {/* Timeline body */}
      <div ref={ref} style={{ position: "relative", maxWidth: 860, margin: "0 auto", padding: "0 40px 120px" }}>

        {PILLARS.map((pillar, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "flex-start",
              paddingTop: index === 0 ? 16 : 80,
              gap: 48,
            }}
          >
            {/* Sticky label + marker */}
            <div style={{
              position: "sticky", top: 160, alignSelf: "flex-start",
              display: "flex", flexDirection: "column", alignItems: "flex-start",
              width: 160, flexShrink: 0, zIndex: 40,
            }}>
              {/* Circle marker */}
              <div style={{
                position: "absolute", left: -7, top: 2,
                width: 34, height: 34, borderRadius: "50%",
                background: "rgba(255,255,255,0.75)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(0,0,0,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{
                  width: 10, height: 10, borderRadius: "50%",
                  background: "var(--primary)",
                }} />
              </div>
              {/* Large muted label */}
              <h3 style={{
                paddingLeft: 42, fontSize: 32, fontWeight: 700,
                color: "rgba(0,0,0,0.15)", lineHeight: 1.1,
                letterSpacing: "-0.025em", margin: 0,
              }}>
                {isAr ? pillar.labelAr : pillar.labelEn}
              </h3>
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
              <p style={{
                fontSize: 15, lineHeight: 1.9, color: "var(--text-soft)",
                marginBottom: 20, maxWidth: 560,
              }}>
                {isAr ? pillar.descAr : pillar.descEn}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 28 }}>
                {(isAr ? pillar.tagsAr : pillar.tagsEn).map((tag) => (
                  <span key={tag} style={{
                    padding: "5px 14px", borderRadius: 999,
                    fontSize: 12.5, fontWeight: 600,
                    background: "rgba(255,255,255,0.55)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(0,0,0,0.1)",
                    color: "var(--ink)",
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* 2-col images */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {pillar.images.map((img, i) => (
                  <img
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    style={{
                      width: "100%", height: 200, objectFit: "cover",
                      borderRadius: 16,
                      border: "1px solid rgba(0,0,0,0.07)",
                      display: "block",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Background track */}
        <div style={{
          position: "absolute", left: 36, top: 0,
          width: 2, height: height,
          background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.08) 10%, rgba(0,0,0,0.08) 90%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)",
        }} />

        {/* Animated fill line */}
        <motion.div
          style={{
            position: "absolute", left: 36, top: 0,
            width: 2, height: heightTransform,
            opacity: opacityTransform,
            background: "linear-gradient(to bottom, var(--primary), rgba(48,83,229,0.25))",
            borderRadius: 9999,
            originY: 0,
          }}
        />
      </div>
    </div>
  );
}
