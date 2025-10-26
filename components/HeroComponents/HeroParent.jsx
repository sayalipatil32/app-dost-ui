import AboutSection from "./AboutSection";
import CtaSection from "./CtaSection";
import FeaturedProjectsSection from "./FeaturedProjectsSection";
import HeroSection from "./HeroSection";
import OpenSourceSection from "./OpenSourceSection";
import ProcessSection from "./ProcessSection";
import ServicesSection from "./ServicesSection";
import TechSection from "./TechSection";
import WhatWeDoSection from "./WhatWeDoSection";
import WhyChooseSection from "./WhyChooseSection";
import WorkCultureSection from "./WorkCultureSection";


export default function HeroParent() {
  return (
    <>
      {/* All the sections from your design, in order */}
      <HeroSection />
      <AboutSection />
      <WhatWeDoSection />
      <WhyChooseSection />
      <WorkCultureSection />
      <ServicesSection />
      <ProcessSection />
      <FeaturedProjectsSection />
      <OpenSourceSection />
      <TechSection />
      <CtaSection />
    </>
  );
}