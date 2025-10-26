import { Database, Cloud, Shield, CheckCircle } from 'lucide-react';

export const additionalServicesData = {
  // No main title/description needed as it's a continuation
  services: [
    {
      title: "CRM Software",
      description: "Comprehensive CRM solutions to manage customer relationships and boost productivity.",
      features: ['Custom CRM Development', 'Integration Services', 'Training & Support'],
      icon: Database,
      color: "from-blue-500 to-cyan-600",
      featureIcon: CheckCircle,
      featureIconColor: "text-blue-500"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: ['AWS, Azure, Google Cloud', 'Migration Services', 'Performance Optimization'],
      icon: Cloud,
      color: "from-purple-500 to-pink-600",
      featureIcon: CheckCircle,
      featureIconColor: "text-purple-500"
    },
    {
      title: "Cybersecurity",
      description: "Protect your business with robust security solutions and best practices.",
      features: ['Security Audits', 'Threat Protection', 'Compliance & Best Practices'],
      icon: Shield,
      color: "from-red-500 to-orange-600",
      featureIcon: CheckCircle,
      featureIconColor: "text-red-500"
    }
  ],
  liveViewers: 18 // Example number
};