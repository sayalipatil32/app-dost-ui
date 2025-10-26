'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { newsletterData } from '@/data/BlogPage/newsletterData';

export default function NewsletterSection() {
  const { icon: IconComponent, title, description, placeholder, buttonText } = newsletterData;
  // TODO: Add state and submit handler for newsletter form

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
            <div className="h-16 w-16 rounded-2xl bg-linear-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
              <IconComponent className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
            <p className="text-slate-600 mb-6">
              {description}
            </p>
            {/* TODO: Make this a form element */}
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder={placeholder}
                className="flex-1 px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                aria-label="Email for newsletter"
              />
              <Button className="rounded-xl px-6 py-3 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold">
                {buttonText}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}