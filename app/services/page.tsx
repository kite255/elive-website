"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Megaphone,
  MonitorPlay,
  Palette,
  PhoneCall,
  Printer,
  QrCode,
  Sparkles,
  Users,
} from "lucide-react";

const subBrands = [
  {
    name: "eLive SMS",
    logo: "/elive-sms.png",
    description:
      "Bulk messaging for promotions, alerts, reminders, and customer communication.",
  },
  {
    name: "eLive Card",
    logo: "/elive-card.png",
    description:
      "Digital invitations, RSVP, ticketing, and attendee communication for events.",
  },
  {
    name: "eLive Ads",
    logo: "/elive-ads.png",
    description:
      "Creative advertising and promotional support that improves brand visibility.",
  },
  {
    name: "eLive Media",
    logo: "/elive-media.png",
    description:
      "Live streaming, photography, videography, projection, and multimedia support.",
  },
];

const coreServices = [
  {
    title: "Bulk SMS Solutions",
    icon: Megaphone,
    description:
      "Reliable messaging support for promotions, alerts, reminders, announcements, and customer communication.",
    points: [
      "Promotional campaigns",
      "Reminders and alerts",
      "Awareness messaging",
      "Customer notifications",
    ],
  },
  {
    title: "Event Attendee Management",
    icon: Users,
    description:
      "Structured attendee coordination from invitation to check-in, helping event teams manage communication and guest flow efficiently.",
    points: [
      "Invitations and ticket delivery",
      "RSVP and registration handling",
      "Attendee tracking",
      "Post-event insights",
    ],
  },
  {
    title: "Creative Design",
    icon: Palette,
    description:
      "Professional design services that strengthen your visual identity across digital campaigns, event materials, and branded assets.",
    points: [
      "Graphics design",
      "Brand identity",
      "Motion graphics",
      "Website design",
    ],
  },
  {
    title: "Multimedia Solutions",
    icon: MonitorPlay,
    description:
      "Professional media support for events and campaigns, including live streaming, photography, videography, projection, and digital promotion.",
    points: [
      "Live streaming",
      "Photography and videography",
      "Projection support",
      "Digital marketing",
    ],
  },
  {
    title: "Printing Services",
    icon: Printer,
    description:
      "High-quality print production for corporate, campaign, and event materials with strong presentation and reliable execution.",
    points: [
      "Digital printing",
      "Offset printing",
      "Large format printing",
      "Promotional printing",
    ],
  },
  {
    title: "Branding Solutions",
    icon: Sparkles,
    description:
      "End-to-end branding support that improves visibility, consistency, and presentation across products, offices, events, and campaigns.",
    points: [
      "Office branding",
      "Booth branding",
      "Product branding",
      "Signage and display branding",
    ],
  },
];

const attendeeFeatures = [
  {
    title: "Invitations & Ticketing",
    desc: "Send event invitations and tickets through reliable digital channels with organized guest communication.",
    icon: PhoneCall,
  },
  {
    title: "QR Check-In",
    desc: "Support smooth attendee verification and entry flow through QR-enabled check-in processes.",
    icon: QrCode,
  },
  {
    title: "Audience Updates",
    desc: "Keep attendees informed with reminders, alerts, and important event communication before and during the event.",
    icon: Megaphone,
  },
  {
    title: "Attendance Insights",
    desc: "Track attendance performance and engagement to strengthen future event planning and execution.",
    icon: BadgeCheck,
  },
];

const printingBranding = [
  "Digital printing",
  "Offset printing",
  "Large format printing",
  "Promotional products",
  "Office branding",
  "Signage and display materials",
];

const multimediaServices = [
  "Event live streaming",
  "TV and LED rental support",
  "Realtime projection",
  "Photography",
  "Videography",
  "Digital marketing support",
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
  hidden: { opacity: 0, scale: 0.95 },
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
          light
            ? "!text-[var(--color-elive-accent)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.22)]"
            : "text-[var(--color-elive-accent)]"
        }`}
      >
        {eyebrow}
      </p>

      <h2
        className={`mt-3 text-3xl font-black leading-tight md:text-4xl lg:text-5xl ${
          light
            ? "!text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.30)]"
            : "text-[#143066]"
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
            light
              ? "!text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)]"
              : "text-slate-600"
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

export default function ServicesPage() {
  return (
    <main className="bg-[var(--color-elive-light)] text-[var(--color-elive-text)]">
      {/* HERO */}
      <section className="px-4 pt-5 md:px-6 lg:px-8 lg:pt-7">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[var(--color-elive-primary)] shadow-[0_32px_90px_rgba(20,48,102,0.2)]">
          <div className="absolute inset-0">
            <Image
              src="/hero.jpg"
              alt="eLive services"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07183D]/95 via-[#102B5A]/88 to-[#143066]/72" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(243,154,31,0.10),transparent_26%)]" />
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
                Our Services
              </motion.p>

              <motion.h1
                variants={fadeUp}
                className="mt-4 text-4xl font-black leading-[1.05] md:text-5xl lg:text-[64px]"
              >
                <span className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.22)]">
                  Integrated Services for
                </span>
                <span className="mt-2 block text-[var(--color-elive-accent)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.22)]">
                  Communication, Branding, and Events
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base leading-8 text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)] md:text-lg"
              >
                We provide practical and professional solutions that help
                organizations communicate effectively, manage audiences,
                strengthen brand presentation, and deliver better event
                experiences.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-elive-accent)] px-7 py-3.5 text-base font-semibold text-white shadow-[0_14px_34px_rgba(243,154,31,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-elive-accent-dark)]"
                >
                  Request a Service
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/8 px-7 py-3.5 text-base font-semibold !text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/14"
                >
                  Learn About Us
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SUB-BRANDS / PLATFORMS */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Our Platforms"
              title="Specialized eLive Service Brands"
              description="Our service ecosystem includes focused platforms for messaging, invitations, media, and promotional delivery."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {subBrands.map((brand) => (
              <motion.div
                key={brand.name}
                variants={scaleIn}
                whileHover={{ y: -8 }}
                className="group rounded-[1.5rem] border border-slate-200 bg-[var(--color-elive-light)] p-6 shadow-[0_12px_28px_rgba(15,35,76,0.05)] transition-all duration-300 hover:border-slate-300 hover:shadow-[0_22px_42px_rgba(15,35,76,0.12)]"
              >
                <div className="flex h-[88px] items-center justify-start">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={220}
                    height={70}
                    className="h-auto max-h-16 w-auto object-contain transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-black tracking-tight text-[#143066]">
                    {brand.name}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    {brand.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Core Services"
              title="What We Deliver"
              description="Our services are designed to support communication, execution, visibility, and audience engagement across business and event environments."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {coreServices.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                  className="group rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-[0_12px_28px_rgba(15,35,76,0.06)] transition-all duration-300 hover:shadow-[0_24px_50px_rgba(15,35,76,0.14)]"
                >
                  <div className="inline-flex rounded-2xl bg-[#143066]/10 p-3 text-[#143066] transition-all duration-300 group-hover:bg-[#143066] group-hover:text-white">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-5 text-xl font-black text-[#143066]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-[15px] leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-5 grid gap-3">
                    {service.points.map((point) => (
                      <div key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-elive-accent)]" />
                        <p className="text-sm leading-6 text-slate-700">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* EVENT MANAGEMENT FOCUS */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr,1.08fr] lg:items-start">
          <Reveal>
            <SectionIntro
              eyebrow="Event Attendee Management"
              title="Professional Support for Better Event Flow"
              description="We help event teams manage audience communication, registration flow, access control, and engagement with more structure and confidence."
            />

            <div className="mt-8 rounded-[1.8rem] bg-[var(--color-elive-light)] p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-elive-accent)]">
                Delivery Advantage
              </p>
              <p className="mt-3 text-[15px] leading-7 text-slate-600">
                Our event support model combines communication, guest
                management, and execution tools in one connected workflow for
                smoother delivery.
              </p>
            </div>
          </Reveal>

          <StaggerGroup className="grid gap-5 sm:grid-cols-2">
            {attendeeFeatures.map((item) => {
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

      {/* PRINTING + BRANDING */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1fr,0.95fr] lg:items-start">
            <Reveal>
              <SectionIntro
                eyebrow="Printing & Branding"
                title="Strong Presentation Across Print and Physical Touchpoints"
                description="We support organizations, campaigns, and event teams with practical print production and branding solutions that improve visibility and presentation."
              />

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {printingBranding.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.3rem] border border-slate-200 bg-white px-5 py-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-elive-accent)]" />
                    <p className="text-sm leading-7 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[2rem] bg-gradient-to-br from-[#143066] via-[#214A92] to-[#2957A4] p-8 text-white shadow-[0_22px_50px_rgba(20,48,102,0.18)] md:p-10">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                    <Printer
                      size={24}
                      className="text-[var(--color-elive-accent)]"
                    />
                  </div>

                  <h3 className="text-2xl font-black tracking-tight text-white md:text-3xl">
                    Professional Output, Stronger Brand Presence
                  </h3>
                </div>

                <p className="mt-6 text-base leading-8 text-white/90 md:text-lg">
                  From branded materials and office visuals to event signage and
                  promotional items, we help clients present consistently and
                  professionally across physical brand touchpoints.
                </p>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-elive-accent)]">
                      Brand Consistency
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/90">
                      We align print and branding materials with your visual
                      identity and communication goals.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-elive-accent)]">
                      Practical Delivery
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/90">
                      Our focus is not just design, but usable, visible, and
                      execution-ready output for real environments.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* MULTIMEDIA */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Multimedia Solutions"
              title="Media Support That Expands Reach and Experience"
              description="Our multimedia services help clients present professionally, engage audiences visually, and extend event experiences beyond the venue."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {multimediaServices.map((item) => (
              <motion.div
                key={item}
                variants={scaleIn}
                className="rounded-[1.5rem] border border-slate-200 bg-[var(--color-elive-light)] px-6 py-5 shadow-[0_10px_24px_rgba(15,35,76,0.05)]"
              >
                <div className="flex items-start gap-3">
                  <MonitorPlay className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-elive-accent)]" />
                  <p className="text-sm leading-7 text-slate-700 md:text-[15px]">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-gradient-to-r from-[#102A5C] via-[#143066] to-[#2957A4] px-6 py-12 text-white shadow-[0_24px_55px_rgba(20,48,102,0.22)] md:px-10 lg:px-14">
          <motion.div
            className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div variants={fadeUp}>
              <SectionIntro
                eyebrow="Let’s Build Together"
                title="Need a Service Package That Fits Your Project?"
                description="Whether you need messaging, attendee coordination, branding, multimedia support, or print delivery, eLive can help you plan and execute with clarity."
                light
                titleClassName="!text-white max-w-3xl"
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 lg:justify-end"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-elive-accent)] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(243,154,31,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-elive-accent-dark)]"
              >
                Contact Us
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/8 px-7 py-3.5 text-sm font-semibold !text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/16"
              >
                About eLive
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}