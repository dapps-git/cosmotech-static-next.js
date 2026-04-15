import type { Metadata } from "next";
import ServiceDetailClient from "@/components/ServiceDetailClient";

export const metadata: Metadata = {
  title: "Telecom Infrastructure Services",
  description:
    "End-to-end telecom infrastructure services including site construction, tower erections, equipment installation, upgrades, and maintenance by Cosmotech Engineering Solutions.",
};

export default function TelecomInfrastructurePage() {
  return <ServiceDetailClient serviceSlug="telecom-infrastructure" />;
}
