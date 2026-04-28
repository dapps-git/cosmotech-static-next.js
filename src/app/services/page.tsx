import type { Metadata } from "next";
import { SERVICES } from "@/lib/constants";
import ServicePageClient from "./ServicePageClient";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Cosmotech Engineering Solutions' comprehensive services including telecom infrastructure, civil works, electrical solutions, ELV systems, and fiber optic networks.",
};

export default function ServicesPage() {
  return <ServicePageClient services={SERVICES} />;
}
