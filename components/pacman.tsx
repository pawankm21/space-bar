import { motion } from "framer-motion";
import { useState, useEffect } from "react";
export default function Pacman(props: { words: string[]; time: number }) {
  const [words, setWords] = useState(props.words);
  useEffect(() => {
    setWords(props.words);
  }, [props.words]);
  return (
    <motion.div
      className="absolute right-0 justify-self-end mr-12 mt-16 flex "
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
          ease: "easeInOut",
        },
      }}
    >
      <motion.img
        className=""
        src="/laser.gif"
        initial={{
          rotate: 180,
        }}
      />
      <div className="flex gap-4 bg-gradient-to-r from-[#075DB0] rounded-r-none rounded-l-full ">
        {props.words.map((word, i) => (
          <motion.div className="text-lg text-white font-bold font-mono place-self-center">
            {word}
          </motion.div>
        ))}
      </div>
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
        className="w-36"
      />
    </motion.div>
  );
}
