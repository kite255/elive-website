import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";

const features = [
  "Direct event and customer updates",
  "Personalized communication workflows",
  "Invitation and reminder delivery",
  "Convenient support conversations",
  "Fast audience engagement",
  "Modern messaging experience",
];

export default function WhatsAppCommunicationPage() {
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
                WhatsApp Communication
              </p>

              <h1 className="mt-4 text-5xl font-black leading-[1.02] text-[#25468C] md:text-6xl lg:text-7xl">
                Faster
                <br />
                Direct Messaging
              </h1>

              <div className="mt-6 h-1.5 w-28 rounded-full bg-[#F39A1F]" />

              <p className="mt-6 max-w-xl text-base leading-8 text-[#5F6F86] md:text-[17px]">
                Our WhatsApp Communication solution helps organizations engage
                customers and event audiences through familiar, real-time
                messaging. It supports updates, invitations, reminders, and
                more personalized communication experiences.
              </p>
            </div>

            <div className="rounded-t-[2.6rem] bg-gradient-to-b from-[#25468C] to-[#1482B8] px-8 py-10 text-white shadow-[0_24px_55px_rgba(20,48,102,0.16)] md:px-10 md:py-12 lg:px-12">
              <p className="text-sm leading-8 text-white/95 md:text-[15px]">
                By using modern messaging channels, eLive enables businesses and
                event organizers to maintain stronger audience relationships,
                respond faster, and share timely information more effectively.
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
              Real-time communication through a trusted messaging channel
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
              Client communication, event updates, support, and follow-ups
            </h3>
            <p className="mt-4 text-sm leading-8 text-[#5F6F86]">
              This solution is suitable for organizations that want more direct,
              conversational, and accessible engagement with customers or event
              attendees.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25468C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1E3770]"
            >
              Talk to Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}