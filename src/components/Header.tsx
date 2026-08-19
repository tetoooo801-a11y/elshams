import { NavLink } from "react-router-dom"
import { useLang } from "../context/LangContext"
import { useEffect, useState } from "react"
import logoUrl from "../imports/header-logo-full.png"
import pillMarkUrl from "../imports/logo-11.svg"

export default function Header() {
  const { lang, toggle } = useLang()
  const isAr = lang === "ar"
  const [scrolled, setScrolled] = useState(false)
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const down = window.scrollY > 120
      setScrolled(window.scrollY > 60)
      if (down) setCollapsed(true)
      else setCollapsed(false)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const navItems = [
    { to: "/", end: true, ar: "الرئيسية", en: "Home", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
    )},
    { to: "/about", ar: "من نحن", en: "About Us", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
    )},
    { to: "/services", ar: "خدماتنا", en: "Services", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
    )},
    { to: "/fleet", ar: "الأسطول", en: "Fleet", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
    )},
    { to: "/news", ar: "الأخبار", en: "News", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M18 18h-8"/><path d="M18 10h-8"/></svg>
    )},
    { to: "/contact", ar: "تواصل معنا", en: "Contact Us", icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    )},
  ]

  return (
    <>
      <header className={`site-header${scrolled ? " scrolled" : ""}${collapsed ? " collapsed" : ""}`}>
        {/* Collapsed state: only the logo, centered in a white pill. Click to reopen the bar. */}
        <button
          type="button"
          className="nav-pill"
          onClick={() => setCollapsed(false)}
          aria-label={isAr ? "إظهار القائمة" : "Show menu"}
        >
          <img className="nav-pill-logo" src={pillMarkUrl} alt={isAr ? "الشمس للنقل" : "Shams Transport"} />
        </button>

        <div className="nav">
          <NavLink to="/" className="logo" aria-label={isAr ? "الشمس للنقل" : "Shams Transport"}>
            <img className="logo-img" src={logoUrl} alt={isAr ? "الشمس للنقل" : "Shams Transport"} style={{ height: 42, maxWidth: "100%", width: "auto", objectFit: "contain" }} />
          </NavLink>

          <nav className="nav-links">
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>{isAr ? "الرئيسية" : "Home"}</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>{isAr ? "من نحن" : "About"}</NavLink>
            <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>{isAr ? "خدماتنا" : "Services"}</NavLink>
            <NavLink to="/fleet" className={({ isActive }) => isActive ? "active" : ""}>{isAr ? "الأسطول" : "Fleet"}</NavLink>
            <NavLink to="/news" className={({ isActive }) => isActive ? "active" : ""}>{isAr ? "الأخبار" : "News"}</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>{isAr ? "تواصل معنا" : "Contact"}</NavLink>
          </nav>

          <div className="nav-actions">
            <button
              onClick={toggle}
              className="btn btn-track"
              style={{ fontFamily: "inherit", letterSpacing: ".04em" }}
              aria-label="Switch language"
            >
              {isAr ? "EN" : "ع"}
            </button>

            <button
              type="button"
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer / Overlay */}
      {mobileOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileOpen(false)}>
          <div className="mobile-drawer" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-drawer-header">
              <img src={logoUrl} alt="Shams Transport" className="mobile-drawer-logo" />
              <button type="button" className="mobile-drawer-close" onClick={() => setMobileOpen(false)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            <nav className="mobile-drawer-nav">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) => `mobile-drawer-link${isActive ? " active" : ""}`}
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="mobile-drawer-icon">{item.icon}</span>
                  <span className="mobile-drawer-label">{isAr ? item.ar : item.en}</span>
                </NavLink>
              ))}
            </nav>

            <div className="mobile-drawer-footer">
              <NavLink to="/contact" className="mobile-drawer-cta" onClick={() => setMobileOpen(false)}>
                {isAr ? "اطلب عرض سعر" : "Request a Quote"}
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
