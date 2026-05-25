import { motion } from "framer-motion";

export default function ComingSoon() {

  return (

    <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* BADGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-red-500/20 bg-red-500/10 text-red-300 uppercase tracking-[4px] text-xs font-semibold"
        >

          Digital Platform Launching Soon

        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="mt-10 text-5xl md:text-7xl font-black text-white leading-tight"
        >

          Our Complete
          <span className="block text-red-500">
            Digital Experience
          </span>
          Is Under Development

        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-lg md:text-xl text-gray-300 leading-9 max-w-4xl mx-auto"
        >

          We are currently building a complete online platform
          featuring industrial product catalogs, commercial
          solutions, company profile and advanced customer
          support services for clients across the UAE.

        </motion.p>

        {/* PROGRESS CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-white/5 border border-white/10 backdrop-blur-xl rounded-[40px] p-10 md:p-14"
        >

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

            <div className="text-left">

              <p className="uppercase tracking-[4px] text-red-400 text-sm">
                Development Progress
              </p>

              <h3 className="mt-4 text-4xl font-black text-white">
                75% Completed
              </h3>

            </div>

            <a
              href="https://wa.me/971568994436"
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 hover:bg-red-700 transition duration-300 text-white px-8 py-4 rounded-full font-semibold shadow-2xl shadow-red-500/20"
            >
              Contact Us
            </a>

          </div>

          {/* PROGRESS BAR */}
          <div className="mt-10 w-full h-5 bg-white/10 rounded-full overflow-hidden">

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "75%" }}
              transition={{ duration: 2 }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-red-500 to-red-400 rounded-full"
            />

          </div>

        </motion.div>

      </div>

    </section>
  );
}