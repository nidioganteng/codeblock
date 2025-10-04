import { motion } from "motion/react"
import { Particles } from "../components/Particles"

const Pricing = () => {
  return (
    <section
    id = "pricing"
    className="min-h-screen w-full flex items-center justify-center text-white relative"
    >
        <Particles
            className="absolute inset-0 -z-50"
            quantity={100}
            ease={80}
            color={"#ffffff"}
            refresh
        />
        <motion.div className="text-center px-4 md:px-8 sm:px-6 mb-1 lg:-mb-4 "
        initial={{ opacity: 0, y: 50 }} // kondisi awal (transparan + agak turun)
        whileInView={{ opacity: 1, y: 0 }} // kondisi pas muncul di viewport
        transition={{ duration: 1, ease: "easeOut" }} // animasi halus
        viewport={{ once: true, amount: 0.2 }}    // jalan sekali aja, muncul saat 20% section masuk layar
        >
            <p className="
            services-text
            text-[14px] 
            sm:text-[16px] 
            md:text-[18px]
            ">
            PRICING
            </p>

            <h2 className='font-bold 
            mt-2 
            sm:mt-3
            md:mt-5
            lg:-mt-5 
            text-[20px] 
            sm:text-3xl 
            md:text-5xl 
            lg:text-[54px] 
            leading-snug
            '>
                Bring Your Website to Life With Us
            </h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-6 lg:gap-8 mx-auto justify-items-center'>

                {/* Pricing 1 */}
                <motion.div className="
                w-full max-w-[390px] sm:max-w-[420px] lg:max-w-[550px]
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
                    {/* Title */}
                    <h3 className="text-white text-[16px] font-light mb-4">Basic</h3>

                    {/* Price */}
                    <p className="text-white text-3xl sm:text-4xl font-extrabold mb-6">
                        Rp1.500.000
                    </p>

                    {/* Button */}
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full w-full mb-6">
                        <a 
                        href="https://wa.me/628816223146"
                        className="flex items-center justify-center gap-2 "
                        >
                        <img 
                            src="assets/socials/whatsApp.svg" 
                            alt="WhatsApp" 
                            className="w-5 h-5"
                        />
                        Contact Us
                        </a>
                    </button>

                    {/* Garis pemisah */}
                    <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-6"></div>

                    {/* Features */}
                    <ul className="space-y-6 text-white text-[14px] sm:text-[18px] lg:text-[20px] text-left">
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            Landing Page & Portfolio
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            1 - 4 Section
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            Custom Design
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            Responsive to All Devices
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            1 Year Maintenance
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            Contact form & Link to Social Media
                        </li>
                    </ul>
                </motion.div>

                {/* Pricing 2 */}
                <motion.div className="
                w-full max-w-[390px] sm:max-w-[420px] lg:max-w-[550px]
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
                    {/* Title */}
                    <h3 className="text-white text-[16px] font-light mb-4">Standard</h3>

                    {/* Price */}
                    <p className="text-white text-3xl sm:text-4xl font-extrabold mb-6">
                        Rp3.000.000
                    </p>

                    {/* Button */}
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full w-full mb-6">
                        <a 
                        href="https://wa.me/628816223146"
                        className="flex items-center justify-center gap-2"
                        >
                        <img 
                            src="assets/socials/whatsApp.svg" 
                            alt="WhatsApp" 
                            className="w-5 h-5"
                        />
                        Contact Us
                        </a>
                    </button>

                    {/* Garis pemisah */}
                    <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-6"></div>

                    {/* Features */}
                    <ul className="space-y-6 text-white text-[14px] sm:text-[18px] lg:text-[20px] text-left">
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            Startup Website
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            3 - 6 Pages
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            Custom Design
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            Standard Animation
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            Responsive to All Devices
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            1 Year Maintenance
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            Contact form & Link to Social Media
                        </li>
                    </ul>
                </motion.div>

                {/* Pricing 3 */}
                <motion.div className="
                w-full max-w-[390px] sm:max-w-[420px] lg:max-w-[550px]
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
                    {/* Title */}
                    <h3 className="text-white text-[16px] font-light mb-4">Premium</h3>

                    {/* Price */}
                    <p className="text-white text-3xl sm:text-4xl font-extrabold mb-6">
                        Rp8.000.000
                    </p>

                    {/* Button */}
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full w-full mb-6">
                        <a 
                        href="https://wa.me/628816223146"
                        className="flex items-center justify-center gap-2"
                        >
                        <img 
                            src="assets/socials/whatsApp.svg" 
                            alt="WhatsApp" 
                            className="w-5 h-5"
                        />
                        Contact Us
                        </a>
                    </button>

                    {/* Garis pemisah */}
                    <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mb-6"></div>


                    {/* Features */}
                    <ul className="space-y-6 text-white text-[14px] sm:text-[18px] lg:text-[20px] text-left">
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            Costum Pages
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            Custom Design
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            Full Animation
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            Responsive to All Devices
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            1 Year Maintenance
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            Aditional Features by Request
                        </li>
                        <li className="flex items-center gap-2">
                            <img src="assets/cek.svg" alt="check" className="w-7 h-7" />
                            Contact form & Link to Social Media
                        </li>
                    </ul>
                </motion.div>
            </div>
            <motion.div className="w-90 sm:w-full lg:w-full flex flex-col sm:flex-row items-center justify-between gap-4 border border-neutral-700 bg-[#0F0F11] rounded-xl lg:rounded-full px-6 py-4 mt-8 transition-transform duration-200 ease-in-out transform hover:scale-105">
                {/* Text */}
                <p className="text-white font-light text-center sm:text-left text-[13px] lg:text-[18px]">
                    Have a website idea that doesn't fit within our existing packages?
                    <span className="font-bold"> Don't worry, we're here to help!</span>
                </p>

                {/* Button */}
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-full w-80 lg:w-90">
                    <a 
                    href="https://wa.me/628816223146"
                    className="flex items-center justify-center gap-2"
                    >
                        <img 
                        src="assets/socials/whatsApp.svg" 
                        alt="WhatsApp" 
                        className="w-5 h-5"
                        />
                        Contact Us
                    </a>
                </button>
            </motion.div>

        </motion.div>
    </section>
  )
}

export default Pricing