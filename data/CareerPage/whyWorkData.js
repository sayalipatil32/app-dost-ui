import { Users, Target, Star, Clock, Award, BookOpen, Heart } from 'lucide-react';

export const whyWorkData = {
  title: "Why Work With Us?",
  description: "Join a team that values innovation, growth, and work-life balance",
  mainBenefits: [
    {
      icon: Users,
      title: "Expert Team",
      description: "Work alongside 20+ talented developers who are passionate about technology and innovation.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Target,
      title: "Career Growth",
      description: "Continuous learning opportunities, skill development programs, and clear career progression paths.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Star, // Using the lucide Star icon
      title: "Innovative Projects",
      description: "Work on cutting-edge projects using the latest technologies and industry best practices.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Clock, // Using the lucide Clock icon
      title: "Work-Life Balance",
      description: "Flexible working hours, remote work options, and a supportive work environment.",
      color: "from-orange-500 to-red-500"
    }
  ],
  additionalBenefits: [
    {
      icon: Award,
      title: "Recognition",
      description: "Performance-based rewards, employee recognition programs, and competitive compensation.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: BookOpen,
      title: "Learning Culture",
      description: "Regular training sessions, workshops, certifications, and conference sponsorships.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Heart, // Using the lucide Heart icon
      title: "Supportive Environment",
      description: "Collaborative team culture, mentorship programs, and employee wellness initiatives.",
      color: "from-pink-500 to-rose-500"
    }
  ]
};