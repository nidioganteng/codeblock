import { twMerge } from "tailwind-merge";
import { Marquee } from "../components/Marquee";
import { reviews } from "../constants";
import { motion } from "framer-motion";

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={twMerge(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 border-gray-50/[.1] bg-gradient-to-r bg-[#1E1E20] to-storm hover:bg-blue-950 hover-animation"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full bg-white/30"
          width="32"
          height="32"
          alt=""
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function Testimonial() {
  return (
    <div className="container mx-auto max-w-7xl mt-40">
      <motion.p
        className="services-text text-[12px] sm:text-[14px] md:text-[16px] text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Testimonial
      </motion.p>

      <motion.h2
        className="text-3xl md:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Review From Our{" "}
        <span className="text-[#2355D3]">Clients</span>
      </motion.h2>

      <motion.div
        className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review, i) => (
            <motion.div
              key={review.username}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </Marquee>

        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review, i) => (
            <motion.div
              key={review.username}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ReviewCard {...review} />
            </motion.div>
          ))}
        </Marquee>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0F0F11]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-[#0F0F11]" />
      </motion.div>
    </div>
  );
}
