"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as any },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const contacts = [
  {
    title: "Call Us",
    value: "+255 745 939 140",
    desc: "Speak directly with our team.",
    icon: Phone,
    href: "tel:+255745939140",
  },
  {
    title: "WhatsApp",
    value: "+255 777 792 017",
    desc: "Get quick support instantly.",
    icon: MessageCircle,
    href: "https://wa.me/255777792017",
  },
  {
    title: "Email",
    value: "info@elive.co.tz",
    desc: "Send your inquiry anytime.",
    icon: Mail,
    href: "mailto:info@elive.co.tz",
  },
  {
    title: "Location",
    value: "Kinondoni B",
    desc: "Kawawa Road, Dar es Salaam.",
    icon: MapPin,
    href: "#location",
  },
];

const services = [
  "Bulk SMS",
  "Events Attendee Management",
  "Creative Design",
  "Multimedia Solutions",
  "Printing & Branding",
  "Live Streaming",
];

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#F7F8FA] text-[#24324A]">
      {/* HERO */}
      <section className="relative px-4 py-20 md:px-6 lg:px-8 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(37,70,140,0.16),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(243,154,31,0.16),transparent_34%)]" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl text-center"
        >
      

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold tracking-tight text-[#24324A] md:text-6xl">
            Let’s Build Something Great Together
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 md:text-lg">
            Talk to us about Bulk SMS, event attendee management, creative
            design, branding, printing, live streaming, and multimedia support.
          </p>
        </motion.div>
      </section>

      {/* CONTACT CARDS */}
      <section className="px-4 pb-12 md:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-4"
        >
          {contacts.map((item) => {
            const Icon = item.icon;

            return (
              <motion.a
                key={item.title}
                href={item.href}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,35,76,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#25468c]/20 hover:shadow-[0_24px_60px_rgba(15,35,76,0.12)]"
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-[3rem] bg-[#25468c]/5 transition group-hover:bg-[#f39a1f]/10" />

                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-[#25468c]/10 text-[#25468c] transition group-hover:bg-[#25468c] group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="relative mt-5 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="relative mt-2 text-sm font-semibold text-[#25468c]">
                  {item.value}
                </p>

                <p className="relative mt-2 text-sm leading-6 text-slate-500">
                  {item.desc}
                </p>
              </motion.a>
            );
          })}
        </motion.div>
      </section>

      {/* FORM + INFO */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-stretch gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          {/* FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_22px_60px_rgba(15,35,76,0.08)] md:p-8"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f39a1f]">
              Send Inquiry
            </span>

            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Tell us about your project
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
              Share your requirements and our team will guide you with the right
              solution for your business, campaign, or event.
            </p>

            <form className="mt-8 grid gap-5">
              <div className="grid gap-5 md:grid-cols-2">
                <Input label="Full Name" placeholder="Enter your full name" />
                <Input label="Phone Number" placeholder="+255..." type="tel" />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <Input
                  label="Email Address"
                  placeholder="name@example.com"
                  type="email"
                />

                <div>
                  <label className="text-sm font-semibold text-slate-700">
                    Service Interested In
                  </label>

                  <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F7F8FA] px-4 py-3 text-sm outline-none transition focus:border-[#25468c] focus:bg-white">
                    <option>Select service</option>
                    {services.map((service) => (
                      <option key={service}>{service}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Tell us what you need..."
                  className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-[#F7F8FA] px-4 py-3 text-sm outline-none transition focus:border-[#25468c] focus:bg-white"
                />
              </div>

          <button
  type="button"
  className="mt-2 group inline-flex w-fit items-center gap-2 rounded-full bg-[#25468c] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_16px_35px_rgba(37,70,140,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#1e3770]"
>
  <span className="text-black">Send Message</span>
  <Send
    size={17}
    className="text-black transition group-hover:translate-x-1"
  />
</button>
            </form>
          </motion.div>

          {/* INFO */}
          <motion.aside
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <div className="flex-1 rounded-[2rem] bg-[#25468c] p-7 text-white shadow-[0_22px_60px_rgba(37,70,140,0.22)]">
  <h3 className="text-2xl font-bold !text-white">
  Office Information
</h3>

              <div className="mt-6 space-y-5">
                <Info icon={MapPin} title="Address">
                  Ikungwi Street, Kinondoni B, Kawawa Road, Dar es Salaam
                </Info>

                <Info icon={Clock} title="Working Hours">
                  Monday to Friday, 08:30 - 18:00
                </Info>

                <Info icon={Mail} title="Email">
                  info@elive.co.tz
                  <br />
                  zacharia@elive.co.tz
                </Info>

                <Info icon={Phone} title="Phone">
                  +255 745 939 140
                  <br />
                  +255 777 792 017
                </Info>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_18px_45px_rgba(15,35,76,0.07)]">
              <h3 className="text-xl font-bold">Need faster support?</h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                Contact us directly through WhatsApp and our team will assist
                you with service details, pricing, and availability.
              </p>

           <Link
  href="https://wa.me/255777792017"
  target="_blank"
  className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#f39a1f] px-6 py-3 text-sm font-semibold text-white border border-[#f39a1f] transition-colors duration-200 hover:bg-[#e68613]"
>
  <span className="text-white">Chat on WhatsApp</span>
  <ArrowRight size={17} className="text-white" />
</Link>
            </div>
          </motion.aside>
        </div>
      </section>

      {/* LOCATION */}
      <section id="location" className="px-4 pb-24 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_22px_60px_rgba(15,35,76,0.08)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            <div className="p-8 md:p-10">
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f39a1f]">
                Visit Us
              </span>

              <h2 className="mt-3 text-2xl font-bold md:text-3xl">
                Find eLive in Dar es Salaam
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Our office is located in Kinondoni, making it easy for clients
                to reach us for consultation, planning, and project support.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "Project consultation",
                  "Event planning support",
                  "Branding and communication guidance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={18} className="text-[#f39a1f]" />
                    <span className="text-sm font-medium text-slate-600">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="min-h-[360px] bg-slate-100">
              <iframe
                title="eLive Location"
                src="https://www.google.com/maps?q=Kinondoni%20B%20Kawawa%20Road%20Dar%20es%20Salaam&output=embed"
                className="h-full min-h-[360px] w-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Input({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-sm font-semibold text-slate-700">{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-slate-200 bg-[#F7F8FA] px-4 py-3 text-sm outline-none transition focus:border-[#25468c] focus:bg-white"
      />
    </div>
  );
}

function Info({
  icon: Icon,
  title,
  children,
}: {
  icon: any;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 backdrop-blur-sm">
      
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-[#f39a1f]">
        <Icon size={20} />
      </div>

      <div>
        <p className="text-sm font-semibold text-white/80 uppercase tracking-wide">
          {title}
        </p>

        <p className="mt-1 text-sm leading-6 text-white">
          {children}
        </p>
      </div>
    </div>
  );
}