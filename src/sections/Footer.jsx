import { mySocials } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.section
      className="flex flex-wrap items-center justify-between gap-5 pb-10 text-sm text-neutral-400 container mx-auto max-w-7xl"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      />

      <motion.div
        className="flex gap-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </motion.div>

      <motion.div
        className="flex gap-3"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {mySocials.map((social, index) => (
          <motion.a
            href={social.href}
            key={index}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src={social.icon} className="w-5 h-5" alt={social.name} />
          </motion.a>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        © 2025 codeblock. All rights reserved.
      </motion.p>
    </motion.section>
  );
};

export default Footer;
