import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useReveal } from "../hooks/useReveal"
import { useLang } from "../context/LangContext"
import ShimmerText from "../components/ui/shimmer-text"

const services = [
  {
    title: "النقل البري الدولي",
    titleEn: "International Road Transport",
    desc: "تغطية شاملة داخل مصر وخارجها بأسطول شاحنات متنوع يلبي كل أنواع الحمولات، من البضائع العامة إلى المواد الخطرة.",
    descEn: "Comprehensive coverage inside and outside Egypt with a diverse truck fleet that handles all load types, from general cargo to hazardous materials.",
    features: [
      "شاحنات متنوعة الأحجام تناسب كل حمولة",
      "تغطية جميع محافظات مصر",
      "خطوط برية للدول العربية",
      "تتبع الشحنة لحظة بلحظة",
      "سائقون مدربون ومعتمدون",
    ],
    featuresEn: [
      "Trucks of various sizes to suit every load",
      "Coverage of all Egyptian governorates",
      "Road routes to the Arab countries",
      "Real-time shipment tracking",
      "Trained and certified drivers",
    ],
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&h=675&fit=crop&auto=format",
    alt: "شاحنة على الطريق",
    altEn: "Truck on the road",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8">
        <rect x="2" y="8" width="12" height="9" rx="1.5" /><path d="M14 11h4l3 3v3h-7z" />
        <circle cx="6" cy="19" r="1.6" /><circle cx="17" cy="19" r="1.6" />
      </svg>
    ),
  },
  {
    title: "الشحن البحري",
    titleEn: "Sea Freight",
    desc: "حاويات 20 و40 قدم بجاهزية كاملة للشحن الدولي عبر أهم الموانئ المصرية والعالمية، مع إدارة كاملة لوثائق الشحن.",
    descEn: "20 and 40 foot containers fully ready for international shipping through the major Egyptian and global ports, with complete management of shipping documents.",
    features: [
      "حاويات جافة ومبردة 20 و40 قدم",
      "تغطية أهم الموانئ العالمية",
      "إدارة وثائق الشحن والجمارك",
      "تأمين شامل على الشحنات",
      "تتبع دقيق لحركة الحاويات",
    ],
    featuresEn: [
      "Dry and refrigerated 20 and 40 foot containers",
      "Coverage of the major global ports",
      "Management of shipping and customs documents",
      "Comprehensive insurance on shipments",
      "Precise tracking of container movement",
    ],
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&h=675&fit=crop&auto=format",
    alt: "ميناء حاويات",
    altEn: "Container port",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8">
        <path d="M3 17h18l-2 3H5z" /><path d="M5 17V9l7-4 7 4v8" /><path d="M9 9h6v4H9z" />
      </svg>
    ),
  },
  {
    title: "الشحن الجوي",
    titleEn: "Air Freight",
    desc: "حلول شحن جوي سريعة ومتكاملة تناسب طبيعة وكمية الشحنة وأولوية التسليم، مع تغطية أهم المطارات الدولية.",
    descEn: "Fast, integrated air freight solutions tailored to the nature and volume of the shipment and delivery priority, covering the major international airports.",
    features: [
      "شحن سريع وعاجل حسب الأولوية",
      "تغطية شبكة واسعة من المطارات",
      "شحن البضائع الثمينة والحساسة",
      "إجراءات جمركية مبسطة وسريعة",
      "خدمة باب لباب متكاملة",
    ],
    featuresEn: [
      "Fast and urgent shipping by priority",
      "Coverage of a wide network of airports",
      "Shipping of valuable and sensitive goods",
      "Simplified and fast customs procedures",
      "Integrated door-to-door service",
    ],
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&h=675&fit=crop&auto=format",
    alt: "طائرة شحن",
    altEn: "Cargo plane",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8">
        <path d="M2 16l7-2 5-9 2 1-3 8 6-1 2 2-16 5z" />
      </svg>
    ),
  },
  {
    title: "الوساطة اللوجستية",
    titleEn: "Logistics Brokerage",
    desc: "خدمات وساطة لوجستية احترافية تربط بين مختلف وسائل النقل بسلاسة تامة، مما يضمن وصول شحنتك في أفضل وقت وبأقل تكلفة.",
    descEn: "Professional logistics brokerage services that seamlessly connect the different modes of transport, ensuring your shipment arrives at the best time and lowest cost.",
    features: [
      "تنسيق بين وسائل النقل المختلفة",
      "مفاوضات للحصول على أفضل الأسعار",
      "إدارة العلاقات مع الموانئ والمطارات",
      "خدمات التخليص الجمركي",
      "توحيد وتتبع جميع الشحنات",
    ],
    featuresEn: [
      "Coordination between the different modes of transport",
      "Negotiations to secure the best rates",
      "Managing relationships with ports and airports",
      "Customs clearance services",
      "Consolidation and tracking of all shipments",
    ],
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&h=675&fit=crop&auto=format",
    alt: "لوجستيات",
    altEn: "Logistics",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" /><path d="M8 12h8M12 8v8" />
      </svg>
    ),
  },
  {
    title: "إدارة عمليات النقل وسلاسل الإمداد",
    titleEn: "Transport Operations and Supply Chain Management",
    desc: "إدارة كاملة ومتكاملة لعمليات النقل وسلاسل الإمداد تضمن الكفاءة التشغيلية والالتزام التام بالمواعيد.",
    descEn: "Complete, integrated management of transport operations and supply chains that ensures operational efficiency and full commitment to schedules.",
    features: [
      "تخطيط وجدولة رحلات النقل",
      "تحسين مسارات التوزيع",
      "إدارة مستودعات ونقاط التجميع",
      "تقارير أداء دورية ومفصلة",
      "حلول رقمية لتتبع العمليات",
    ],
    featuresEn: [
      "Planning and scheduling of transport trips",
      "Optimization of distribution routes",
      "Management of warehouses and consolidation points",
      "Regular, detailed performance reports",
      "Digital solutions for operations tracking",
    ],
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&h=675&fit=crop&auto=format",
    alt: "سلسلة إمداد",
    altEn: "Supply chain",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8">
        <path d="M3 12h18M3 6h18M3 18h18" />
      </svg>
    ),
  },
  {
    title: "نقل المواد الخام والمنتجات النهائية",
    titleEn: "Transport of Raw Materials and Finished Products",
    desc: "نقل آمن ومضمون للمواد الخام والمنتجات النهائية بمعايير سلامة صارمة، مع الحفاظ على جودة البضاعة طوال رحلة النقل.",
    descEn: "Safe, reliable transport of raw materials and finished products under strict safety standards, preserving the quality of the goods throughout the journey.",
    features: [
      "أسطول متخصص لكل نوع بضاعة",
      "مقصورات محكمة الإغلاق للبضائع الحساسة",
      "أنظمة تبريد للمنتجات الغذائية",
      "تأمين شامل ضد أضرار النقل",
      "تسليم بمعايير سلامة صارمة",
    ],
    featuresEn: [
      "A specialized fleet for each type of goods",
      "Sealed compartments for sensitive goods",
      "Refrigeration systems for food products",
      "Comprehensive insurance against transport damage",
      "Delivery under strict safety standards",
    ],
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&h=675&fit=crop&auto=format",
    alt: "نقل بضائع",
    altEn: "Goods transport",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8">
        <rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 10h16" />
      </svg>
    ),
  },
  {
    title: "خدمات النقل للمصانع والشركات والمؤسسات",
    titleEn: "Transport Services for Factories, Companies and Institutions",
    desc: "حلول نقل مصممة خصيصًا لخدمة المصانع والشركات الكبرى، مع عقود طويلة الأمد وخدمة مخصصة لكل عميل.",
    descEn: "Transport solutions designed specifically to serve major factories and companies, with long-term contracts and a dedicated service for each client.",
    features: [
      "عقود سنوية بأسعار تفضيلية",
      "مندوب مخصص لكل عميل مؤسسي",
      "جداول زمنية ثابتة ومنتظمة",
      "تقارير شهرية مفصلة للعمليات",
      "حلول لوجستية مرنة حسب الطلب",
    ],
    featuresEn: [
      "Annual contracts at preferential rates",
      "A dedicated representative for each corporate client",
      "Fixed and regular schedules",
      "Detailed monthly operations reports",
      "Flexible logistics solutions on demand",
    ],
    img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=900&h=675&fit=crop&auto=format",
    alt: "مصنع",
    altEn: "Factory",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M9 9h6M9 12h6M9 15h4" />
      </svg>
    ),
  },
]

export default function Services() {
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
          <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&h=600&fit=crop&auto=format" alt={isAr ? "خدماتنا" : "Our services"} />
          <div className="page-header-overlay" />
          <div className="page-header-content">
            <ShimmerText as="h1" duration={2.2} delay={0.5}>{isAr ? "خدماتنا" : "Our Services"}</ShimmerText>
            <div className="breadcrumb">
              <NavLink to="/">{isAr ? "الرئيسية" : "Home"}</NavLink> / {isAr ? "خدماتنا" : "Our Services"}
            </div>
          </div>
        </div>
        <div className="page-header-notch">{isAr ? "خدماتنا" : "Our Services"}</div>
      </div>

      <section style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">{isAr ? "حلول متكاملة" : "Integrated Solutions"}</div>
            <ShimmerText as="h2" duration={2} delay={0.3}>{isAr ? "خدمات النقل الشاملة" : "Comprehensive Transport Services"}</ShimmerText>
            <p>{isAr ? "نؤمن بأن كل شحنة لها قصة. لذلك نصمم حلول نقل مخصصة تناسب طبيعة كل عميل وكل بضاعة." : "We believe every shipment has a story. That is why we design tailored transport solutions to suit the nature of each client and each cargo."}</p>
          </div>
        </div>
      </section>

      <div className="wrap">
        {services.map((s, i) => (
          <div className="service-detail reveal" key={s.title}>
            <div className={`service-detail-grid${i % 2 === 1 ? " reverse" : ""}`}>
              <div className="service-detail-img">
                <img src={s.img} alt={isAr ? s.alt : s.altEn} />
              </div>
              <div className="service-detail-body">
                <div className="service-big-icon">{s.icon}</div>
                <h2>{isAr ? s.title : s.titleEn}</h2>
                <p>{isAr ? s.desc : s.descEn}</p>
                <ul className="feature-list">
                  {(isAr ? s.features : s.featuresEn).map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}
