"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="bg-ovkos-black text-white py-24 px-4 relative overflow-hidden">
        {/* Subtle background pattern/image can go here */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-secondary via-ovkos-black to-ovkos-black z-0" />
        
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-white">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto leading-relaxed font-sans">
            Start securing your future in Uganda today. We are ready to build when you are.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-ovkos-black mb-8">Contact Information</h2>
            <p className="text-gray-600 mb-10 text-lg leading-relaxed font-sans">
              Whether you have a fully formed architectural plan or just a rough idea of what you want to build, our team is ready to consult with you.
            </p>

            <div className="space-y-8 font-sans">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 mr-6">
                  <MapPin className="text-brand-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ovkos-black mb-1">Headquarters</h4>
                  <p className="text-gray-600">Plot 123, Future Avenue<br />Kampala, Uganda</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 mr-6">
                  <Phone className="text-brand-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ovkos-black mb-1">Phone / WhatsApp</h4>
                  <p className="text-gray-600">+256 700 000 000</p>
                  <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">Available 24/7 for Diaspora</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 mr-6">
                  <Mail className="text-brand-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ovkos-black mb-1">Email</h4>
                  <p className="text-gray-600 mb-1">build@peaceofmind.ug</p>
                  <p className="text-gray-600">invest@tuoconstruction.ug</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0 mr-6">
                  <Clock className="text-brand-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-ovkos-black mb-1">Business Hours</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Monday - Friday: 8:00 AM - 6:00 PM (EAT)<br />
                    Saturday: By Appointment<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form OR Calendly Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-white p-10 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-ovkos-black mb-6">Send a Message</h2>
              <form className="space-y-6 font-sans">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      className="w-full px-4 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors outline-none"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      className="w-full px-4 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Area of Interest</label>
                  <select 
                    id="interest" 
                    className="w-full px-4 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors outline-none"
                  >
                    <option>Peace of Mind Package (Residential)</option>
                    <option>Tuo Construction (Commercial/Tourism)</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-brand-primary focus:border-brand-primary transition-colors outline-none resize-none"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-brand-primary text-white font-bold uppercase tracking-wider py-4 hover:bg-blue-900 transition-colors shadow-md text-sm"
                >
                  Send Inquiry
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                <p className="text-sm text-gray-500 mb-4 font-sans uppercase tracking-widest font-bold">Or schedule a direct call</p>
                {/* Future Calendly Integration Point */}
                <button className="w-full border-2 border-ovkos-black text-ovkos-black font-bold uppercase tracking-wider py-3 hover:bg-ovkos-black hover:text-white transition-colors text-sm font-sans">
                  Book a Consultation
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
