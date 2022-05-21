import React from "react";
import { motion } from "framer-motion";
export default function Navbar(props: { speed: number; accuracy: number }) {
  const nameAnimation = {
    animate: {
      x: [0, 1, 0, -1, 0],
      transition: {
        duration: 0.1,
        ease: "easeInOut",
        loop: Infinity,
      },
    },
    whileHover: {
      scale: 1.2,
      transition: { duration: 0.5, ease: "easeInOut", loop: null },
    },
  };
  const planetAnimation = {
    initial: {
      rotate:0,
    },
    animate: {
      rotate: 360,
      transition: {
        duration: 5,
        loop: Infinity,
      },
    },
  };
  return (
    <div className="px-12 py-12 flex place-content-between">
      <motion.img
        variants={nameAnimation}
        animate={"animate"}
        whileHover={"whileHover"}
        src="https://fontmeme.com/permalink/220521/a6eaaf93ad5d8b24a5e3205937705214.png"
        alt=""
        className="w-1/3 h-1/3 "
      />
      <div className="flex gap-4">
        <div className=" relative flex place-items-center justify-center">
          <motion.img
            src="/earth.png"
            className="w-20 h-20"
            variants={planetAnimation}
            animate={"animate"}
            initial={"initial"}
          />
          <h1 className="absolute text-3xl font-bold font-mono bg-black rounded shadow shadow-green-300 border text-green-400 text-center border-green-500 min-w-[4rem] p-2">
            {props.speed}
          </h1>
        </div>
        <div className=" relative flex place-items-center justify-center">
          <motion.img
            src="/saturn.png"
            className="w-32 h-32"
            variants={planetAnimation}
            animate={"animate"}
          />
          <h1 className="absolute text-3xl font-bold font-mono bg-black rounded shadow shadow-green-300 border text-green-400 text-center border-green-500 min-w-[4rem] p-2">
            {props.accuracy}
          </h1>
        </div>
      </div>
    </div>
  );
}
