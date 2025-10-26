import { Building, GraduationCap, Rocket } from 'lucide-react';
import { CheckCircle } from '@/lib/icons'; // Use custom icon for consistency

export const sectorsData = {
  title: "Tailored Solutions for Every Need",
  description: "Customized packages designed specifically for different sectors with special benefits",
  sectors: [
    {
      title: "For Rural Businesses",
      icon: Building,
      color: "from-green-500 to-emerald-600",
      features: [
        "40-60% lower pricing than market rates",
        "Flexible payment plans",
        "Free software upgrades",
        "Technical consultation included",
        "Deferred payment options available",
        "No hidden costs"
      ]
    },
    {
      title: "For Educational Institutions",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-600",
      features: [
        "Special education sector discounts",
        "Free basic maintenance for 6 months",
        "Student & teacher training included",
        "Training in local languages",
        "Custom learning management systems",
        "Long-term partnership programs"
      ]
    },
    {
      title: "For Startups",
      icon: Rocket,
      color: "from-purple-500 to-pink-600",
      features: [
        "MVP development at startup-friendly rates",
        "Scalable architecture from day one",
        "Growth partnership opportunities",
        "Flexible payment options",
        "Technical mentorship included",
        "No compromise on quality"
      ]
    }
  ]
};