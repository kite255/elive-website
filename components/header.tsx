import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        <Link href="/" className="relative h-10 w-28 md:h-12 md:w-36">
          <Image
            src="/logo.png"
            alt="eLive logo"
            fill
            priority
            className="object-contain object-left"
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-[#24324A] lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[#F39A1F]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-[#F39A1F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#E68613]"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </header>
  );
}