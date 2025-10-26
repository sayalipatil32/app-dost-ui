import CareersHero from './CareersHero';
import WhyWorkSection from './WhyWorkSection';
import OpeningsSection from './OpeningsSection';
import ResumeFormSection from './ResumeFormSection';

export default function CareersParent() {
  return (
    <>
      <CareersHero />
      <WhyWorkSection />
      <OpeningsSection />
      <ResumeFormSection />
    </>
  );
}