"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Eye,
  Filter,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { eliveCards } from "../../lib/eliveCards";

const categories = ["All", "Wedding", "Send-off", "Corporate", "Birthday"];

function getCategory(file: string) {
  const name = file.toLowerCase();

  if (name.includes("wedding") || name.includes("weedin")) return "Wedding";
  if (name.includes("sendoff") || name.includes("send-off")) return "Send-off";
  if (name.includes("birthday")) return "Birthday";

  return "Corporate";
}

function cleanTitle(file: string) {
  return file
    .replace(/\.(jpg|jpeg|png|webp)$/i, "")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export default function ELiveCardsGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCards = useMemo(() => {
    if (activeCategory === "All") return eliveCards;
    return eliveCards.filter((file) => getCategory(file) === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#24324A]">
     
      {/* FILTERS */}
      <section className="px-4 py-10 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-[var(--color-elive-primary)]">
                <Filter size={16} />
                Filter Designs
              </div>
              <p className="mt-1 text-sm text-slate-500">
                Browse card designs by event category.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-200 ${
                    activeCategory === category
                      ? "bg-[var(--color-elive-primary)] text-white shadow-md"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-4 pb-20 md:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
  <div className="mb-14 text-center">
  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-elive-accent)]">
    Our Designs
  </p>

  <h2 className="mt-3 text-3xl font-bold md:text-4xl">
    Explore Our Digital Invitation Designs
  </h2>


</div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCards.map((file) => {
              const title = cleanTitle(file);
              const category = getCategory(file);

              return (
                <article
                  key={file}
                  className="group overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_14px_40px_rgba(15,35,76,0.08)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,35,76,0.14)]"
                >
                  <div className="relative h-[430px] overflow-hidden bg-slate-100">
                    <Image
                      src={`/elive-cards/${file}`}
                      alt={title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-4 py-1.5 text-xs font-bold text-[var(--color-elive-primary)] shadow-sm backdrop-blur">
                      {category}
                    </div>

                    <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#0B1730]/95 via-[#0B1730]/25 to-transparent p-5 opacity-0 transition duration-300 group-hover:opacity-100">
                      <div>
                        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
                          <Eye size={14} />
                          Preview Design
                        </div>

                        <a
                          href={`https://wa.me/255777792017?text=Hello%20eLive%2C%20I%20want%20a%20digital%20card%20like%20this%20design:%20${encodeURIComponent(
                            title
                          )}`}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-3 inline-flex items-center gap-2 rounded-full bg-[var(--color-elive-accent)] px-4 py-2 text-xs font-bold text-white transition hover:bg-[var(--color-elive-accent-dark)]"
                        >
                          Order This Design
                          <MessageCircle size={14} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="line-clamp-2 text-base font-bold text-[#24324A]">
                      {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      Elegant digital invitation with RSVP, QR verification,
                      and easy sharing options.
                    </p>

                    <div className="mt-5 flex items-center justify-between">
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        eLive Card
                      </span>

                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1 text-sm font-bold text-[var(--color-elive-primary)] hover:underline"
                      >
                        Request
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      
    </main>
  );
}