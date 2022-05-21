import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import useKeyPress from "../hooks/keypress";
import { getSpeed, getAccuracy } from "../utils";
import Navbar from "../components/navbar";
import ParticleBg from "../components/particle-bg";
import Spaceship from "../components/spaceship";
import Pacman from "../components/pacman";
import { generate } from "../utils/words";
const Home: NextPage = () => {
  console.log(generate(10));
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  const [start, setStart] = useState(0);
  const [i, setI] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [chars, setChars] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  useKeyPress(key => {
    setChars(chars + 1);
    if(!start) {
      setStart(new Date().getTime());
    }
    if(key === text[i]) {
      setI(i + 1);
      setCorrect(correct + 1);
    } else {
      setIncorrect(incorrect + 1);
    }
    setSpeed(getSpeed(chars, start))
    setAccuracy(getAccuracy(correct, chars))
  })
  return (
    <div>
      <Head>
        <title>Typing Muggle</title>
        <meta name="description" content="Typing game" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <ParticleBg />

      <main className={`relative w-full min-h-screen`}>
        <Navbar speed={12} accuracy={12} />
        <div className="w-full h-auto flex px-12 mt-16">
          <Spaceship />
          <Pacman/>
        </div>
      </main>
    </div>
  );
};

export default Home;
//  <div className="w-full absolute bottom-16 flex place-items-center justify-center">
//    <input
//      type="text"
//      className="appearance-none outline-none py-4 px-4 rounded w-1/2 bg-gray-900 font-bold text-4xl text-green-400 font-mono "
//    />
//  </div>;