import { Smartphone, Code, Palette, CheckCircle } from 'lucide-react';

export const offeringsData = {
  title: "What We Offer",
  description: "Comprehensive IT services designed to transform your business and drive digital success",
  mainServices: [
    {
      title: "Android App Development",
      description: "Custom Android applications built with the latest technologies to bring your ideas to life.",
      features: ['Native & Hybrid Apps', 'Play Store Deployment', 'App Maintenance & Support'],
      icon: Smartphone,
      color: "from-green-500 to-emerald-600",
      featureIcon: CheckCircle, // Using CheckCircle from lucide-react directly
      featureIconColor: "text-green-500"
    },
    {
      title: "Web Development",
      description: "Responsive and scalable web applications tailored to your business needs.",
      features: ['Responsive Web Design', 'E-commerce Solutions', 'Progressive Web Apps'],
      icon: Code,
      color: "from-blue-500 to-cyan-600",
      featureIcon: CheckCircle,
      featureIconColor: "text-green-500"
    },
    {
      title: "UI/UX Development",
      description: "Beautiful, intuitive user interfaces that enhance user experience and engagement.",
      features: ['User Research & Testing', 'Wireframing & Prototyping', 'Brand Identity Design'],
      icon: Palette,
      color: "from-purple-500 to-pink-600",
      featureIcon: CheckCircle,
      featureIconColor: "text-green-500"
    }
  ]
};