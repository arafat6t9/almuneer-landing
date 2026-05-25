import { motion } from "framer-motion";
import hero from "../assets/store.jpg";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-black/40"></div>

      {/* GLOW EFFECT */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-red-600/20 blur-[120px] rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[6px] text-red-500 font-semibold text-sm">
            UAE Industrial Trading Company
          </p>

          <h1 className="mt-6 text-5xl md:text-7xl font-black leading-tight text-white">
            Industrial
            <span className="block text-red-500">
              Trading Solutions
            </span>
            For Modern Business
          </h1>

          <p className="mt-8 text-gray-300 text-lg leading-8 max-w-2xl">
            Supplying industrial fittings, warehouse shelving,
            bird protection systems, hardware products and
            utility solutions across Ras Al-Khaimah and UAE.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://wa.me/971568994436"
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-8 py-4 rounded-full font-semibold shadow-2xl shadow-red-500/30"
            >
              Contact on WhatsApp
            </a>

            <a
              href="#products"
              className="border border-white/30 hover:border-red-500 hover:bg-red-500/10 transition duration-300 text-white px-8 py-4 rounded-full font-semibold backdrop-blur"
            >
              Explore Products
            </a>

          </div>

          {/* STATS */}
          <div className="mt-16 grid grid-cols-3 gap-8">

            <div>
              <h3 className="text-4xl font-black text-white">
                500+
              </h3>

              <p className="mt-2 text-gray-400 text-sm">
                Industrial Products
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">
                UAE
              </h3>

              <p className="mt-2 text-gray-400 text-sm">
                Based Company
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-black text-white">
                B2B
              </h3>

              <p className="mt-2 text-gray-400 text-sm">
                Commercial Solutions
              </p>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
          className="hidden lg:flex justify-end"
        >

          <div className="relative">

            {/* GLASS CARD */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 shadow-2xl w-[380px]">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">
                    Featured Category
                  </p>

                  <h3 className="text-white text-2xl font-bold mt-2">
                    Industrial Fittings
                  </h3>
                </div>

                <div className="w-14 h-14 rounded-2xl bg-red-500 flex items-center justify-center text-white font-black text-xl">
                  AM
                </div>
              </div>

              <div className="mt-8 space-y-4">

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                  <span className="text-gray-300">
                    Brass Valves
                  </span>

                  <span className="text-red-400">
                    Available
                  </span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                  <span className="text-gray-300">
                    Bird Protection
                  </span>

                  <span className="text-red-400">
                    In Stock
                  </span>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center justify-between">
                  <span className="text-gray-300">
                    Warehouse Shelves
                  </span>

                  <span className="text-red-400">
                    Ready
                  </span>
                </div>

              </div>

              <div className="mt-8 bg-red-500/20 border border-red-500/20 rounded-2xl p-5">
                <p className="text-red-300 text-sm">
                  Website Platform Launching Soon
                </p>

                <div className="mt-4 w-full h-3 rounded-full bg-white/10 overflow-hidden">
                  <div className="w-[75%] h-full bg-red-500 rounded-full"></div>
                </div>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
}