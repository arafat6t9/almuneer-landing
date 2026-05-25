export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-red-600 font-semibold uppercase tracking-widest">
            About Company
          </p>

          <h2 className="text-4xl font-black text-slate-900 mt-4">
            Trusted Industrial Trading Partner in UAE
          </h2>

          <p className="mt-6 text-gray-600 leading-8">
            Al Muneer General Trading LLC supplies industrial
            fittings, storage systems, bird protection solutions,
            warehouse products and commercial utility items for
            businesses across Ras Al-Khaimah and UAE.
          </p>

          <p className="mt-4 text-gray-600 leading-8">
            We are currently building our full digital catalog and
            complete online experience.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-slate-100 p-8 rounded-3xl">
            <h3 className="text-5xl font-black text-red-600">500+</h3>
            <p className="mt-2 text-gray-600">
              Industrial Products
            </p>
          </div>

          <div className="bg-slate-100 p-8 rounded-3xl">
            <h3 className="text-5xl font-black text-red-600">UAE</h3>
            <p className="mt-2 text-gray-600">
              Based Trading Company
            </p>
          </div>

          <div className="bg-slate-100 p-8 rounded-3xl">
            <h3 className="text-5xl font-black text-red-600">Fast</h3>
            <p className="mt-2 text-gray-600">
              Product Delivery
            </p>
          </div>

          <div className="bg-slate-100 p-8 rounded-3xl">
            <h3 className="text-5xl font-black text-red-600">B2B</h3>
            <p className="mt-2 text-gray-600">
              Commercial Solutions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}