'use client';

import Head from "next/head";
import Navbar from "./components/Header/Navbar";
import { MainSections } from "./components/MainSections/MainSections";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [visibleBox, setVisibleBox] = useState("box1");
  const [prevBox, setPrevBox] = useState("box1");

  useEffect(() => {
    if (visibleBox !== prevBox) {
      setPrevBox(visibleBox);
    }
  }, [visibleBox]);

  const getColor = (box: string) => {
    return box === "box1" ? "#111829bb" : "#223ac2b9";
  };

  return (
    <div className="text-white min-h-screen relative overflow-hidden bg-cover bg-center "
    style={{
      backgroundImage: 'url("/bgImage.jpg")',
    }}
    >
      <div
        className="absolute inset-0 z-0 transition-colors duration-500"
        style={{ backgroundColor: getColor(prevBox) }}
      />

      <motion.div
        key={visibleBox}
        initial={{ x: '100%' }}
        animate={{ x: '0%' }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="absolute inset-0 z-10"
        style={{
          backgroundColor: getColor(visibleBox),
        }}
      />

      <div className="relative z-20">
        <Navbar />
        <MainSections visibleBox={visibleBox} setVisibleBox={setVisibleBox} />
      </div>
    </div>
  );
}