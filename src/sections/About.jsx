import { motion } from "motion/react"
import { Particles } from "../components/Particles"
import { useLang } from "../lang/LangContext"

const serviceImages = [
  "assets/Webdesign.png",
  "assets/Brand-Identity.png",
  "assets/UI-UX.png",
  "assets/Landing-Page.png",
]

const cardStyles = [
  { background: "linear-gradient(to bottom, #00000000 20%, #2355D3 100%)" },
  { background: "#1E1E20" },
  { background: "linear-gradient(to bottom, #00000000 20%, #2355D3 100%)" },
  { background: "#1E1E20" },
]

const cardMargins = [
  "mt-8 sm:mt-10 lg:mt-15",
  "mt-6 sm:mt-8 lg:mt-10",
  "mt-8 sm:mt-10 lg:mt-15",
  "mt-6 sm:mt-8 lg:mt-10",
]

const About = () => {
  const { t } = useLang()

  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center text-white relative -mt-20"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      <motion.div
        className="text-center px-4 md:px-8 sm:px-6 mb-1 lg:-mb-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="services-text text-[12px] sm:text-[14px] md:text-[16px]">
          {t.about.label}
        </p>

        <h2 className="font-bold mt-2 sm:mt-3 md:mt-5 lg:-mt-5 text-4xl sm:text-4xl md:text-6xl lg:text-[74px] leading-snug">
          {t.about.title} <span className="text-[#2355D3]">{t.about.titleAccent}</span>
        </h2>

        <div className="w-16 h-1 sm:w-32 sm:h-1.5 md:w-40 md:h-2 lg:w-50 lg:h-2 bg-[#2355D3] mx-auto lg:-mt-1" />

        <p className="mt-3 sm:mt-6 md:mt-7 lg:mt-7 max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-7xl mx-auto text-[11px] sm:text-[9px] md:text-[15px] lg:text-[17px] leading-relaxed">
          {t.about.description}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-15 max-w-6xl mx-auto justify-items-center">
          {t.about.services.map((service, i) => (
            <motion.div
              key={service.title}
              className={`w-45 h-45 sm:w-56 sm:h-56 lg:w-60 lg:h-60 rounded-xl shadow-lg flex flex-col items-center justify-center text-center p-4 sm:p-5 lg:p-6 ${cardMargins[i]} transition-transform duration-200 ease-in-out transform hover:scale-110`}
              style={cardStyles[i]}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="mb-3 sm:mb-4">
                <img
                  src={serviceImages[i]}
                  alt={service.title}
                  className="w-18 h-16 sm:w-22 sm:h-20 lg:w-28 lg:h-26"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{service.title}</h3>
              <p className="text-xs sm:text-sm lg:text-[14px]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default About
