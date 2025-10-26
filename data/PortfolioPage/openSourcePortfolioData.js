// CHANGE THIS LINE: Import Github from lucide-react
import { Github } from 'lucide-react';
// KEEP THIS LINE: Star is correctly imported from your custom file
import { Star } from '@/lib/icons';

export const openSourcePortfolioData = {
  title: "Open Source Contributions",
  description: "Explore our innovative projects and contributions to the developer community",
  projects: [
    {
      title: "NooBot",
      description: "AI-powered automation bot",
      tech: ["Python", "AI/ML"],
      stars: "128",
      color: "from-blue-500 to-cyan-500",
      icon: Github // This now correctly refers to the lucide icon
    },
    {
      title: "EduTools",
      description: "Educational utilities collection",
      tech: ["JavaScript", "React"],
      stars: "89",
      color: "from-green-500 to-emerald-500",
      icon: Github // This now correctly refers to the lucide icon
    },
    {
      title: "DeepFake Detection",
      description: "Media authenticity verification",
      tech: ["Python", "Deep Learning"],
      stars: "256",
      color: "from-purple-500 to-pink-500",
      icon: Github // This now correctly refers to the lucide icon
    },
    {
      title: "DialogFlow Chatbot",
      description: "Intelligent conversation AI",
      tech: ["Node.js", "NLP"],
      stars: "74",
      color: "from-orange-500 to-red-500",
      icon: Github // This now correctly refers to the lucide icon
    }
  ]
};