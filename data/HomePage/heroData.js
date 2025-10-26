import { Sparkles, Code, Smartphone, Star, Shield, Clock, Database } from 'lucide-react';

export const heroData = {
  tag: "Complete IT Solution Provider Since 2025",
  tagIcon: Sparkles,
  titleLine1: "Transform Your",
  titleGradient: "Ideas Into Digital",
  titleLine3: "Reality",
  description: "Your trusted partner for comprehensive IT solutions. From mobile apps to enterprise software, we bring innovation and excellence to every project with our expert team of developers.",
  stats: [
    {
      icon: Code,
      label: "Web Development",
      value: "+10 Projects",
      color: "text-blue-600"
    },
    {
      icon: Smartphone,
      label: "Mobile Apps",
      value: "+4 Apps",
      color: "text-green-600"
    }
  ],
  ctaPrimary: "Explore Our Services",
  ctaSecondary: "Get Free Consultation",
  features: [
    { icon: Star, label: "100% Client Satisfaction", color: "text-yellow-500" },
    { icon: Shield, label: "Secure & Scalable", color: "text-green-500" },
    { icon: Clock, label: "24/7 Support", color: "text-blue-500" },
  ],
  cards: [
    {
      id: "android",
      colSpan: "col-span-2",
      icon: Smartphone,
      iconBg: "from-green-500 to-emerald-600",
      title: "A+",
      subtitle: "ANDROID APPS"
    },
    {
      id: "crm",
      colSpan: "",
      icon: Database,
      iconBg: "from-purple-500 to-pink-600",
      title: "1",
      subtitle: "CRM PROJECT"
    },
    {
      id: "founded",
      colSpan: "",
      icon: null, // We handle this with the custom Calendar icon in the component
      iconBg: "from-orange-500 to-red-600",
      title: "2025",
      subtitle: "FOUNDED YEAR"
    },
    {
      id: "web",
      colSpan: "col-span-2",
      icon: Code,
      iconBg: "from-blue-500 to-cyan-600",
      title: "10+",
      subtitle: "WEB PROJECTS",
      aside: {
        title: "Fast Delivery",
        subtitle: "On Time",
        color: "text-green-600"
      }
    }
  ]
};