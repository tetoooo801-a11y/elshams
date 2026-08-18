import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Fleet from "./pages/Fleet"
import News from "./pages/News"
import Article from "./pages/Article"
import Contact from "./pages/Contact"
import LoadingScreen from "./components/LoadingScreen"
import { LangProvider, useLang } from "./context/LangContext"

function AppShell() {
  const { lang } = useLang()
  const isAr = lang === "ar"
  return (
    <div dir={isAr ? "rtl" : "ltr"} lang={lang}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200)
    return () => clearTimeout(t)
  }, [])

  return (
    <LangProvider>
      <LoadingScreen visible={loading} />
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </LangProvider>
  )
}
