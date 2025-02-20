"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white p-4 w-full">
      <div className="mx-auto flex items-center justify-center">
        {/* LOGO */}
        <Link href="/" className="">
          <Image 
            src="/images/wolf_transparent.png" 
            alt="Logo" 
            width={100} 
            height={100} />
        </Link>

        {/* NOME BLOG */}
        <Link href="/" className="text-5xl font-semibold text-gray-800">
          Blogghino
        </Link>

        {/* MENU MOBILE */}
        {/* <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
            {isOpen ? "✖" : "☰"}
          </button>
        </div> */}

        {/* MENU DESKTOP */}
        {/* <ul className="hidden md:flex space-x-6 text-gray-700">
          <li><a href="/" className="hover:text-blue-600">Home</a></li>
          <li><a href="/about" className="hover:text-blue-600">Chi siamo</a></li>
          <li><a href="/blog" className="hover:text-blue-600">Blog</a></li>
          <li><a href="/contact" className="hover:text-blue-600">Contatti</a></li>
        </ul> */}
      </div>

      {/* MENU A TENDINA MOBILE */}
      {/* {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-14 left-0 w-full p-4">
          <ul className="flex flex-col space-y-4 text-gray-700">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li><a href="/about" className="hover:text-blue-600">Chi siamo</a></li>
            <li><a href="/blog" className="hover:text-blue-600">Blog</a></li>
            <li><a href="/contact" className="hover:text-blue-600">Contatti</a></li>
          </ul>
        </div>
      )} */}
    </nav>
  )
}

export default Navbar
