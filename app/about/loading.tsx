export default function Loading() {
  return (
    <main className="bg-[var(--color-elive-light)] text-[var(--color-elive-text)]">
      <section className="px-4 pt-5 md:px-6 lg:px-8 lg:pt-7">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#143066] px-6 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <div className="max-w-3xl animate-pulse">
            <div className="h-4 w-32 rounded-full bg-white/20" />
            <div className="mt-5 h-12 w-full max-w-2xl rounded-2xl bg-white/20 md:h-14" />
            <div className="mt-3 h-12 w-3/4 rounded-2xl bg-white/15 md:h-14" />
            <div className="mt-6 h-4 w-full max-w-2xl rounded-full bg-white/15" />
            <div className="mt-3 h-4 w-5/6 rounded-full bg-white/15" />
            <div className="mt-8 flex gap-4">
              <div className="h-12 w-40 rounded-full bg-white/20" />
              <div className="h-12 w-40 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}