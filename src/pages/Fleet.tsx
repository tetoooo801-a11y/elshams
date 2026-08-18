import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useReveal } from "../hooks/useReveal"
import { useLang } from "../context/LangContext"
import fleetHeaderImg from "../imports/Gemini_Generated_Image_12zdyl12zdyl12zd-1.jpeg"
import fleetSplitImg from "../imports/Gemini_Generated_Image_i95qici95qici95q-2.jpeg"
import ShimmerText from "../components/ui/shimmer-text"

const vehicles = [
  {
    title: { ar: "شاحنات الحاويات الجافة", en: "Dry Container Trucks" },
    desc: {
      ar: "مخصصة لنقل البضائع والمواد الصناعية والتجارية داخل مصر وخارجها، مع توفير خيارات متعددة تناسب أحجام وكميات الشحن المختلفة.",
      en: "Dedicated to transporting industrial and commercial goods inside and outside Egypt, with multiple options to suit different shipment sizes and quantities.",
    },
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop&auto=format",
    alt: { ar: "شاحنة حاويات جافة", en: "Dry container truck" },
  },
  {
    title: { ar: "شاحنات الحاويات المبردة", en: "Refrigerated Container Trucks" },
    desc: {
      ar: "مجهزة لنقل المنتجات التي تتطلب درجات حرارة مناسبة أثناء الرحلة، مع الاهتمام بالحفاظ على جودة وسلامة الشحنة حتى وجهتها النهائية.",
      en: "Equipped to transport products requiring controlled temperatures throughout the journey, with attention to preserving shipment quality and safety until final delivery.",
    },
    img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&h=600&fit=crop&auto=format",
    alt: { ar: "حاوية مبردة", en: "Refrigerated container" },
  },
  {
    title: { ar: "سيارات النقل الجانبي", en: "Side-Loading Transport Vehicles" },
    desc: {
      ar: "حل عملي لنقل البضائع والمواد التي تتطلب سهولة في الوصول إلى الحمولة، ومناسبة لمجموعة متنوعة من عمليات النقل.",
      en: "A practical solution for transporting goods and materials that require easy cargo access, suitable for a wide range of transport operations.",
    },
    img: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop&auto=format",
    alt: { ar: "شاحنة جوانب", en: "Side-loading truck" },
  },
  {
    title: { ar: "سيارات الجامبو", en: "Jumbo Trucks" },
    desc: {
      ar: "حلول مناسبة لنقل الكميات الكبيرة والبضائع التي تحتاج إلى مساحة تحميل واسعة، مع مراعاة طبيعة كل شحنة ومتطلبات نقلها.",
      en: "Suitable solutions for transporting large quantities and goods requiring wide loading space, with consideration for each shipment's nature and transport requirements.",
    },
    img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=600&fit=crop&auto=format",
    alt: { ar: "شاحنة جامبو", en: "Jumbo truck" },
  },
  {
    title: { ar: "سيارات الـ Flatbed", en: "Flatbed Vehicles" },
    desc: {
      ar: "مناسبة لنقل المعدات والحمولات التي تحتاج إلى مساحة مفتوحة، وتوفر مرونة أكبر في التعامل مع الأحجام والأشكال المختلفة.",
      en: "Suitable for transporting equipment and loads requiring open space, offering greater flexibility in handling different sizes and shapes.",
    },
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop&auto=format",
    alt: { ar: "شاحنة مسطحة", en: "Flatbed truck" },
  },
  {
    title: { ar: "التانكرات", en: "Tankers" },
    desc: {
      ar: "مخصصة لنقل أنواع محددة من السوائل والمواد التي تتطلب تجهيزات مناسبة وإجراءات تشغيل آمنة أثناء عمليات النقل.",
      en: "Dedicated to transporting specific types of liquids and materials that require appropriate equipment and safe operating procedures during transport.",
    },
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&auto=format",
    alt: { ar: "ناقلة", en: "Tanker" },
  },
]

export default function Fleet() {
  useReveal()
  const { lang } = useLang()
  const isAr = lang === "ar"

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="page-header-wrap" style={{ position: "relative" }}>
        <div className="page-header">
          <img src={fleetHeaderImg} alt={isAr ? "الأسطول" : "Fleet"} />
          <div className="page-header-overlay" />
          <div className="page-header-content">
            <ShimmerText as="h1" duration={2.2} delay={0.5}>{isAr ? "الأسطول" : "Fleet"}</ShimmerText>
            <div className="breadcrumb">
              <NavLink to="/">{isAr ? "الرئيسية" : "Home"}</NavLink> / {isAr ? "الأسطول" : "Fleet"}
            </div>
          </div>
        </div>
        <div className="page-header-notch">{isAr ? "الأسطول" : "Fleet"}</div>
      </div>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">{isAr ? "أسطولنا" : "Our Fleet"}</div>
            <ShimmerText as="h2" duration={2} delay={0.3}>{isAr ? "أسطول متكامل لكل نوع حمولة" : "A Complete Fleet for Every Type of Cargo"}</ShimmerText>
            <p>
              {isAr
                ? "نعتمد على أسطول متنوع ومجهز لتلبية احتياجات النقل المختلفة، من الحاويات الجافة والمبردة إلى سيارات النقل المتخصصة، مع التركيز على سلامة الشحنات والالتزام بمواعيد التسليم."
                : "We rely on a diverse and equipped fleet to meet various transport needs, from dry and refrigerated containers to specialized transport vehicles, with a focus on shipment safety and delivery commitment."}
            </p>
          </div>
          <div className="fleet-page-grid reveal-stagger">
            {vehicles.map((v) => (
              <div className="fleet-page-card" key={v.title.en}>
                <div className="fleet-page-img">
                  <img src={v.img} alt={isAr ? v.alt.ar : v.alt.en} />
                </div>
                <div className="fleet-page-body">
                  <h3>{isAr ? v.title.ar : v.title.en}</h3>
                  <p>{isAr ? v.desc.ar : v.desc.en}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Standards */}
      <section className="services" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">{isAr ? "معايير التشغيل" : "Operating Standards"}</div>
            <ShimmerText as="h2" duration={2} delay={0.3}>{isAr ? "ما يضمن جودة أسطولنا" : "What Ensures Our Fleet Quality"}</ShimmerText>
            <p>{isAr ? "نحرص على تشغيل أسطولنا وفق معايير واضحة تضمن سلامة الشحنات وانتظام الخدمة." : "We operate our fleet according to clear standards that ensure cargo safety and service reliability."}</p>
          </div>
          <div className="why-grid reveal-stagger">
            <div className="why-card">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <p>{isAr ? "صيانة دورية منتظمة لجميع مركبات الأسطول للحفاظ على جاهزيتها التشغيلية." : "Regular periodic maintenance for all fleet vehicles to maintain operational readiness."}</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                  <circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12"/>
                </svg>
              </div>
              <p>{isAr ? "تتبع GPS مستمر لجميع الرحلات لضمان المتابعة الدقيقة وتحديث العملاء في الوقت الفعلي." : "Continuous GPS tracking for all trips to ensure accurate monitoring and real-time client updates."}</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <p>{isAr ? "سائقون مدربون ذوو خبرة في التعامل مع أنواع مختلفة من الشحنات وظروف الطرق." : "Trained drivers experienced in handling different types of cargo and road conditions."}</p>
            </div>
            <div className="why-card">
              <div className="why-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
                  <rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 4v3h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
                </svg>
              </div>
              <p>{isAr ? "تجهيزات متخصصة داخل كل مركبة تناسب طبيعة الشحنة وتضمن وصولها بسلامة." : "Specialized equipment inside each vehicle suited to the shipment's nature to ensure safe arrival."}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Split */}
      <section className="about" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="about-visual-wrap reveal">
            <div className="about-visual">
              <img
                src={fleetSplitImg}
                alt={isAr ? "أسطول شاحنات" : "Truck fleet"}
              />
            </div>
            <div className="stat-badge">
              <b className="mono">20+</b>
              <span>{isAr ? "سنة في خدمة النقل والشحن" : "years in transport & freight"}</span>
            </div>
          </div>
          <div className="about-body reveal">
            <div className="eyebrow">{isAr ? "احتياجات نقل مختلفة؟" : "Different transport needs?"}</div>
            <ShimmerText as="h2" duration={2} delay={0.4} style={{ fontSize: 32, marginBottom: 20 }}>
              {isAr ? "اختر المركبة المناسبة لشحنتك" : "Choose the Right Vehicle for Your Shipment"}
            </ShimmerText>
            <p>
              {isAr
                ? "فريقنا جاهز لمساعدتك في تحديد أنسب نوع مركبة بناءً على حجم شحنتك ومتطلبات نقلها، سواء كانت بضائع جافة، منتجات مبردة، أو حمولات خاصة."
                : "Our team is ready to help you identify the most suitable vehicle type based on your shipment size and transport requirements, whether dry goods, refrigerated products, or special loads."}
            </p>
            <p>
              {isAr
                ? "نتعامل مع كل شحنة بحسب طبيعتها واحتياجاتها، ونسعى دائمًا إلى تقديم حل نقل عملي يتناسب مع متطلبات عملائنا وجداولهم الزمنية."
                : "We handle each shipment according to its nature and requirements, always striving to provide a practical transport solution that suits our clients' needs and schedules."}
            </p>
            <div className="pillbox">
              <span className="pill">{isAr ? "حاويات جافة" : "Dry Containers"}</span>
              <span className="pill">{isAr ? "حاويات مبردة" : "Reefer Containers"}</span>
              <span className="pill">{isAr ? "تانكرات وجامبو" : "Tankers & Jumbo"}</span>
            </div>
            <NavLink to="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              marginTop: 24, padding: "12px 28px", borderRadius: 40,
              background: "var(--ink)", color: "#fff",
              fontSize: 14, fontWeight: 700, textDecoration: "none",
            }}>
              {isAr ? "تواصل معنا" : "Contact Us"}
            </NavLink>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <div className="trust">
        <div className="wrap">
          <span><b>100%</b> {isAr ? "عناية بالشحنة" : "Cargo care"}</span>
          <span><b>GPS</b> {isAr ? "تتبع مستمر للرحلات" : "Continuous trip tracking"}</span>
          <span><b>ISO</b> {isAr ? "معايير تشغيل موثوقة" : "Reliable operating standards"}</span>
          <span><b>24/7</b> {isAr ? "دعم ومتابعة مستمرة" : "Continuous support & follow-up"}</span>
        </div>
      </div>

    </>
  )
}
