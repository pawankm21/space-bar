import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { motion } from "framer-motion";
import useKeyPress from "../hooks/keypress";
import { getSpeed, getAccuracy } from "../utils";
import Navbar from "../components/navbar";
import ParticleBg from "../components/particle-bg";
const Home: NextPage = () => {
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
        <div className="w-full absolute bottom-16 flex place-items-center justify-center">
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
