"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // Arrow icon
import logo from "../../assets/logo.png"; // Logo image
import Image from "next/image";
import Link from "next/link"; // Add Link for navigation

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-4 z-50 text-white w-full">
      <div className="flex w-full justify-end relative">
        {/* Desktop Navbar */}
        <div className="hidden md:flex items-center gap-8 relative mr-4">
          {/* Slanted Left Edge */}
          <div className="absolute -left-4 top-0 bottom-0 w-10 bg-gray-900 skew-x-24 origin-left z-0 rounded-l-lg" />

          {/* Nav content */}
          <div className="flex items-center gap-8 bg-gray-900 p-4 pl-2 rounded-lg z-10 relative">
            {/* Logo - Clickable */}
            <Link href="/" className="text-xl font-extrabold flex items-center gap-1.5">
              <Image src={logo} alt="Simbian logo" className="w-8 h-8" />
              <span>Simbian</span>
            </Link>

            {/* Links with animated arrows */}
            <Link href="#" className="font-bold flex items-center gap-1 hover:gap-2 transition-all duration-300">
              Products
              <ChevronDown size={16} />
            </Link>

            <Link href="#" className="font-bold flex items-center gap-1 hover:gap-2 transition-all duration-300">
              Company
              <ChevronDown size={16} />
            </Link>

            <Link href="#" className="font-bold flex items-center gap-1 hover:gap-2 transition-all duration-300">
              Resources
              <ChevronDown size={16} />
            </Link>

            <Link href="#" className="font-bold flex items-center gap-1 hover:gap-2 transition-all duration-300">
              Blog
              <ChevronDown size={16} />
            </Link>

            {/* Book a Demo Button */}
            <button 
              className="relative ml-6 px-4 py-2 bg-white text-[#3052ec] font-semibold flex items-center gap-2 cursor-pointer transition hover:bg-gray-100 active:scale-95"
            >
              {/* Slanted Left Edge inside Button */}
              <div className="absolute -left-4 top-0 bottom-0 w-6 bg-white skew-x-24 origin-left z-0 rounded-l-lg" />

              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-2">
                Book a Demo
                <Image src={logo} alt="Simbian logo" className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
