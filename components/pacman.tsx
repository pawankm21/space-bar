import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
export default function Pacman(props: {
  text: string;
  time: number;
  typed: string[];
  setLaserx: (val: any) => void;
}) {
  const laserRef = useRef<HTMLImageElement>(null);
  const [words, setWords] = useState(props.text.split(" "));
  useEffect(() => {
    setWords(
      props.text.split(" ").filter((word) => !props.typed.includes(word))
    );
  }, [props.text, props.typed]);
  useEffect(() => {
    props.setLaserx(laserRef.current?.getBoundingClientRect().x-100);
  },)
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
        ref={laserRef}
        className=""
        src="/laser.gif"
        initial={{
          rotate: 180,
          x:100,
        }}
      />
      <div className="flex gap-4 bg-gradient-to-r from-[#075DB0] rounded-r-none rounded-l-full pl-24">
        {words.map((word, i) => (
          <motion.div
            key={i + word}
            className="text-lg text-white font-bold font-mono place-self-center"
          >
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
