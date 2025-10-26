import { Smartphone, Database, Globe, Cloud, Palette, Shield } from 'lucide-react';

export const servicesData = {
  title: "Our Services",
  description: "We deliver end-to-end IT solutions that drive business growth and digital transformation",
  services: [
    {
      title: "Android App Development",
      features: ["Play Store Deployment", "Maintenance & Support"],
      icon: Smartphone,
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "CRM Software",
      features: ["Custom Solutions", "Integration Services"],
      icon: Database,
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Web Development",
      features: ["Ecommerce Solutions", "Progressive Web Apps"],
      icon: Globe,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Cloud Solutions",
      features: ["AWS/Azure/GCP", "Infrastructure Setup"],
      icon: Cloud,
      color: "from-orange-500 to-red-600"
    },
    {
      title: "UI/UX Development",
      features: ["Wireframing", "Brand Identity"],
      icon: Palette,
      color: "from-indigo-500 to-purple-600"
    },
    {
      title: "Cybersecurity",
      features: ["Security Audit", "Protection Services"],
      icon: Shield,
      color: "from-red-500 to-pink-600"
    }
  ]
};