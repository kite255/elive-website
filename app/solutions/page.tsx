import Link from "next/link";
import {
  MessageSquare,
  Ticket,
  Smartphone,
  Video,
} from "lucide-react";

const solutions = [
  {
    title: "eLive SMS",
    href: "/solutions/sms",
    icon: MessageSquare,
    desc: "Run high-impact campaigns with promotions, reminders, alerts, and transactional messaging through a fast and reliable bulk SMS platform.",
  },
  {
    title: "eLive Card",
    href: "/solutions/card",
    icon: Ticket,
    desc: "Manage invitations and attendees seamlessly with RSVP tracking, QR-based verification, and smart ticket distribution.",
  },
  {
    title: "WhatsApp Communication",
    href: "/solutions/whatsapp",
    icon: Smartphone,
    desc: "Engage your audience instantly with event updates, customer support, and personalized messaging via WhatsApp.",
  },
  {
    title: "Live Media Support",
    href: "/solutions/media",
    icon: Video,
    desc: "Deliver immersive event experiences with live streaming, videography, photography, LED screens, and real-time projection.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-[#F7F8FA] text-[#24324A]">
      {/* HERO SECTION */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr,1.25fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#F39A1F]">
              Our Solutions
            </p>

            <h1 className="mt-4 text-5xl font-black leading-[1.02] text-[#25468C] md:text-6xl lg:text-7xl">
              Smart
              <br />
              Digital Solutions
            </h1>

            <div className="mt-6 h-1.5 w-28 rounded-full bg-[#F39A1F]" />

            <p className="mt-6 max-w-lg text-base leading-7 text-[#5F6F86]">
              We design and deliver integrated digital tools that simplify
              communication, enhance engagement, and support successful events
              and business operations with greater efficiency and measurable
              impact.
            </p>
          </div>

          <div className="rounded-[2.6rem] bg-gradient-to-br from-[#25468C] via-[#214A92] to-[#1482B8] px-8 py-10 text-white shadow-[0_24px_55px_rgba(20,48,102,0.18)] md:px-10 md:py-12 lg:px-12">
            <p className="text-sm leading-7 text-white/95 md:text-[15px]">
              At eLive, we go beyond traditional services by building intelligent
              solutions that help organizations operate more efficiently. From
              messaging platforms to event technologies, our systems are
              designed to strengthen communication, improve coordination, and
              deliver professional audience experiences.
            </p>
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="bg-[#143066] px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F39A1F]">
              What We Offer
            </p>
            <h2 className="mt-3 text-3xl font-black text-white md:text-4xl">
              Integrated Solutions for Modern Communication and Events
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/75 md:text-[15px]">
              Explore our core solutions designed to help businesses, brands,
              and event organizers communicate better, operate smarter, and
              create stronger audience engagement.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <Link key={solution.title} href={solution.href} className="block">
                  <div className="group h-full rounded-[1.8rem] border border-white/10 bg-white/5 p-8 text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                    <div className="mb-5 inline-flex rounded-2xl bg-white/10 p-4">
                      <Icon size={24} className="text-[#F39A1F]" />
                    </div>

                    <h3 className="text-2xl font-black leading-tight">
                      {solution.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-white/85">
                      {solution.desc}
                    </p>

                    <div className="mt-6 h-1 w-12 rounded-full bg-[#F39A1F] transition-all duration-300 group-hover:w-20" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}