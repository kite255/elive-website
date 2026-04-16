import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Us | eLive",
  description:
    "Learn more about eLive, our mission, vision, and integrated communication, branding, printing, multimedia, and event attendee management solutions.",
};

export default function AboutLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}