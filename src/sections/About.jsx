import { motion } from "motion/react";
import { Particles } from "../components/Particles";

const About = () => {
  return (
    <>
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

      {/* Text */}
      <motion.div className="text-center px-4 md:px-8 sm:px-6 mb-1 lg:-mb-5"
        initial={{ opacity: 0, y: 50 }} // kondisi awal (transparan + agak turun)
        whileInView={{ opacity: 1, y: 0 }} // kondisi pas muncul di viewport
        transition={{ duration: 1, ease: "easeOut" }} // animasi halus
        viewport={{ once: true, amount: 0.2 }}    // jalan sekali aja, muncul saat 20% section masuk layar
      >
        <p className="
        services-text
        text-[12px] 
        sm:text-[14px] 
        md:text-[16px]
        ">
         OUR SERVICES
        </p>

        <h2 className='font-bold 
        mt-2 
        sm:mt-3
        md:mt-5
        lg:-mt-5 
        text-4xl 
        sm:text-4xl 
        md:text-6xl 
        lg:text-[74px] 
        leading-snug
        '>
            What We <span className='text-[#2355D3]'>Do.</span>
        </h2>

        <div className='w-16 h-1 sm:w-32 sm:h-1.5 md:w-40 md:h-2 lg:w-50 lg:h-2 bg-[#2355D3] mx-auto lg:-mt-1'></div>

        <p className='
        mt-3
        sm:mt-6 
        md:mt-7
        lg:mt-7 
        max-w-sm 
        sm:max-w-xl 
        md:max-w-2xl 
        lg:max-w-7xl 
        mx-auto 
        text-[11px] 
        sm:text-[9px] 
        md:text-[15px] 
        lg:text-[17px] 
        leading-relaxed
        '>
            We help individuals and businesses create a professional online
            presence through modern and functional digital solutions. From brand
            identity to web development, we deliver designs and experiences that
            make an impact.
        </p>

        {/* Service Card */}
        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-15 max-w-6xl mx-auto justify-items-center'>


            {/* Card 1 */}
            <motion.div className="
            w-45 h-45 sm:w-56 sm:h-56
            lg:w-60 lg:h-60 
            rounded-xl shadow-lg flex flex-col items-center justify-center text-center
            p-4
            sm:p-5
            lg:p-6 
            mt-8
            sm:mt-10
            lg:mt-15
            transition-transform duration-200 ease-in-out transform hover:scale-110"
            style={{ background: 'linear-gradient(to bottom, #00000000 20%, #2355D3 100%)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            >
                {/* Icon */}
                <div className="mb-3 sm:mb-4">
                    <img
                    src="Webdesign.png" // ganti path sesuai icon kamu
                    alt="Website Design"
                    className="w-18 h-16 sm:w-22 sm:h-20 lg:w-28 lg:h-26"
                    />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Website Design</h3>

                {/* Description */}
                <p className="text-xs sm:text-sm lg:text-[14px]">
                    Modern, responsive, and user-friendly websites.
                </p>
            </motion.div>


            {/* Card 2 */}
            <motion.div className="
            w-45 h-45
            sm:w-56 sm:h-56 
            lg:w-60 lg:h-60 
            rounded-xl shadow-lg flex flex-col items-center justify-center text-center 
            p-4
            sm:p-5
            lg:p-6
            mt-6
            sm:mt-8
            lg:mt-10
            transition-transform duration-200 ease-in-out transform hover:scale-110"
            style={{  background: '#1E1E20' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            >
                {/* Icon */}
                <div className="mb-4">
                    <img
                    src="Brand-Identity.png" // ganti path sesuai icon kamu
                    alt="Brand Identity"
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-26 lg:h-26"
                    />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Brand Identity</h3>

                {/* Description */}
                <p className="text-xs sm:text-sm lg:text-[12px]">
                    We design unique logos and brand guidelines for a strong identity.
                </p>
            </motion.div>


            {/* Card 3 */}
            <motion.div className="
            w-45 h-45 sm:w-56 sm:h-56
            lg:w-60 lg:h-60 
            rounded-xl shadow-lg flex flex-col items-center justify-center text-center
            p-4
            sm:p-5
            lg:p-6 
            mt-8
            sm:mt-10
            lg:mt-15
            transition-transform duration-200 ease-in-out transform hover:scale-110"
            style={{ background: 'linear-gradient(to bottom, #00000000 20%, #2355D3 100%)' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            >
                {/* Icon */}
                <div className="mb-4">
                    <img
                    src="UI-UX.png" // ganti path sesuai icon kamu
                    alt="Ui & Ux Design"
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-26 lg:h-26"
                    />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">UI & UX Design</h3>

                {/* Description */}
                <p className="text-xs sm:text-sm lg:text-[14px]">
                    Intuitive and attractive digital experiences.
                </p>
            </motion.div>


            {/* Card 4 */}
            <motion.div className="
            w-45 h-45
            sm:w-56 sm:h-56 
            lg:w-60 lg:h-60 
            rounded-xl shadow-lg flex flex-col items-center justify-center text-center 
            p-4
            sm:p-5
            lg:p-6
            mt-6
            sm:mt-8
            lg:mt-10
            transition-transform duration-200 ease-in-out transform hover:scale-110"
            style={{  background: '#1E1E20' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.2 }}
            >
                {/* Icon */}
                <div className="mb-4">
                    <img
                    src="Landing-Page.png" // ganti path sesuai icon kamu
                    alt="Landing Pages"
                    className="w-16 h-16 sm:w-20 sm:h-20 lg:w-26 lg:h-26"
                    />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">Landing Pages</h3>

                {/* Description */}
                <p className="text-xs sm:text-sm lg:text-[14px]">
                    High-converting pages built to showcase and sell.
                </p>
            </motion.div>

        </div>
      </motion.div>
    </section>  
    </>

  )
}

export default About