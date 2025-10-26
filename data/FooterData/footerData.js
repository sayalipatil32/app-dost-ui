import {
  Facebook,
  Twitter,
  Github,
  Mail,
  Phone,
  MapPin,
  Clock,
  Shield,
  Users,
  Heart,
} from "lucide-react";

export const footerData = {
  companyName: "AppDost",
  companySlogan: "Complete IT Solutions",
  companyDescription:
    "Complete IT Solution for your business needs. We deliver innovative technology solutions that drive growth and success.",
  socialLinks: [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" },
  ],
  quickLinks: [
    { label: "Home", href: "/" }, // Assuming root path for Home
    { label: "About", href: "/about" }, // Assuming '/about' path
    { label: "Services", href: "/services" }, // Assuming '/services' path
    { label: "Portfolio", href: "/portfolio" }, // Assuming '/portfolio' path
    { label: "Careers", href: "/careers" }, // Assuming '/careers' path
    { label: "Blog", href: "/blog" }, // Assuming '/blog' path
    { label: "Contact", href: "/contact" }, // Assuming '/contact' path
  ],
  servicesLinks: [
    { label: "Android App Development", href: "/services#android" }, // Example anchor link
    { label: "Web Development", href: "/services#web" },
    { label: "UI/UX Design", href: "/services#ui-ux" },
    { label: "CRM Software", href: "/services#crm" },
    { label: "Cloud Solutions", href: "/services#cloud" },
    { label: "Cybersecurity", href: "/services#security" },
  ],
  contactInfo: {
    email: { value: "contact@appdost.in", icon: Mail, color: "text-blue-400" },
    phone: {
      numbers: ["+91 76350 75422", "+91 11 6929 0750"],
      icon: Phone,
      color: "text-green-400",
    },
    hours: {
      text: "Mon - Sat: 9:00 AM - 6:00 PM IST",
      icon: Clock,
      color: "text-yellow-400",
    },
    offices: {
      locations: ["Banka (HQ)", "Motihari", "Patna"],
      icon: MapPin,
      color: "text-red-400",
    },
  },
  trustBadges: [
    { icon: Shield, text: "100% Secure", subtext: "Protected & Safe" },
    { icon: Users, text: "Trusted by 50+", subtext: "Happy Clients" },
    { icon: MapPin, text: "Bihar & Delhi", subtext: "Serving Regions" },
    { icon: Clock, text: "24/7 Support", subtext: "Always Available" },
  ],
  copyrightYear: new Date().getFullYear(), // Dynamically get current year
  bottomLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" }, // Example path
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Sitemap", href: "/sitemap" },
  ],
  builtWith: {
    text: "Built with love in India",
    icon: Heart,
    color: "text-red-400",
  },
  stats: {
    // Treating stats as data for now
    visitors: "3,089 Visitors",
    visitorsIcon: Users,
    visitorsColor: "text-green-400",
    liveViewers: "15 people viewing now",
  },
};
