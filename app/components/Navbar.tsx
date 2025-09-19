"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div
      className={
        open
          ? `bg-black/65 text-white fixed z-50 w-[100%] px-4 py-2 transition-all duration-400 ease-in-out ${
              scrolled ? "bg-black/35 backdrop-blur-[3px]" : "bg-black/0"
            }`
          : `bg-black/0 text-white fixed z-50 w-[100%] px-4 py-2 transition-all duration-400 ease-in-out  ${
              scrolled ? "bg-black/35 backdrop-blur-[3px]" : "bg-black/0"
            }`
      }
    >
      <div className="flex flex-row-reverse justify-between md:justify-center md:items-center md:gap-x-20">
        <button onClick={handleClick} className="md:hidden">
          <span className="text-4xl cursor-cell">≣</span>
        </button>
        <Link href="/" className="font-semibold hidden md:block">
          HOME
        </Link>
        <Link href="/Products" className="font-semibold hidden md:block">
          PRODUCTS
        </Link>
        <div className="border-4 border-white rounded-[100%]">
          <Image
            src="/images/guitar-habit-logo.png"
            alt="Logo"
            width={50}
            height={50}
          />
        </div>
        <Link href="/Services" className="font-semibold hidden md:block">
          SERVICES
        </Link>
        <Link href="/About" className="font-semibold hidden md:block">
          ABOUT
        </Link>
        <div className="opacity-0 md:hidden">......</div>
      </div>
      <ul
        className={
          open
            ? " text-white flex items-center flex-col active transition-all gap-4 py-5 font-bold opacity-100 duration-800 ease-in-out h-45 md:hidden "
            : "flex items-center flex-col duration-1200 font-bold ease-in-out opacity-0 gap-4 invisible h-0 md:hidden "
        }
      >
        <Link href="/" className="md:hidden">
          Home
        </Link>
        <Link href="/Products" className="md:hidden">
          Products
        </Link>
        <Link href="/Services" className="md:hidden">
          Services
        </Link>
        <Link href="/About" className="md:hidden">
          About
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
