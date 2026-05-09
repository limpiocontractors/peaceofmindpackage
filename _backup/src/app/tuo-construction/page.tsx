"use client";

import { TreePine, CheckCircle2, Navigation, Compass } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function TuoConstructionPage() {
  const specialties = [
    { title: "Eco-Lodges", desc: "Sustainable structures that blend into the natural environment without disrupting local ecosystems." },
    { title: "Safari Camps", desc: "High-end tented camps and permanent structures built for extreme durability in wild environments." },
    { title: "Boutique Hospitality", desc: "Detailed, culturally resonant designs meant for premium guest experiences." }
  ];

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="bg-brand-secondary py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 z-10" />
        <div
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542314831-c6a4d14fff88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80')" }}
        />
        <motion.div
          className="relative z-20 max-w-5xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <TreePine size={64} className="text-ovkos-black opacity-80" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-ovkos-black tracking-tight">
            Tuo Construction
          </h1>
          <p className="text-xl md:text-2xl text-ovkos-black/80 max-w-3xl mx-auto leading-relaxed font-sans">
            Specialized luxury builds for Uganda's booming tourism sector. We build where others can't.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ovkos-black mb-6">Building the Impossible</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed font-sans">
              Tourism construction requires a completely different skill set than residential building. It requires logistical mastery to get materials to remote national parks, an understanding of eco-friendly building practices, and an eye for luxury that international guests demand.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed font-sans">
              Tuo Construction was formed specifically to bridge the gap between world-class hospitality design and the realities of building in the Ugandan wilderness.
            </p>

            <ul className="space-y-4 font-sans">
              <li className="flex items-start">
                <CheckCircle2 className="text-brand-primary mr-3 shrink-0 mt-1" />
                <span className="text-gray-700">Remote logistics and supply chain management.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-brand-primary mr-3 shrink-0 mt-1" />
                <span className="text-gray-700">Low-impact, environmentally sustainable practices.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="text-brand-primary mr-3 shrink-0 mt-1" />
                <span className="text-gray-700">Premium material sourcing for international standards.</span>
              </li>
            </ul>
          </motion.div>

          {/* Specialties Grid */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {specialties.map((spec, index) => (
              <div key={index} className="bg-gray-50 p-8 border-l-4 border-brand-primary">
                <h3 className="text-xl font-bold text-ovkos-black mb-2">{spec.title}</h3>
                <p className="text-gray-600 font-sans">{spec.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="mt-24 text-center bg-gray-50 border border-gray-100 p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Compass size={48} className="mx-auto text-brand-secondary mb-6" />
          <h2 className="text-3xl font-bold text-ovkos-black mb-6">Ready to Develop Your Lodge?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto font-sans">
            Whether you have land in Bwindi or a vision for Murchison Falls, our commercial team is ready to execute.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-ovkos-black text-white font-bold uppercase tracking-wider px-10 py-5 hover:bg-gray-800 transition-colors shadow-lg font-sans text-sm"
          >
            Consult Our Team
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
