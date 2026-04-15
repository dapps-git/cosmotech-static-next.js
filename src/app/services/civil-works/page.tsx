import type { Metadata } from "next";
import ServiceDetailClient from "@/components/ServiceDetailClient";

export const metadata: Metadata = {
  title: "Civil Works Services",
  description:
    "Comprehensive civil engineering solutions including foundation work, structural construction, and site development by Cosmotech Engineering Solutions.",
};

export default function CivilWorksPage() {
  return <ServiceDetailClient serviceSlug="civil-works" />;
}
