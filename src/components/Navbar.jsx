import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logo} className="w-12 h-12 object-contain" />
          <div>
            <h1 className="font-bold text-lg text-slate-900">
              Al Muneer Trading LLC
            </h1>
            <p className="text-xs text-gray-500">
              Ras Al-Khaimah, UAE
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/971568994436"
          target="_blank"
          className="bg-red-600 hover:bg-red-700 transition text-white px-5 py-2 rounded-full font-medium"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  );
}