import { headerData } from '@/data/HeaderData/headerData';
import HeaderClient from './header-client';


export default function Header() {
  const { navLinks, ctaButtonText } = headerData;

  return (
    <HeaderClient 
      navLinks={navLinks} 
      ctaButtonText={ctaButtonText} 
    />
  );
}