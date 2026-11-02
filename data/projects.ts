export interface Project {
  slug: string;
  name: string;
  location: string;
  developer: string;
  price: string;
  bedrooms: string;
  propertyType: string;
  handover: string;
  image: string;
  brochure: string;
  officialWebsite: string;
  description: string;
}

export const projects: Project[] = [
  {
    slug: "eywa-tree-of-life",
    name: "Eywa Tree of Life",
    location: "Business Bay, Dubai",
    developer: "R.Evolution",
    price: "14M",
    bedrooms: "2–5",
    propertyType: "Luxury Apartments & Penthouse",
    handover: "Q1 2027",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
    brochure:
      "https://byrevolution.com/wp-content/uploads/2026/01/tree-of-life.pdf",
    officialWebsite: "https://www.eywa.ae/tree-of-life",
    description:
      "Discover Eywa Tree of Life, an exclusive residential development located in Business Bay, Dubai.",
  },

  {
    slug: "palmiera-collective",
    name: "Palmiera Collective",
    location: "The Oasis, Dubai",
    developer: "Emaar Properties",
    price: "16.5M",
    bedrooms: "4–6",
    propertyType: "Luxury Villas",
    handover: "Q1 2029",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/3f4413e3-1f81-40ee-aad2-430b05adc312/brochure/application/NgEakP6TKLN2DxOWjb52WlHuxwODNK4HT9uZ8Pqv-tI=/original.pdf",
    officialWebsite: "https://www.emaar.com/",
    description:
      "Explore Palmiera Collective, a luxury villa development in The Oasis, Dubai.",
  },

  {
    slug: "knightsbridge-phase-2",
    name: "Knightsbridge Phase 2",
    location: "MBR District 11, Meydan South",
    developer: "LEOS Developments",
    price: "13.82M+",
    bedrooms: "5–6",
    propertyType: "Luxury Villas",
    handover: "Q4 2027",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/aa5b0d68-32cd-4e9a-8f9c-93b8788778eb/brochure/application/2k4rHtn09UY_7P_vvc6fcNU12j4Mz_8mAQVwG8noOcc=/original.pdf",
    officialWebsite: "https://www.leosdevelopments.com/",
    description:
      "Discover Knightsbridge Phase 2, a luxury villa development in Meydan South, Dubai.",
  },

  {
    slug: "the-alba-residences",
    name: "The Alba Residences",
    location: "Palm Jumeirah, Dubai",
    developer: "OMNIYAT",
    price: "44M",
    bedrooms: "2–5",
    propertyType: "Branded Apartments, Duplexes & Penthouses",
    handover: "Q1–Q3 2028",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/83ba58b5-fb32-41bf-8728-5fdd59945951/brochure/application/ANywiTjUWc5wVZpNZ5e5E5NLlklIWzFZIUgtbrqkyzM=/original.pdf",
    officialWebsite: "https://www.omniyat.com/",
    description:
      "Explore The Alba Residences, a branded residential development on Palm Jumeirah, Dubai.",
  },

  {
    slug: "terra-golf-collection-phase-2",
    name: "Terra Golf Collection Phase 2",
    location: "Jumeirah Golf Estates, Dubai",
    developer: "Taraf Holding",
    price: "10M+",
    bedrooms: "6",
    propertyType: "Furnished Villas & Townhouses",
    handover: "Q4 2027",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/0bcb2033-0baa-43bf-ac3a-1d3cabad866a/brochure/application/Ctc4RJUxqSx5vgTSKCa_z7QhxJfKz7QaWwokJigsIU4=/original.pdf",
    officialWebsite: "https://www.tarafholding.com/",
    description:
      "Discover Terra Golf Collection Phase 2, a golf-community residential development in Jumeirah Golf Estates.",
  },

  {
    slug: "karl-lagerfeld-villas",
    name: "Karl Lagerfeld Villas",
    location: "MBR City, Wadi Al Safa 3",
    developer: "Taraf Holding",
    price: "23M+",
    bedrooms: "5–7",
    propertyType: "Branded Luxury Villas",
    handover: "Q3 2027",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/e94672dd-d887-456b-bbda-c083d7543446/brochure/application/jKp0nvfGdzxDiRxDo1lmNaOz1iicE_dvqyzrWvFYybA=/original.pdf",
    officialWebsite: "https://www.tarafholding.com/",
    description:
      "Discover Karl Lagerfeld Villas, a branded luxury villa development in Dubai.",
  },

  {
    slug: "solaya-1-7",
    name: "Solaya 1-7",
    location: "La Mer, Jumeirah 1, Dubai",
    developer: "Meraas Holding",
    price: "14M",
    bedrooms: "3–5",
    propertyType: "Apartments, Duplexes & Penthouses",
    handover: "Q3 2029",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
    brochure: "",
    officialWebsite: "https://meraas.com/",
    description:
      "Discover Solaya, an exclusive residential development at La Mer, Jumeirah 1, Dubai.",
  },

  {
    slug: "solaya-8",
    name: "Solaya 8 - Coming Soon",
    location: "La Mer, Jumeirah 1, Dubai",
    developer: "Meraas Holding",
    price: "30M",
    bedrooms: "2–5",
    propertyType: "Luxury Apartments",
    handover: "Q2 2030",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600",
    brochure: "",
    officialWebsite: "https://meraas.com/",
    description:
      "Explore Solaya 8, an upcoming luxury residential development in La Mer, Dubai.",
  },

  {
    slug: "vela-viento",
    name: "Vela Viento",
    location: "Business Bay, Dubai",
    developer: "Omniyat Group",
    price: "29M",
    bedrooms: "2–4",
    propertyType: "Apartments & Duplexes",
    handover: "Q3 2027",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600",
    brochure: "",
    officialWebsite: "https://omniyat.com/",
    description:
      "Discover Vela Viento, a luxury residential development in Business Bay, Dubai.",
  },

  {
    slug: "casa-ahs",
    name: "Casa AHS",
    location: "Al Wasl, Dubai",
    developer: "AHS Properties",
    price: "32M",
    bedrooms: "Studio–6",
    propertyType: "Penthouses & Villas",
    handover: "Q2 2027",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600",
    brochure: "",
    officialWebsite: "https://ahsproperties.com/",
    description:
      "Explore Casa AHS, an exclusive luxury residential development in Dubai.",
  },

  {
    slug: "the-edit-at-d3",
    name: "The Edit at D3",
    location: "Dubai Design District, Dubai",
    developer: "Meraas Holding",
    price: "4M",
    bedrooms: "3–5",
    propertyType: "Apartments & Penthouses",
    handover: "Q1 2030",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600",
    brochure: "",
    officialWebsite: "https://meraas.com/en",
    description:
      "Discover The Edit at D3, a premium residential development in Dubai Design District.",
  },
];