'use client';
import { additionalServicesData } from '@/data/ServicePage/additionalServicesData';
import { motion } from 'framer-motion';

export default function AdditionalServices() {
  const { services, liveViewers } = additionalServicesData;

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
             const IconComponent = service.icon;
             const FeatureIconComponent = service.featureIcon;
            return (
              <motion.div
                key={index}
                initial={index === 0 ? { opacity: 0, x: -50 } : (index === 2 ? { opacity: 0, x: 50 } : { opacity: 0, y: 50 })}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }} // Staggering effect
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-14 w-14 rounded-2xl bg-linear-to-r ${service.color} flex items-center justify-center mb-6`}>
                  <IconComponent className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                      <FeatureIconComponent className={`h-4 w-4 ${service.featureIconColor} shrink-0`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {/* Conditionally render live stats only on the last card (Cybersecurity) */}
                {index === services.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }} // Delay after card animation
                    className="mt-6 flex items-center gap-2 bg-slate-100 rounded-full px-3 py-2 text-sm"
                  >
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-slate-700 font-medium">{liveViewers} people viewing now</span>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}