import type { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import ProjectIntroduction from "@/components/Home/ProjectIntroduction";
import FeaturedProjects from "@/components/Home/FeaturedProjects";
import ResidenceBanner from "@/components/Home/ResidenceBanner";
import EnquirySection from "@/components/Home/EnquirySection";
import VisitUs from "@/components/Home/VisitUs";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover curated luxury residences, villas, and investment properties with SIR.ae.",
};

/* Home page sections — order yahan easily manage ho sakta hai */
const homeSections = [
  { id: "hero", Component: Hero },
  { id: "introduction", Component: ProjectIntroduction },
  { id: "featured-projects", Component: FeaturedProjects },
  { id: "residence-banner", Component: ResidenceBanner },
  { id: "enquiry", Component: EnquirySection },
  { id: "visit-us", Component: VisitUs },
] as const;

export default function Home() {
  return (
    <>
      {homeSections.map(({ id, Component }) => (
        <section key={id} id={id}>
          <Component />
        </section>
      ))}
    </>
  );
}