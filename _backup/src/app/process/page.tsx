"use client";

import Link from "next/link";
import { Search, ShieldCheck, Ruler, Calculator, Hammer, Key } from "lucide-react";
import { motion } from "framer-motion";

export default function ProcessPage() {
  const processSteps = [
    {
      num: "01",
      icon: <Search size={32} />,
      title: "Discovery & Alignment",
      desc: "Our journey begins with a comprehensive consultation. We dive deep into your vision, requirements, timeline, and budget. This ensures we are perfectly aligned before any commitments are made. It's about setting realistic expectations from day one.",
    },
    {
      num: "02",
      icon: <ShieldCheck size={32} />,
      title: "Secure Land Acquisition",
      desc: "We take the risk out of buying property in Uganda. Our legal team conducts rigorous due diligence, verifying land titles, checking for encumbrances, and ensuring the property is 100% legally sound before you sign anything. The title stays in your name throughout.",
    },
    {
      num: "03",
      icon: <Ruler size={32} />,
      title: "Architectural Design",
      desc: "Once the land is secured, our elite architects translate your vision into functional, aesthetically stunning blueprints. We navigate the local and regional bureaucracy to ensure all building plans are fully approved by the city council before breaking ground.",
    },
    {
      num: "04",
      icon: <Calculator size={32} />,
      title: "Transparent Costing (BOQ)",
      desc: "You receive a highly detailed, un-inflated Bill of Quantities (BOQ). We present actual market prices and lock them in. You will always know where every shilling is going. True transparency, zero hidden costs.",
    },
    {
      num: "05",
      icon: <Hammer size={32} />,
      title: "Milestone Construction",
      desc: "Construction begins, and you stay in the loop. You unlock the funds only as we hit predefined milestones. Through WhatsApp updates, timestamped drone footage, and live site cameras, you can watch your property rise from the ground up, up close.",
    },
    {
      num: "06",
      icon: <Key size={32} />,
      title: "Handover & Move-In",
      desc: "Upon completion, our LimpioClean division performs a rigorous, deep industrial clean of the property. We hand over the keys to a flawless, sparkling new home or lodge, perfectly ready for immediate occupation.",
    }
  ];

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      {/* Header */}
      <div className="bg-brand-primary text-white py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-70 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1541888086225-ee82fb0661ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80')" }}
        />
        <motion.div 
          className="relative z-20 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Our Process
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-sans">
            A meticulous, six-step framework designed to entirely eliminate the risk and friction of remote construction.
          </p>
        </motion.div>
      </div>

      {/* Process Steps */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-24">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index} 
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              
              {/* Number and Icon Block */}
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <span className="text-9xl font-bold text-gray-100 select-none">
                    {step.num}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-brand-secondary text-ovkos-black rounded-full flex items-center justify-center shadow-xl">
                      {step.icon}
                    </div>
                  </div>
                </div>
              </div>

              {/* Text Block */}
              <div className="w-full md:w-2/3">
                <h3 className="text-3xl font-bold text-ovkos-black mb-6">
                  {step.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-sans mt-2">
                  {step.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-32 text-center bg-gray-50 border border-gray-100 p-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-ovkos-black mb-6">Experience the Difference</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-sans">
            Stop worrying about funds disappearing or projects stalling. Work with a firm that values transparency as much as you do.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-primary text-white font-bold uppercase tracking-wider px-10 py-5 hover:bg-blue-900 transition-colors shadow-lg font-sans text-sm"
          >
            Start Your Journey
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
