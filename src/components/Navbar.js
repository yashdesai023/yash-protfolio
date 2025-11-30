"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", href: "#home" },
    { id: 2, text: "About", href: "#about" },
    { id: 3, text: "Skills", href: "#skills" },
    { id: 4, text: "Projects", href: "#projects" },
    { id: 5, text: "Services", href: "#services" },
    { id: 6, text: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed left-0 top-0 w-full z-50 bg-[#121212] ease-in-duration-300 border-b border-gray-800">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <h1 className="w-full text-3xl font-bold text-white">PORTFOLIO.</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="p-4 hover:text-gray-400 rounded-xl m-2 cursor-pointer duration-300 hover:scale-105"
            >
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden z-50 cursor-pointer">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-black ease-in-out duration-500 z-40"
              : "fixed left-[-100%] top-0 w-[60%] h-full ease-in-out duration-500 z-40"
          }
        >
          <h1 className="w-full text-3xl font-bold text-white m-4">PORTFOLIO.</h1>
          <ul className="uppercase p-4">
            {/* The original map function is retained for consistency and correctness */}
            {navItems.map((item) => (
              <li
                key={item.id}
                className="p-4 border-b border-gray-600 hover:text-gray-400 cursor-pointer"
              >
                <Link href={item.href} onClick={handleNav}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
