import { motion } from "framer-motion";

export default function Contact() {

  return (

    <section
      id="contact"
      className="relative py-28 bg-white overflow-hidden"
    >

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-500/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl">

          <p className="uppercase tracking-[6px] text-red-500 font-semibold text-sm">
            Contact Information
          </p>

          <h2 className="mt-6 text-5xl font-black text-slate-900 leading-tight">
            Let’s Build Better
            <span className="block text-red-500">
              Industrial Solutions
            </span>
          </h2>

          <p className="mt-8 text-gray-600 text-lg leading-8">
            Contact Al Muneer General Trading LLC for industrial
            fittings, storage systems, hardware supplies and
            commercial product solutions across UAE.
          </p>

        </div>

        {/* CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-12 mt-20">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-slate-950 rounded-[40px] p-10 text-white overflow-hidden relative"
          >

            {/* INNER GLOW */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-red-500/10 blur-[100px] rounded-full"></div>

            <div className="relative z-10">

              <div className="space-y-8">

                {/* ADDRESS */}
                <div className="border-b border-white/10 pb-8">

                  <p className="uppercase tracking-[4px] text-red-400 text-sm">
                    Office Address
                  </p>

                  <h3 className="mt-4 text-2xl font-bold leading-relaxed">
                    Al Nakheel Area,
                    Old Etisalat Road,
                    Ras Al-Khaimah,
                    United Arab Emirates
                  </h3>

                </div>

                {/* CONTACT */}
                <div className="border-b border-white/10 pb-8">

                  <p className="uppercase tracking-[4px] text-red-400 text-sm">
                    Contact Details
                  </p>

                  <div className="mt-5 space-y-3">

                    <a
                      href="tel:+971568994436"
                      className="block text-2xl font-bold hover:text-red-400 transition"
                    >
                      +971 56 899 4436
                    </a>

                    <a
                      href="mailto:info@almuneertrd.ae"
                      className="block text-gray-300 hover:text-red-400 transition"
                    >
                      info@almuneertrd.ae
                    </a>

                  </div>

                </div>

                {/* WORKING AREA */}
                <div>

                  <p className="uppercase tracking-[4px] text-red-400 text-sm">
                    Service Coverage
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">

                    <span className="px-5 py-3 rounded-full bg-white/10 border border-white/10">
                      Ras Al-Khaimah
                    </span>

                    <span className="px-5 py-3 rounded-full bg-white/10 border border-white/10">
                      Dubai
                    </span>

                    <span className="px-5 py-3 rounded-full bg-white/10 border border-white/10">
                      Sharjah
                    </span>

                    <span className="px-5 py-3 rounded-full bg-white/10 border border-white/10">
                      UAE
                    </span>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[40px] overflow-hidden shadow-2xl border border-gray-200 min-h-[500px]"
          >



            <iframe 
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d547111.1676094811!2d55.44315425738556!3d25.732181010636847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef6773ff482937f%3A0xc1f43df81d0070a7!2sAl%20Muneer%20General%20Trading%20LLC!5e0!3m2!1sen!2sbd!4v1779699001055!5m2!1sen!2sbd" 
            width="100%" 
            height="100%" 
            style= {{border:0}}
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
            </iframe>

          </motion.div>

        </div>

      </div>

    </section>
  );
}