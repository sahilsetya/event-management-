import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex min-h-16 items-center justify-between">
          <a href="#" className="text-2xl font-bold tracking-tight">
            EventHub
          </a>

          <button
            type="button"
            className="rounded-md p-2 text-slate-200 transition hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 md:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Menu</span>
            <span className="block h-0.5 w-6 bg-current" />
            <span className="mt-1.5 block h-0.5 w-6 bg-current" />
            <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#" className="transition hover:text-indigo-300">
              Home
            </a>

            <a href="#events" className="transition hover:text-indigo-300">
              Events
            </a>

            <a href="#" className="transition hover:text-indigo-300">
              Login
            </a>

            <a
              href="#register"
              className="rounded-lg bg-indigo-500 px-4 py-2 font-semibold transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Register
            </a>
          </div>
        </div>

        <div
          className={`${isMenuOpen ? "block" : "hidden"} border-t border-slate-700 pb-4 pt-3 md:hidden`}
        >
          <div className="flex flex-col gap-1">
            <a href="#" className="rounded-md px-3 py-2 transition hover:bg-slate-800">
              Home
            </a>

            <a href="#events" className="rounded-md px-3 py-2 transition hover:bg-slate-800">
              Events
            </a>

            <a href="#" className="rounded-md px-3 py-2 transition hover:bg-slate-800">
              Login
            </a>

            <a
              href="#register"
              className="mt-2 rounded-lg bg-indigo-500 px-3 py-2 text-center font-semibold transition hover:bg-indigo-400"
            >
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
