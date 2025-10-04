import { motion } from "motion/react"
import { useState } from "react"

function Navigation() {
  return (
    <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-8 font-semibold relative z-20">
      <li className="text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a
          href="#about"
          className="text-lg md:text-base hover:text-white transition-colors"
        >
          About
        </a>
      </li>
      <li className="text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a
          href="#product"
          className="text-lg md:text-base hover:text-white transition-colors"
        >
          Projects
        </a>
      </li>
      <li className="text-neutral-400 hover:text-white max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5">
        <a
          href="#contact"
          className="text-lg md:text-base hover:text-white transition-colors"
        >
          Contacts Service
        </a>
      </li>
    </ul>
  )
}

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

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
            <img
              src="logo.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </a>

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

          {/* Desktop Navigation */}
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
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
              <Navigation />
            </nav>

          </motion.div>
        )}
      </div>
    </motion.div>
  )
}
