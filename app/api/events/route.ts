import { NextResponse } from "next/server";

export const revalidate = 300;

type PublicEvent = {
  id: string;
  source: "events" | "digital";
  kind: "registration" | "ticket" | "registration_and_ticket" | "invitation";
  name: string;
  event_type?: string | null;
  summary?: string | null;
  starts_at?: string | null;
  ends_at?: string | null;
  venue?: string | null;
  venue_address?: string | null;
  image_url?: string | null;
  status: "live" | "upcoming" | "past";
  url: string;
  registration_url?: string | null;
  ticket_url?: string | null;
};

type FeedResponse = {
  data?: PublicEvent[];
};

const feeds = [
  process.env.ELIVE_EVENTS_API_URL ??
    "https://events.elive.co.tz/api/public/events",
  process.env.ELIVE_DIGITAL_API_URL ??
    "https://digital.elive.co.tz/api/public/events",
];

async function loadFeed(url: string): Promise<PublicEvent[]> {
  const response = await fetch(url, {
    headers: { Accept: "application/json" },
    next: { revalidate: 300 },
  });

  if (!response.ok) {
    throw new Error(`Event feed returned ${response.status}`);
  }

  const payload = (await response.json()) as FeedResponse;

  return Array.isArray(payload.data) ? payload.data : [];
}

function statusRank(status: PublicEvent["status"]) {
  if (status === "live") return 0;
  if (status === "upcoming") return 1;
  return 2;
}

export async function GET() {
  const results = await Promise.allSettled(feeds.map(loadFeed));

  const events = results
    .flatMap((result) => (result.status === "fulfilled" ? result.value : []))
    .sort((a, b) => {
      const rankDifference = statusRank(a.status) - statusRank(b.status);

      if (rankDifference !== 0) {
        return rankDifference;
      }

      const aTime = a.starts_at ? Date.parse(a.starts_at) : Number.MAX_SAFE_INTEGER;
      const bTime = b.starts_at ? Date.parse(b.starts_at) : Number.MAX_SAFE_INTEGER;

      return a.status === "past" ? bTime - aTime : aTime - bTime;
    });

  const unavailableSources = results
    .map((result, index) => ({ result, url: feeds[index] }))
    .filter(({ result }) => result.status === "rejected")
    .map(({ url }) => new URL(url).hostname);

  return NextResponse.json(
    {
      data: events,
      meta: {
        count: events.length,
        partial: unavailableSources.length > 0,
        unavailable_sources: unavailableSources,
      },
    },
    {
      headers: {
        "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
      },
    },
  );
}
