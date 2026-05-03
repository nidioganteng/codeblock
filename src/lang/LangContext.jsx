import { createContext, useContext, useState } from "react"
import { en } from "./en"
import { id } from "./id"

const translations = { en, id }

const LangContext = createContext(null)

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState("en")
  const t = translations[lang]
  return (
    <LangContext.Provider value={{ t, lang, setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
