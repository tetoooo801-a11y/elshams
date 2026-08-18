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

  useEffect(() => {
    const onScroll = () => {
      const down = window.scrollY > 120
      setScrolled(window.scrollY > 60)
      // Re-collapse whenever the user scrolls down past the threshold.
      if (down) setCollapsed(true)
      else setCollapsed(false)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
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
        </div>
      </div>
    </header>
  )
}
