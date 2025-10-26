'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { footerData } from '@/data/FooterData/footerData'; // Import the data

// Note: Lucide icons are imported in the data file now
// Import necessary icon components directly if needed elsewhere, otherwise handled by data file

export default function Footer() {
  const {
    companyName, companySlogan, companyDescription, socialLinks, quickLinks, servicesLinks,
    contactInfo, trustBadges, copyrightYear, bottomLinks, builtWith, stats
  } = footerData;

  return (
    <footer className="bg-slate-900 text-white mt-15 px-10">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-xl bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                 {/* Display first letter of company name */}
                <span className="text-white font-bold text-lg">{companyName.charAt(0)}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">{companyName}</h3>
                <p className="text-slate-400 text-sm">{companySlogan}</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed">
              {companyDescription}
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon; // Get the icon component
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="h-10 w-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Our Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Our Services</h4>
            <ul className="space-y-3">
              {servicesLinks.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>

            <div className="space-y-4">
              {/* Email */}
              <div className="flex items-start gap-3">
                <contactInfo.email.icon className={`h-5 w-5 ${contactInfo.email.color} mt-0.5 shrink-0`} />
                <div>
                  <p className="text-slate-300 font-medium">Email</p>
                  <a href={`mailto:${contactInfo.email.value}`} className="text-white hover:text-blue-400 transition-colors">
                    {contactInfo.email.value}
                  </a>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3">
                <contactInfo.phone.icon className={`h-5 w-5 ${contactInfo.phone.color} mt-0.5 shrink-0`} />
                <div>
                  <p className="text-slate-300 font-medium">Phone</p>
                  <div className="text-white space-y-1">
                    {contactInfo.phone.numbers.map((number, idx) => (
                       <div key={idx}>{number}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-3">
                <contactInfo.hours.icon className={`h-5 w-5 ${contactInfo.hours.color} mt-0.5 shrink-0`} />
                <div>
                  <p className="text-slate-300 font-medium">Hours</p>
                  <p className="text-white">{contactInfo.hours.text}</p>
                </div>
              </div>

              {/* Offices */}
              <div className="flex items-start gap-3">
                <contactInfo.offices.icon className={`h-5 w-5 ${contactInfo.offices.color} mt-0.5 shrink-0`} />
                <div>
                  <p className="text-slate-300 font-medium">Our Offices</p>
                  <div className="text-white space-y-1">
                    {contactInfo.offices.locations.map((location, idx) => (
                      <div key={idx}>{location}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="border-t border-slate-700"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {trustBadges.map((badge, index) => {
              const BadgeIcon = badge.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-all duration-300"
                >
                  <div className="text-blue-400 mb-2">
                    <BadgeIcon className="h-6 w-6" />
                  </div>
                  <div className="font-semibold text-white">{badge.text}</div>
                  <div className="text-slate-400 text-sm">{badge.subtext}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 bg-slate-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">

            {/* Copyright and Links */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <span>© {copyrightYear} {companyName} - {companySlogan}. All rights reserved.</span>
              </div>

              <div className="flex items-center gap-4">
                {bottomLinks.map((link, index) => (
                   <Link key={index} href={link.href} className="hover:text-white transition-colors">{link.label}</Link>
                ))}
              </div>
            </div>

            {/* Built With and Stats */}
            <div className="flex items-center gap-6 text-slate-400 text-sm">
              <div className="flex items-center gap-2">
                <builtWith.icon className={`h-4 w-4 ${builtWith.color}`} />
                <span>{builtWith.text}</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <stats.visitorsIcon className={`h-4 w-4 ${stats.visitorsColor}`} />
                  <span>{stats.visitors}</span>
                </div>

                <div className="flex items-center gap-2 md:bg-slate-700 px-3 py-1 md:rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium">{stats.liveViewers}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}