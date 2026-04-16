"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function ContactPage() {
  return (
    <main className="bg-[var(--color-elive-light)] text-[var(--color-elive-text)]">
      
      {/* HERO */}
      <section className="px-4 pt-5 md:px-6 lg:px-8 lg:pt-7">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-gradient-to-r from-[#102A5C] via-[#143066] to-[#2957A4] px-6 py-16 text-white shadow-[0_30px_80px_rgba(20,48,102,0.2)] md:px-10 lg:px-14 lg:py-20">
          
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-elive-accent)]">
              Contact Us
            </p>

            <h1 className="mt-4 text-4xl font-semibold md:text-5xl lg:text-[56px]">
              Let’s Talk About Your Project
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-white/90 md:text-lg">
              Whether you need messaging, branding, multimedia, or event
              support, our team is ready to help you plan and deliver
              successfully.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CONTENT */}
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr,1.1fr]">

          {/* LEFT - CONTACT DETAILS */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible">
            <h2 className="text-2xl font-bold text-[#143066] md:text-3xl">
              Get in Touch
            </h2>

            <p className="mt-4 text-base leading-8 text-slate-600">
              Reach out to us for inquiries, project discussions, or service
              requests. We respond quickly and professionally.
            </p>

            <div className="mt-8 grid gap-6">

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone className="mt-1 text-[var(--color-elive-accent)]" />
                <div>
                  <p className="font-semibold text-[#143066]">Phone</p>
                  <p className="text-slate-600">+255 XXX XXX XXX</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail className="mt-1 text-[var(--color-elive-accent)]" />
                <div>
                  <p className="font-semibold text-[#143066]">Email</p>
                  <p className="text-slate-600">info@elive.co.tz</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 text-[var(--color-elive-accent)]" />
                <div>
                  <p className="font-semibold text-[#143066]">Location</p>
                  <p className="text-slate-600">Dar es Salaam, Tanzania</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4">
                <Clock className="mt-1 text-[var(--color-elive-accent)]" />
                <div>
                  <p className="font-semibold text-[#143066]">Working Hours</p>
                  <p className="text-slate-600">
                    Monday – Saturday: 8:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* RIGHT - FORM */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            className="rounded-[2rem] bg-white p-8 shadow-[0_18px_40px_rgba(15,35,76,0.08)]"
          >
            <h3 className="text-xl font-bold text-[#143066]">
              Send Us a Message
            </h3>

            <form className="mt-6 grid gap-5">
              
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-elive-accent)]"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-elive-accent)]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-elive-accent)]"
              />

              <textarea
                rows={5}
                placeholder="Your Message"
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-[var(--color-elive-accent)]"
              />

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-elive-accent)] px-6 py-3 text-sm font-semibold text-[#143066] shadow-[0_10px_24px_rgba(243,154,31,0.28)] transition hover:-translate-y-0.5 hover:bg-[var(--color-elive-accent-dark)] hover:text-white"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="px-4 pb-16 md:px-6 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_40px_rgba(15,35,76,0.08)]">
          
          <div className="flex items-center justify-between px-6 py-5">
            <h3 className="text-lg font-bold text-[#143066]">
              Our Location
            </h3>
          </div>

          <div className="h-[380px] w-full bg-slate-200 flex items-center justify-center text-slate-500 text-sm">
            Google Map will be embedded here
          </div>

        </div>
      </section>

    </main>
  );
}