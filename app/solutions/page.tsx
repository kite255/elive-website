const solutions = [
  {
    title: "eLive SMS",
    desc: "Promotions, reminders, notifications, transaction alerts, and customer engagement through a fast business messaging solution.",
  },
  {
    title: "eLive Card",
    desc: "A smart invitation and attendee management solution with RSVP support, QR verification, and ticket distribution.",
  },
  {
    title: "WhatsApp Communication",
    desc: "Direct event updates, customer support, invitations, and communication through modern messaging channels.",
  },
  {
    title: "Live Media Support",
    desc: "Live streaming, photography, videography, realtime projection, and screens for impactful events.",
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-[#F7F8FA] text-[#24324A]">
      <section className="px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl grid gap-10 lg:grid-cols-[0.75fr,1.25fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-[#F39A1F]">
              Our Solutions
            </p>
            <h1 className="mt-4 text-5xl font-black leading-[1.02] text-[#25468C] md:text-6xl lg:text-7xl">
              Smart
              <br />
              Solutions
            </h1>
            <div className="mt-6 h-1.5 w-28 rounded-full bg-[#F39A1F]" />
          </div>

          <div className="rounded-t-[2.6rem] bg-gradient-to-b from-[#25468C] to-[#1482B8] px-8 py-10 text-white shadow-[0_24px_55px_rgba(20,48,102,0.16)] md:px-10 md:py-12 lg:px-12">
            <p className="text-sm leading-7 text-white/95 md:text-[15px]">
              eLive provides practical digital solutions that support smooth
              communication, better engagement, and stronger event experiences.
              We don’t just offer services — we build tools and systems that
              help organizations work smarter.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#143066] px-4 py-16 md:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="rounded-[1.8rem] border border-white/10 bg-white/5 p-8 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
            >
              <h2 className="text-3xl font-black">{solution.title}</h2>
              <p className="mt-4 text-sm leading-7 text-white/85">
                {solution.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}