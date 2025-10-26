import { Target, Palette, Code, Shield, Rocket, Users } from 'lucide-react';

export const developmentProcessData = {
  title: "Our Development Process",
  description: "A structured approach that ensures quality, efficiency, and successful project delivery",
  steps: [
    {
      step: "01",
      title: "Discovery",
      description: "We understand your requirements, goals, and target audience to create a strategic plan.",
      icon: Target,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Design",
      description: "Our designers create intuitive and beautiful interfaces that enhance user experience.",
      icon: Palette,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Development",
      description: "Our expert developers bring designs to life using cutting-edge technologies.",
      icon: Code,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Testing",
      description: "Rigorous testing ensures quality, performance, and security of your solution.",
      icon: Shield,
      color: "from-yellow-500 to-orange-500"
    },
    {
      step: "05",
      title: "Deployment",
      description: "We launch your solution and ensure smooth deployment to production.",
      icon: Rocket,
      color: "from-red-500 to-pink-500"
    },
    {
      step: "06",
      title: "Support",
      description: "Ongoing maintenance and support to keep your solution running smoothly.",
      icon: Users,
      color: "from-indigo-500 to-purple-500"
    }
  ],
  liveViewers: 22 // Example number
};