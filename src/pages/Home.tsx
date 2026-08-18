import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { useReveal } from "../hooks/useReveal"
import { useLang } from "../context/LangContext"
import ScrollExpandHero from "../components/ScrollExpandHero"


import IndustriesSection from "../components/IndustriesSection"
import ShimmerText from "../components/ui/shimmer-text"
import heroImg from "../imports/Gemini_Generated_Image_ovc0evovc0evovc0.jpeg"
import ctaTruckImg from "../imports/Gemini_Generated_Image_12zdyl12zdyl12zd.jpeg"
import serviceCard1Img from "../imports/Gemini_Generated_Image_i95qici95qici95q.jpeg"
import serviceCard2Img from "../imports/Gemini_Generated_Image_azs6uyazs6uyazs6.jpeg"
import serviceCard3Img from "../imports/Gemini_Generated_Image_863cds863cds863c.jpeg"
import fleetRefrigImg from "../imports/Gemini_Generated_Image_qtj7s2qtj7s2qtj7.jpeg"
import fleetDryImg from "../imports/Gemini_Generated_Image_ihgfltihgfltihgf.jpeg"
import fleetFlatbedImg from "../imports/WhatsApp_Image_2026-08-18_at_09.18.21.jpeg"
import fleetTankerImg from "../imports/Gemini_Generated_Image_2zgy1j2zgy1j2zgy.jpeg"

const STATS = [
  { target: 500, suffix: "+", labelAr: "عملية نقل ناجحة سنويًا",           labelEn: "Successful shipments per year" },
  { target: 20,  suffix: "+", labelAr: "سنة خبرة في خدمة الصناعة المصرية", labelEn: "Years serving Egyptian industry" },
  { target: 6,   suffix: "+", labelAr: "دول تغطية إقليمية",                 labelEn: "Countries of regional coverage" },
  { target: 98,  suffix: "+", labelAr: "معدل الالتزام بمواعيد التسليم",     labelEn: "On-time delivery rate" },
]

function useCountUp(target: number, duration = 1800, active = false) {
  const [value, setValue] = useState(0)
  const raf = useRef<number>(0)
  useEffect(() => {
    if (!active) { setValue(0); return }
    const start = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const ease = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(ease * target))
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf.current)
  }, [active, target, duration])
  return value
}

function StatItem({ target, suffix, labelAr, labelEn, delay }: typeof STATS[0] & { delay: number }) {
  const { lang } = useLang()
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const count = useCountUp(target, 1800, active)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActive(true) }, { threshold: 0.3 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  const display = target >= 100
    ? String(count).padStart(3, "0")
    : String(count).padStart(2, "0")
  return (
    <div className="st-stat" ref={ref} style={{ transitionDelay: `${delay}ms` }}>
      <div className="st-stat-num mono" dir="ltr">{display}{suffix}</div>
      <div className="st-stat-label">{lang === "ar" ? labelAr : labelEn}</div>
    </div>
  )
}

const fleet = [
  {
    img: fleetDryImg,
    label: { ar: "حاويات جافة", en: "Dry Containers" },
    alt: { ar: "شاحنة حاويات", en: "Container truck" },
  },
  {
    img: fleetRefrigImg,
    label: { ar: "حاويات مبردة", en: "Refrigerated Containers" },
    alt: { ar: "حاويات مبردة", en: "Refrigerated containers" },
  },
  {
    img: fleetFlatbedImg,
    label: { ar: "سيارات فلات بيد", en: "Flatbed Trucks" },
    alt: { ar: "شاحنة مسطحة", en: "Flatbed truck" },
  },
  {
    img: fleetTankerImg,
    label: { ar: "دبابات النقل", en: "Tanker Trucks" },
    alt: { ar: "ناقلة وقود", en: "Fuel tanker" },
  },
]

const serviceCards = [
  {
    img: serviceCard1Img,
    title: { ar: "النقل البري الدولي", en: "International Land Transport" },
    desc: {
      ar: "تغطية شاملة داخل مصر وخارجها بأسطول متنوع.",
      en: "Comprehensive coverage inside and outside Egypt with a diverse fleet.",
    },
  },
  {
    img: serviceCard2Img,
    title: { ar: "الشحن البحري", en: "Sea Freight" },
    desc: {
      ar: "حاويات 20 و40 قدم لكل الموانئ الرئيسية.",
      en: "20 and 40 foot containers to all major ports.",
    },
  },
  {
    img: serviceCard3Img,
    title: { ar: "الشحن الجوي", en: "Air Freight" },
    desc: {
      ar: "حلول سريعة تناسب أولوية التسليم.",
      en: "Fast solutions that match your delivery priorities.",
    },
  },
  {
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&h=520&fit=crop&auto=format",
    title: { ar: "إدارة سلاسل الإمداد", en: "Supply Chain Management" },
    desc: {
      ar: "إدارة كاملة تضمن كفاءة والتزامًا بالمواعيد.",
      en: "End-to-end management that ensures efficiency and on-time commitment.",
    },
  },
]

const marqueeItems = {
  ar: ["الشمس للنقل", "نقل بري", "شحن بحري", "شحن جوي", "خدمات لوجستية"],
  en: ["Shams Transport", "Land Transport", "Sea Freight", "Air Freight", "Logistics Services"],
}

const ArrowSvg = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)

function FleetMiniStat({ target, suffix, label, delay }: { target: number; suffix: string; label: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)
  const count = useCountUp(target, 1600, active)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setTimeout(() => setActive(true), delay) }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [delay])
  return (
    <div ref={ref} className="st-fleet-mini-stat">
      <span className="st-fleet-mini-num mono" dir="ltr">{count}{suffix}</span>
      <span className="st-fleet-mini-label">{label}</span>
    </div>
  )
}

export default function Home() {
  const { lang } = useLang()
  const isAr = lang === "ar"
  const [activeService, setActiveService] = useState<number>(0)
  const [activeFleet, setActiveFleet] = useState<number>(3)
  useReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* HERO — scroll-to-expand image, CTA lives inside once expanded */}
      <ScrollExpandHero
        imageSrc={heroImg}
        imageAlt={isAr ? "ميناء حاويات" : "Container port"}
        firstLine={isAr ? "نُحرّك بضاعتك" : "We move your cargo"}
        secondLine={isAr ? "برًا وبحرًا وجوًا" : "by land, sea and air"}
        scrollHint={isAr ? "مرّر للأسفل" : "Scroll down"}
      >
        <div className="st-hero-eyebrow">{isAr ? "شريكك الموثوق منذ 2002" : "Your trusted partner since 2002"}</div>
        <div className="st-hero-content">
          <ShimmerText as="h1" duration={2.2} delay={1}>
            {isAr ? "نُحرّك بضاعتك" : "We move your cargo"}
            <br />
            {isAr ? "برًا وبحرًا وجوًا" : "by land, sea and air"}
          </ShimmerText>
          <p>
            {isAr
              ? "أكثر من 20 عامًا من الخبرة في خدمة المصانع والشركات الصناعية، بأسطول متكامل وتغطية تمتد من العاشر من رمضان إلى دول الخليج والعالم العربي."
              : "More than 20 years of experience serving factories and industrial companies, with an integrated fleet and coverage extending from 10th of Ramadan City to the Gulf states and the Arab world."}
          </p>
          <NavLink to="/contact" className="st-btn-primary">
            {isAr ? "اطلب عرض سعر" : "Request a Quote"}
            <span className="st-btn-arrow">{ArrowSvg}</span>
          </NavLink>
        </div>
      </ScrollExpandHero>

      {/* CTA ROW — truck image + black content box */}
      <div className="st-cta-row reveal">
        <div className="st-cta-image">
          <img
            src={ctaTruckImg}
            alt={isAr ? "أسطول شاحنات" : "Truck fleet"}
          />
          <span className="st-tag">{isAr ? "أسطول شاحنات SCANIA" : "SCANIA Truck Fleet"}</span>
        </div>
        <div className="st-cta-box">
          <div className="st-cta-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1.5" y="6" width="13" height="10" rx="1.5" />
              <path d="M14.5 9h3.5l3.5 3.5V16h-7z" />
              <circle cx="6.5" cy="18.5" r="1.7" />
              <circle cx="17.5" cy="18.5" r="1.7" />
            </svg>
          </div>
          <p>{isAr ? "جاهز تنقل بضاعتك؟ فريقنا مستعد لخدمتك على مدار الساعة، من التسعير للتسليم." : "Ready to move your cargo? Our team is available around the clock, from pricing to delivery."}</p>
          <NavLink to="/contact" className="st-btn-secondary">{isAr ? "اطلب عرض سعر مجاني" : "Request a Free Quote"}</NavLink>
        </div>
      </div>

      {/* ABOUT + STATS */}
      <section className="st-about-section">
        <div className="st-stats-grid">
          {STATS.map((s, i) => (
            <StatItem key={s.labelEn} {...s} delay={i * 100} />
          ))}
        </div>
        <div className="st-about-copy reveal">
          <span className="st-eyebrow">{isAr ? "من نحن" : "About Us"}</span>
          <ShimmerText as="h2" duration={2} delay={0.5}>{isAr ? "شراكة صناعية ممتدة منذ 2002" : "An industrial partnership since 2002"}</ShimmerText>
          <p>
            {isAr
              ? "تأسست شركة الشمس للنقل في قلب المنطقة الصناعية بمدينة العاشر من رمضان، لتصبح على مدار أكثر من عقدين شريكًا موثوقًا للمصانع والشركات التجارية داخل مصر وخارجها."
              : "Shams Transport was founded in the heart of the industrial zone of 10th of Ramadan City, becoming over more than two decades a trusted partner for factories and commercial companies inside and outside Egypt."}
          </p>
          <div className="st-logos-row">
            <div className="st-logos-track">
              {[0, 1].map((g) => (
                <div className="st-logos-group" key={g} aria-hidden={g === 1}>
                  {["Americana", "Farm Frites", "EIPICO", "ICAPP"].map((c) => (
                    <span key={c}>{c}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="st-services-section">
        <div className="st-section-head reveal">
          <ShimmerText as="h2" duration={2} delay={0.3}>{isAr ? "الخدمات التي نقدمها" : "The Services We Offer"}</ShimmerText>
          <div className="st-arrows">
            <button type="button" className="st-arrow-btn" aria-label={isAr ? "السابق" : "Previous"}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 6l-6 6 6 6" /></svg>
            </button>
            <button type="button" className="st-arrow-btn dark" aria-label={isAr ? "التالي" : "Next"}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>
        <div className="st-services-elastic reveal-stagger">
          {serviceCards.map((s, i) => (
            <div
              className={`st-elastic-card${activeService === i ? " is-active" : ""}`}
              key={s.title.en}
              onMouseEnter={() => setActiveService(i)}
              onClick={() => setActiveService(i)}
            >
              <img src={s.img} alt={isAr ? s.title.ar : s.title.en} className="st-elastic-img" />
              <div className="st-elastic-overlay" />
              <div className="st-elastic-content">
                <span className="st-num">0{i + 1}</span>
                <h3>{isAr ? s.title.ar : s.title.en}</h3>
                <p>{isAr ? s.desc.ar : s.desc.en}</p>
              </div>
              <span className="st-elastic-idle-num">0{i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FLEET GALLERY */}
      <section className="st-fleet-section">
        {/* Subtle logistics route-map background */}
        <div className="st-fleet-route-bg" aria-hidden>
          <svg viewBox="0 0 800 540" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            {/* Curved shipping route lines */}
            <path d="M-20 420 C80 360 160 200 300 180 S500 220 620 140 S740 60 820 80" stroke="#3053E5" strokeWidth="1.2" strokeOpacity="0.07" strokeDasharray="6 5"/>
            <path d="M-20 480 C100 400 220 300 380 260 S560 280 680 200 S780 140 840 160" stroke="#3053E5" strokeWidth="0.9" strokeOpacity="0.05" strokeDasharray="4 6"/>
            <path d="M60 540 C140 460 240 380 360 320 S520 300 640 240 S760 180 840 200" stroke="#3053E5" strokeWidth="0.7" strokeOpacity="0.04" strokeDasharray="3 7"/>
            <path d="M-20 300 C100 280 200 240 320 200 S480 160 600 120 S720 80 840 100" stroke="#3053E5" strokeWidth="1" strokeOpacity="0.05" strokeDasharray="5 5"/>
            {/* Node dots */}
            <circle cx="300" cy="180" r="3.5" fill="#3053E5" fillOpacity="0.1"/>
            <circle cx="300" cy="180" r="6" fill="none" stroke="#3053E5" strokeOpacity="0.06" strokeWidth="1"/>
            <circle cx="620" cy="140" r="3" fill="#3053E5" fillOpacity="0.09"/>
            <circle cx="380" cy="260" r="3.5" fill="#3053E5" fillOpacity="0.08"/>
            <circle cx="380" cy="260" r="6.5" fill="none" stroke="#3053E5" strokeOpacity="0.05" strokeWidth="1"/>
            <circle cx="640" cy="240" r="2.5" fill="#3053E5" fillOpacity="0.07"/>
            <circle cx="160" cy="340" r="2.5" fill="#3053E5" fillOpacity="0.06"/>
            <circle cx="500" cy="200" r="2" fill="#3053E5" fillOpacity="0.07"/>
          </svg>
        </div>
        <div className="st-vthumb-slider reveal">
          {/* Main image */}
          <div className="st-vthumb-main">
            <img
              key={activeFleet}
              src={fleet[activeFleet].img}
              alt={isAr ? fleet[activeFleet].alt.ar : fleet[activeFleet].alt.en}
              className="st-vthumb-main-img"
            />
            <span className="st-tag">{isAr ? fleet[activeFleet].label.ar : fleet[activeFleet].label.en}</span>
          </div>
          {/* Vertical thumbnails */}
          <div className="st-vthumb-strip">
            {fleet.map((f, i) => (
              <button
                key={f.label.en}
                className={`st-vthumb-thumb${activeFleet === i ? " active" : ""}`}
                onClick={() => setActiveFleet(i)}
                aria-label={isAr ? f.label.ar : f.label.en}
              >
                <img src={f.img} alt={isAr ? f.alt.ar : f.alt.en} />
                <div className="st-vthumb-bar" />
              </button>
            ))}
          </div>
        </div>
        <div className="st-fleet-copy reveal">
          <ShimmerText as="h2" duration={2} delay={0.3}>
            {isAr ? "أسطولنا المجهز" : "Our fleet equipped"}
            <br />
            {isAr ? "لكل نوع حمولة" : "for every type of load"}
          </ShimmerText>
          <p>
            {isAr
              ? "نستعرض أسطولنا المتنوع الذي يعكس التزامنا بالكفاءة التشغيلية والأمان ورضا العميل في كل رحلة نقل."
              : "We showcase our diverse fleet, reflecting our commitment to operational efficiency, safety, and customer satisfaction on every trip."}
          </p>
          <div className="st-fleet-mini-stats">
            {[
              { target: 20,   suffix: "+", ar: "سنة خبرة",      en: "Years Experience" },
              { target: 40,   suffix: "+", ar: "دولة",           en: "Countries" },
              { target: 1200, suffix: "+", ar: "شحنة سنويًا",   en: "Shipments/Year" },
            ].map((s, i) => (
              <FleetMiniStat key={s.en} target={s.target} suffix={s.suffix} label={isAr ? s.ar : s.en} delay={i * 180} />
            ))}
          </div>
          <NavLink to="/fleet" className="st-circle-btn">{isAr ? "شاهد الأسطول كاملًا" : "View the Full Fleet"}</NavLink>
        </div>
      </section>

      {/* INDUSTRIES */}
      <IndustriesSection />
    </>
  )
}
