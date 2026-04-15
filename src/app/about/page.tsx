import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Cosmotech Engineering Solutions LLP — an independent tower company established in 2023 by Cosmos Group, providing integrated telecommunication infrastructure services.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
