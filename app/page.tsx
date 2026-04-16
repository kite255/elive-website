"use client";

import Image from "next/image";
import Link from "next/link";
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
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

const serviceHighlights = [
  {
    title: "Bulk SMS",
    desc: "Promotions, alerts, reminders, awareness campaigns, and customer notifications.",
    icon: Megaphone,
  },
  {
    title: "Event Attendee Management",
    desc: "Invitations, registrations, RSVP handling, QR scanning, ticket delivery, and analytics.",
    icon: Users,
  },
  {
    title: "Creative Design",
    desc: "Graphics, website design, motion graphics, brand identity, and 3D design services.",
    icon: Palette,
  },
  {
    title: "Multimedia Solutions",
    desc: "Live streaming, videography, photography, projection, digital marketing, and TV & LED rental.",
    icon: MonitorPlay,
  },
  {
    title: "Printing & Branding",
    desc: "Digital printing, offset printing, signage, office branding, and promotional products.",
    icon: Printer,
  },
];

const stats = [
  { value: "3,945+", label: "Attendees Managed" },
  { value: "25+", label: "Events Supported" },
  { value: "6", label: "Core Service Areas" },
  { value: "100%", label: "Client-Focused Delivery" },
];

const trustedBy = [
  "Corporate Events",
  "Brands",
  "NGOs",
  "Churches",
  "Associations",
  "Institutions",
];

const whyChooseUs = [
  {
    title: "All-in-One Support",
    desc: "Communication, event operations, branding, printing, and media support under one trusted partner.",
    icon: BadgeCheck,
  },
  {
    title: "Modern Messaging",
    desc: "Connect with customers and attendees through SMS, WhatsApp, and digital invitation workflows.",
    icon: PhoneCall,
  },
  {
    title: "Operational Efficiency",
    desc: "Use QR check-in, attendee tracking, alerts, and post-event analytics to simplify coordination.",
    icon: QrCode,
  },
  {
    title: "Creative + Technical",
    desc: "We blend creativity, technology, and strategy to help your brand communicate with clarity and impact.",
    icon: Sparkles,
  },
];

const featuredServices = [
  {
    title: "Event Attendee Management",
    desc: "Manage registrations, invitations, RSVPs, QR verification, check-ins, and detailed attendee reporting for different event types.",
    image: "/service-1.jpg",
  },
  {
    title: "Bulk SMS Platform",
    desc: "Launch promotions, reminders, alerts, customer notifications, and awareness campaigns from one reliable messaging solution.",
    image: "/service-2.jpg",
  },
  {
    title: "Multimedia & Coverage",
    desc: "Professional live streaming, photography, videography, projection, and digital media support for memorable events.",
    image: "/service-3.jpg",
  },
];

const platformFeatures = [
  "Smart campaign scheduling and delivery",
  "Personalized SMS and WhatsApp messaging",
  "Digital invitations and RSVP management",
  "QR-based ticketing and check-in system",
  "Real-time attendee tracking and analytics",
  "Automated reminders and attendee follow-ups",
];

const processSteps = [
  {
    step: "01",
    title: "Plan Your Campaign or Event",
    desc: "Tell us what you want to launch, promote, or manage and we help shape the best communication approach.",
  },
  {
    step: "02",
    title: "Set Up Contacts or Attendees",
    desc: "Upload your audience, organize ticketing or attendance flow, and prepare messaging and event assets.",
  },
  {
    step: "03",
    title: "Launch and Engage",
    desc: "Send invitations, alerts, reminders, or promotional messages through the right channels at the right time.",
  },
  {
    step: "04",
    title: "Track and Improve",
    desc: "Measure attendance, delivery performance, engagement, and post-event insights to improve future results.",
  },
];

const solutions = [
  {
    title: "eLive SMS",
    desc: "A practical messaging solution for promotions, reminders, awareness campaigns, service notifications, and customer engagement.",
  },
  {
    title: "eLive Card",
    desc: "A smart invitation and attendee workflow with digital cards, RSVP support, ticket flow, and QR-based verification.",
  },
  {
    title: "WhatsApp Communication",
    desc: "Direct updates, invitations, customer support, and fast two-way communication through modern messaging channels.",
  },
  {
    title: "Creative & Brand Execution",
    desc: "Design, branding, media production, and print support that strengthen visibility before, during, and after your event.",
  },
];

const portfolio = [
  {
    title: "Corporate Events",
    desc: "Structured attendee handling, communication support, branding, and media coordination for professional events.",
    image: "/portfolio-1.jpg",
  },
  {
    title: "Social & Wedding Events",
    desc: "Elegant digital invitations, RSVP handling, guest communication, and memorable event presentation support.",
    image: "/portfolio-2.jpg",
  },
  {
    title: "Branding & Printing Projects",
    desc: "Signage, office branding, labels, catalogues, stationery, apparel, and promotional product execution.",
    image: "/portfolio-3.jpg",
  },
];

const testimonials = [
  {
    quote:
      "eLive helped us coordinate our event communication smoothly and professionally from invitation to attendance tracking.",
    name: "Corporate Client",
    role: "Event Organizer",
  },
  {
    quote:
      "Their messaging and branding support made our campaign feel organized, modern, and easy for our audience to follow.",
    name: "Business Client",
    role: "Marketing Team",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as any,
    },
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
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as any,
    },
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
            ? "text-[var(--color-elive-accent)] drop-shadow-[0_2px_10px_rgba(0,0,0,0.22)]"
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

export default function HomePage() {
  return (
    <main className="bg-[var(--color-elive-light)] text-[var(--color-elive-text)]">
      {/* HERO */}
      <section className="px-4 pt-5 md:px-6 lg:px-8 lg:pt-7">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[var(--color-elive-primary)] shadow-[0_32px_90px_rgba(20,48,102,0.2)]">
          <div className="absolute inset-0">
            <Image
              src="/hero.jpg"
              alt="eLive communication and event solutions"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#07183D]/95 via-[#102B5A]/88 to-[#143066]/70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(243,154,31,0.10),transparent_26%)]" />
          </div>

          <div className="relative px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
            <motion.div
              className="max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                variants={fadeUp}
                className="text-4xl font-black leading-tight md:text-5xl lg:text-[64px] lg:leading-[1.02]"
              >
                <span className="block text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.22)]">
                  Integrated Communication Solutions
                </span>
                <span className="mt-2 block text-[var(--color-elive-accent)] drop-shadow-[0_2px_12px_rgba(0,0,0,0.22)]">
                  for Events and Businesses
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-2xl text-base leading-8 text-white/90 drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)] md:text-lg"
              >
                Simplify messaging, attendee management, branding, and event
                execution with one trusted partner built for modern
                organizations.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[var(--color-elive-accent)] px-8 py-4 text-base font-semibold text-[#143066] shadow-[0_14px_34px_rgba(243,154,31,0.32)] transition duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-elive-accent-dark)] hover:text-white"
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center rounded-full border border-white/60 bg-transparent px-8 py-4 text-base font-semibold text-white transition duration-300 hover:border-white hover:bg-white/12"
                >
                  View Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* QUICK HIGHLIGHTS */}
        <div className="mx-auto mt-8 max-w-7xl">
          <StaggerGroup className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {serviceHighlights.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="group relative rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(15,35,76,0.06)] transition-all duration-300 hover:shadow-[0_24px_50px_rgba(15,35,76,0.14)]"
                >
                  <div className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-[var(--color-elive-accent)] to-transparent opacity-0 transition group-hover:opacity-100" />

                  <div className="inline-flex rounded-2xl bg-[#143066]/10 p-3 text-[#143066] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#143066] group-hover:text-white">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-4 text-lg font-bold leading-snug text-[#143066]">
                    {card.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>

        {/* TRUSTED BY */}
        <Reveal className="mx-auto mt-14 max-w-7xl">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white px-6 py-8 shadow-[0_12px_28px_rgba(15,35,76,0.05)]">
            <p className="text-center text-[11px] font-bold uppercase tracking-[0.24em] text-slate-500 md:text-xs">
              Trusted by businesses, institutions, and event organizers
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-semibold text-[#143066] md:text-base">
              {trustedBy.map((item) => (
                <span key={item} className="opacity-80">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* WHO WE ARE */}
      <section className="px-4 pb-16 pt-20 md:px-6 lg:px-8 lg:pb-24 lg:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.46fr,1fr] lg:gap-12 lg:items-start">
            <Reveal>
              <SectionIntro
                eyebrow="About eLive"
                title="Who We Are"
                description="We help businesses and events communicate more clearly, present more professionally, and operate more efficiently through integrated messaging, branding, media, and attendee management solutions."
                titleClassName="lg:text-[52px]"
              />
            </Reveal>

            <Reveal>
              <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#143066] via-[#214A92] to-[#2957A4] p-7 text-white shadow-[0_24px_55px_rgba(20,48,102,0.16)] md:p-10 lg:mt-12 lg:p-12">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute -right-12 top-0 h-40 w-40 rounded-full bg-white blur-3xl" />
                  <div className="absolute -left-10 bottom-0 h-44 w-44 rounded-full bg-[var(--color-elive-accent)] blur-3xl" />
                </div>

                <div className="relative">
                  <div className="grid gap-5">
                    <p className="text-base leading-8 text-white md:text-[17px]">
                      At eLive, we deliver innovative communication and
                      marketing solutions that help businesses and events
                      connect, impress, and engage their audiences.
                    </p>

                    <p className="text-base leading-8 text-white md:text-[17px]">
                      Our services include Bulk SMS, attendee management,
                      creative design, multimedia support, printing, branding,
                      and live streaming, giving clients one reliable partner
                      for both communication and execution.
                    </p>

                    <p className="text-base leading-8 text-white md:text-[17px]">
                      By combining creativity, technology, and strategy, we
                      help organizations manage invitations, messaging, event
                      experiences, branded materials, and audience engagement
                      with greater clarity and consistency.
                    </p>

                    <p className="text-base leading-8 text-white md:text-[17px]">
                      We do more than provide services. We build practical
                      partnerships that support visibility, performance, and
                      memorable brand experiences.
                    </p>
                  </div>

                  <div className="mt-8 grid gap-4 border-t border-white/15 pt-8 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 shadow-[0_10px_24px_rgba(0,0,0,0.16)] backdrop-blur">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-elive-accent)]">
                        What We Deliver
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/95 md:text-[15px]">
                        Messaging, event coordination, media support, branding,
                        and print solutions designed to work together.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 shadow-[0_10px_24px_rgba(0,0,0,0.16)] backdrop-blur">
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-elive-accent)]">
                        How We Work
                      </p>
                      <p className="mt-2 text-sm leading-7 text-white/95 md:text-[15px]">
                        We blend creativity, technology, and execution to help
                        clients communicate with confidence and deliver stronger
                        audience experiences.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white px-4 py-14 md:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Our Impact"
              title="Numbers That Reflect Real Delivery"
              description="We support brands, campaigns, and events with practical solutions that improve communication, coordination, and audience experience."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <motion.div
                key={item.label}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="group rounded-[1.6rem] border border-slate-200 bg-white p-7 text-center shadow-[0_10px_24px_rgba(15,35,76,0.05)] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(15,35,76,0.12)]"
              >
                <div className="text-4xl font-black text-[#143066] transition-all duration-300 group-hover:scale-110 group-hover:text-[var(--color-elive-accent)] md:text-5xl">
                  {item.value}
                </div>
                <p className="mt-2 text-sm font-medium text-slate-600 md:text-[15px]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[var(--color-elive-light)] px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Why Choose eLive"
              title="Built for Performance, Designed for Impact"
              description="We combine communication tools, event operations, creativity, and technical execution to give businesses and organizers a more complete solution."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                  className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(15,35,76,0.06)] transition duration-300 hover:shadow-[0_18px_34px_rgba(15,35,76,0.1)]"
                >
                  <div className="inline-flex rounded-2xl bg-[#143066]/8 p-3 text-[#143066]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-4 text-lg font-black text-[#143066] md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600 md:text-base">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
            <Reveal>
              <div>
                <SectionIntro
                  eyebrow="Our Services"
                  title="End-to-End Solutions Tailored to Your Goals"
                  description="From communication and audience engagement to event execution, creative production, branding, and print delivery, eLive helps you build experiences that are organized, visible, and memorable."
                />

                <Link
                  href="/services"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#143066] to-[#2957A4] px-7 py-4 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(20,48,102,0.24)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(20,48,102,0.32)]"
                >
                  <span className="text-white">View All Services</span>
                  <ArrowRight
                    size={16}
                    className="text-white transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>

            <StaggerGroup className="grid gap-6 md:grid-cols-3">
              {featuredServices.map((service) => (
                <motion.div
                  key={service.title}
                  variants={scaleIn}
                  whileHover={{ y: -8 }}
                  className="group overflow-hidden rounded-[1.65rem] border border-slate-200 bg-[var(--color-elive-light)] shadow-[0_12px_30px_rgba(15,35,76,0.06)] transition duration-300 hover:shadow-[0_18px_34px_rgba(15,35,76,0.1)]"
                >
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 280px"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-black text-[#143066] md:text-xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-slate-600 md:text-base">
                      {service.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* PLATFORM / PRODUCT SECTION */}
      <section className="relative overflow-hidden bg-[#143066] px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="absolute inset-0">
          <div className="absolute -top-10 left-0 h-72 w-72 rounded-full bg-[var(--color-elive-accent)]/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr,1fr] lg:items-center">
          <Reveal>
            <div>
              <SectionIntro
                eyebrow="Our Platform Advantage"
                title="Smart Communication and Event Workflows in One Place"
                description="Use eLive to plan campaigns, manage invitations, automate attendee communication, verify entry, and track performance through one modern workflow."
                light
                titleClassName="!text-white max-w-3xl"
              />

              <StaggerGroup className="mt-8 grid gap-4 sm:grid-cols-2">
                {platformFeatures.map((feature) => (
                  <motion.div
                    key={feature}
                    variants={scaleIn}
                    whileHover={{ y: -4 }}
                    className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-[15px] font-medium text-white shadow-[0_10px_24px_rgba(0,0,0,0.14)] backdrop-blur-md transition-all duration-300 hover:bg-white/14 hover:shadow-[0_16px_30px_rgba(0,0,0,0.18)] md:text-base"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-elive-accent)]" />
                    <span className="!text-white">{feature}</span>
                  </motion.div>
                ))}
              </StaggerGroup>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-elive-accent)] px-7 py-3.5 text-sm font-semibold text-[#143066] shadow-[0_14px_30px_rgba(243,154,31,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-elive-accent-dark)] hover:text-white"
                >
                  View Demo
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/16"
                >
                  Talk to Us
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr]">
            <Reveal>
              <SectionIntro
                eyebrow="Our Solutions"
                title="Communication, Event, and Brand Support in One Ecosystem"
                description="We provide more than standalone services. We create practical systems and support structures that improve communication, audience engagement, coordination, and presentation quality."
              />
            </Reveal>

            <StaggerGroup className="grid gap-5 md:grid-cols-2">
              {solutions.map((item) => (
                <motion.div
                  key={item.title}
                  variants={scaleIn}
                  whileHover={{ y: -6 }}
                  className="rounded-[1.65rem] border border-slate-200 bg-[var(--color-elive-light)] p-6 shadow-[0_10px_26px_rgba(15,35,76,0.05)] transition duration-300 hover:shadow-[0_16px_32px_rgba(15,35,76,0.08)]"
                >
                  <h3 className="text-lg font-black text-[#143066] md:text-xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-7 text-slate-600 md:text-base">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[var(--color-elive-light)] px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="How It Works"
              title="Simple Process. Strong Results."
              description="Our workflow is built to simplify communication, event execution, and customer engagement from start to finish."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((item) => (
              <motion.div
                key={item.step}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_12px_28px_rgba(15,35,76,0.06)] transition duration-300 hover:shadow-[0_18px_34px_rgba(15,35,76,0.1)]"
              >
                <div className="text-2xl font-black text-[var(--color-elive-accent)] md:text-3xl">
                  {item.step}
                </div>
                <h3 className="mt-3 text-lg font-black text-[#143066] md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-7 text-slate-600 md:text-base">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <Reveal>
              <SectionIntro
                eyebrow="Portfolio Preview"
                title="Work That Reflects Quality, Clarity, and Strong Presentation"
              />
            </Reveal>

            <Reveal>
              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#143066] to-[#2957A4] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_32px_rgba(20,48,102,0.24)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(20,48,102,0.32)]"
              >
                <span className="text-white">View Portfolio</span>
                <ArrowRight
                  size={16}
                  className="text-white transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>

          <StaggerGroup className="mt-10 grid gap-6 md:grid-cols-3">
            {portfolio.map((item, index) => (
              <motion.div
                key={item.title}
                variants={scaleIn}
                whileHover={{ y: -8 }}
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

      {/* TESTIMONIALS */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionIntro
              eyebrow="Client Confidence"
              title="Trusted Support for Communication and Events"
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <motion.div
                key={item.name + item.role}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="rounded-[1.75rem] border border-slate-200 bg-[var(--color-elive-light)] p-7 shadow-[0_12px_28px_rgba(15,35,76,0.05)]"
              >
                <p className="text-base leading-8 text-slate-700 md:text-[17px]">
                  “{item.quote}”
                </p>
                <div className="mt-6">
                  <h3 className="text-base font-black text-[#143066] md:text-lg">
                    {item.name}
                  </h3>
                  <p className="text-sm text-slate-500 md:text-[15px]">
                    {item.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* STRONG CTA */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] bg-gradient-to-r from-[#102A5C] via-[#143066] to-[#2957A4] px-6 py-12 text-white shadow-[0_24px_55px_rgba(20,48,102,0.22)] md:px-10 lg:px-14">
          <motion.div
            className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr] lg:items-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div variants={fadeUp} className="relative">
              <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-[var(--color-elive-accent)]/10 blur-3xl" />

              <div className="relative">
                <SectionIntro
                  eyebrow="Proven Experience"
                  title="Ready to Run Smarter Campaigns and Events?"
                  description="From Bulk SMS and digital invitations to event operations, branding, printing, and media coverage, eLive helps you deliver organized, engaging, and professional experiences."
                  light
                  titleClassName="!text-white max-w-3xl"
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-4 lg:justify-end lg:self-end"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-elive-accent)] px-7 py-3.5 text-sm font-semibold text-[#143066] shadow-[0_14px_30px_rgba(243,154,31,0.28)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--color-elive-accent-dark)] hover:text-white"
              >
                Get Started
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/16"
              >
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-4 pb-16 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
            <Reveal>
              <div>
                <SectionIntro
                  eyebrow="Contact Us"
                  title="Let’s Make Something Together"
                  description="Tell us about your campaign, event, communication need, or brand project and we will help you shape the right solution."
                />

                <div className="mt-8 grid gap-4">
                  <div className="flex items-start gap-4 rounded-[1.6rem] border border-slate-200 bg-white px-5 py-5 shadow-[0_10px_26px_rgba(15,35,76,0.06)]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#143066]/8 text-[#143066]">
                      <PhoneCall size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                        Phone
                      </p>
                      <p className="mt-1 text-[15px] font-semibold text-[#143066] md:text-base">
                        +255 745 939 140
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-[1.6rem] border border-slate-200 bg-white px-5 py-5 shadow-[0_10px_26px_rgba(15,35,76,0.06)]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#143066]/8 text-[#143066]">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                        WhatsApp
                      </p>
                      <p className="mt-1 text-[15px] font-semibold text-[#143066] md:text-base">
                        +255 777 792 017
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-[1.6rem] border border-slate-200 bg-white px-5 py-5 shadow-[0_10px_26px_rgba(15,35,76,0.06)]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#143066]/8 text-[#143066]">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                        Email
                      </p>
                      <p className="mt-1 text-[15px] font-semibold text-[#143066] md:text-base">
                        info@elive.co.tz
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-[1.6rem] border border-slate-200 bg-white px-5 py-5 shadow-[0_10px_26px_rgba(15,35,76,0.06)]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#143066]/8 text-[#143066]">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
                        Location
                      </p>
                      <p className="mt-1 text-[15px] leading-7 font-semibold text-[#143066] md:text-base">
                        Ikungwi Street, Kinondoni B, Kawawa Road, Dar es Salaam
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_22px_55px_rgba(15,35,76,0.10)] md:p-7">
                <div className="mb-5">
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-elive-accent)]">
                    Send an Inquiry
                  </p>
                  <h3 className="mt-2 text-2xl font-black text-[#143066]">
                    Tell us about your project
                  </h3>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-[var(--color-elive-light)] px-4 py-3.5 text-[15px] text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[var(--color-elive-accent)] focus:bg-white focus:ring-2 focus:ring-[var(--color-elive-accent)]/20 md:text-base"
                    placeholder="Full Name"
                  />
                  <input
                    className="w-full rounded-2xl border border-slate-200 bg-[var(--color-elive-light)] px-4 py-3.5 text-[15px] text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[var(--color-elive-accent)] focus:bg-white focus:ring-2 focus:ring-[var(--color-elive-accent)]/20 md:text-base"
                    placeholder="Phone Number"
                  />
                </div>

                <input
                  className="mt-4 w-full rounded-2xl border border-slate-200 bg-[var(--color-elive-light)] px-4 py-3.5 text-[15px] text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[var(--color-elive-accent)] focus:bg-white focus:ring-2 focus:ring-[var(--color-elive-accent)]/20 md:text-base"
                  placeholder="Email Address"
                />

                <select className="mt-4 w-full rounded-2xl border border-slate-200 bg-[var(--color-elive-light)] px-4 py-3.5 text-[15px] text-slate-700 outline-none transition-all duration-200 focus:border-[var(--color-elive-accent)] focus:bg-white focus:ring-2 focus:ring-[var(--color-elive-accent)]/20 md:text-base">
                  <option>Select Service</option>
                  <option>Bulk SMS</option>
                  <option>Event Attendee Management</option>
                  <option>Creative Design</option>
                  <option>Multimedia Solutions</option>
                  <option>Printing & Branding</option>
                </select>

                <textarea
                  className="mt-4 min-h-[160px] w-full rounded-2xl border border-slate-200 bg-[var(--color-elive-light)] px-4 py-3.5 text-[15px] text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-[var(--color-elive-accent)] focus:bg-white focus:ring-2 focus:ring-[var(--color-elive-accent)]/20 md:text-base"
                  placeholder="Tell us about your project"
                />

                <button className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-[#143066] to-[#2957A4] px-5 py-4 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(20,48,102,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(20,48,102,0.35)]">
                  Send Inquiry
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}