import { User, Mail, Phone, Briefcase } from 'lucide-react';

export const resumeFormData = {
  title: "Submit Your Resume",
  description: "We'll keep your profile on file and reach out when suitable opportunities arise",
  fields: [
    { name: "fullName", label: "Full Name", type: "text", placeholder: "Enter your full name", icon: User, required: true, gridSpan: "md:col-span-1" },
    { name: "email", label: "Email", type: "email", placeholder: "your.email@example.com", icon: Mail, required: true, gridSpan: "md:col-span-1" },
    { name: "phone", label: "Phone", type: "tel", placeholder: "+91 98765 43210", icon: Phone, required: true, gridSpan: "md:col-span-1" },
    {
      name: "areaOfInterest", label: "Area of Interest", type: "select", icon: Briefcase, required: true, gridSpan: "md:col-span-1",
      options: [
        { value: "", label: "Select Area" },
        { value: "frontend", label: "Frontend Development" },
        { value: "backend", label: "Backend Development" },
        { value: "fullstack", label: "Full Stack Development" },
        { value: "mobile", label: "Mobile App Development" },
        { value: "uiux", label: "UI/UX Design" },
        { value: "devops", label: "DevOps" }
      ]
    },
    { name: "yearsOfExperience", label: "Years of Experience", type: "text", placeholder: "e.g., Fresher, 2 years, etc.", required: true, gridSpan: "md:col-span-2" }, // Spanning 2 columns
    { name: "about", label: "Tell us about yourself", type: "textarea", placeholder: "Your skills, experience, projects, and what you're looking for...", required: true, rows: 5, gridSpan: "md:col-span-2" } // Spanning 2 columns
  ],
  submitButtonText: "Submit Application"
};