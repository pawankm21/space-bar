// @ts-nocheck
import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import useKeyPress from "../hooks/keypress";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { particleConfig } from "../utils/particles.config";

const Home: NextPage = () => {
  const particlesInit = async (main: any) => {
    console.log(main);
    await loadFull(main);
  };
  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  return (
    <div>
      <Head>
        <title>Typing Muggle</title>
        <meta name="description" content="Typing game" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="absolute w-full h-full -z-10">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particleConfig}
        />
      </div>
      <main className={``}>
        <div className="px-12 py-12 flex">
          <motion.img
            animate={{
              x: [0, 10, 0, -5, 0, -10, 0],
              transition: {
                duration: 2,
                ease: "easeInOut",
                loop: Infinity,
              },
            }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.5, ease: "easeInOut", loop: null },
            }}
            src="https://fontmeme.com/permalink/220521/a6eaaf93ad5d8b24a5e3205937705214.png"
            alt=""
            className="w-1/3 h-1/3 "
          />
          <div className="">
            <motion.img></motion.img>
          </div>
        </div>

        <div className="w-full relative top-96 flex place-items-center justify-center">
          <input
            type="text"
            className="appearance-none outline-none py-4 px-4 rounded w-1/2 bg-gray-900 font-bold text-4xl text-green-400 font-mono "
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
