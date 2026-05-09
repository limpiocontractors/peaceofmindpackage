"use client";

import { FileCheck, Coins, Video, FileText } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TrustSignals() {
  const features = [
    {
      icon: <FileCheck className="text-brand-primary h-10 w-10 mb-4" />,
      title: "Title Stays in YOUR Name",
      description: "We never take ownership of your land. All legal documentation remains strictly in your name from day one.",
    },
    {
      icon: <Coins className="text-brand-secondary h-10 w-10 mb-4" />,
      title: "Milestone Payments Only",
      description: "You only release funds when specific, agreed-upon construction milestones are hit and verified.",
    },
    {
      icon: <Video className="text-brand-primary h-10 w-10 mb-4" />,
      title: "Live Site Cams",
      description: "Log into your client portal 24/7 and watch the physical progress of your build in real-time.",
    },
    {
      icon: <FileText className="text-brand-secondary h-10 w-10 mb-4" />,
      title: "Timestamped Reports",
      description: "Receive weekly, detailed drone footage and highly-technical construction reports directly to your inbox.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-bold tracking-widest text-brand-secondary uppercase mb-3">
            The DiCAPITALE Guarantee
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-ovkos-black mb-6 tracking-tight">
            Zero Risk. 100% Transparency.
          </h3>
          <p className="text-lg text-gray-600">
            We understand the fears of the diaspora. That's why we've engineered out every single risk associated with building a home remotely in Uganda.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-6 border border-gray-50 hover:border-gray-100 hover:shadow-xl transition-all duration-300 bg-gray-50"
            >
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-ovkos-black mb-3">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Placeholder for Third-Party Verifications / Badges */}
        <motion.div 
          className="mt-24 pt-12 border-t border-gray-100 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-8">
            Verified & Trusted By
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Replace these with actual partner/verification logos */}
            <div className="h-12 w-32 bg-gray-200"></div>
            <div className="h-12 w-32 bg-gray-200"></div>
            <div className="h-12 w-32 bg-gray-200"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
