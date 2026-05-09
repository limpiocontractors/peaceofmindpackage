"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, Home, TreePine } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesOverview() {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-ovkos-black mb-6">Our Specialized Divisions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you are building your personal sanctuary or investing in Uganda's booming tourism sector, we have a dedicated team for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Peace of Mind Package */}
          <motion.div 
            className="group relative bg-gray-50 overflow-hidden"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/3] w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
              <div 
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80')" }}
              />
            </div>
            <div className="p-10 relative bg-white m-4 -mt-20 z-20 shadow-xl border border-gray-100 flex flex-col h-full h-auto min-h-[350px]">
              <div className="w-14 h-14 bg-brand-primary text-white flex items-center justify-center rounded-none mb-6">
                <Home size={28} />
              </div>
              <h4 className="text-2xl font-bold text-ovkos-black mb-4">Peace of Mind Package</h4>
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                The ultimate end-to-end residential building service. From land verification to the final "LimpioClean" handover, we manage everything while keeping you 100% in control from abroad.
              </p>
              <Link 
                href="/peace-of-mind" 
                className="inline-flex items-center text-brand-primary font-bold uppercase tracking-wider text-sm group-hover:text-brand-secondary transition-colors mt-auto"
              >
                Explore Residential
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </motion.div>

          {/* Tuo Construction */}
          <motion.div 
            className="group relative bg-gray-50 overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="aspect-[4/3] w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
              <div 
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580975850901-49663bc640f0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80')" }}
              />
            </div>
            <div className="p-10 relative bg-white m-4 -mt-20 z-20 shadow-xl border border-gray-100 flex flex-col h-full h-auto min-h-[350px]">
              <div className="w-14 h-14 bg-brand-secondary text-ovkos-black flex items-center justify-center rounded-none mb-6">
                <TreePine size={28} />
              </div>
              <h4 className="text-2xl font-bold text-ovkos-black mb-4">Tuo Construction</h4>
              <p className="text-gray-600 mb-8 leading-relaxed flex-grow">
                Luxury construction tailored for tourism. We build high-end eco-lodges, safari camps, and boutique hospitality properties seamlessly integrated with Uganda's wild beauty.
              </p>
              <Link 
                href="/tuo-construction" 
                className="inline-flex items-center text-brand-primary font-bold uppercase tracking-wider text-sm group-hover:text-brand-secondary transition-colors mt-auto"
              >
                Explore Tourism Builds
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
