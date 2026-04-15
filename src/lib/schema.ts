import { COMPANY } from "./constants";

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    url: `https://${COMPANY.website}`,
    logo: `https://${COMPANY.website}/images/logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phone[0],
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Malayalam"],
    },
    sameAs: Object.values(COMPANY.socialLinks),
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    image: `https://${COMPANY.website}/images/hero-bg.png`,
    "@id": `https://${COMPANY.website}`,
    url: `https://${COMPANY.website}`,
    telephone: COMPANY.phone[0],
    email: COMPANY.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "11/211A, Kannamkullam",
      addressLocality: "Tirur",
      addressRegion: "Kerala",
      postalCode: "676105",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 10.92,
      longitude: 75.92,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "$$",
    description:
      "Leading telecom infrastructure and engineering solutions provider in Kerala, India. Specializing in tower construction, civil works, electrical solutions, ELV systems, and fiber optic networks.",
  };
}
