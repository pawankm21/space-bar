import React from "react";
import { motion } from "framer-motion";
export default function Spaceship() {
  return (
    <motion.div
      className=" w-full"
      initial={{
        x: -100,
      }}
      animate={{
        x: 0,
        transition: {
          duration: 4,
          ease: "easeInOut",
        },
      }}
    >
      <motion.img
        animate={{
          x: 0,
          y: [0, 50, 0, -50, 0],
          transition: {
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          },
        }}
        src="/spaceship.gif"
        className="w-40"
      />
    </motion.div>
  );
}
