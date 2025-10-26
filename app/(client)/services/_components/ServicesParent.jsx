import ServicesHero from './ServicesHero';
import OfferingsSection from './OfferingsSection';
import AdditionalServices from './AdditionalServices';
import DevelopmentProcess from './DevelopmentProcess';
import ServicesCta from './ServicesCta';

export default function ServicesParent() {
  return (
    <>
      <ServicesHero />
      <OfferingsSection />
      <AdditionalServices />
      <DevelopmentProcess />
      <ServicesCta />
    </>
  );
}