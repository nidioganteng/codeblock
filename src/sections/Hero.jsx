import { Globe } from "../components/Globe";
import HeroText from "../components/HeroText";
import { motion } from "motion/react";
import { Particles } from "../components/Particles";

const Hero = () => {
  return (
    <>
    <section
      id="hero"
      className="relative flex items-center justify-center md:items-start md:justify-start min-h-screen w-full overflow-x-hidden"
    >
      <HeroText />
      <Particles
          className="absolute inset-0 -z-50"
          quantity={100}
          ease={80}
          color={"#ffffff"}
          refresh
      />

      <motion.figure
        className="absolute left-1/2 top-1/2 
        w-[500px] h-[500px] 
        sm:w-[700px] sm:h-[700px] 
        md:w-[800px] md:h-[850px] 
        lg:w-[900px] lg:h-[900px] 
        xl:w-[1100px] xl:h-[1100px] 
        -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Globe />
      </motion.figure>
    </section>
    </>
  )
}

export default Hero
