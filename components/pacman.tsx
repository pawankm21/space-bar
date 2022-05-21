import { motion } from "framer-motion";

export default function Pacman() {
  return (
    <motion.div
      className=" justify-self-end mr-12 mt-16"
      initial={{
        opacity:0,
      }}
      animate={{
          opacity:1,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
    >
      <motion.img
        animate={{
                  y: [0, 10, 0, -100, 0],
          transition: {
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
          },
              }}
              initial={{
                  rotate: 180,
              }}
        src="/pacman.gif"
        alt=""
        className="w-96"
      />
    </motion.div>
  );
}
