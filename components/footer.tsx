import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact Us" },
];

const services = [
  "Bulk SMS",
  "Event Attendee Management",
  "WhatsApp Communication",
  "Creative Design",
  "Printing & Branding",
  "Multimedia Solutions",
];

const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/cookies", label: "Cookie Policy" },
  { href: "/sitemap", label: "Sitemap" },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M6.94 8.5A1.56 1.56 0 1 0 6.94 5.38a1.56 1.56 0 0 0 0 3.12ZM5.56 9.75h2.77V18H5.56V9.75Zm4.35 0h2.66v1.13h.04c.37-.7 1.28-1.44 2.64-1.44 2.83 0 3.35 1.86 3.35 4.28V18h-2.77v-3.78c0-.9-.02-2.06-1.25-2.06-1.26 0-1.45.98-1.45 1.99V18H9.9V9.75Z" />
      </svg>
    ),
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-[18px] w-[18px]">
        <path d="M7.75 3h8.5A4.75 4.75 0 0 1 21 7.75v8.5A4.75 4.75 0 0 1 16.25 21h-8.5A4.75 4.75 0 0 1 3 16.25v-8.5A4.75 4.75 0 0 1 7.75 3Zm0 1.75a3 3 0 0 0-3 3v8.5a3 3 0 0 0 3 3h8.5a3 3 0 0 0 3-3v-8.5a3 3 0 0 0-3-3h-8.5Zm9.12 1.31a1.06 1.06 0 1 1 0 2.12 1.06 1.06 0 0 1 0-2.12ZM12 7.23A4.77 4.77 0 1 1 7.23 12 4.78 4.78 0 0 1 12 7.23Zm0 1.75A3.02 3.02 0 1 0 15.02 12 3.02 3.02 0 0 0 12 8.98Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-4 pb-6 pt-8 md:px-6 lg:px-8 lg:pb-8 lg:pt-10">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,35,76,0.08)]">
        {/* CTA STRIP */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#1E3E86] via-[#25468C] to-[#3159AA] px-6 py-10 md:px-10 md:py-12 lg:px-12">
          <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-[var(--color-elive-accent)]/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

          <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-elive-accent)]">
                Let&apos;s work together
              </p>

              <h2 className="mt-3 text-2xl font-black leading-tight !text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.25)] md:text-3xl lg:text-[2.4rem]">
                Ready to grow your communication, events, and brand presence?
              </h2>

              <div className="mt-4 h-1.5 w-20 rounded-full bg-[var(--color-elive-accent)]" />

              <p className="mt-5 max-w-xl text-sm leading-7 !text-white/90 md:text-base">
                From messaging and attendee management to media, printing, and
                branding, eLive helps you deliver organized and memorable
                experiences.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 self-start rounded-full bg-[var(--color-elive-accent)] px-7 py-3.5 text-sm font-semibold !text-white shadow-[0_14px_30px_rgba(243,154,31,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--color-elive-accent-dark)] lg:self-center"
            >
              <span className="!text-white">Request a Quote</span>
              <ArrowRight
                size={16}
                className="!text-white transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* MAIN FOOTER */}
        <div className="px-6 py-10 md:px-10 md:py-12 lg:px-12">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.15fr_0.8fr_0.9fr_1fr]">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-block">
                <div className="relative h-12 w-36">
                  <Image
                    src="/logo.png"
                    alt="eLive logo"
                    fill
                    sizes="144px"
                    className="object-contain object-left"
                  />
                </div>
              </Link>

              <p className="mt-5 max-w-sm text-[15px] leading-7 text-slate-600">
                Helping businesses and events connect, impress, and engage
                through smart communication, attendee management, branding, and
                media solutions.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-[var(--color-elive-light)] text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25468C] hover:bg-[#25468C] hover:text-white"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-base font-black text-[#143066]">Quick Links</h3>

              <ul className="mt-5 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-[15px] text-slate-600 transition hover:text-[#25468C]"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-elive-accent)] transition group-hover:scale-125" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-base font-black text-[#143066]">Our Services</h3>

              <ul className="mt-5 space-y-3">
                {services.map((service) => (
                  <li
                    key={service}
                    className="inline-flex items-start gap-2 text-[15px] leading-6 text-slate-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#25468C]" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-base font-black text-[#143066]">Contact Us</h3>

              <div className="mt-5 space-y-3">
                <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25468C]/10 text-[#25468C]">
                    <MapPin size={18} />
                  </span>
                  <p className="text-[15px] leading-6 text-slate-600">
                    Ikungwi Street, Kinondoni B, Kawawa Road, Dar es Salaam
                  </p>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25468C]/10 text-[#25468C]">
                    <Mail size={18} />
                  </span>
                  <a
                    href="mailto:info@elive.co.tz"
                    className="text-[15px] leading-6 text-slate-600 transition hover:text-[#25468C]"
                  >
                    info@elive.co.tz
                  </a>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25468C]/10 text-[#25468C]">
                    <Phone size={18} />
                  </span>
                  <a
                    href="tel:+255745939140"
                    className="text-[15px] leading-6 text-slate-600 transition hover:text-[#25468C]"
                  >
                    +255 745 939 140
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 border-t border-slate-200 pt-6">
            <div className="flex flex-col gap-4 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
              <p>© {year} eLive. All rights reserved.</p>

              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {legalLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition hover:text-[#25468C]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}