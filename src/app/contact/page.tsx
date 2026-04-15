import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cosmotech Engineering Solutions LLP. Contact us for telecom infrastructure, civil works, electrical solutions, and more.",
};

export default function ContactPage() {
  return <ContactPageClient />;
}
