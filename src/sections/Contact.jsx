import { useState } from "react"
import emailjs from "@emailjs/browser"
import Alert from "../components/Alert"
import { Particles } from "../components/Particles"
import { motion } from "motion/react"
import { useLang } from "../lang/LangContext"

const Contact = () => {
  const { t } = useLang()
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [alertType, setAlertType] = useState("success")
  const [alertMessage, setAlertMessage] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const showAlertMessage = (type, message) => {
    setAlertType(type)
    setAlertMessage(message)
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 5000)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "codeblock",
          from_email: formData.email,
          to_email: "codeblock.id@gmail.com",
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setIsLoading(false)
      setFormData({ name: "", email: "", message: "" })
      showAlertMessage("success", t.contact.successMessage)
    } catch (error) {
      setIsLoading(false)
      showAlertMessage("danger", t.contact.errorMessage)
    }
  }

  return (
    <section id="contact" className="relative flex items-center min-h-screen py-20 md:mt-30">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {showAlert && <Alert type={alertType} text={alertMessage} />}

      <motion.div
        className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-[#1E1E20]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col items-start w-full gap-5 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">{t.contact.title}</h2>
          <p className="font-normal text-neutral-400">{t.contact.description}</p>
        </motion.div>

        <motion.form
          className="w-full"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="mb-5">
            <label htmlFor="name" className="field-label">{t.contact.name}</label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder={t.contact.namePlaceholder}
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label">{t.contact.email}</label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder={t.contact.emailPlaceholder}
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label">{t.contact.message}</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="field-input field-input-focus"
              placeholder={t.contact.messagePlaceholder}
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-[#2355D3] hover-animation"
          >
            {!isLoading ? t.contact.send : t.contact.sending}
          </button>
        </motion.form>
      </motion.div>
    </section>
  )
}

export default Contact
