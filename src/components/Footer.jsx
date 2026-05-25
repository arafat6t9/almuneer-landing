export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">

        <p className="text-sm">
          © 2026 Al Muneer General Trading LLC.
          All Rights Reserved.
        </p>

        <p className="text-sm">
          Designed & Developed by{" "}
          <a
            href="https://arafatchy.iam.bd"
            target="_blank"
            rel="noreferrer"
            className="text-red-500 hover:text-red-400 transition"
          >
            Arafat Chowdhury
          </a>
        </p>

      </div>
    </footer>
  );
}