import AboutHero from './AboutHero';
import ValuesSection from './ValuesSection';
import SupportSection from './SupportSection';
import SectorsSection from './SectorsSection';
import FinalCta from './FinalCta';

export default function AboutParent() {
  return (
    <>
      <AboutHero />
      <ValuesSection />
      <SupportSection />
      <SectorsSection />
      <FinalCta />
    </>
  );
}