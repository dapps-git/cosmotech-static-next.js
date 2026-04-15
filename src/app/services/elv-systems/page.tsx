import type { Metadata } from "next";
import ServiceDetailClient from "@/components/ServiceDetailClient";

export const metadata: Metadata = {
  title: "ELV System Solutions",
  description:
    "Extra Low Voltage system design and installation including CCTV, access control, fire alarm systems, and structured cabling by Cosmotech Engineering Solutions.",
};

export default function ElvSystemsPage() {
  return <ServiceDetailClient serviceSlug="elv-systems" />;
}
