import { motion } from "framer-motion";
import hero from "../assets/store.jpg";

export default function Hero() {
  return (
    <section
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/65"></div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center px-6"
      >
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
          AL MUNEER
          <span className="block text-red-500">
            GENERAL TRADING LLC
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Industrial fittings, warehouse shelving, bird protection
          systems, hardware supplies and utility products across UAE.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/971568994436"
            target="_blank"
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold transition"
          >
            Contact Us
          </a>

          <a
            href="#products"
            className="border border-white text-white hover:bg-white hover:text-black transition px-8 py-4 rounded-full font-semibold"
          >
            View Products
          </a>
        </div>
      </motion.div>
    </section>
  );
}