import ContactHero from './ContactHero';
import ContactFormInfoSection from './ContactFormInfoSection';
import ContactBenefitsSection from './ContactBenefitsSection';
import FaqSection from './FaqSection';

export default function ContactParent() {
  return (
    <>
      <ContactHero />
      <ContactFormInfoSection />
      <ContactBenefitsSection />
      <FaqSection />
    </>
  );
}