"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/bulksms", label: "Bulk SMS" },
  { href: "/cards-tickets", label: "Cards & Tickets" },
  { href: "/creative-design", label: "Creative Design" },
   { href: "/multimedia", label: "Multimedia" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="eLive Home"
          className="relative block h-10 w-28 shrink-0 md:h-12 md:w-36"
        >
          <Image
            src="/logo.png"
            alt="eLive logo"
            fill
            priority
            sizes="(max-width: 768px) 112px, 144px"
            className="object-contain object-left"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-semibold transition ${
                isActive(link.href)
                  ? "text-[#F39A1F]"
                  : "text-[#24324A] hover:text-[#F39A1F]"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[#F39A1F]" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex">
          <Link
            href="/contact"
            className="rounded-full bg-[#F39A1F] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#E68613]"
          >
            <span className="text-white">Request a Quote</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[#24324A] shadow-sm transition hover:border-[#F39A1F] hover:text-[#F39A1F] lg:hidden"
        >
          {open ? <X size={22} strokeWidth={2.2} /> : <Menu size={22} strokeWidth={2.2} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <nav className="flex flex-col gap-2 px-4 py-6">
            {navLinks.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-base font-semibold transition-all duration-200 ${
                    active
                      ? "bg-[#F39A1F] text-white shadow-md"
                      : "text-[#24324A] hover:bg-[#F7F8FA] hover:text-[#F39A1F]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

         <Link
  href="/contact"
  onClick={() => setOpen(false)}
  className="mt-4 rounded-full bg-[#F39A1F] px-5 py-3 text-center text-sm font-semibold !text-white transition hover:bg-[#E68613]"
>
  <span className="text-white">Request a Quote</span>
</Link>
          </nav>
        </div>
      )}
    </header>
  );
}