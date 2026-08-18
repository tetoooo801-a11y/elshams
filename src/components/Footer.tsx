import { NavLink } from "react-router-dom"
import logoUrl from "../imports/logo-05.svg"
import emblemUrl from "../imports/logo-12-1.svg"
import footerLogoUrl from "../imports/footer-logo-full.png"
import { useLang } from "../context/LangContext"

/* ── inline SVGs ── */
const IcoLinkedIn = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17 }}>
    <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.66 4.78 6.12V23h-4v-6.72c0-1.6-.03-3.66-2.23-3.66-2.23 0-2.57 1.74-2.57 3.55V23h-4V8z"/>
  </svg>
)
const IcoWhatsApp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17 }}>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 1.9.53 3.68 1.45 5.2L2 22l4.94-1.4A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.24.68-1.37 1.3-1.9 1.38-.5.08-1.13.11-1.83-.11-.42-.13-.96-.3-1.66-.6-2.92-1.26-4.83-4.2-4.98-4.4-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.52.24.6.83 2.06.9 2.21.07.15.12.33.02.53-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.35 1.46.3.15.47.13.65-.08.18-.2.76-.89.96-1.19.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.23.57.36.08.13.08.75-.16 1.43z"/>
  </svg>
)
const IcoFacebook = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17 }}>
    <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12z"/>
  </svg>
)
const IcoPin = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17 }}>
    <path d="M12 2C7.6 2 4 5.6 4 10c0 5.5 8 12 8 12s8-6.5 8-12c0-4.4-3.6-8-8-8zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
  </svg>
)
const IcoMap = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17 }}>
    <path d="M15 3l-6 2.2L3 3v16l6 2.2 6-2.2 6 2.2V5l-6-2zM9 5.9l6 2.1v14l-6-2.1V5.9z"/>
  </svg>
)
const IcoBuilding = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17 }}>
    <path d="M4 3h16v18H4V3zm2 3v2h12V6H6zm0 4v2h12v-2H6zm0 4v2h8v-2H6z"/>
  </svg>
)
const IcoPhone = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17 }}>
    <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1L6.6 10.8z"/>
  </svg>
)
const IcoMail = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17 }}>
    <path d="M2 4h20v16H2V4zm2 2v.5l8 5.5 8-5.5V6H4zm16 3.1-7.4 5.1a1 1 0 0 1-1.2 0L4 9.1V18h16V9.1z"/>
  </svg>
)
const IcoTruck = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 17, height: 17 }}>
    <path d="M3 6h13l3 4h2v7h-2a2.5 2.5 0 0 1-5 0H9a2.5 2.5 0 0 1-5 0H3V6zm2 2v7h.6a2.5 2.5 0 0 1 4.8 0h4.2a2.5 2.5 0 0 1 4.8 0H20v-3h-2.6L15 9H5V8z"/>
  </svg>
)

/* ── Compass rose SVG (from reference) ── */
const Compass = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" style={{ width: 140, height: 140, filter: "drop-shadow(0 10px 18px rgba(22,51,111,.32)) drop-shadow(0 2px 4px rgba(0,0,0,.1))" }}>
    <defs>
      <linearGradient id="cg1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3053E5"/>
        <stop offset="100%" stopColor="#1a2fa0"/>
      </linearGradient>
      <linearGradient id="cg2" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#7fa3e0"/>
        <stop offset="100%" stopColor="#3053E5"/>
      </linearGradient>
    </defs>
    <polygon points="100,10 112,100 100,90 88,100" fill="url(#cg1)"/>
    <polygon points="100,190 112,100 100,110 88,100" fill="url(#cg1)"/>
    <polygon points="10,100 100,88 90,100 100,112" fill="url(#cg1)"/>
    <polygon points="190,100 100,88 110,100 100,112" fill="url(#cg2)"/>
    <polygon points="45,45 100,100 95,80 80,95" fill="#7fa3e0"/>
    <polygon points="155,155 100,100 105,120 120,105" fill="url(#cg1)"/>
    <polygon points="155,45 100,100 120,95 105,80" fill="url(#cg2)"/>
    <polygon points="45,155 100,100 80,105 95,120" fill="#1a2fa0"/>
    <circle cx="100" cy="100" r="18" fill="#e9edf5"/>
    <circle cx="100" cy="100" r="18" fill="none" stroke="#3053E5" strokeWidth="2"/>
  </svg>
)

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <span style={{
      width: 34, height: 34, minWidth: 34, borderRadius: "50%",
      background: "#fff", boxShadow: "0 2px 6px rgba(0,0,0,.08)",
      display: "flex", alignItems: "center", justifyContent: "center",
      color: "var(--primary)", flexShrink: 0,
    }}>
      {children}
    </span>
  )
}

export default function Footer() {
  const { lang } = useLang()
  const isAr = lang === "ar"
  const dir = isAr ? "rtl" : "ltr"

  const navLinks = [
    { to: "/about",    ar: "من نحن",     en: "About Us" },
    { to: "/services", ar: "خدماتنا",    en: "Our Services" },
    { to: "/fleet",    ar: "الأسطول",    en: "Fleet" },
    { to: "/news",     ar: "الأخبار",    en: "News" },
    { to: "/contact",  ar: "تواصل معنا", en: "Contact Us" },
  ]

  const contactItems = [
    { icon: <IcoPin />,      ar: "العاشر من رمضان – الشرقية",   en: "10th of Ramadan – Sharqia" },
    { icon: <IcoMap />,      ar: "منطقة الأردنية – سوق الجملة", en: "Al-Ordonia – Wholesale Market" },
    { icon: <IcoBuilding />, ar: "المرحلة الرابعة – مكتب 16",   en: "Phase Four – Office 16" },
    { icon: <IcoPhone />,    ar: "0123 456 7890",                en: "0123 456 7890" },
    { icon: <IcoMail />,     ar: "info@alshams-transport.com",   en: "info@alshams-transport.com" },
  ]

  const socialItems = [
    { icon: <IcoLinkedIn />,  label: "LinkedIn" },
    { icon: <IcoWhatsApp />,  label: "WhatsApp" },
    { icon: <IcoFacebook />,  label: "Facebook" },
  ]

  return (
    <footer style={{ background: "transparent", padding: "0 32px 32px", marginTop: 40 }}>
      <div style={{ position: "relative", width: "100%", maxWidth: 1320, margin: "0 auto" }}>


        {/* Card */}
        <div className="ft-card">

{/* Brand */}
          <div style={{ textAlign: "center", marginBottom: 24, position: "relative", zIndex: 2 }}>
            <img src={footerLogoUrl} alt="ELSHAMS Freight & Logistics" style={{ height: 80, maxWidth: "100%", width: "auto", objectFit: "contain", marginBottom: 0, display: "inline-block" }} />
          </div>

          {/* 4 columns */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.3fr 1fr 1.4fr", gap: 20, paddingBottom: 24, direction: dir }}>

            {/* تابعنا */}
            <div>
              <h3 className="ft-col-head">{isAr ? "تابعنا" : "Follow Us"}</h3>
              <ul className="ft-list ft-list-sm">
                {socialItems.map(s => (
                  <li key={s.label} className="ft-text-item">{s.label}</li>
                ))}
              </ul>
            </div>

            {/* تواصل معنا */}
            <div>
              <h3 className="ft-col-head">{isAr ? "تواصل معنا" : "Contact"}</h3>
              <ul className="ft-list ft-list-sm">
                {contactItems.map((c, i) => (
                  <li key={i} className="ft-text-item">{isAr ? c.ar : c.en}</li>
                ))}
              </ul>
            </div>

            {/* الشركة */}
            <div>
              <h3 className="ft-col-head">{isAr ? "الشركة" : "Company"}</h3>
              <ul className="ft-list ft-list-links">
                {navLinks.map(l => (
                  <li key={l.to}>
                    <NavLink to={l.to} className={({ isActive }) => isActive ? "ft-nav-link ft-nav-link--active" : "ft-nav-link"}>
                      {isAr ? l.ar : l.en}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* عن الشركة */}
            <div>
              <h3 className="ft-col-head ft-col-head-about">{isAr ? "شريكك في النقل والخدمات اللوجستية" : "Your Freight & Logistics Partner"}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.7, color: "var(--text-soft)", margin: "10px 0 0", textAlign: isAr ? "right" : "left" }}>
                {isAr
                  ? "منذ عام 2002، تقدم شركة الشمس للنقل حلولًا متكاملة في مجال النقل والخدمات اللوجستية، مع خبرة في التعامل مع مختلف أنواع الشحنات والاحتياجات التشغيلية. نسعى إلى تقديم خدمات نقل موثوقة تجمع بين المرونة، المتابعة، والاهتمام بسلامة الشحنات."
                  : "Since 2002, Elshams Transport has provided integrated freight and logistics solutions with expertise in handling various shipment types and operational needs. We strive to deliver reliable transport services combining flexibility, follow-up, and cargo safety."}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div style={{ display: "flex", justifyContent: "center", gap: 12, padding: "6px 0 20px", direction: dir }}>
            <NavLink to="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 20px", borderRadius: 40,
              background: "#fff", color: "var(--ink)",
              border: "1.5px solid #e3e6eb", fontSize: 13.5, fontWeight: 700,
              textDecoration: "none",
            }}>
              {isAr ? "تواصل معنا" : "Contact Us"}
              <IcoPhone />
            </NavLink>
            <NavLink to="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "10px 20px", borderRadius: 40,
              background: "var(--primary)", color: "#fff",
              border: "none", fontSize: 13.5, fontWeight: 700,
              textDecoration: "none",
            }}>
              {isAr ? "اطلب عرض سعر" : "Request a Quote"}
              <IcoTruck />
            </NavLink>
          </div>

          {/* Bottom bar */}
          <div style={{
            borderTop: "1px solid #e3e6eb", paddingTop: 22,
            display: "flex", justifyContent: "center", gap: 14,
            fontSize: 13.5, color: "var(--text-soft)", flexWrap: "wrap",
            paddingBottom: 24, direction: dir,
          }}>
            <a style={{ color: "inherit", textDecoration: "none" }}>
              {isAr ? "© 2026 شركة الشمس للنقل. جميع الحقوق محفوظة." : "© 2026 Shams Transport. All rights reserved."}
            </a>
            <span style={{ opacity: 0.55 }}>|</span>
            <a style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}>{isAr ? "سياسة الخصوصية" : "Privacy Policy"}</a>
            <span style={{ opacity: 0.55 }}>|</span>
            <a style={{ color: "inherit", textDecoration: "none", cursor: "pointer" }}>{isAr ? "الشروط والأحكام" : "Terms & Conditions"}</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
