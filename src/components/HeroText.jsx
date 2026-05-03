import { motion } from "motion/react"
import { useLang } from "../lang/LangContext"

const HeroText = () => {
  const { t } = useLang()
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen w-full">
      <div className="text-center">
        <motion.h1
          className="font-medium text-[53px] sm:text-[60px] md:text-[70px] lg:text-[80px] xl:text-[87px] leading-[0.9]"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t.hero.title.split("\n").map((line, i) => (
            <span key={i}>
              {line}
              {i < t.hero.title.split("\n").length - 1 && <br />}
            </span>
          ))}
        </motion.h1>

        <motion.p
          className="font-normal text-[9px] sm:text-[10px] md:text-[12px] lg:text-[14px] leading-relaxed mt-6 sm:mt-8 max-w-2xl mx-auto px-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t.hero.description}
        </motion.p>
      </div>
    </div>
  )
}

export default HeroText
