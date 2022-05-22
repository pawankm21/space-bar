import { useRef } from "react";
import { motion } from "framer-motion";
export default function Spaceship(props: {
  setSpaceShipx: (val: any) => void;
  isGameOver: boolean;
}) {
  const spaceShipRef = useRef<HTMLImageElement>(null);
  props.setSpaceShipx(spaceShipRef.current?.getBoundingClientRect().x);
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
      ref={spaceShipRef}
    >
      <motion.img
        animate={{
          x: 0,
          y: props.isGameOver ? -50 : [0, 50, 0, -50, 0],
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
