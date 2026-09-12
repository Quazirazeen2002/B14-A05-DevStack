import { useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#footer" },
  { label: "About", href: "#footer" },
  { label: "Contact", href: "#footer" },
];

function BrandMark({ compact }) {
  return (
    <a href="#home" className="flex items-center gap-2 shrink-0">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-gradient text-sm font-bold text-white font-display">
        DS
      </span>
      {!compact && (
        <span className="text-lg font-bold font-display tracking-tight">
          Dev <span className="text-brand-gradient">Stack</span>
        </span>
      )}
    </a>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        {/* Mobile: hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 md:hidden"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          )}
        </button>

        {/* Desktop brand (left) */}
        <div className="hidden md:flex">
          <BrandMark />
        </div>

        {/* Mobile brand (center) */}
        <div className="md:hidden">
          <BrandMark compact={false} />
        </div>

        {/* Desktop nav links (center) */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {NAV_LINKS.map((link, index) => (
            <li key={link.label}>
              <a
                href={link.href}
                className={
                  index === 0
                    ? "text-pink-600 transition-colors hover:text-pink-700"
                    : "transition-colors hover:text-slate-900"
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: auth buttons */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#sign-in"
            className="text-xs font-medium text-slate-600 hover:text-slate-900 sm:text-sm"
          >
            Sign In
          </a>
          <a
            href="#sign-up"
            className="rounded-full bg-brand-gradient px-3 py-1.5 text-xs font-semibold text-white shadow-sm shadow-pink-200 transition-transform hover:scale-[1.03] active:scale-[0.98] sm:px-4 sm:py-2 sm:text-sm"
          >
            Sign Up
          </a>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            {NAV_LINKS.map((link, index) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={index === 0 ? "text-pink-600" : ""}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
