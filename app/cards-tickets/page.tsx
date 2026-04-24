"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  CreditCard,
  QrCode,
  Send,
  ShieldCheck,
  Ticket,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Digital Invitations",
    desc: "Create and share professional digital invitations for weddings, conferences, corporate events, seminars, and private functions.",
    icon: CreditCard,
  },
  {
    title: "RSVP Management",
    desc: "Track confirmations and responses in a structured way to improve planning, guest coordination, and communication.",
    icon: Users,
  },
  {
    title: "Ticket Distribution",
    desc: "Deliver digital tickets quickly through organized channels that make attendee access simple and reliable.",
    icon: Ticket,
  },
  {
    title: "QR Verification",
    desc: "Use QR-enabled tickets and invitations to support smooth check-in and secure attendee verification.",
    icon: QrCode,
  },
];

const solutions = [
  "Invitation card design",
  "Digital invitation delivery",
  "Ticket creation and sharing",
  "RSVP and attendance tracking",
  "QR-based verification",
  "Event entry coordination",
  "Guest communication updates",
  "Post-event attendance insights",
];

const benefits = [
  {
    title: "Better Guest Coordination",
    desc: "Manage invitations, confirmations, and attendance in a more organized workflow.",
    icon: Users,
  },
  {
    title: "Professional Event Presentation",
    desc: "Present your event with polished invitations and structured ticket delivery.",
    icon: BadgeCheck,
  },
  {
    title: "Faster Access Control",
    desc: "Support easier check-in with QR verification and digital attendee records.",
    icon: QrCode,
  },
  {
    title: "Reliable Communication",
    desc: "Keep attendees informed before and during the event with timely updates.",
    icon: Send,
  },
];

const useCases = [
  {
    title: "Weddings & Social Events",
    desc: "Send elegant invitations, manage RSVPs, and coordinate guests for weddings, send-offs, birthdays, and celebrations.",
    image: "/wedding&social-events.jpg",
  },
  {
    title: "Corporate Events",
    desc: "Handle invitations, attendee records, and access verification for launches, meetings, conferences, and company events.",
    image: "/corporate-event.jpg",
  },
  {
    title: "Tickets & Entry Management",
    desc: "Support structured ticketing and QR-based check-in for events that require controlled access and smooth attendee flow.",
    image: "/Tickets-Management.jpg",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Plan the Event Flow",
    desc: "We define the invitation, RSVP, ticketing, and attendee verification needs for your event.",
  },
  {
    step: "02",
    title: "Prepare Cards and Tickets",
    desc: "We create the invitation or ticket experience based on your event type and audience.",
  },
  {
    step: "03",
    title: "Share and Manage Responses",
    desc: "Guests receive invitations or tickets through suitable channels and responses are tracked.",
  },
  {
    step: "04",
    title: "Verify and Report",
    desc: "QR verification and attendance tracking help improve entry flow and post-event review.",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as any },
  },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as any },
  },
};

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  titleClassName?: string;
};

function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  titleClassName = "",
}: SectionIntroProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`text-sm font-bold uppercase tracking-[0.22em] md:text-[15px] ${
          light ? "text-[var(--color-elive-accent)]" : "text-[var(--color-elive-accent)]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-3 text-3xl font-black leading-tight md:text-4xl lg:text-5xl ${
          light ? "!text-white" : "text-[#143066]"
        } ${titleClassName}`}
      >
        {title}
      </h2>

      <div
        className={`mt-4 h-1.5 w-24 rounded-full bg-[var(--color-elive-accent)] ${
          isCenter ? "mx-auto" : ""
        }`}
      />

      {description ? (
        <p
          className={`mt-5 text-base leading-8 md:text-[17px] ${
            light ? "!text-white/90" : "text-slate-600"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
}

function StaggerGroup({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.12 }}
    >
      {children}
    </motion.div>
  );
}

export default function CardsAndTicketsPage() {
  return (
    <main className="bg-[var(--color-elive-light)] text-[var(--color-elive-text)]">
      {/* HERO */}
      <section className="px-4 pt-5 md:px-6 lg:px-8 lg:pt-7">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[var(--color-elive-primary)] shadow-[0_32px_90px_rgba(20,48,102,0.18)]">
          <div className="absolute inset-0">
            <Image
              src="/hero.jpg"
              alt="eLive cards and tickets"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07183D]/95 via-[#102B5A]/88 to-[#143066]/72" />
          </div>

          <div className="relative px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
            <motion.div
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.p
                variants={fadeUp}
                className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-elive-accent)]"
              >
                eLive Card
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-5 text-4xl font-black leading-tight md:text-5xl lg:text-[64px] lg:leading-[1.05]"
              >
                <span className="block text-white">
                  Smart Cards and Tickets
                </span>
                <span className="block text-[var(--color-elive-accent)]">
                  for Invitations, RSVP, and QR Verification
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg"
              >
                Manage invitations, guest responses, ticket delivery, and
                attendee verification through a more structured and professional
                digital event experience.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
  <Link
    href="/contact"
    className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-elive-accent)] px-7 py-3 text-sm font-semibold !text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-elive-accent-dark)]"
  >
    Request Cards & Tickets
    <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
  </Link>

  <Link
    href="/elive-cards-gallery"
    className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white px-7 py-3 text-sm font-semibold text-[#143066] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100"
  >
    View Digital Card Gallery
  </Link>

  <Link
    href="#event-features"
    className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold !text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/15"
  >
    View Features
  </Link>
</motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
          <Reveal>
            <SectionIntro
              eyebrow="Cards & Tickets Overview"
              title="A Structured Way to Manage Invitations and Attendee Access"
              description="Our Cards and Tickets solution helps event organizers improve invitation delivery, RSVP handling, ticket distribution, and entry verification."
            />
          </Reveal>

         <Reveal>
  <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_45px_rgba(15,35,76,0.06)] md:p-10">
    
    <h3 className="text-2xl font-black leading-tight text-[#143066] md:text-3xl">
      Built for invitations, confirmations, tickets, and guest flow
    </h3>

    <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-[17px]">
      Whether you are managing a private celebration or a corporate
      function, eLive Card helps you coordinate attendees with clarity,
      speed, and a more structured event experience.
    </p>

    <div className="mt-8 grid gap-4">
      {[
        "Professional digital invitations",
        "Simple RSVP and attendance tracking",
        "QR-based ticket and entry verification",
      ].map((item) => (
        <div
          key={item}
          className="flex items-center gap-3 rounded-2xl bg-[var(--color-elive-light)] px-5 py-4 transition-all duration-200 hover:bg-slate-100"
        >
          <CheckCircle2 className="h-5 w-5 shrink-0 text-[var(--color-elive-accent)]" />
          <p className="text-sm leading-7 text-[#143066] md:text-[15px]">
            {item}
          </p>
        </div>
      ))}
    </div>

  </div>
</Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section
        id="event-features"
        className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Core Features"
              title="What the Cards and Tickets Solution Supports"
              description="Designed for better guest communication, event coordination, and attendee verification."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                  className="group rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-[0_12px_28px_rgba(15,35,76,0.06)] transition-all duration-300 hover:shadow-[0_24px_50px_rgba(15,35,76,0.14)]"
                >
                  <div className="inline-flex rounded-2xl bg-[#143066]/10 p-3 text-[#143066] transition-all duration-300 group-hover:bg-[#143066] group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-[#143066]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

     

      {/* SERVICE COVERAGE */}
<section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
  <div className="mx-auto max-w-7xl">
    <Reveal>
      <SectionIntro
        eyebrow="Service Coverage"
        title="Choose the Right Package for Your Event"
        description="Compare features across our packages and select what fits your event needs best."
        align="center"
      />
    </Reveal>

    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="mt-12 overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,35,76,0.08)]"
    >
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          
          {/* HEADER */}
          <thead>
            <tr className="text-white">
              <th className="bg-[#143066] px-6 py-4 text-left font-semibold">
                Features
              </th>
              <th className="bg-green-500 px-6 py-4 text-center font-semibold">
                Green Pack <br /> (1,000 TZS)
              </th>
              <th className="bg-[#25468c] px-6 py-4 text-center font-semibold">
                Blue Pack <br /> (1,500 TZS)
              </th>
              <th className="bg-[var(--color-elive-accent)] px-6 py-4 text-center font-semibold">
                Gold Pack <br /> (3,000 TZS)
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="divide-y">
            {[
              {
                name: "Send invitations via SMS & WhatsApp",
                values: ["✔", "✔", "✔"],
              },
              {
                name: "RSVP reporting (attendee confirmation)",
                values: ["✔", "✔", "✔"],
              },
              {
                name: "Invitation card design",
                values: ["✔", "✔", "✔"],
              },
              {
                name: "View number of attendees who received tickets",
                values: ["✔", "✔", "✔"],
              },
              {
                name: "QR code verification system",
                values: ["✔", "✔", "✔"],
              },
              {
                name: "Invitation engagement reports",
                values: ["✔", "✔", "✔"],
              },
              {
                name: "Dashboard to monitor attendance",
                values: ["✖", "✔", "✔"],
              },
              {
                name: "Schedule invitation sending",
                values: ["✖", "✔", "✔"],
              },
              {
                name: "Event day QR scanning & verification",
                values: ["✖", "✔", "✔"],
              },
              {
                name: "Send invitations via SIM (offline SMS)",
                values: ["✔", "✔", "✔"],
              },
              {
                name: "Bulk SMS to all attendees",
                values: ["✖", "✖", "✔"],
              },
              {
                name: "Usher support (attendee guidance)",
                values: ["✖", "✖", "✔"],
              },
            ].map((row, i) => (
              <tr key={i} className="hover:bg-slate-50 transition">
                <td className="px-6 py-4 text-slate-700">
                  {row.name}
                </td>

                {row.values.map((val, idx) => (
                  <td
                    key={idx}
                    className="px-6 py-4 text-center text-lg font-bold"
                  >
                    <span
                      className={
                        val === "✔"
                          ? "text-green-600"
                          : "text-red-400"
                      }
                    >
                      {val}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  </div>
</section>

      {/* BENEFITS */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Why eLive Card"
              title="A Better Experience for Organizers and Attendees"
              description="This solution improves how events are presented, managed, and verified."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  variants={scaleIn}
                  className="rounded-[1.6rem] border border-slate-200 bg-[var(--color-elive-light)] p-6 shadow-[0_10px_24px_rgba(15,35,76,0.05)]"
                >
                  <div className="inline-flex rounded-2xl bg-[#143066]/8 p-3 text-[#143066]">
                    <Icon size={20} />
                  </div>
                  <h3 className="mt-4 text-lg font-black text-[#143066]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* USE CASES */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Use Cases"
              title="Cards and Tickets for Different Event Types"
              description="A flexible solution for both social and professional event environments."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {useCases.map((item, index) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,35,76,0.06)] transition duration-300 hover:shadow-[0_18px_34px_rgba(15,35,76,0.1)]"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    loading={index === 0 ? "eager" : "lazy"}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1735]/70 via-transparent to-transparent" />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-black text-[#143066] md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600 md:text-base">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      
    </main>
  );
}