"use client";

import { useEffect, useMemo, useState } from "react";
import { CalendarDays, MapPin, Ticket, UserRoundCheck } from "lucide-react";

type PublicEvent = {
  id: string;
  source: "events" | "digital";
  kind: "registration" | "ticket" | "registration_and_ticket" | "invitation";
  name: string;
  event_type?: string | null;
  summary?: string | null;
  starts_at?: string | null;
  venue?: string | null;
  venue_address?: string | null;
  image_url?: string | null;
  status: "live" | "upcoming" | "past";
  url: string;
  registration_url?: string | null;
  ticket_url?: string | null;
};

type Filter = "all" | "registration" | "ticket" | "invitation" | "past";

const filters: Array<{ value: Filter; label: string }> = [
  { value: "all", label: "All" },
  { value: "registration", label: "Registration" },
  { value: "ticket", label: "Tickets" },
  { value: "invitation", label: "Invitation Cards" },
  { value: "past", label: "Past Events" },
];

function matchesFilter(event: PublicEvent, filter: Filter) {
  if (filter === "all") return event.status !== "past";
  if (filter === "past") return event.status === "past";
  if (filter === "invitation") return event.kind === "invitation";
  if (filter === "ticket") {
    return event.kind === "ticket" || event.kind === "registration_and_ticket";
  }

  return (
    event.kind === "registration" ||
    event.kind === "registration_and_ticket"
  );
}

function formatDate(value?: string | null) {
  if (!value) return "Date to be announced";

  return new Intl.DateTimeFormat("en-TZ", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));
}

function eventLabel(event: PublicEvent) {
  if (event.kind === "invitation") return "Invitation Event";
  if (event.kind === "ticket") return "Ticketed Event";
  if (event.kind === "registration_and_ticket") return "Registration & Tickets";
  return "Registration Event";
}

function actionFor(event: PublicEvent) {
  if (event.kind === "ticket" && event.ticket_url) {
    return { label: "Buy Tickets", href: event.ticket_url };
  }

  if (event.kind === "registration_and_ticket") {
    return {
      label: event.ticket_url ? "View Tickets" : "Register",
      href: event.ticket_url ?? event.registration_url ?? event.url,
    };
  }

  if (event.kind === "registration" && event.registration_url) {
    return { label: "Register", href: event.registration_url };
  }

  return { label: "View Event", href: event.url };
}

export default function EventsShowcase() {
  const [events, setEvents] = useState<PublicEvent[]>([]);
  const [filter, setFilter] = useState<Filter>("all");
  const [loading, setLoading] = useState(true);
  const [partial, setPartial] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function loadEvents() {
      try {
        const response = await fetch("/api/events");
        const payload = await response.json();

        if (!cancelled) {
          setEvents(Array.isArray(payload.data) ? payload.data : []);
          setPartial(Boolean(payload.meta?.partial));
        }
      } catch {
        if (!cancelled) {
          setEvents([]);
          setPartial(true);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    void loadEvents();

    return () => {
      cancelled = true;
    };
  }, []);

  const visibleEvents = useMemo(
    () => events.filter((event) => matchesFilter(event, filter)),
    [events, filter],
  );

  return (
    <section id="events" className="bg-white px-4 py-16 md:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-[var(--color-elive-accent)]">
            Explore Events
          </p>
          <h2 className="mt-3 text-3xl font-black leading-tight text-[#161943] md:text-4xl lg:text-5xl">
            Current and Upcoming Events
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-24 rounded-full bg-[var(--color-elive-accent)]" />
          <p className="mt-5 text-base leading-8 text-slate-600 md:text-[17px]">
            Discover registration events, ticketed experiences, and public invitation events managed through eLive.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {filters.map((item) => (
            <button
              key={item.value}
              type="button"
              onClick={() => setFilter(item.value)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                filter === item.value
                  ? "bg-[#161943] text-white"
                  : "border border-slate-200 bg-white text-slate-600 hover:border-[#161943]/30 hover:text-[#161943]"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {partial ? (
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm text-amber-700">
            Some event listings are temporarily unavailable. Available events are still shown below.
          </p>
        ) : null}

        {loading ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[360px] animate-pulse rounded-[1.7rem] bg-slate-100"
              />
            ))}
          </div>
        ) : visibleEvents.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleEvents.map((event) => {
              const action = actionFor(event);

              return (
                <article
                  key={event.id}
                  className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-white shadow-[0_14px_35px_rgba(15,35,76,0.07)]"
                >
                  <div
                    className="relative h-52 bg-gradient-to-br from-[#161943] via-[#161943] to-[#007AB2] bg-cover bg-center"
                    style={
                      event.image_url
                        ? { backgroundImage: `url("${event.image_url}")` }
                        : undefined
                    }
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161943]/85 via-[#161943]/20 to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#161943] shadow-sm">
                      {eventLabel(event)}
                    </span>
                    {event.status === "live" ? (
                      <span className="absolute right-4 top-4 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-bold text-white">
                        Happening Now
                      </span>
                    ) : null}
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-elive-accent)]">
                      {event.event_type || eventLabel(event)}
                    </p>
                    <h3 className="mt-2 text-xl font-black leading-snug text-[#161943]">
                      {event.name}
                    </h3>

                    <div className="mt-5 space-y-3 text-sm text-slate-600">
                      <div className="flex items-start gap-3">
                        <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[#161943]" />
                        <span>{formatDate(event.starts_at)}</span>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#161943]" />
                        <span>
                          {event.venue ||
                            event.venue_address ||
                            "Venue to be announced"}
                        </span>
                      </div>
                    </div>

                    {event.summary ? (
                      <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                        {event.summary}
                      </p>
                    ) : null}

                    <div className="mt-6 flex items-center justify-between gap-4">
                      <a
                        href={action.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-[var(--color-elive-accent)] px-5 py-2.5 text-sm font-semibold !text-white transition hover:bg-[var(--color-elive-accent-dark)]"
                      >
                        {event.kind === "ticket" ||
                        event.kind === "registration_and_ticket" ? (
                          <Ticket size={16} />
                        ) : (
                          <UserRoundCheck size={16} />
                        )}
                        {action.label}
                      </a>

                      <a
                        href={event.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm font-semibold text-[#161943] hover:text-[var(--color-elive-accent)]"
                      >
                        Details
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 rounded-[1.7rem] border border-dashed border-slate-300 bg-slate-50 px-6 py-14 text-center">
            <p className="font-semibold text-[#161943]">
              No events are available in this category right now.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
