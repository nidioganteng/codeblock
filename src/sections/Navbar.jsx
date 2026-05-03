import { motion, AnimatePresence } from "motion/react"
import { useState, useRef, useEffect } from "react"
import { useLang } from "../lang/LangContext"

const languages = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "id", label: "Indonesia", flag: "🇮🇩" },
]

function LangDropdown({ lang, setLang }) {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef(null)
  const current = languages.find((l) => l.code === lang)

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setIsOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/20 hover:border-white/50 transition-colors text-sm font-medium text-neutral-300 hover:text-white"
        aria-label="Select language"
      >
        <span className="text-base leading-none">{current.flag}</span>
        <span className="hidden sm:inline">{current.label}</span>
        <svg
          className={`w-3 h-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute right-0 mt-2 w-40 rounded-xl border border-white/10 bg-[#1E1E20] shadow-xl overflow-hidden z-50"
            initial={{ opacity: 0, y: -6, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.95 }}
            transition={{ duration: 0.15 }}
          >
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setIsOpen(false) }}
                className={`flex items-center gap-2.5 w-full px-4 py-2.5 text-sm transition-colors hover:bg-white/10 ${
                  lang === l.code ? "text-white font-semibold" : "text-neutral-400"
                }`}
              >
                <span className="text-base">{l.flag}</span>
                {l.label}
                {lang === l.code && (
                  <svg className="w-3.5 h-3.5 ml-auto text-[#2355D3]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function Navigation({ t, onClose }) {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-8 font-semibold relative z-20">
      <li className="text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a href="#about" onClick={onClose} className="text-lg md:text-base hover:text-white transition-colors">
          {t.navbar.about}
        </a>
      </li>
      <li className="text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a href="#product" onClick={onClose} className="text-lg md:text-base hover:text-white transition-colors">
          {t.navbar.projects}
        </a>
      </li>
      <li className="text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a href="#contact" onClick={onClose} className="text-lg md:text-base hover:text-white transition-colors">
          {t.navbar.contact}
        </a>
      </li>
    </ul>
  )
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { t, lang, setLang } = useLang()

  return (
    <motion.div
      className="fixed inset-x-0 z-20 w-full backdrop-blur"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between py-4 sm:py-0">
          {/* Logo */}
          <a href="/" className="opacity-50 hover:opacity-100">
            <img src="logo.png" alt="Logo" className="h-8 w-auto" />
          </a>

          <div className="flex items-center gap-3">
            {/* Desktop Navigation */}
            <nav className="hidden sm:flex">
              <Navigation t={t} />
            </nav>

            {/* Language Dropdown */}
            <LangDropdown lang={lang} setLang={setLang} />

            {/* Hamburger Menu for Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex cursor-pointer text-neutral-300 hover:text-white focus:outline-none sm:hidden"
            >
              <img
                src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
                alt="Menu"
                className="w-6 h-6"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            className="block overflow-hidden text-center sm:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ maxHeight: "100vh" }}
            transition={{ duration: 1 }}
          >
            <nav className="pb-5">
              <Navigation t={t} onClose={() => setIsOpen(false)} />
            </nav>
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
