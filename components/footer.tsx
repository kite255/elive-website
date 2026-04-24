import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

const links = [
  { label: "About", href: "/about" },
  { label: "Bulk SMS", href: "/bulksms" },
  { label: "Cards & Tickets", href: "/cards-tickets" },
  { label: "Creative Design", href: "/creative-design" },
  { label: "Multimedia", href: "/multimedia" },
  { label: "Contact", href: "/contact" },
];


export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B1730] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(37,70,140,0.22),transparent_42%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-10 md:grid-cols-3 md:px-6 lg:px-8">
        <div>
          <Link href="/" className="inline-flex">
            <Image
              src="/logo.png"
              alt="eLive"
              width={110}
              height={40}
              className="h-auto w-[110px] brightness-0 invert"
            />
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-6 text-white/70">
            Communication, event, branding, printing, and multimedia solutions
            for businesses and events.
          </p>

          <Link
            href="https://wa.me/255777792017"
            target="_blank"
            className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white transition hover:border-[#f39a1f] hover:bg-white/5"
          >
            <MessageCircle size={16} className="text-[#f39a1f]" />
            WhatsApp
          </Link>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] !text-[#f39a1f]">
            Quick Links
          </h3>

          <div className="mt-4 space-y-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-white/70 transition hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] !text-[#f39a1f]">
            Contact
          </h3>

          <div className="mt-4 space-y-3 text-sm text-white/70">
            <ContactItem icon={MapPin}>
              Ikungwi Street, Kinondoni B, Dar es Salaam
            </ContactItem>

            <ContactItem icon={Phone}>+255 745 939 140</ContactItem>

            <ContactItem icon={Mail}>info@elive.co.tz</ContactItem>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10 px-4 py-4 md:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl text-xs text-white/50">
          © {new Date().getFullYear()} eLive Company Limited. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}

function ContactItem({
  icon: Icon,
  children,
}: {
  icon: any;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <Icon size={16} className="mt-1 shrink-0 text-[#f39a1f]" />
      <p className="leading-5">{children}</p>
    </div>
  );
}