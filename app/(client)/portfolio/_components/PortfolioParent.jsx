// Import necessary data files
import { featuredProjectsData } from '@/data/HomePage/featuredProjectsData'; // Reusing Home page data
import { portfolioCtaData } from '@/data/PortfolioPage/portfolioCtaData';

// Import section components
import PortfolioHero from './PortfolioHero';
import OpenSourcePortfolio from './OpenSourcePortfolio';
import CtaSection from '@/components/HeroComponents/CtaSection';
import FeaturedProjectsSection from '@/components/HeroComponents/FeaturedProjectsSection';

export default function PortfolioParent() {
  return (
    <>
      <PortfolioHero />
      {/* Pass the correct data to the reusable FeaturedProjectsSection */}
      <FeaturedProjectsSection data={featuredProjectsData} />
      <OpenSourcePortfolio />
      {/* Pass the correct data to the reusable CtaSection */}
      <CtaSection data={portfolioCtaData} />
    </>
  );
}