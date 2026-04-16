import Link from "next/link";
import Image from "next/image";

export default function SiteHeader() {
  return (
    <header className="bg-elive-white shadow-sm border-b border-gray-200">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png" // put your logo in /public/logo.png
            alt="eLive Logo"
            width={120}
            height={40}
            priority
          />
        </Link>

        {/* NAV LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-elive-text">
          <Link href="/about" className="hover:text-elive-primary transition">
            About
          </Link>
          <Link href="/services" className="hover:text-elive-primary transition">
            Services
          </Link>
          <Link href="/solutions" className="hover:text-elive-primary transition">
            Solutions
          </Link>
          <Link href="/portfolio" className="hover:text-elive-primary transition">
            Portfolio
          </Link>
          <Link href="/contact" className="hover:text-elive-primary transition">
            Contact
          </Link>
        </div>

        {/* CTA BUTTON */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="rounded-lg bg-elive-accent px-5 py-2 text-sm font-semibold text-white hover:bg-elive-accent-dark transition"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  );
}