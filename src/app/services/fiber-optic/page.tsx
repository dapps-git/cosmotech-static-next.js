import type { Metadata } from "next";
import ServiceDetailClient from "@/components/ServiceDetailClient";

export const metadata: Metadata = {
  title: "Fiber Optic Network Solutions",
  description:
    "Complete fiber optic network solutions including cable laying, splicing, testing, and network design for high-speed connectivity by Cosmotech Engineering Solutions.",
};

export default function FiberOpticPage() {
  return <ServiceDetailClient serviceSlug="fiber-optic" />;
}
