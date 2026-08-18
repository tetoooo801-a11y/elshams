import { createContext, useContext, useState, type ReactNode } from "react"

type Lang = "ar" | "en"

const LangContext = createContext<{ lang: Lang; toggle: () => void }>({
  lang: "ar",
  toggle: () => {},
})

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("ar")
  const toggle = () => setLang((l) => (l === "ar" ? "en" : "ar"))
  return <LangContext.Provider value={{ lang, toggle }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}
