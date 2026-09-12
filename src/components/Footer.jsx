const LINK_GROUPS = [
  {
    title: "Product",
    links: [
      { label: "Home", href: "#home" },
      { label: "Technologies", href: "#technologies" },
      { label: "Projects", href: "#footer" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#footer" },
      { label: "Contact", href: "#footer" },
      { label: "Careers", href: "#footer" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#footer" },
      { label: "Terms of Service", href: "#footer" },
    ],
  },
];

const SOCIAL_LINKS = ["GitHub", "Twitter", "LinkedIn"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-gradient text-xs font-bold text-white">
                DS
              </span>
              <span className="font-display text-base font-bold text-slate-900">
                Dev <span className="text-brand-gradient">Stack</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm text-slate-500">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="mt-5 flex gap-4 text-sm font-medium text-slate-500">
              {SOCIAL_LINKS.map((social) => (
                <a key={social} href="#footer" className="hover:text-slate-900">
                  {social}
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                {group.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-600">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-slate-900">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {year} Dev Stack. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#footer" className="hover:text-slate-700">
              Privacy
            </a>
            <a href="#footer" className="hover:text-slate-700">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
