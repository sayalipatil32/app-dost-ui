'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ExternalLink, ArrowRight } from 'lucide-react';
// REMOVED: import { featuredProjectsData } from '@/data/HomePage/featuredProjectsData'; // We get data via props now

// ADDED: Accept `data` as a prop
export default function FeaturedProjectsSection({ data }) {
  // Use the passed-in data
  const { title, description, projects, cta } = data;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          {/* Check if title exists before rendering */}
          {title && <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>}
          {description && <p className="text-xl text-slate-600 max-w-2xl mx-auto">{description}</p>}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 overflow-hidden group" // Added group class
            >
               {/* Project Image Placeholder - Added from your PortfolioPage code */}
               <div className={`h-48 bg-linear-to-r ${project.color || 'from-gray-400 to-gray-500'} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Simplified icon logic - assumes icons might be added to data later */}
                    {project.iconComponent ? <project.iconComponent className="h-16 w-16 text-white/80" /> : <div className="h-16 w-16 bg-white/20 rounded-lg"></div>}
                  </div>
                  {project.category && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {project.category}
                      </span>
                    </div>
                  )}
               </div>

              <div className="p-6">
                 {/* Updated structure from your PortfolioPage code */}
                <div className="flex items-start justify-between mb-4">
                   <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                      {/* Use project specific color if available */}
                      <p className={`font-semibold mb-4 ${project.color ? project.color.replace('from-', 'text-').split(' ')[0] : 'text-blue-600'}`}>{project.company}</p>
                   </div>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p> {/* Increased bottom margin */}
                <div className="flex flex-wrap gap-2 mb-6"> {/* Increased bottom margin */}
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Use project specific button color if available */}
                <Button className={`w-full rounded-xl bg-linear-to-r ${project.color || 'from-blue-600 to-purple-600'} hover:opacity-90 text-white font-semibold`}>
                  View Details
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Check if cta exists before rendering */}
        {cta && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }} // Adjusted delay
            className="text-center mt-12"
          >
            {/* Using the button style from your PortfolioPage code */}
            <Button variant="outline" className="rounded-xl px-8 py-3 border-2 border-slate-300 hover:border-blue-500 text-slate-700 hover:text-blue-600 font-semibold">
              {cta}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}