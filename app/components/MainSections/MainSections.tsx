import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { WithOutSimbianContainer } from '../WithOutSimbian/WithOutSimbianContainer';
import { WithSimbianContainer } from '../WithSimbian/WithSimbianContainer';

type MainSectionProps = {
    visibleBox: string;
    setVisibleBox: React.Dispatch<React.SetStateAction<string>>;
};

export const MainSections = ({ visibleBox, setVisibleBox }: MainSectionProps) => {
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
      className={`relative bg-cover bg-center text-white flex mt-10 ${visibleBox === "box1" ? "justify-end" : "justify-start"} ml-40 px-32`}
      style={{ backgroundImage: "url('/bg.jpg')" }}
    >
      <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
        {visibleBox === "box1" && !isExiting && (
          <motion.div
            key="box1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WithOutSimbianContainer />
          </motion.div>
        )}

        {visibleBox === "box2" && !isExiting && (
          <motion.div
            key="box2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <WithSimbianContainer />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
