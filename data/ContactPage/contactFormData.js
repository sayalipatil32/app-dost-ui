// ADD MapPin to this import line
import { Mail, Phone, User, MapPin } from 'lucide-react';
// Keep Clock import from lib/icons
import { Clock } from '@/lib/icons';

export const contactFormData = {
  title: "Send Us a Message",
  description: "Fill out the form and we'll get back to you within 24 hours",
  formFields: [
    // ... (rest of formFields array remains the same)
    { name: "fullName", label: "Full Name", type: "text", placeholder: "John Doe", required: true, gridSpan: "md:col-span-1" },
    { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com", required: true, gridSpan: "md:col-span-1" },
    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98765 43210", required: true, gridSpan: "md:col-span-1" },
    {
      name: "subject", label: "Subject", type: "select", required: true, gridSpan: "md:col-span-1",
      options: [
        { value: "", label: "Select a subject" },
        { value: "web-development", label: "Web Development" },
        { value: "mobile-app", label: "Mobile App Development" },
        { value: "ui-ux", label: "UI/UX Design" },
        { value: "consultation", label: "Consultation" },
        { value: "support", label: "Support" },
        { value: "other", label: "Other" }
      ]
    },
    {
      name: "message", label: "Your Message", type: "textarea", placeholder: "Tell us about your project or inquiry... (minimum 20 characters)",
      required: true, rows: 6, minLength: 20, maxLength: 1000, gridSpan: "md:col-span-2"
    }
  ],
  submitButtonText: "Send Message",
  charCountTemplate: "{count} / {max} characters (min: {min})",
  messageHelpText: "Please provide as much detail as possible",
  quickContacts: [
    {
        type: "email",
        icon: Mail, // Lucide icon
        title: "Email Us",
        value: "contact@appdost.in",
        link: "mailto:contact@appdost.in",
        note: "We respond within 24 hours",
        bgColor: "bg-blue-50",
        iconBgColor: "bg-blue-500",
        textColor: "text-blue-600",
        hoverTextColor: "hover:text-blue-700"
    },
    {
        type: "phone",
        icon: Phone, // Lucide icon
        title: "Call Us",
        values: ["+91 76350 75422", "+91 11 6929 0750"],
        note: "Mon - Sat 9:00 AM - 6:00 PM IST",
        bgColor: "bg-green-50",
        iconBgColor: "bg-green-500",
        textColor: "text-slate-700",
        hoverTextColor: ""
    }
  ],
  officeInfo: {
      title: "Our Office Locations",
      description: "Visit us at any of our offices across Bihar for personalized consultation",
      icon: MapPin, // Lucide icon - THIS IS NOW CORRECTLY REFERENCED
      iconColor: "text-blue-500",
      bgColor: "bg-slate-50",
      locations: [
           {
             city: "Banka Office",
             type: "Bihar Headquarters",
             address: "AppDost Complete IT Solution, Haveli Lakarikola, Banka, Bihar 813102, India",
             mapLink: "#"
           },
           {
             city: "Motihari Office",
             type: "East Champaran Branch",
             address: "AppDost Complete IT Solution, Janpul Chowk, Kolhuwarwa, Motihari, Bihar 845401, India",
             mapLink: "#"
           },
           {
             city: "Patna Office",
             type: "Capital City Branch",
             address: "AppDost Solution Complete IT Solution, Kadamkuan, Lohanipur, Patna, Bihar 800003, India",
             mapLink: "#"
           }
      ],
      mapButtonText: "View on Map →"
  },
  businessHours: {
      title: "Business Hours",
      icon: Clock, // Custom icon
      iconColor: "text-orange-500",
      bgColor: "bg-orange-50",
      hours: [
          { day: "Mon - Sat", time: "9:00 AM - 6:00 PM IST" },
          { day: "Lunch Break", time: "1:00 PM - 2:00 PM IST" },
          { day: "Emergency Support", time: "24/7 for existing clients", highlightColor: "text-green-600 font-medium" }
      ]
  }
};