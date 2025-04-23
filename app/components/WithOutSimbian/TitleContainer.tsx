import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import logo from '../../assets/logo.png'; // Replace with the actual path to your logo file

const TitleContainer = () => {
    return (
             <motion.div
        key="box1"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col w-fit items-end"
      >
        <h1 className="text-[42px] font-extrabold text-blue-500 mb-4">Without Simbian</h1>
        <p className="text-[24px] mb-6 max-w-xl text-blue-500">
          If this sounds all too familiar, you might want to...
        </p>
        <button className="bg-white text-black px-5 py-2 rounded-full font-semibold text-[18px] flex items-center gap-1 cursor-pointer transition hover:bg-gray-100 active:scale-95">
          Book a Demo
            <Image src={logo} alt="Simbian logo" className="w-5 h-5" />
        </button>
      </motion.div>
    );
}

export default TitleContainer;