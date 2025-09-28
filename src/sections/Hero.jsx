import { Globe } from "../components/Globe";
import HeroText from "../components/HeroText";
import Background from "../components/Background";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <>
    <section
      id="hero"
      className="relative flex items-center justify-center md:items-start md:justify-start min-h-screen w-full overflow-hidden"
    >
      <HeroText />
      <Background />

      {/* <motion.figure
        className="absolute left-1/2 top-1/2 
        w-[600px] h-[550px] 
        sm:w-[900px] sm:h-[550px] 
        md:w-[1000px] md:h-[950px] 
        lg:w-[1500px] lg:h-[1300px] 
        xl:w-[1700px] xl:h-[900px] 
        -translate-x-1/2 -translate-y-1/2 overflow-hidden"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Globe />
      </motion.figure> */}
    </section>

    <motion.div className="divider-atas"
    initial={{ opacity: 0, y: 30 }}          // mulai transparan + agak turun
    whileInView={{ opacity: 1, y: 0 }}       // muncul & naik ke posisi normal
    transition={{ duration: 0.8, ease: "easeOut" }}
    viewport={{ once: true, amount: 0.2 }}   // animasi jalan sekali saat 20% elemen masuk viewport
    ></motion.div>
    </>
  )
}

export default Hero
