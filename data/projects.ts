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
  // ─── 5–10M Range ───────────────────────────────────────────────
  {
    slug: "montura-2",
    name: "Montura 2",
    location: "Grand Polo Club, Dubai Investment Park 2 (DIP 2)",
    developer: "Emaar Properties",
    price: "AED 5.5M – 9.86M",
    bedrooms: "3 & 5",
    propertyType: "Villa",
    handover: "Q2 2029",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/0f4da80f-9d7e-4645-8ae1-53069c38bc68/brochure/application/qGvv8SrxoRolYG839ySUBkIoEeFFNNZDImU4qmWrZUI=/original.pdf",
    officialWebsite: "https://www.emaar.com/",
    description:
      "Discover Montura 2, a villa community in Grand Polo Club, Dubai Investment Park 2 (DIP 2).",
  },

  {
    slug: "the-wilds-residences",
    name: "The Wilds Residences",
    location: "Dubailand",
    developer: "Aldar",
    price: "Approx. AED 5.6M – 20M+",
    bedrooms: "3–5 bedroom villas; Signature mansions",
    propertyType: "Luxury villas / residences",
    handover: "Q2 2030",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1600",
    brochure:
      "https://vision-ary.com/wp-content/uploads/2026/02/The-Wilds-Residences_Digital-Brochure_compressed.pdf",
    officialWebsite: "https://www.aldar.com/",
    description:
      "Explore The Wilds Residences by Aldar, a luxury villa and mansion community in Dubailand.",
  },

  {
    slug: "pinewood-village",
    name: "Pinewood Village",
    location: "Jumeirah Golf Estates",
    developer: "Wasl",
    price: "Launch: 5.7M | 4 Bed: 7M",
    bedrooms: "3 Bed Villas, 4 Bed Townhouses",
    propertyType: "Villas / Townhouses",
    handover: "Q4 2028",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/e3dbef74-03f1-4d1e-a37f-14160b361a0f/brochure/application/deQpxQVOPzTfyZ93GcP_XeX8QWsXkE3YesnU9Dod0-0=/original.pdf",
    officialWebsite: "https://www.wasl.ae/",
    description:
      "Discover Pinewood Village by Wasl, a villa and townhouse community in Jumeirah Golf Estates.",
  },

  {
    slug: "serro-serro-2",
    name: "Serro (Villas) / Serro 2 (Townhouses)",
    location: "The Heights by Emaar",
    developer: "Emaar Properties",
    price: "3 Bed: 6.72M | 4 Bed: 8.23M | 5 Bed: 11.24M",
    bedrooms: "3–5",
    propertyType: "Villas / Townhouses",
    handover: "Q1 2030",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/18b29243-11b6-43ed-b106-efb7dd855565/brochure/application/_VfJAJLQ103RBGq-ZPzrfT93vxty84nxBfxJpp5tdp4=/original.pdf",
    officialWebsite: "https://www.emaar.com/",
    description:
      "Explore Serro and Serro 2 by Emaar, villa and townhouse collections in The Heights.",
  },

  {
    slug: "habtoor-grand-residences",
    name: "Habtoor Grand Residences",
    location: "Dubai Marina",
    developer: "Al Habtoor Group",
    price: "2 Bed: 10.9M | 3 Bed: 15.25M | 4 Bed: 20–25M",
    bedrooms: "2–4 plus select duplex sky villas",
    propertyType: "Luxury apartments and duplex sky villas",
    handover: "Q1 2027",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/498a9b45-b4e3-4f1e-b0a2-483ac30776fe/brochure/application/5z1-KSGjZeb8MYRQSmeJOJrfOnRXiRNs8KRWxnd5xYg=/original.pdf",
    officialWebsite: "https://www.habtoor.com/",
    description:
      "Discover Habtoor Grand Residences, luxury apartments and duplex sky villas in Dubai Marina.",
  },

  {
    slug: "the-chedi-private-residences",
    name: "The Chedi Private Residences",
    location: "Sheikh Zayed Road – Barsha Heights",
    developer: "Al Seeb Real Estate Development",
    price:
      "2 Bed: 10.45M | 3 Bed: 12.74M | 4 Bed: 24.5–31.3M | 5–8 Bed: 76–212M",
    bedrooms: "2–8",
    propertyType: "Branded private residences / Sky villas",
    handover: "Q1 2029",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/4c4196eb-19bd-49a0-aae9-e359c28118d5/brochure/application/bE9HmBAB82cL34vGu_rMg1eEwp-P6gW-WWqxc-BzItw=/original.pdf",
    officialWebsite: "https://www.alseeb.ae/",
    description:
      "Explore The Chedi Private Residences, branded sky villas on Sheikh Zayed Road, Barsha Heights.",
  },

  {
    slug: "jumeirah-residences-emirates-towers",
    name: "Jumeirah Residences Emirates Towers",
    location: "Trade Centre 2, near DIFC",
    developer: "Meraas / Dubai Holding Real Estate",
    price: "From 6.15M – 25.07M",
    bedrooms: "2 Bed + Maid, 3 Bed, 3-Bed Double-Height, 4-Bed Double-Height",
    propertyType: "Branded residences / Apartments",
    handover: "Q3 2030",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/085d1528-dc12-41c7-9581-335397e1a570/brochure/application/n7eFX-PQ3YuKAqhC9aQ6-kLspBjLhu9IGHdgo99_JsE=/original.pdf",
    officialWebsite: "https://www.meraas.com/",
    description:
      "Discover Jumeirah Residences Emirates Towers, branded apartments near DIFC by Meraas / Dubai Holding.",
  },

  // ─── 10–20M Range ──────────────────────────────────────────────
  {
    slug: "eywa-tree-of-life",
    name: "Eywa Tree of Life",
    location: "Business Bay, Dubai",
    developer: "R.Evolution",
    price: "2 Bed: 14M | 3 Bed: 22.8M | 4 Bed: 30M | 5 Bed: 55.9M+",
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
    price: "Contemporary: 16.5M | Classic: 16.7M | Chamfer: 16.8M",
    bedrooms: "4–6",
    propertyType: "Luxury Villas (Contemporary, Classic, Chamfer)",
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
    price: "From AED 13.82M+ | 6 Bed: 23.8M",
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
    name: "The Alba Residences (Dorchester Collection)",
    location: "Palm Jumeirah, Dubai",
    developer: "OMNIYAT",
    price: "3 Bed Apt: 44M | 4 Bed Apt: 58M | 4 Bed Duplex: 45M | 5 Bed: 62M+",
    bedrooms: "2–5",
    propertyType: "Branded Apartments, Duplexes & Penthouses",
    handover: "Q1–Q3 2028",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/83ba58b5-fb32-41bf-8728-5fdd59945951/brochure/application/ANywiTjUWc5wVZpNZ5e5E5NLlklIWzFZIUgtbrqkyzM=/original.pdf",
    officialWebsite: "https://www.omniyat.com/",
    description:
      "Explore The Alba Residences by Dorchester Collection, a branded residential development on Palm Jumeirah, Dubai.",
  },

  {
    slug: "terra-golf-collection-phase-2",
    name: "Terra Golf Collection Phase 2",
    location: "Jumeirah Golf Estates, Dubai",
    developer: "Taraf Holding",
    price: "6 Bed Townhouse: 10M+ | 6 Bed Villa: 21M+",
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

  // ─── 20M+ Range ────────────────────────────────────────────────
  {
    slug: "karl-lagerfeld-villas",
    name: "Karl Lagerfeld Villas",
    location: "MBR City, Wadi Al Safa 3",
    developer: "Taraf Holding",
    price: "6 Bed: from 23M | 7 Bed: from 27M",
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
    price: "Apartments: 14M–54M | Duplex: from 40M | Penthouse: from 111M",
    bedrooms: "3–5",
    propertyType: "Apartments, Duplexes & Penthouses",
    handover: "Q3 2029",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/792bc2ce-cee4-401c-815f-90af984701a1/brochure/application/4-l55h23sUYAFqlS-eFnA5gCAtfDvNP60zQUHPBT-Rw=/original.pdf",
    officialWebsite: "https://meraas.com/",
    description:
      "Discover Solaya, an exclusive residential development at La Mer, Jumeirah 1, Dubai.",
  },

  {
    slug: "solaya-8",
    name: "Solaya 8 – Coming Soon",
    location: "La Mer, Jumeirah 1, Dubai",
    developer: "Meraas Holding",
    price: "From 30M",
    bedrooms: "2–5",
    propertyType: "Luxury Apartments",
    handover: "Q2 2030",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/792bc2ce-cee4-401c-815f-90af984701a1/brochure/application/4-l55h23sUYAFqlS-eFnA5gCAtfDvNP60zQUHPBT-Rw=/original.pdf",
    officialWebsite: "https://meraas.com/",
    description:
      "Explore Solaya 8, an upcoming luxury residential development in La Mer, Dubai.",
  },

  {
    slug: "vela-viento",
    name: "Vela Viento",
    location: "Business Bay, Dubai",
    developer: "Omniyat Group",
    price: "Apartment: 29M–62M | Duplex: 62M",
    bedrooms: "2–4",
    propertyType: "Apartments & Duplexes",
    handover: "Q3 2027",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/53e40725-d300-4a23-abc1-dd812e58e1f4/brochure/application/SydA910gH75QTDBMZ-y87sWQhfRBsEYDDZeQHfONz88=/original.pdf",
    officialWebsite: "https://omniyat.com/",
    description:
      "Discover Vela Viento, a luxury residential development in Business Bay, Dubai.",
  },

  {
    slug: "casa-ahs",
    name: "Casa AHS",
    location: "Al Wasl, Dubai",
    developer: "AHS Properties",
    price: "Penthouse: from 32M | Villa: 36M–135M",
    bedrooms: "Studio–6",
    propertyType: "Penthouses & Villas",
    handover: "Q2 2027",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/615c9897-1d8d-4af1-8b1f-c5211546a45c/brochure/application/LcelAeCJYXOE6dcj1ZQQaQtxQIF5FAoMwLXTEzdYkVM=/original.pdf",
    officialWebsite: "https://ahsproperties.com/",
    description:
      "Explore Casa AHS, an exclusive luxury residential development in Dubai.",
  },

  {
    slug: "the-edit-at-d3",
    name: "The Edit at D3",
    location: "Dubai Design District, Dubai",
    developer: "Meraas Holding",
    price: "Apartments: 4M–7.7M | Penthouse: 34M+",
    bedrooms: "3–5",
    propertyType: "Apartments & Penthouses",
    handover: "Q1 2030",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/9319046b-7d84-43b5-9f33-d6f5b8ff9199/brochure/application/CwRu3mSYGn7zHOvb9wCg5kghYYwnUQ-mrsT3UjVmp5M=/original.pdf",
    officialWebsite: "https://meraas.com/en",
    description:
      "Discover The Edit at D3, a premium residential development in Dubai Design District.",
  },

  // ─── New Additions (03-11-2026) ────────────────────────────────
  {
    slug: "bayz-102",
    name: "Bayz 102",
    location: "Business Bay, Dubai",
    developer: "Danube Properties",
    price: "From 7.4M – 35M",
    bedrooms: "4–5",
    propertyType: "Penthouses",
    handover: "Q4 2029",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/e211b996-20e8-4a1a-9109-507e9cf5fefa/brochure/application/SAjG0rxgQGx9CJCJvFT6jRjcFDSgNEie6jDe2p-6vDI=/original.pdf",
    officialWebsite: "https://danubeproperties.com/portfolio/bayz102/",
    description:
      "Discover Bayz 102 by Danube Properties, a collection of luxury penthouses in Business Bay, Dubai.",
  },

  {
    slug: "villa-del-divos",
    name: "Villa del DIVOS",
    location: "Dubai Islands",
    developer: "Mr Eight Development",
    price: "From 7.3M – 29M+",
    bedrooms: "4–5",
    propertyType: "Duplex, Penthouse",
    handover: "Q2 2027",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/f5f12fab-fecf-4a60-bb4b-c555546cf1e8/brochure/application/0KnljyxrjEFHqdPzb0tUkS4T5g06atyYicsOCg89wDo=/original.pdf",
    officialWebsite: "https://mreight.ae/",
    description:
      "Explore Villa del DIVOS by Mr Eight Development, luxury duplexes and penthouses on Dubai Islands.",
  },

  {
    slug: "vela-dorchester-collection",
    name: "Vela Dorchester Collection",
    location: "Business Bay, Dubai",
    developer: "Omniyat Group",
    price: "3 Bed: 43M | 4 Bed: 63M | 5 Bed PH: 63M+",
    bedrooms: "3–5",
    propertyType: "Apartments & Penthouses",
    handover: "Q4 2027",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/9f831f2c-ad32-434a-8dad-b04a12511903/brochure/application/Aw_tSXxLAemXh7cyt8W98iD7T7XCzA4L-A60oIWuOwM=/original.pdf",
    officialWebsite: "https://omniyat.com/",
    description:
      "Discover Vela Dorchester Collection by Omniyat, branded luxury apartments and penthouses in Business Bay.",
  },

  {
    slug: "avida-residences",
    name: "Avida Residences",
    location: "Dubai Islands",
    developer: "Serene Marina Real Estate Developments",
    price: "From 7.6M",
    bedrooms: "3",
    propertyType: "Penthouses",
    handover: "Q4 2027",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/6929eb1a-ce6a-4a53-bcd2-abfab224b125/brochure/application/iPJ-3tfO2DnUF97VkMks8nwOyGNFLX0Pic7zGF8VnGw=/original.pdf",
    officialWebsite: "",
    description:
      "Explore Avida Residences by Serene Marina, a collection of penthouses on Dubai Islands.",
  },

  {
    slug: "east-residence-6-serenia-district",
    name: "East Residence 6 at Serenia District",
    location: "Jumeirah Islands, Dubai",
    developer: "Palma Development",
    price: "3 Bed: from 5.7M | 4 Bed: from 8.2M",
    bedrooms: "3–4",
    propertyType: "Apartments & Penthouses",
    handover: "Q2 2030",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1600",
    brochure:
      "https://new-projects-media.propertyfinder.com/project/d9c1bef9-a988-4502-ab6c-f5ab272f0f02/brochure/application/pAMNKYbC83plaINffgVaOxS_UgxbPYGD_VXh3rawMgI=/original.pdf",
    officialWebsite: "",
    description:
      "Discover East Residence 6 at Serenia District by Palma Development, apartments and penthouses in Jumeirah Islands.",
  },

  {
    slug: "prestige-one-residences",
    name: "Prestige One Residences",
    location: "Maritime City, Dubai",
    developer: "Prestige One Developments",
    price: "Apartments: 5.2M–8.2M | Penthouses: 9M–55M",
    bedrooms: "2–3 Bed Apartments, 2–3–5 Bed Penthouses",
    propertyType: "Apartments & Penthouses",
    handover: "Q4 2029",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600",
    brochure:
      "https://drive.google.com/file/d/18MiF7Gvxx7PisLfzyJ6y2VOb8cyhOZME/view?usp=drive_link",
    officialWebsite: "https://prestigeone.ae/",
    description:
      "Explore Prestige One Residences by Prestige One Developments, apartments and penthouses in Maritime City, Dubai.",
  },
];