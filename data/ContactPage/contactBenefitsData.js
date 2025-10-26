import { Clock, MessageCircle, User, Shield } from 'lucide-react'; // Standard icons
import { Settings } from '@/lib/icons'; // Custom Settings icon

// Custom component for the Rupee icon
const RupeeIcon = (props) => (
  <span {...props} className="text-lg font-bold">₹</span>
);


export const contactBenefitsData = {
    title: "Why Choose AppDost?",
    description: "We're more than just developers - we're your technology partners",
    benefits: [
        {
          icon: Clock, // Use lucide Clock
          title: "Fast Delivery",
          description: "We deliver high-quality solutions on time, every time, using agile methodologies."
        },
        {
          icon: RupeeIcon, // Use custom Rupee icon component
          title: "Competitive Pricing",
          description: "Get the best value for your investment with transparent pricing and no hidden costs."
        },
        {
          icon: MessageCircle,
          title: "Dedicated Support",
          description: "Our team is always here to support you throughout the entire project lifecycle and beyond."
        },
        {
          icon: User, // Use lucide User
          title: "Proven Track Record",
          description: "Join 100+ satisfied clients who trust us with their critical IT needs and projects."
        },
        {
          icon: Shield, // Use custom Shield
          title: "Data Security",
          description: "Your data is safe with us. We follow industry-best security practices and compliance standards."
        },
        {
          icon: Settings, // Use custom Settings
          title: "Custom Solutions",
          description: "We don't believe in one-size-fits-all. Every solution is tailored to your unique needs."
        }
    ]
};