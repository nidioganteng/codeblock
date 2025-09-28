import {motion} from "motion/react"

const HeroText = () => {
  return (
    <div className="relative z-10 flex items-center justify-center min-h-screen w-full">
      <div className="text-center">
        <motion.h1 className="
        font-medium
        text-[53px]
        sm:text-[60px]
        md:text-[70px]
        lg:text-[80px]
        xl:text-[87px]
        leading-[0.9]"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1}}
        >
          Creative Web <br /> Solution
        </motion.h1>

        <motion.p className='font-normal
        text-[9px]
        sm:text-[10px]
        md:text-[12px]
        lg:text-[14px]
        leading-relaxed mt-6 sm:mt-8
        '
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        >
            codeblock is a digital product agency that helps individuals and
            businesses <br /> establish a professional presence online. From websites,
            landing pages, to <br /> interactive portfolios, we design and develop
            digital solutions that are effective, <br /> modern, and tailored to your
            needs.
        </motion.p>
      </div>
    </div>
  )
}

export default HeroText
