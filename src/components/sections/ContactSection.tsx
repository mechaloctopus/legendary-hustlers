'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Mail, Phone, Send, MapPin } from 'lucide-react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import { trackFormSubmission } from '@/lib/analytics';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Check if EmailJS is configured
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
      
      if (!serviceId || !templateId || !publicKey || 
          serviceId === 'YOUR_SERVICE_ID' || 
          templateId === 'YOUR_TEMPLATE_ID' || 
          publicKey === 'YOUR_PUBLIC_KEY') {
        
        // EmailJS not configured yet - show helpful message
        console.log('Form Data (EmailJS not configured yet):', data);
        
        setIsSubmitting(false);
        alert(`EmailJS not configured yet. 

Form submitted with:
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.service}
Message: ${data.message}

To enable email sending:
1. Set up EmailJS account at https://www.emailjs.com/
2. Create .env.local file with your credentials
3. See EMAIL_SETUP_GUIDE.md for details

For now, please contact us directly at office@legendaryhustlers.com`);
        return;
      }

      // Prepare email data
      const emailData = {
        to_email: 'office@legendaryhustlers.com',
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        service: data.service,
        message: data.message,
        reply_to: data.email
      };

      // Send email using EmailJS
      const result = await emailjs.send(serviceId, templateId, emailData, publicKey);

      console.log('Email sent successfully:', result);
      
      // Track successful form submission
      trackFormSubmission('contact_form', true);
      
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
      
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      
      // Track failed form submission
      trackFormSubmission('contact_form', false);
      
      setIsSubmitting(false);
      
      // More helpful error message
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      alert(`Failed to send message: ${errorMessage}

Please try again or contact us directly at:
📞 (385) 590-4074
📧 office@legendaryhustlers.com

If this keeps happening, EmailJS might need to be configured.`);
    }
  };



  return (
    <section id="contact" className="py-24 pt-32 diamond-plate-dark relative overflow-hidden">
      {/* Industrial Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="font-heavy text-5xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl tracking-wider">
                GET FREE QUOTE
              </h2>
              <div className="h-2 w-32 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 mx-auto mb-8"></div>
            </div>
            <p className="font-tactical text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-bold tracking-wide">
              GOT WORK TO DO? CONTACT US FOR A FREE ESTIMATE
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="steel-card wood-texture border-4 border-gray-400 p-8 shadow-xl">
                <div className="mb-8">
                  <div className="bg-black/70 border border-yellow-400 p-2 mb-4 inline-block w-full text-center">
                    <div className="font-heavy text-2xl font-black text-yellow-400 tracking-wider">
                      CONTACT
                    </div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <Image
                      src="/logo.png"
                      alt="Legendary Hustlers"
                      width={200}
                      height={60}
                      className="h-8 w-auto"
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-white border-4 border-gray-800 p-6 shadow-xl">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-600 border-2 border-gray-800 flex items-center justify-center mx-auto mb-4">
                        <Phone className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-gray-900 px-3 py-1 text-yellow-400 font-tactical font-bold text-lg tracking-wide mb-2 inline-block">
                        CALL US
                      </div>
                      <div className="text-gray-900 text-xl font-bold tracking-wider">(385) 590-4074</div>
                    </div>
                  </div>

                  <div className="bg-white border-4 border-gray-800 p-6 shadow-xl">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-orange-600 border-2 border-gray-800 flex items-center justify-center mx-auto mb-4">
                        <Mail className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-gray-900 px-3 py-1 text-yellow-400 font-tactical font-bold text-lg tracking-wide mb-2 inline-block">
                        EMAIL
                      </div>
                      <div className="text-gray-900 text-base font-bold">office@legendaryhustlers.com</div>
                    </div>
                  </div>

                  <div className="bg-white border-4 border-gray-800 p-6 shadow-xl">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-600 border-2 border-gray-800 flex items-center justify-center mx-auto mb-4">
                        <MapPin className="w-8 h-8 text-white" />
                      </div>
                      <div className="bg-gray-900 px-3 py-1 text-yellow-400 font-tactical font-bold text-lg tracking-wide mb-2 inline-block">
                        SERVICE AREA
                      </div>
                      <div className="text-gray-900 text-base font-bold">UTAH & SURROUNDING AREAS</div>
                    </div>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border-2 border-yellow-400">
                  <h4 className="bg-black/70 px-2 py-1 border border-yellow-400 font-heavy font-black text-yellow-400 mb-2 text-xl tracking-wider inline-block">⚡ QUICK RESPONSE</h4>
                  <p className="font-tactical text-gray-300 font-semibold">
                    FREE ESTIMATES PROVIDED WITHIN 24 HOURS
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="steel-card wood-texture border-4 border-gray-400 p-8 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-green-800 border-4 border-gray-600 flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Mail className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="bg-black/70 px-4 py-2 border border-yellow-400 font-heavy text-3xl font-black text-yellow-400 mb-4 tracking-wider inline-block">QUOTE REQUEST SENT!</h3>
                  <p className="font-tactical text-gray-300 text-lg font-bold">WE&apos;LL CONTACT YOU WITHIN 24 HOURS WITH YOUR FREE ESTIMATE.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="bg-black/70 px-2 py-1 border border-yellow-400 block font-tactical text-sm font-bold text-yellow-400 mb-3 tracking-wider inline-block">
                        NAME *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        className="w-full px-6 py-4 border-2 border-gray-600 bg-black/70 text-white focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 transition-all duration-300 font-tactical font-semibold text-lg"
                        placeholder="Your name"
                      />
                      {errors.name && (
                        <p className="mt-2 text-sm text-red-400 font-bold">{errors.name.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="bg-black/70 px-2 py-1 border border-yellow-400 block font-tactical text-sm font-bold text-yellow-400 mb-3 tracking-wider inline-block">
                        PHONE *
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        className="w-full px-6 py-4 border-2 border-gray-600 bg-black/70 text-white focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 transition-all duration-300 font-tactical font-semibold text-lg"
                        placeholder="(555) 123-4567"
                      />
                      {errors.phone && (
                        <p className="mt-2 text-sm text-red-400 font-bold">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="bg-black/70 px-2 py-1 border border-yellow-400 block font-tactical text-sm font-bold text-yellow-400 mb-3 tracking-wider inline-block">
                      EMAIL *
                    </label>
                    <input
                      {...register('email')}
                      type="email"
                      className="w-full px-6 py-4 border-2 border-gray-600 bg-black/70 text-white focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 transition-all duration-300 font-tactical font-semibold text-lg"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-2 text-sm text-red-400 font-bold">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Service Type */}
                  <div>
                    <label className="bg-black/70 px-2 py-1 border border-yellow-400 block font-tactical text-sm font-bold text-yellow-400 mb-3 tracking-wider inline-block">
                      SERVICE NEEDED *
                    </label>
                    <select
                      {...register('service')}
                      className="w-full px-6 py-4 border-2 border-gray-600 bg-black/70 text-white focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 transition-all duration-300 font-tactical font-semibold text-lg"
                    >
                      <option value="">SELECT A SERVICE</option>
                      <option value="tree-removal">TREE REMOVAL</option>
                      <option value="tree-trimming">TREE TRIMMING/PRUNING</option>
                      <option value="stump-grinding">STUMP GRINDING</option>
                      <option value="debris-removal">DEBRIS REMOVAL</option>
                      <option value="storm-cleanup">STORM CLEANUP</option>
                      <option value="handyman">HANDYMAN SERVICES</option>
                      <option value="other">OTHER</option>
                    </select>
                    {errors.service && (
                      <p className="mt-2 text-sm text-red-400 font-bold">{errors.service.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="bg-black/70 px-2 py-1 border border-yellow-400 block font-tactical text-sm font-bold text-yellow-400 mb-3 tracking-wider inline-block">
                      PROJECT DETAILS *
                    </label>
                    <textarea
                      {...register('message')}
                      rows={5}
                      className="w-full px-6 py-4 border-2 border-gray-600 bg-black/70 text-white focus:ring-4 focus:ring-yellow-400/20 focus:border-yellow-400 transition-all duration-300 resize-vertical font-tactical font-semibold text-lg"
                      placeholder="Describe your tree care needs..."
                    />
                    {errors.message && (
                      <p className="mt-2 text-sm text-red-400 font-bold">{errors.message.message}</p>
                    )}
                  </div>



                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-industrial font-tactical disabled:opacity-50 text-white px-8 py-6 font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 tracking-wider"
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm" className="border-white border-t-transparent" />
                        <span>SENDING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-6 h-6" />
                        <span>GET FREE QUOTE</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 