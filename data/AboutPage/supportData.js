import { CheckCircle, GraduationCap, Clock } from 'lucide-react';
import { FileText } from '@/lib/icons'; // Import custom icon

export const supportData = {
  title: "Beyond business - we're here to create positive change",
  description: "Free training, documentation, and ongoing support to make technology easy to adopt in rural communities. We believe that when you work with us, you get more than just a service - you get a partner in growth.",
  featureList: [
    "Free training and documentation",
    "Ongoing technical support",
    "Local language assistance",
    "Community development focus",
    "Long-term partnership approach"
  ],
  supportCards: [
    {
      title: "Free Training",
      description: "Comprehensive training sessions for your team",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Documentation",
      description: "Detailed guides and manuals in simple language",
      icon: FileText, // Use custom icon
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical assistance",
      icon: Clock, // Use custom icon
      color: "from-green-500 to-emerald-500"
    }
  ]
};