'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { contactFormData } from '@/data/ContactPage/contactFormData';

export default function ContactFormInfoSection() {
  const {
      title, description, formFields, submitButtonText, charCountTemplate, messageHelpText,
      quickContacts, officeInfo, businessHours
   } = contactFormData;

  // Form state
  const [formData, setFormData] = useState(
    formFields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {})
  );
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add actual submission logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === 'message') {
      setCharCount(value.length);
    }
  };

  const messageField = formFields.find(f => f.type === 'textarea');
  const formattedCharCount = charCountTemplate
      .replace('{count}', charCount)
      .replace('{max}', messageField?.maxLength || 1000)
      .replace('{min}', messageField?.minLength || 20);


  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{title}</h2>
              <p className="text-slate-600 mb-8">{description}</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {formFields.filter(f => f.type !== 'textarea' && f.gridSpan !== 'md:col-span-2').map(field => {
                    const IconComponent = field.icon;
                    return (
                        <div key={field.name} className="space-y-2">
                             <label className="text-sm font-semibold text-slate-700">
                                {field.label} {field.required && '***'}
                             </label>
                             {field.type === 'select' ? (
                                <select /* ...select attributes... */
                                  name={field.name}
                                  value={formData[field.name]}
                                  onChange={handleChange}
                                  required={field.required}
                                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                                >
                                    {field.options.map(option => (
                                        <option key={option.value} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                             ) : (
                                <input /* ...input attributes... */
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

                 {/* Render fields spanning two columns */}
                 {formFields.filter(f => f.type !== 'textarea' && f.gridSpan === 'md:col-span-2').map(field => {
                     // Similar input/select rendering logic but without grid classes
                     return (
                        <div key={field.name} className="space-y-2">
                            {/* Label and Input/Select */}
                             <label className="text-sm font-semibold text-slate-700">
                                {field.label} {field.required && '***'}
                             </label>
                            <input
                                type={field.type}
                                name={field.name}
                                value={formData[field.name]}
                                onChange={handleChange}
                                required={field.required}
                                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                                placeholder={field.placeholder}
                            />
                        </div>
                     );
                 })}


                {/* Textarea */}
                {messageField && (
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700">
                            {messageField.label} {messageField.required && '***'}
                        </label>
                        <textarea
                            name={messageField.name}
                            value={formData[messageField.name]}
                            onChange={handleChange}
                            required={messageField.required}
                            rows={messageField.rows}
                            minLength={messageField.minLength}
                            maxLength={messageField.maxLength}
                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                            placeholder={messageField.placeholder}
                        />
                        <div className="flex justify-between text-sm text-slate-500">
                            <span>{messageHelpText}</span>
                            <span>{formattedCharCount}</span>
                        </div>
                    </div>
                )}

                <Button
                  type="submit"
                  className="w-full rounded-xl py-4 bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-lg"
                >
                  {submitButtonText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Quick Contact */}
            <div className="grid md:grid-cols-2 gap-6">
                {quickContacts.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                        <div key={index} className={`${contact.bgColor} rounded-2xl p-6 text-center`}>
                            <div className={`h-12 w-12 rounded-xl ${contact.iconBgColor} flex items-center justify-center mx-auto mb-4`}>
                                <IconComponent className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="font-bold text-slate-900 mb-2">{contact.title}</h3>
                            {contact.type === 'email' ? (
                                <a href={contact.link} className={`${contact.textColor} ${contact.hoverTextColor} font-semibold`}>
                                    {contact.value}
                                </a>
                            ) : (
                                <div className="space-y-1">
                                    {contact.values.map((val, idx) => (
                                        <div key={idx} className={`${contact.textColor} font-semibold`}>{val}</div>
                                    ))}
                                </div>
                            )}
                            <p className="text-slate-600 text-sm mt-2">{contact.note}</p>
                        </div>
                    );
                })}
            </div>

            {/* Office Locations */}
            <div className={`${officeInfo.bgColor} rounded-2xl p-6`}>
              <h3 className="text-xl font-bold text-slate-900 mb-4">{officeInfo.title}</h3>
              <p className="text-slate-600 mb-6">{officeInfo.description}</p>
              <div className="space-y-4">
                 {officeInfo.locations.map((office, index) => {
                     const IconComponent = officeInfo.icon;
                    return (
                      <div key={index} className="border-b border-slate-200 pb-4 last:border-b-0 last:pb-0">
                        <div className="flex items-start gap-3">
                          <IconComponent className={`h-5 w-5 ${officeInfo.iconColor} mt-0.5 shrink-0`} />
                          <div>
                            <h4 className="font-semibold text-slate-900">{office.city}</h4>
                            <p className="text-slate-600 text-sm mb-1">{office.type}</p>
                            <p className="text-slate-500 text-sm">{office.address}</p>
                            <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-700 text-sm">
                              {/* TODO: Add actual link */}
                              {officeInfo.mapButtonText}
                            </Button>
                          </div>
                        </div>
                      </div>
                    );
                 })}
              </div>
            </div>

            {/* Business Hours */}
            <div className={`${businessHours.bgColor} rounded-2xl p-6`}>
                <div className="flex items-center gap-3 mb-4">
                  <businessHours.icon className={`h-6 w-6 ${businessHours.iconColor}`} />
                  <h3 className="text-lg font-bold text-slate-900">{businessHours.title}</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.hours.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-slate-700 font-medium">{item.day}</span>
                        <span className={`${item.highlightColor || 'text-slate-600'}`}>{item.time}</span>
                      </div>
                  ))}
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}