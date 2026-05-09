"use client";

import { CheckCircle, ShieldCheck, MapPin, Search } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function PeaceOfMindPage() {
  const steps = [
    { num: "01", title: "Discovery & Alignment", desc: "We sit down (virtually) to understand your exact vision, timeline, and realistic budget. No fluff." },
    { num: "02", title: "Land Search & Verification", desc: "Our legal team verifies the title, checks for encumbrances, and ensures the land is 100% yours and safe to build on." },
    { num: "03", title: "Design & Approvals", desc: "We produce world-class architectural designs and handle the bureaucracy of local council approvals." },
    { num: "04", title: "Transparent Costing", desc: "You receive a realistic, un-inflated BOQ (Bill of Quantities). If any changes occur, you approve them first." },
    { num: "05", title: "Milestone Construction", desc: "We build. You watch via live cams and weekly timestamped reports. Payments are released only when milestones are hit." },
    { num: "06", title: "Handover & LimpioClean", desc: "The keys are handed over to a spotless, professionally deep-cleaned home ready for you to move in." }
  ];

  return (
    <div className="pt-24 pb-16 bg-white shrink-0 min-h-screen">
      <div className="bg-brand-primary text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80')" }}
        />
        <motion.div 
          className="relative z-20 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            The #PeaceOfMindPackage
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-sans">
            Eliminate distance, doubt, and drama. Experience the most transparent end-to-end residential building service for the diaspora.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-secondary uppercase mb-3 font-sans">Our Framework</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-ovkos-black">The 6-Step Process</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-50 p-10 border border-gray-100 hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span className="text-5xl font-bold text-brand-secondary/30 mb-6 block font-serif">
                {step.num}
              </span>
              <h4 className="text-xl font-bold text-ovkos-black mb-4">
                {step.title}
              </h4>
              <p className="text-gray-600 leading-relaxed text-sm font-sans">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/contact"
            className="inline-block bg-brand-primary text-white font-bold uppercase tracking-wider px-10 py-5 hover:bg-blue-900 transition-colors shadow-lg font-sans text-sm"
          >
            Start Your Project Today
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
