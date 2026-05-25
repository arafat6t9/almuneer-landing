import valves from "../assets/valves.jpg";
import brass from "../assets/brass.jpg";
import bird from "../assets/bird.jpg";
import shelf from "../assets/shelf.jpg";

const products = [
  {
    title: "Industrial Valves",
    image: valves,
  },
  {
    title: "Brass Fittings",
    image: brass,
  },
  {
    title: "Bird Protection Systems",
    image: bird,
  },
  {
    title: "Warehouse Shelving",
    image: shelf,
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="text-red-600 font-semibold uppercase tracking-widest">
            Featured Products
          </p>

          <h2 className="text-4xl font-black text-slate-900 mt-4">
            Our Product Categories
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
            >
              <img
                src={item.image}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}