import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useReveal } from "../hooks/useReveal"
import { useLang } from "../context/LangContext"
import newsHeaderImg from "../imports/Gemini_Generated_Image_azs6uyazs6uyazs6-1.jpeg"
import ShimmerText from "../components/ui/shimmer-text"

export const articles = [
  {
    id: "1",
    title: {
      ar: "الشمس للنقل تضيف أسطولًا جديدًا من الحاويات المبردة",
      en: "Al-Shams Transport Adds a New Fleet of Refrigerated Containers",
    },
    excerpt: {
      ar: "في إطار خطة التوسع الاستراتيجية، أعلنت شركة الشمس للنقل عن إضافة أسطول جديد من الحاويات المبردة لخدمة قطاعات الغذاء والدواء.",
      en: "As part of its strategic expansion plan, Al-Shams Transport has announced the addition of a new fleet of refrigerated containers to serve the food and pharmaceutical sectors.",
    },
    date: { ar: "15 يوليو 2026", en: "July 15, 2026" },
    readTime: { ar: "3 دقائق", en: "3 min" },
    img: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?w=800&h=450&fit=crop&auto=format",
    alt: { ar: "حاوية مبردة", en: "Refrigerated container" },
    category: { ar: "أخبار الشركة", en: "Company News" },
  },
  {
    id: "2",
    title: {
      ar: "شراكة استراتيجية مع Farm Frites لتوزيع المنتجات على المستوى الإقليمي",
      en: "Strategic Partnership with Farm Frites for Regional Product Distribution",
    },
    excerpt: {
      ar: "أبرمت شركة الشمس للنقل عقدًا طويل الأمد مع شركة Farm Frites لإدارة عمليات التوزيع والنقل الإقليمي لمنتجاتها.",
      en: "Al-Shams Transport has signed a long-term contract with Farm Frites to manage the regional distribution and transport operations of its products.",
    },
    date: { ar: "28 يونيو 2026", en: "June 28, 2026" },
    readTime: { ar: "4 دقائق", en: "4 min" },
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&h=450&fit=crop&auto=format",
    alt: { ar: "ميناء", en: "Port" },
    category: { ar: "شراكات", en: "Partnerships" },
  },
  {
    id: "3",
    title: {
      ar: "الشمس للنقل تحصل على شهادة ISO 9001 لضمان الجودة",
      en: "Al-Shams Transport Earns ISO 9001 Quality Assurance Certification",
    },
    excerpt: {
      ar: "حصلت شركة الشمس للنقل على شهادة الجودة الدولية ISO 9001 تقديرًا لمعايير الجودة والسلامة المطبقة في جميع عملياتها.",
      en: "Al-Shams Transport has obtained the international ISO 9001 quality certification in recognition of the quality and safety standards applied across all its operations.",
    },
    date: { ar: "10 يونيو 2026", en: "June 10, 2026" },
    readTime: { ar: "2 دقائق", en: "2 min" },
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=450&fit=crop&auto=format",
    alt: { ar: "شهادة جودة", en: "Quality certificate" },
    category: { ar: "جوائز وشهادات", en: "Awards & Certifications" },
  },
  {
    id: "4",
    title: {
      ar: "توسيع خطوط الشحن البحري لتشمل موانئ الخليج العربي",
      en: "Expanding Maritime Shipping Lines to Include Arabian Gulf Ports",
    },
    excerpt: {
      ar: "أعلنت الشركة عن توسيع شبكة خطوط الشحن البحري لتشمل موانئ دبي وجدة والدمام، مما يعزز تغطيتها الإقليمية.",
      en: "The company has announced the expansion of its maritime shipping network to include the ports of Dubai, Jeddah, and Dammam, strengthening its regional coverage.",
    },
    date: { ar: "22 مايو 2026", en: "May 22, 2026" },
    readTime: { ar: "3 دقائق", en: "3 min" },
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=450&fit=crop&auto=format",
    alt: { ar: "ميناء شحن", en: "Shipping port" },
    category: { ar: "توسع", en: "Expansion" },
  },
  {
    id: "5",
    title: {
      ar: "مبادرة الاستدامة: تحديث أسطول الشاحنات بوقود أنظف",
      en: "Sustainability Initiative: Upgrading the Truck Fleet with Cleaner Fuel",
    },
    excerpt: {
      ar: "في إطار مسؤوليتها البيئية، تُطلق الشمس للنقل مبادرة لتحديث أسطولها بمركبات تعمل بوقود أكثر نظافة وكفاءة.",
      en: "As part of its environmental responsibility, Al-Shams Transport is launching an initiative to upgrade its fleet with vehicles running on cleaner, more efficient fuel.",
    },
    date: { ar: "8 مايو 2026", en: "May 8, 2026" },
    readTime: { ar: "4 دقائق", en: "4 min" },
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=450&fit=crop&auto=format",
    alt: { ar: "شاحنة", en: "Truck" },
    category: { ar: "استدامة", en: "Sustainability" },
  },
  {
    id: "6",
    title: {
      ar: "الذكرى الـ 24 للتأسيس: رحلة من العاشر من رمضان إلى العالم",
      en: "24th Anniversary: A Journey from 10th of Ramadan City to the World",
    },
    excerpt: {
      ar: "تحتفل شركة الشمس للنقل بمرور 24 عامًا على تأسيسها، في مسيرة حافلة بالإنجازات والشراكات الاستراتيجية.",
      en: "Al-Shams Transport is celebrating 24 years since its founding, marking a journey full of achievements and strategic partnerships.",
    },
    date: { ar: "1 أبريل 2026", en: "April 1, 2026" },
    readTime: { ar: "5 دقائق", en: "5 min" },
    img: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&h=450&fit=crop&auto=format",
    alt: { ar: "ذكرى تأسيس", en: "Anniversary" },
    category: { ar: "أخبار الشركة", en: "Company News" },
  },
]

export default function News() {
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
          <img src={newsHeaderImg} alt={isAr ? "الأخبار" : "News"} />
          <div className="page-header-overlay" />
          <div className="page-header-content">
            <ShimmerText as="h1" duration={2.2} delay={0.5}>{isAr ? "الأخبار" : "News"}</ShimmerText>
            <div className="breadcrumb">
              <NavLink to="/">{isAr ? "الرئيسية" : "Home"}</NavLink> / {isAr ? "الأخبار" : "News"}
            </div>
          </div>
        </div>
        <div className="page-header-notch">{isAr ? "الأخبار" : "News"}</div>
      </div>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">{isAr ? "آخر الأخبار" : "Latest News"}</div>
            <ShimmerText as="h2" duration={2} delay={0.3}>{isAr ? "أخبار الشمس للنقل" : "Al-Shams Transport News"}</ShimmerText>
            <p>
              {isAr
                ? "تابع آخر أخبار الشركة وإنجازاتها وشراكاتها في عالم النقل واللوجستيات."
                : "Follow the latest company news, achievements, and partnerships in the world of transport and logistics."}
            </p>
          </div>
          <div className="news-grid reveal-stagger">
            {articles.map((a) => (
              <NavLink to={`/news/${a.id}`} className="news-card" key={a.id} style={{ display: "block" }}>
                <div className="news-card-img">
                  <img src={a.img} alt={isAr ? a.alt.ar : a.alt.en} />
                </div>
                <div className="news-card-body">
                  <div className="news-meta">
                    <span>{isAr ? a.date.ar : a.date.en}</span>
                    <span className="dot" />
                    <span>{isAr ? `${a.readTime.ar} للقراءة` : `${a.readTime.en} read`}</span>
                    <span className="dot" />
                    <span>{isAr ? a.category.ar : a.category.en}</span>
                  </div>
                  <h3>{isAr ? a.title.ar : a.title.en}</h3>
                  <p>{isAr ? a.excerpt.ar : a.excerpt.en}</p>
                  <span className="read-more">{isAr ? "اقرأ المزيد ←" : "Read more →"}</span>
                </div>
              </NavLink>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button className="btn btn-ghost" style={{ fontSize: 15 }}>{isAr ? "تحميل المزيد" : "Load More"}</button>
          </div>
        </div>
      </section>
    </>
  )
}
