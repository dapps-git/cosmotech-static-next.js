import type { Metadata } from "next";
import ServiceDetailClient from "@/components/ServiceDetailClient";

export const metadata: Metadata = {
  title: "Electrical Solutions",
  description:
    "Professional electrical infrastructure services including power systems, distribution panels, backup power, and energy-efficient solutions by Cosmotech Engineering Solutions.",
};

export default function ElectricalSolutionsPage() {
  return <ServiceDetailClient serviceSlug="electrical-solutions" />;
}
