'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { resumeFormData } from '@/data/CareerPage/resumeFormData';

export default function ResumeFormSection() {
  const { title, description, fields, submitButtonText } = resumeFormData;

  // Form state lives here
  const [formData, setFormData] = useState(
    fields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {})
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to an API)
    console.log('Form submitted:', formData);
    // Optionally reset form: setFormData(initial state);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">{title}</h2>
            <p className="text-xl text-slate-600">{description}</p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {fields.map((field) => {
                // Skip rendering textarea here, handle separately
                if (field.type === 'textarea') return null;

                const IconComponent = field.icon;
                return (
                  <div key={field.name} className={`space-y-2 ${field.gridSpan || 'md:col-span-1'}`}>
                    <label className="text-sm font-semibold text-slate-700 flex items-center gap-1">
                      {IconComponent && <IconComponent className="h-4 w-4" />}
                      {field.label} {field.required && '**'} {/* Changed to double asterisk */}
                    </label>
                    {field.type === 'select' ? (
                      <select
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      >
                        {field.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        placeholder={field.placeholder}
                      />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Handle Textarea */}
            {fields.filter(f => f.type === 'textarea').map(field => (
                <div key={field.name} className={`space-y-2 mb-8 ${field.gridSpan || 'md:col-span-2'}`}>
                    <label className="text-sm font-semibold text-slate-700">
                        {field.label} {field.required && '**'}
                    </label>
                    <textarea
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        rows={field.rows || 5}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                        placeholder={field.placeholder}
                    />
                </div>
            ))}


            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full rounded-xl py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {submitButtonText}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}