//@ts-nocheck

import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import useKeyPress from "../hooks/keypress";
import { getSpeed, getAccuracy } from "../utils";
import Navbar from "../components/navbar";
import { ParticleBg } from "../components/particle-bg";
import Spaceship from "../components/spaceship";
import Pacman from "../components/pacman";
import useCreateWords from "../hooks/create-words";
import useGameOver from "../hooks/game-over";
import Modal from "../components/modal";

const Home: NextPage = () => {
  const { isgameOver, setSpaceShipx, setLaserx } = useGameOver();
  const [start, setStart] = useState(0);
  const [i, setI] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [chars, setChars] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const { text, time } = useCreateWords(isgameOver);
  const [typed, setTyped] = useState<string[]>([]);
  useKeyPress((key) => {
    if (!start) {
      setStart(new Date().getTime());
    }
    console.log(key, text[i])
    if (key === text[i]) {
      setI(i + 1);
      setCorrect(correct + 1);
      setChars(chars + 1);
    } else if(key !== text[i] && key !== "Backspace") {
      setIncorrect(incorrect + 1);
      setChars(chars + 1);
    }
    console.log(correct, chars)
    setSpeed(getSpeed(chars, start));
    setAccuracy(getAccuracy(correct, chars));
  });
  return (
    <div>
      <Modal isGameOver={isgameOver} clasName={""} />
      <Head>
        <title>Typing Muggle</title>
        <meta name="description" content="Typing game" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <ParticleBg />

      <main className={`relative w-full min-h-screen`}>
        <Navbar speed={speed} accuracy={accuracy} />
        <div className="w-full h-auto flex px-16  mb-20  overflow-x-clip  ">
          <Spaceship setSpaceShipx={setSpaceShipx} isGameOver={isgameOver} />
          <Pacman
            text={text}
            time={time}
            typed={typed}
            setLaserx={setLaserx}
            isGameOver={isgameOver}
          />
        </div>
        <div className="w-full text-center mt-40">
          <input
            type="text"
            onKeyUp={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setTyped([...typed, e.target.value.trim()]);
                e.target.value = "";
              }
            }}
            className="py-2 text-xl px-4 bg-gray-900 border border-green-400 rounded shadow shadow-green-200 text-green-400 font-bold font-mono"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
