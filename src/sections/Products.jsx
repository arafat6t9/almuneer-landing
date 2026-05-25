import { motion } from "framer-motion";

import valves from "../assets/valves.jpg";
import brass from "../assets/brass.jpg";
import bird from "../assets/bird.jpg";
import shelf from "../assets/shelf.jpg";

const products = [
  {
    title: "Industrial Valves",
    description:
      "Premium industrial valves and flow control solutions for commercial and industrial use.",
    image: valves,
  },

  {
    title: "Brass Fittings",
    description:
      "High quality brass fittings, accessories and utility connection components.",
    image: brass,
  },

  {
    title: "Bird Protection Systems",
    description:
      "Advanced anti-bird spike systems for clean and protected environments.",
    image: bird,
  },

  {
    title: "Warehouse Shelving",
    description:
      "Heavy-duty storage shelving systems for warehouses and commercial storage.",
    image: shelf,
  },
];

export default function Products() {

  return (

    <section
      id="products"
      className="relative py-28 bg-slate-950 overflow-hidden"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-red-600/10 blur-[120px] rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">

          <p className="uppercase tracking-[6px] text-red-500 font-semibold text-sm">
            Featured Categories
          </p>

          <h2 className="mt-6 text-5xl font-black text-white leading-tight">
            Industrial Products &
            <span className="block text-red-500">
              Commercial Solutions
            </span>
          </h2>

          <p className="mt-8 text-gray-400 text-lg leading-8">
            We supply industrial fittings, storage systems,
            utility products and commercial hardware solutions
            across Ras Al-Khaimah and UAE.
          </p>

        </div>

        {/* PRODUCTS GRID */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">

          {products.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 backdrop-blur-lg"
            >

              {/* IMAGE */}
              <div className="relative h-[420px] overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 p-8">

                  <div className="inline-block px-4 py-2 rounded-full bg-red-500/20 border border-red-500/20 text-red-300 text-xs uppercase tracking-widest mb-5">
                    Industrial Category
                  </div>

                  <h3 className="text-3xl font-black text-white leading-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-gray-300 leading-7 text-sm">
                    {item.description}
                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}