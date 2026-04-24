"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  BellRing,
  CheckCircle2,
  Clock3,
  Megaphone,
  MessageSquareText,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const serviceHighlights = [
  {
    title: "Promotional SMS",
    desc: "Launch offers, product announcements, and campaign messages quickly through one reliable bulk SMS channel.",
    icon: Megaphone,
  },
  {
    title: "Alerts & Notifications",
    desc: "Send important service updates, announcements, and operational notices to the right audience on time.",
    icon: BellRing,
  },
  {
    title: "Reminder SMS",
    desc: "Improve customer response with reminders for appointments, payments, bookings, and scheduled activities.",
    icon: Clock3,
  },
  {
    title: "Customer Communication",
    desc: "Support direct communication through confirmations, service notices, follow-ups, and awareness campaigns.",
    icon: MessageSquareText,
  },
];

const platformFeatures = [
  "Promotions and marketing SMS",
  "Notifications and alerts",
  "Reminder SMS",
  "Appointment reminders",
  "Transaction alerts",
  "New service announcements",
  "Customer service notifications",
  "Awareness campaigns",
];

const supportedNetworks = [
  { name: "Vodacom", logo: "/vodacom2.png" },
  { name: "Yas", logo: "/yas.png" },
  { name: "Halotel", logo: "/halotel logo.png" },
  { name: "Airtel", logo: "/Airtel logo.png" },
  { name: "TTCL", logo: "/TTCL-logo.png" },
];

const benefits = [
  {
    title: "Fast Delivery",
    desc: "Reach large customer groups quickly with clear, mobile-first communication.",
    icon: Megaphone,
  },
  {
    title: "Wide Reach",
    desc: "Communicate directly with customers across major mobile networks.",
    icon: Smartphone,
  },
  {
    title: "Practical Use",
    desc: "Use SMS for promotions, reminders, alerts, and routine business updates.",
    icon: CheckCircle2,
  },
  {
    title: "Reliable Support",
    desc: "Keep communication consistent for both campaigns and operational messaging.",
    icon: ShieldCheck,
  },
];

const pricingTiers = [
  { min: "1", max: "25,000", price: "20" },
  { min: "25,001", max: "50,000", price: "18" },
  { min: "50,001", max: "75,000", price: "16" },
  { min: "75,000", max: "100,000", price: "15" },
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
};

function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
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
          light ? "text-white" : "text-[#143066]"
        }`}
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
            light ? "text-white/90" : "text-slate-600"
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

export default function BulkSmsPage() {
  return (
    <main className="bg-[var(--color-elive-light)] text-[var(--color-elive-text)]">
  
     {/* HERO */}<section className="px-4 pt-5 md:px-6 lg:px-8 lg:pt-7">
  <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[var(--color-elive-primary)] shadow-[0_32px_90px_rgba(20,48,102,0.18)]">
    <div className="absolute inset-0">
      <Image
        src="/hero.jpg"
        alt="eLive bulk SMS"
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
          eLive SMS
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-5 text-4xl font-black leading-tight md:text-5xl lg:text-[64px] lg:leading-[1.05]"
        >
          <span className="block text-white">
            Flexible Bulk SMS
          </span>
          <span className="block text-[var(--color-elive-accent)]">
            for Promotions, Alerts, Reminders, and Customer Updates
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-2xl text-base leading-8 text-white/90 md:text-lg"
        >
          Reach your audience quickly through a professional bulk messaging
          solution built for business communication, campaign delivery,
          alerts, reminders, and customer engagement.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-elive-accent)] px-7 py-3.5 text-base font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[var(--color-elive-accent-dark)]"
          >
            <span className="text-white">Request Bulk SMS</span>
            <ArrowRight
              size={18}
              className="text-white transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Link>

          <Link
            href="#sms-pricing"
            className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/8 px-7 py-3.5 text-base font-semibold !text-white backdrop-blur-sm transition-all duration-200 hover:border-white hover:bg-white/14"
          >
            View Pricing
          </Link>

         <Link
  href="https://message.elive.co.tz/auth/login"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold !text-white transition-all duration-200 hover:border-white hover:bg-white/10"
>
  Login eLive SMS
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
              eyebrow="Bulk SMS Overview"
              title="A Reliable Channel for High-Impact Business Communication"
              description="Our Bulk SMS service helps organizations communicate with speed and clarity across promotions, announcements, alerts, reminders, and everyday customer updates."
            />
          </Reveal>
<Reveal>
  <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_45px_rgba(15,35,76,0.06)] md:p-10">
    
    <h3 className="text-2xl font-black leading-tight text-[#143066] md:text-3xl">
      Built for campaigns, reminders, alerts, and customer communication
    </h3>

    <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 md:text-[17px]">
      Whether you are promoting a service or sending important customer
      notices, eLive SMS provides a structured and professional way to
      communicate at scale.
    </p>

    <div className="mt-8 grid gap-4">
      {[
        "Direct mobile-first communication",
        "Professional support for business messaging",
        "Suitable for both campaigns and operations",
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

      {/* NETWORKS */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Supported Networks"
              title="Reach Customers Across Major Mobile Networks"
              description="Our Bulk SMS service supports communication across leading mobile networks, helping your messages reach a wider audience with confidence."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-5">
            {supportedNetworks.map((network) => (
              <motion.div
                key={network.name}
                variants={scaleIn}
                whileHover={{ y: -6 }}
                className="group flex min-h-[160px] items-center justify-center rounded-[1.7rem] border border-slate-200 bg-[var(--color-elive-light)] p-6 shadow-[0_12px_28px_rgba(15,35,76,0.06)] transition-all duration-300 hover:shadow-[0_22px_42px_rgba(15,35,76,0.12)]"
              >
                <Image
                  src={network.logo}
                  alt={network.name}
                  width={180}
                  height={90}
                  className="h-auto max-h-20 w-auto object-contain transition duration-300 group-hover:scale-[1.04]"
                />
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Service Highlights"
              title="What the Bulk SMS Solution Supports"
              description="Use Bulk SMS across marketing, customer reminders, service updates, and operational communication."
              align="center"
            />
          </Reveal>

          <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {serviceHighlights.map((item) => {
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

      {/* CAPABILITIES */}
      <section className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-start">
          <Reveal>
            <SectionIntro
              eyebrow="Bulk SMS Capabilities"
              title="Core Messaging Uses Included in the Service"
              description="The service is positioned around the communication categories most organizations need most often."
            />
          </Reveal>

          <StaggerGroup className="grid gap-4 sm:grid-cols-2">
            {platformFeatures.map((item) => (
              <motion.div
                key={item}
                variants={scaleIn}
                className="flex items-start gap-3 rounded-[1.35rem] border border-slate-200 bg-[var(--color-elive-light)] px-5 py-4 shadow-[0_10px_24px_rgba(15,35,76,0.05)]"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-elive-accent)]" />
                <p className="text-sm leading-7 text-slate-700 md:text-[15px]">
                  {item}
                </p>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <SectionIntro
              eyebrow="Why eLive SMS"
              title="A Simpler, Stronger Bulk Messaging Offer"
              description="This solution is built to keep business communication clear, direct, and dependable."
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
                  className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_10px_24px_rgba(15,35,76,0.05)]"
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
{/* PRICING */}
<section
  id="sms-pricing"
  className="bg-[#F7F8FA] px-4 py-16 md:px-6 lg:px-8 lg:py-24"
>
  <div className="mx-auto max-w-6xl">
    <div className="rounded-[2rem] border border-[var(--color-elive-border)] bg-white p-6 shadow-[0_12px_32px_rgba(15,35,76,0.05)] md:p-10 lg:p-12">
      {/* TITLE */}
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-elive-accent)]">
          Flexible Pricing
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight text-[#143066] md:text-4xl">
          Bulk SMS Pricing
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[var(--color-elive-muted)] md:text-base">
          Clear pricing designed to support both starter usage and higher-volume
          monthly messaging needs.
        </p>
      </div>

      {/* STARTER PACK */}
      <div className="mx-auto mt-8 max-w-3xl rounded-[1.4rem] border border-[var(--color-elive-border)] bg-[#F9FAFB] p-6 md:p-7">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--color-elive-accent)]">
              Starter Pack
            </p>
            <h3 className="mt-2 text-2xl font-black text-[#143066] md:text-3xl">
              TZS 35,000/=
            </h3>
          </div>

          <div className="rounded-full bg-[var(--color-elive-primary)]/8 px-4 py-2 text-sm font-semibold text-[var(--color-elive-primary)]">
            Entry Package
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "1,000 SMS included",
            "1 Sender ID",
            "Unlimited templates",
            "API access",
            "Support included",
            "Training included",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <span className="mt-[8px] h-2 w-2 shrink-0 rounded-full bg-[var(--color-elive-accent)]" />
              <p className="text-sm leading-7 text-[var(--color-elive-muted)] md:text-[15px]">
                {item}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-[var(--color-elive-border)] pt-4">
          <p className="text-sm leading-7 text-[var(--color-elive-muted)]">
            Pay-as-you-go pricing applies automatically for higher message
            volumes.
          </p>
        </div>
      </div>

      {/* TABLE CARD */}
      <div className="mt-10 overflow-hidden rounded-[1.6rem] border border-[var(--color-elive-border)] bg-white">
        {/* HEADER BAR */}
        <div className="bg-[#2F4D8C] px-6 py-5 text-center md:px-8">
          <h3 className="text-xl font-bold tracking-tight !text-white md:text-2xl">
            Message Volume Pricing
          </h3>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#F7F8FA] text-left">
                <th className="px-6 py-4 text-sm font-bold text-[#143066]">
                  Minimum SMS
                </th>
                <th className="px-6 py-4 text-sm font-bold text-[#143066]">
                  Maximum SMS
                </th>
                <th className="px-6 py-4 text-right text-sm font-bold text-[#143066]">
                  Price per SMS
                </th>
              </tr>
            </thead>

            <tbody>
              {pricingTiers.map((tier, index) => (
                <tr
                  key={`${tier.min}-${tier.max}`}
                  className={`border-t border-[var(--color-elive-border)] transition-colors duration-200 hover:bg-[#FAFBFC] ${
                    index % 2 === 1 ? "bg-[#FCFCFD]" : "bg-white"
                  }`}
                >
                  <td className="px-6 py-5 text-sm font-medium text-slate-700 md:text-base">
                    {tier.min}
                  </td>

                  <td className="px-6 py-5 text-sm font-medium text-slate-700 md:text-base">
                    {tier.max}
                  </td>

                  <td className="px-6 py-5 text-right">
                    <span className="text-sm font-bold text-[var(--color-elive-accent)] md:text-base">
                      TZS {tier.price}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div className="border-t border-[var(--color-elive-border)] bg-[#F7F8FA] px-6 py-5 text-center">
          <p className="text-sm leading-7 text-[var(--color-elive-muted)]">
            Volume discounts are applied automatically based on usage.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}