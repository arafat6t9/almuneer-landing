export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">

        <p className="text-red-600 uppercase tracking-widest font-semibold">
          Contact Information
        </p>

        <h2 className="text-4xl font-black text-slate-900 mt-4">
          Get In Touch
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">

          <div className="bg-slate-100 rounded-3xl p-8">
            <h3 className="font-bold text-xl">
              Address
            </h3>

            <p className="mt-4 text-gray-600 leading-7">
              Al Nakheel Area,
              Old Etisalat Road,
              Ras Al-Khaimah,
              United Arab Emirates
            </p>
          </div>

          <div className="bg-slate-100 rounded-3xl p-8">
            <h3 className="font-bold text-xl">
              Contact
            </h3>

            <p className="mt-4 text-gray-600">
              +971 56 899 4436
            </p>

            <p className="mt-2 text-gray-600 break-all">
              info@almuneertrd.ae
            </p>
          </div>

          <div className="bg-slate-100 rounded-3xl p-8">
            <h3 className="font-bold text-xl">
              Working Area
            </h3>

            <p className="mt-4 text-gray-600">
              Ras Al-Khaimah
              <br />
              Dubai
              <br />
              Sharjah
              <br />
              UAE
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}