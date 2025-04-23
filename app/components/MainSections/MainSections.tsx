import React, { useEffect, useState } from 'react';
import {  AnimatePresence } from "framer-motion";
import {  WithOutSimbianContainer } from '../WithOutSimbian/WithOutSimbianContainer';
import { WithSimbianContainer } from '../WithSimbian/WithSimbianContainer';

type MainSectionProps = {
  visibleBox : string, 
  setVisibleBox:any
}

export const MainSections = ({visibleBox, setVisibleBox}:MainSectionProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsExiting(true);
    }, 12000);
    return () => clearInterval(timer);
  }, []);

  const handleExitComplete = () => {
    setVisibleBox((prev: string) => (prev === "box1" ? "box2" : "box1"));
    setIsExiting(false);
  };

  return (
    <section
      className={`relative bg-cover bg-center  text-white flex mt-10 ${
        visibleBox === "box1" ? "justify-end" : "justify-start"
      } ml-40 px-32`}
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        {visibleBox === "box1" && !isExiting && (
        <WithOutSimbianContainer/>
        )}

        {visibleBox === "box2" && !isExiting && (
        <WithSimbianContainer/>
        )}
  
      </AnimatePresence>
    </section>
  );
};