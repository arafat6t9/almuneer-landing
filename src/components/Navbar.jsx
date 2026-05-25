import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  return (

    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-5"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="/"
          className="flex items-center gap-4"
        >

          <div className="relative">

            <img
              src={logo}
              alt="Al Muneer"
              className="w-14 h-14 object-contain"
            />

            <div className="absolute inset-0 bg-red-500/20 blur-2xl rounded-full"></div>

          </div>

          <div>

            <h1 className="text-white font-black text-xl tracking-wide">
              AL MUNEER
            </h1>

            <p className="text-gray-400 text-xs tracking-[3px] uppercase">
              General Trading LLC
            </p>

          </div>

        </a>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-10">

          <a
            href="#products"
            className="text-gray-300 hover:text-red-400 transition"
          >
            Products
          </a>

          <a
            href="#about"
            className="text-gray-300 hover:text-red-400 transition"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-gray-300 hover:text-red-400 transition"
          >
            Contact
          </a>

        </div>

        {/* CTA BUTTON */}
        <a
          href="https://wa.me/971568994436"
          target="_blank"
          rel="noreferrer"
          className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-red-500/20"
        >
          WhatsApp
        </a>

      </div>

    </motion.nav>

  );
}