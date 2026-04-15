import type { Metadata } from "next";
import ServiceDetailClient from "@/components/ServiceDetailClient";

export const metadata: Metadata = {
  title: "Pest Control Service",
  description:
    "Professional pest management services for telecom sites and commercial properties ensuring safe and hygienic environments by Cosmotech Engineering Solutions.",
};

export default function PestControlPage() {
  return <ServiceDetailClient serviceSlug="pest-control" />;
}
