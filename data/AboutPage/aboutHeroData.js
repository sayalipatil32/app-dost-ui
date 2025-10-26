import { Rocket, Clock, Shield, Building, Target, GraduationCap, Star } from 'lucide-react';

export const aboutHeroData = {
  tag: "About AppDost",
  tagIcon: Rocket,
  titleLine1: "Technology should reach",
  titleGradient: "every corner of India",
  description: "We're committed to providing IT solutions that help rural businesses, schools, and startups can transform digitally with affordable website development, mobile apps, and e-commerce solutions.",
  features: [
    { icon: Clock, label: "24/7 Support", color: "text-blue-600" },
    { icon: Shield, label: "Secure & Reliable", color: "text-green-600" },
  ],
  mission: {
    title: "Our Mission",
    text: "Empowering rural businesses to transform digitally with affordable website development, training management, and cost-effective mobile apps solutions. Bringing your business to the global market with special discounted rates for rural entrepreneurs."
  },
  stats: [
     {
      id: "rural",
      colSpan: "col-span-2",
      icon: Building,
      iconBg: "from-green-500 to-emerald-600",
      value: "500+",
      label: "RURAL BUSINESSES SERVED",
      size: "large" // Added for styling distinction
    },
    {
      id: "projects",
      colSpan: "",
      icon: Target,
      iconBg: "from-blue-500 to-cyan-600",
      value: "150+",
      label: "PROJECTS COMPLETED",
      size: "small"
    },
    {
      id: "education",
      colSpan: "",
      icon: GraduationCap,
      iconBg: "from-purple-500 to-pink-600",
      value: "40+",
      label: "EDUCATIONAL INSTITUTIONS",
      size: "small"
    },
     {
      id: "rates",
      colSpan: "col-span-2",
      icon: Star,
      iconBg: "bg-white/20", // Special background
      title: "Special Rates",
      subtitle: "For Rural & Educational Sectors",
      asideValue: "40-60%",
      asideLabel: "Lower than market",
      isGradientCard: true // Flag for special styling
    }
  ]
};