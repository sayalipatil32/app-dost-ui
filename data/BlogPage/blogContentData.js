// Keeping blog posts and categories together as they are tightly coupled
export const blogContentData = {
  categories: [
    "All Posts", "Development", "Design", "Cloud", "Mobile", "Security", "AI/ML", "Business"
  ],
  blogPosts: [
    {
      id: 1,
      category: "DESIGN",
      readTime: "12 min",
      title: "Building Scalable Design Systems for Enterprise Applications",
      excerpt: "Learn how to create maintainable and scalable design systems that streamline development and ensure consistency across large-scale applications.",
      author: "AppDost Team",
      date: "Oct 12, 2025",
      image: "/api/placeholder/400/250", // Placeholder image path
      tags: ["Design Systems", "UI/UX", "Enterprise"]
    },
    {
      id: 2,
      category: "DEVELOPMENT",
      readTime: "8 min",
      title: "React 18 Features: What's New and How to Use Them",
      excerpt: "Explore the latest features in React 18 including concurrent rendering, automatic batching, and new hooks with practical examples.",
      author: "AppDost Team",
      date: "Oct 10, 2025",
      image: "/api/placeholder/400/250",
      tags: ["React", "JavaScript", "Frontend"]
    },
    {
      id: 3,
      category: "CLOUD",
      readTime: "15 min",
      title: "AWS Cost Optimization Strategies for Startups",
      excerpt: "Practical strategies to optimize your AWS costs without compromising performance or scalability for growing startups.",
      author: "AppDost Team",
      date: "Oct 8, 2025",
      image: "/api/placeholder/400/250",
      tags: ["AWS", "Cloud", "Startups"]
    },
    {
      id: 4,
      category: "MOBILE",
      readTime: "10 min",
      title: "Flutter vs React Native in 2025: Complete Comparison",
      excerpt: "Detailed comparison of Flutter and React Native for cross-platform mobile development with real-world performance metrics.",
      author: "AppDost Team",
      date: "Oct 5, 2025",
      image: "/api/placeholder/400/250",
      tags: ["Flutter", "React Native", "Mobile"]
    },
    {
      id: 5,
      category: "SECURITY",
      readTime: "14 min",
      title: "Implementing Zero Trust Architecture in Modern Applications",
      excerpt: "Step-by-step guide to implementing zero trust security principles in your web and mobile applications.",
      author: "AppDost Team",
      date: "Oct 3, 2025",
      image: "/api/placeholder/400/250",
      tags: ["Security", "Zero Trust", "Best Practices"]
    },
    {
      id: 6,
      category: "AI/ML",
      readTime: "18 min",
      title: "Building AI-Powered Features with TensorFlow.js",
      excerpt: "Learn how to integrate machine learning capabilities directly into your web applications using TensorFlow.js.",
      author: "AppDost Team",
      date: "Oct 1, 2025",
      image: "/api/placeholder/400/250",
      tags: ["AI", "Machine Learning", "TensorFlow"]
    }
    // Add more posts as needed
  ],
  loadMoreButtonText: "Load More Articles"
};