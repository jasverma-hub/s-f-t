import React from 'react';
import { motion } from "framer-motion";

const TitleContainer = () => {
    return (
         <motion.div
              key="box2"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 1 }}
              className="relative z-10 flex flex-col w-fit items-left mr-[100px]"
            >
              <h1 className="text-[42px] font-extrabold mb-4">With Simbian</h1>
              <p className="text-[24px] mb-6 max-w-xl">
                Relax. Our AI Agents will take it from here.
              </p>
            </motion.div>
    );
}

export default TitleContainer;