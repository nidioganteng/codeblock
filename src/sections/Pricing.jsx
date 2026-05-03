import { motion } from "motion/react"
import { Particles } from "../components/Particles"
import { useLang } from "../lang/LangContext"

const WaButton = ({ label, className = "" }) => (
  <a
    href="https://wa.me/628816223146"
    target="_blank"
    rel="noopener noreferrer"
    className={`flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full ${className}`}
  >
    <img src="assets/socials/whatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
    {label}
  </a>
)

const PricingCard = ({ title, price, features, contactLabel }) => (
  <motion.div
    className="w-full max-w-[390px] sm:max-w-[420px] lg:max-w-[550px]
    rounded-xl shadow-lg flex flex-col items-start
    p-4 sm:p-5 lg:p-6
    mt-8 sm:mt-10 lg:mt-12
    transition-transform duration-200 ease-in-out hover:scale-105
    border border-neutral-700"
    style={{ background: "#0F0F11" }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true, amount: 0.2 }}
  >
    <h3 className="text-white text-[16px] font-light mb-4">{title}</h3>
    <p className="text-white text-3xl sm:text-4xl font-extrabold mb-6">{price}</p>

    <WaButton label={contactLabel} className="w-full mb-6" />

    <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-6" />

    <ul className="space-y-6 text-white text-[14px] sm:text-[18px] lg:text-[20px] text-left">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-2">
          <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
          {feature}
        </li>
      ))}
    </ul>
  </motion.div>
)

const Pricing = () => {
  const { t } = useLang()

  return (
    <section
      id="pricing"
      className="min-h-screen w-full flex items-center justify-center text-white relative"
    >
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <motion.div
        className="text-center px-4 md:px-8 sm:px-6 mb-1 lg:-mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <p className="services-text text-[14px] sm:text-[16px] md:text-[18px]">
          {t.pricing.label}
        </p>

        <h2 className="font-bold mt-2 sm:mt-3 md:mt-5 lg:-mt-5 text-[20px] sm:text-3xl md:text-5xl lg:text-[54px] leading-snug">
          {t.pricing.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-6 lg:gap-8 mx-auto justify-items-center">
          {t.pricing.plans.map((plan) => (
            <PricingCard
              key={plan.title}
              {...plan}
              contactLabel={t.pricing.contactUs}
            />
          ))}
        </div>

        <motion.div className="w-90 sm:w-full lg:w-full flex flex-col sm:flex-row items-center justify-between gap-4 border border-neutral-700 bg-[#0F0F11] rounded-xl lg:rounded-full px-6 py-4 mt-8 transition-transform duration-200 ease-in-out transform hover:scale-105">
          <p className="text-white font-light text-center sm:text-left text-[13px] lg:text-[18px]">
            {t.pricing.customText}
            <span className="font-bold">{t.pricing.customBold}</span>
          </p>
          <WaButton label={t.pricing.contactUs} className="w-80 lg:w-90 px-6" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Pricing
