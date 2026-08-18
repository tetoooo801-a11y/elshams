import { useEffect } from "react"
import { NavLink } from "react-router-dom"
import { useReveal } from "../hooks/useReveal"
import { useLang } from "../context/LangContext"
import aboutHeaderImg from "../imports/Gemini_Generated_Image_i95qici95qici95q-1.jpeg"
import ShimmerText from "../components/ui/shimmer-text"

const whyPoints = [
  { icon: "⏱", text: "أكثر من 20 عامًا من الخبرة في النقل واللوجستيات", textEn: "More than 20 years of experience in transport and logistics" },
  { icon: "🚛", text: "حلول نقل وشحن متكاملة برًا وبحرًا وجوًا", textEn: "Integrated transport and shipping solutions by land, sea and air" },
  { icon: "🗺", text: "تغطية محلية وإقليمية لمصر والدول العربية", textEn: "Local and regional coverage across Egypt and the Arab countries" },
  { icon: "🚚", text: "أسطول متنوع يلبي احتياجات كل عميل", textEn: "A diverse fleet that meets the needs of every client" },
  { icon: "🕐", text: "التزام صارم بمواعيد التسليم المتفق عليها", textEn: "Strict commitment to the agreed delivery schedules" },
  { icon: "💰", text: "أسعار تنافسية مع حلول مرنة لكل ميزانية", textEn: "Competitive prices with flexible solutions for every budget" },
  { icon: "📞", text: "دعم مستمر للعملاء على مدار الساعة", textEn: "Continuous customer support around the clock" },
  { icon: "🏭", text: "خبرة واسعة في خدمة المصانع والشركات الكبرى", textEn: "Extensive experience serving major factories and companies" },
]

const WHY_SVGS = [
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8"><rect x="2" y="8" width="12" height="9" rx="1.5"/><path d="M14 11h4l3 3v3h-7z"/><circle cx="6" cy="19" r="1.6"/><circle cx="17" cy="19" r="1.6"/></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8"><circle cx="12" cy="12" r="9"/><path d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"/></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8"><path d="M3 17h18l-2 3H5z"/><path d="M5 17V9l7-4 7 4v8"/></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8"><path d="M12 2l3 7h7l-5.5 4 2 7L12 16l-6.5 4 2-7L2 9h7z"/></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2A19.8 19.8 0 013.09 4.18 2 2 0 015.07 2h3a2 2 0 012 1.72 12.8 12.8 0 00.7 2.81 2 2 0 01-.45 2.11L9.09 9.91A16 16 0 0015 15.82l1.27-1.27a2 2 0 012.11-.45 12.8 12.8 0 002.81.7A2 2 0 0122 16.92z"/></svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E7A73C" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 12h6M9 15h4"/></svg>,
]

const coverageAreas = [
  { ar: "مصر كاملًا", en: "All of Egypt" },
  { ar: "المملكة العربية السعودية", en: "Saudi Arabia" },
  { ar: "الإمارات", en: "United Arab Emirates" },
  { ar: "الكويت", en: "Kuwait" },
  { ar: "قطر", en: "Qatar" },
  { ar: "البحرين", en: "Bahrain" },
  { ar: "الأردن", en: "Jordan" },
  { ar: "ليبيا", en: "Libya" },
]

export default function About() {
  useReveal()
  const { lang } = useLang()
  const isAr = lang === "ar"

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header-wrap" style={{ position: "relative" }}>
        <div className="page-header">
          <img src={aboutHeaderImg} alt={isAr ? "ميناء" : "Port"} />
          <div className="page-header-overlay" />
          <div className="page-header-content">
            <ShimmerText as="h1" duration={2.2} delay={0.5}>{isAr ? "من نحن" : "About Us"}</ShimmerText>
            <div className="breadcrumb">
              <NavLink to="/">{isAr ? "الرئيسية" : "Home"}</NavLink> / {isAr ? "من نحن" : "About Us"}
            </div>
          </div>
        </div>
        <div className="page-header-notch">{isAr ? "من نحن" : "About Us"}</div>
      </div>

      {/* FOUNDING STORY */}
      <section className="about">
        <div className="wrap">
          <div className="about-visual-wrap reveal">
            <div className="about-visual">
              <img
                src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&h=1125&fit=crop&auto=format"
                alt={isAr ? "ميناء حاويات" : "Container port"}
              />
            </div>
            <div className="stat-badge">
              <b className="mono">20+</b>
              <span>{isAr ? "سنة خبرة في خدمة الصناعة" : "years of experience serving industry"}</span>
            </div>
          </div>
          <div className="about-body reveal">
            <div className="eyebrow">{isAr ? "قصتنا" : "Our Story"}</div>
            <ShimmerText as="h2" duration={2} delay={0.4} style={{ fontSize: 32, marginBottom: 20 }}>{isAr ? "شراكة صناعية ممتدة منذ العاشر من رمضان" : "An industrial partnership rooted in 10th of Ramadan City"}</ShimmerText>
            <p>
              {isAr ? "تأسست شركة الشمس للنقل عام 2002 في قلب المنطقة الصناعية بمدينة العاشر من رمضان، لتصبح على مدار أكثر من عقدين شريكًا موثوقًا للمصانع والشركات التجارية داخل مصر وخارجها." : "Shams Transport was founded in 2002 in the heart of the industrial zone of 10th of Ramadan City, and over more than two decades it has become a trusted partner for factories and commercial companies inside and outside Egypt."}
            </p>
            <p>
              {isAr ? "نجمع بين السرعة والالتزام والأمان، مع أسطول متنوع وحلول نقل مرنة تناسب كل نوع من أنواع البضائع، من الخامات الصناعية حتى المنتجات الغذائية والدوائية الحساسة." : "We combine speed, commitment and safety with a diverse fleet and flexible transport solutions suited to every type of cargo, from industrial raw materials to sensitive food and pharmaceutical products."}
            </p>
            <p>
              {isAr ? "على مدى أكثر من عقدين، تحولت شركة الشمس من مشروع ناشئ إلى كيان لوجستي راسخ يخدم كبرى المصانع والشركات في مصر والمنطقة العربية، ويحافظ على ثقة عملائه من خلال الجودة والالتزام والسعر المناسب." : "Over more than two decades, Shams has grown from a startup into a well-established logistics entity serving major factories and companies in Egypt and the Arab region, maintaining its clients' trust through quality, commitment and fair pricing."}
            </p>
            <div className="pillbox">
              <span className="pill">{isAr ? "تأسست 2002" : "Founded 2002"}</span>
              <span className="pill">{isAr ? "العاشر من رمضان" : "10th of Ramadan City"}</span>
              <span className="pill">{isAr ? "نقل بري وبحري وجوي" : "Land, sea and air transport"}</span>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section style={{ paddingTop: 0, paddingBottom: 110 }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">{isAr ? "التوجه الاستراتيجي" : "Strategic Direction"}</div>
            <ShimmerText as="h2" duration={2} delay={0.3}>{isAr ? "رؤيتنا ورسالتنا" : "Our Vision and Mission"}</ShimmerText>
          </div>
          <div className="vision-grid reveal-stagger">
            <div className="vision-card">
              <div className="eyebrow">{isAr ? "الرؤية" : "Vision"}</div>
              <h3 style={{ fontSize: 22, marginBottom: 14 }}>{isAr ? "أن نكون رائدين في النقل واللوجستيات" : "To be a leader in transport and logistics"}</h3>
              <p>
                {isAr ? "أن نكون من الشركات الرائدة في مجال النقل والخدمات اللوجستية في مصر والشرق الأوسط، من خلال تقديم خدمات عالية الجودة تعتمد على الكفاءة التشغيلية والابتكار والالتزام بمواعيد التسليم." : "To be among the leading companies in transport and logistics services in Egypt and the Middle East, by providing high-quality services built on operational efficiency, innovation and commitment to delivery schedules."}
              </p>
            </div>
            <div className="vision-card">
              <div className="eyebrow">{isAr ? "الرسالة" : "Mission"}</div>
              <h3 style={{ fontSize: 22, marginBottom: 14 }}>{isAr ? "حلول نقل متكاملة بمعايير عالمية" : "Integrated transport solutions to global standards"}</h3>
              <p>
                {isAr ? "نسعى إلى توفير حلول نقل وشحن متكاملة تساعد عملاءنا على إدارة سلاسل الإمداد بكفاءة، مع الحفاظ على أعلى معايير السلامة والجودة والاحترافية في جميع مراحل النقل." : "We strive to provide integrated transport and shipping solutions that help our clients manage their supply chains efficiently, while maintaining the highest standards of safety, quality and professionalism at every stage of transport."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY SHAMS */}
      <section className="services" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head reveal">
            <div className="eyebrow">{isAr ? "لماذا الشمس" : "Why Shams"}</div>
            <ShimmerText as="h2" duration={2} delay={0.3}>{isAr ? "ما يميزنا عن غيرنا" : "What Sets Us Apart"}</ShimmerText>
            <p>{isAr ? "ثمانية أسباب تجعل الشمس للنقل الشريك المثالي لأعمالك." : "Eight reasons that make Shams Transport the ideal partner for your business."}</p>
          </div>
          <div className="why-grid reveal-stagger">
            {whyPoints.map((w, i) => (
              <div className="why-card" key={i}>
                <div className="why-icon">{WHY_SVGS[i]}</div>
                <p>{isAr ? w.text : w.textEn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <div className="coverage-dark reveal">
          <div style={{ textAlign: "center" }}>
            <div className="eyebrow" style={{ justifyContent: "center", color: "var(--sun)" }}>{isAr ? "التغطية الجغرافية" : "Geographic Coverage"}</div>
            <ShimmerText as="h2" duration={2} delay={0.3}>{isAr ? "نصل إليك أينما كنت" : "We Reach You Wherever You Are"}</ShimmerText>
            <p>
              {isAr ? "تنطلق عمليات الشركة من مقرها بمدينة العاشر من رمضان، وتغطي خدماتها جميع أنحاء جمهورية مصر العربية، بالإضافة إلى الشحن الإقليمي والدولي لجميع دول الخليج والدول العربية." : "The company's operations run from its headquarters in 10th of Ramadan City, covering all of the Arab Republic of Egypt, in addition to regional and international shipping to all the Gulf and Arab countries."}
            </p>
            <div className="coverage-marq">
              <div className="coverage-marq-track">
                {[0, 1].map((g) => (
                  <div className="coverage-marq-group" key={g} aria-hidden={g === 1}>
                    {coverageAreas.map((c) => (
                      <span className="coverage-dot" key={`${g}-${c.en}`}>
                        <b>●</b> {isAr ? c.ar : c.en}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>

      {/* CLIENTS */}
      <section style={{ paddingTop: 80, paddingBottom: 60, textAlign: "center" }}>
        <div className="wrap reveal">
          <div className="eyebrow" style={{ justifyContent: "center" }}>{isAr ? "عملاؤنا" : "Our Clients"}</div>
          <ShimmerText as="h2" duration={2} delay={0.3} style={{ fontSize: 26, marginBottom: 8 }}>{isAr ? "شركاء نجاحنا على مدار أكثر من 20 عام" : "Partners in our success for over 20 years"}</ShimmerText>
          <div className="clients-row" style={{ marginTop: 28 }}>
            {["EIPICO", "Farm Frites", "Americana", "ICAPP"].map((c) => (
              <span className="client-name" key={c}>{c}</span>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}
