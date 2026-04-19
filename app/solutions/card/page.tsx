import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Invitation and RSVP management",
  "QR code ticket verification",
  "Attendee registration tracking",
  "Digital ticket distribution",
  "Structured check-in workflows",
  "Post-event attendance visibility",
];

export default function ELiveCardPage() {
  return (
    <main className="bg-[#F7F8FA] text-[#24324A]">
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#25468C] transition hover:text-[#1E3770]"
          >
            <ArrowLeft size={16} />
            Back to Solutions
          </Link>

          <div className="mt-8 grid gap-10 lg:grid-cols-[0.78fr,1.22fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#F39A1F]">
                eLive Card
              </p>

              <h1 className="mt-4 text-5xl font-black leading-[1.02] text-[#25468C] md:text-6xl lg:text-7xl">
                Smart Invitations
                <br />
                & Attendance
              </h1>

              <div className="mt-6 h-1.5 w-28 rounded-full bg-[#F39A1F]" />

              <p className="mt-6 max-w-xl text-base leading-8 text-[#5F6F86] md:text-[17px]">
                eLive Card is an intelligent invitation and attendee management
                solution that simplifies event coordination. It supports RSVP
                tracking, ticket distribution, and QR verification for a smooth
                and professional event experience.
              </p>
            </div>

            <div className="rounded-t-[2.6rem] bg-gradient-to-b from-[#25468C] to-[#1482B8] px-8 py-10 text-white shadow-[0_24px_55px_rgba(20,48,102,0.16)] md:px-10 md:py-12 lg:px-12">
              <p className="text-sm leading-8 text-white/95 md:text-[15px]">
                Designed for modern events, eLive Card helps organizers manage
                invitations, monitor attendance, and improve guest experience
                through digital workflows. It brings structure, convenience, and
                efficiency to event planning and execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#143066] px-4 py-16 text-white md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr,0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#F39A1F]">
              Key Capabilities
            </p>
            <h2 className="mt-3 text-3xl font-black md:text-4xl">
              Smarter event coordination from invitation to check-in
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#F39A1F]"
                    />
                    <p className="text-sm leading-7 text-white/85">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-white p-8 text-[#24324A] shadow-[0_22px_50px_rgba(20,48,102,0.12)]">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#F39A1F]">
              Ideal For
            </p>
            <h3 className="mt-3 text-2xl font-black text-[#25468C]">
              Weddings, conferences, corporate events, and social gatherings
            </h3>
            <p className="mt-4 text-sm leading-8 text-[#5F6F86]">
              eLive Card is suitable for organizers who need a professional way
              to manage invitations, guests, tickets, and event entry with
              greater accuracy and efficiency.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25468C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1E3770]"
            >
              Request a Demo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}