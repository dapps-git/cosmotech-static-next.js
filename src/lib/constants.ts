// Company Information
export const COMPANY = {
  name: "Cosmotech Engineering Solutions LLP",
  shortName: "COSMOTECH",
  tagline: "Building Tomorrow's Connectivity Today",
  phone: ["+91 8089401777", "+91 8089904777"],
  email: "info@cosmoteches.com",
  website: "www.cosmoteches.com",
  address: {
    line1: "11/211A, Kannamkullam, Tirur",
    line2: "Malappuram, Kerala - 676105",
    full: "11/211A, Kannamkullam, Tirur, Malappuram, Kerala - 676105",
  },
  whatsapp: "918089401777",
  mapLink: "https://share.google/MZTRqUUmj2nxeCEVj",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123456789!2d75.92!3d10.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDU1JzEyLjAiTiA3NcKwNTUnMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890",
  socialLinks: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
  established: "2023",
};

// Navigation Links
export const NAV_LINKS = [
  { label: "Home", href: "/", sectionId: "hero" },
  { label: "About", href: "/#about", sectionId: "about" },
  { label: "Services", href: "/#services", sectionId: "services" },
  { label: "Partners", href: "/#partners", sectionId: "partners" },
  { label: "Team", href: "/#team", sectionId: "team" },
  { label: "Contact", href: "/contact", sectionId: "contact" },
];

// Services Data
export const SERVICES = [
  {
    id: 1,
    title: "Telecom Infrastructure",
    slug: "telecom-infrastructure",
    description:
      "End-to-end telecom infrastructure services including site construction, tower erections, equipment installation, upgrades, and maintenance.",
    image: "/images/telecom-construction.png",
    icon: "tower",
    features: [
      {
        title: "Construction of New Sites",
        description:
          "Our skilled team handles the construction of new telecommunication sites from inception to completion. We meticulously plan and execute every aspect of the site development, ensuring that it meets the specific requirements and regulations.",
      },
      {
        title: "Tower Erections",
        description:
          "We specialize in the professional erection of telecommunication towers, ensuring their stability and resilience to withstand various environmental conditions. Safety is our top priority during tower installations.",
      },
      {
        title: "Installation of Infrastructure Equipment",
        description:
          "Our skilled team ensures the seamless installation of essential infrastructure equipment to support telecommunication towers and sites. From power-interfacing units to battery banks and air-conditioning systems, we expertly integrate these critical components.",
      },
      {
        title: "Up-gradation of Existing Equipment",
        description:
          "Our team handles the up-gradation of existing telecommunication infrastructure, implementing the latest technologies and optimizing equipment performance.",
      },
      {
        title: "Maintenance of Infrastructure Equipment",
        description:
          "Regular maintenance is crucial to ensure the smooth functioning of telecommunication infrastructure. We provide comprehensive maintenance services, including inspections, repairs, and proactive measures.",
      },
    ],
  },
  {
    id: 2,
    title: "Civil Works",
    slug: "civil-works",
    description:
      "Comprehensive civil engineering solutions including foundation work, structural construction, and site development for telecom and commercial projects.",
    image: "/images/civil-works.png",
    icon: "building",
    features: [
      {
        title: "Foundation Engineering",
        description:
          "Expert foundation design and construction for telecommunication towers and commercial structures, ensuring stability and longevity.",
      },
      {
        title: "Structural Construction",
        description:
          "Complete structural construction services from reinforced concrete work to steel structures for various industrial applications.",
      },
      {
        title: "Site Development",
        description:
          "End-to-end site development including grading, drainage, road access, and boundary wall construction for telecom sites.",
      },
      {
        title: "Renovation & Restoration",
        description:
          "Professional renovation and restoration services for existing infrastructure, bringing aging structures up to modern standards.",
      },
    ],
  },
  {
    id: 3,
    title: "Electrical Solutions",
    slug: "electrical-solutions",
    description:
      "Professional electrical infrastructure services including power systems, distribution panels, backup power, and energy-efficient solutions.",
    image: "/images/electrical-solutions.png",
    icon: "bolt",
    features: [
      {
        title: "Power Distribution Systems",
        description:
          "Design and installation of comprehensive power distribution systems for telecom sites and commercial buildings.",
      },
      {
        title: "Backup Power Solutions",
        description:
          "Installation and maintenance of UPS systems, diesel generators, and battery banks for uninterrupted power supply.",
      },
      {
        title: "Energy Management",
        description:
          "Smart energy management solutions including solar power integration and energy-efficient lighting systems.",
      },
      {
        title: "Safety Compliance",
        description:
          "Complete electrical safety audit and compliance services ensuring adherence to national and international standards.",
      },
    ],
  },
  {
    id: 4,
    title: "ELV System Solutions",
    slug: "elv-systems",
    description:
      "Extra Low Voltage system design and installation including CCTV, access control, fire alarm systems, and structured cabling.",
    image: "/images/electrical-solutions.png",
    icon: "shield",
    features: [
      {
        title: "CCTV & Surveillance",
        description:
          "State-of-the-art CCTV surveillance system design, installation, and monitoring solutions for complete security coverage.",
      },
      {
        title: "Access Control Systems",
        description:
          "Advanced access control solutions including biometric, card-based, and smart lock systems for restricted area management.",
      },
      {
        title: "Fire Detection & Alarm",
        description:
          "Comprehensive fire detection and alarm system installation with smoke detectors, heat sensors, and emergency notification systems.",
      },
      {
        title: "Structured Cabling",
        description:
          "Professional structured cabling solutions for data, voice, and video networks with organized cable management.",
      },
    ],
  },
  {
    id: 5,
    title: "Fiber Optic Network Solutions",
    slug: "fiber-optic",
    description:
      "Complete fiber optic network solutions including cable laying, splicing, testing, and network design for high-speed connectivity.",
    image: "/images/fiber-optic.png",
    icon: "network",
    features: [
      {
        title: "Fiber Cable Installation",
        description:
          "Expert installation of fiber optic cables including aerial, underground, and indoor deployment for maximum coverage.",
      },
      {
        title: "Splicing & Termination",
        description:
          "Precision fiber splicing and termination services using advanced fusion splicers for minimal signal loss.",
      },
      {
        title: "Network Design",
        description:
          "Complete fiber optic network architecture design and planning for optimal performance and scalability.",
      },
      {
        title: "Testing & Commissioning",
        description:
          "Comprehensive OTDR testing, power meter measurements, and network commissioning for quality assurance.",
      },
    ],
  },
  {
    id: 6,
    title: "Pest Control Service",
    slug: "pest-control",
    description:
      "Professional pest management services for telecom sites and commercial properties ensuring safe and hygienic environments.",
    image: "/images/civil-works.png",
    icon: "bug",
    features: [
      {
        title: "General Pest Control",
        description:
          "Comprehensive pest control treatments for insects, rodents, and other common pests in commercial and industrial facilities.",
      },
      {
        title: "Termite Treatment",
        description:
          "Specialized anti-termite treatments for buildings and structures using eco-friendly chemicals and modern techniques.",
      },
      {
        title: "Fumigation Services",
        description:
          "Professional fumigation services for warehouses, storage facilities, and large commercial spaces.",
      },
      {
        title: "Preventive Maintenance",
        description:
          "Regular scheduled pest management programs to prevent infestations and maintain a pest-free environment.",
      },
    ],
  },
];

// Partner/Venture Data
export const PARTNERS = [
  { name: "Cosmos Group", logo: null },
  { name: "Starcon Infra", logo: null },
  { name: "Truecom Networks", logo: null },
  { name: "Cosmo Builders", logo: null },
  { name: "Cosmos IT Solutions", logo: null },
  { name: "Cosmos Trading", logo: null },
];

// Team Responsibilities
export const RESPONSIBILITIES = [
  "Coordination with all related agencies",
  "Execution of assigned work & completion of projects on schedule",
  "Meeting all Quality Standards promulgated by various agencies",
  "Planning and monitoring of progress in terms of cost and quantity",
  "Preparation of management information reports",
  "Planning resources and procurement of capital materials",
  "Modern safety measures adaptation",
  "Ensuring existing ecological balance remains harmless",
  "Ensuring use of environmental friendly techniques/methods",
  "Endeavour to use non-conventional energy resources",
];

// About Content
export const ABOUT_CONTENT = {
  intro:
    "At Cosmotech Engineering Solutions LLP., we empower community by pursuing telecommunication infrastructure projects for lease enabling mobile network operators' fast track expansion and addressing country connectivity need.",
  vision:
    'We believe in creating connectivity through cutting-edge technology and empowering community by providing operators with superior telecom towers that add tremendous positive social return in the Country.',
  history:
    "Cosmotech Solutions LLP. is an independent tower company established in 2023 by Cosmos Group leading IT and telecommunication tower Infra Providers.",
  expertise:
    "Cosmotech Solutions LLP has fundamental engineering know how to successfully provide an integrated telecommunication infrastructure services and holistic solutions for mobile network operators including telecom tower for lease in key network locations, built-to-suit telecom tower, and maintenance service.",
  commitment:
    "Our site-acquisition services, engineering experience, construction capabilities, and service commitment will enhance telecom operators to be successful in providing the best speed services.",
};

// Mission Content
export const MISSION_CONTENT = [
  "Constructing quality cell sites by using experienced knowledge in telecommunication tower design for leading mobile network operators and Infra Providers.",
  "Creating value for the telecommunication industry by adopting know-how and innovation in telecom towers with experienced knowledge in telecommunication tower construction, and Operations management.",
  "Providing long term support, cooperation, and sincerity to partners and alliances for mutual business growth.",
  "Information and Communication Technology evolution, Cosmotech Engineering Solutions LLP has emerged in 2023 to boost carriers' business growth and expansion, allowing mobile network operators to focus on their core business.",
  "Our establishment aims to enhance communication speed and coverage for global competitiveness. We are committed to provide the reliable, secured and efficient connectivity to our reputable mobile network operators and Infra Providers.",
];

// Safety Policy
export const SAFETY_POLICY = {
  intro:
    "We follow an approved standard documented procedure to define and meet the requirement for Occupational Health and Safety (OH&S) Management system.",
  certifications: [
    "ISO 18001:2007 Occupational Health and Safety Management",
    "ISO 9001:2008 Quality Management System",
  ],
  environmental: [
    "Environmental friendly construction methodologies",
    "Use of non-conventional sources of energy to extent feasible",
    "Make all efforts for protecting and enhancing greenery",
    "Create awareness amongst employees and all parties",
  ],
};
