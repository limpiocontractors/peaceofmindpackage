"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioPage() {
  const projects = [
    {
      title: "Luxury Retreat in Entebbe",
      category: "Peace of Mind Package",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1175&q=80",
      clientLocation: "Client based in London, UK",
      desc: "A custom 5-bedroom villa built entirely while the client was abroad."
    },
    {
      title: "Bwindi Safari Lodge",
      category: "Tuo Construction",
      image: "https://images.unsplash.com/photo-1542314831-c6a4d14fff88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      clientLocation: "International Tourism Investor",
      desc: "Eco-friendly premium lodge integrated directly into the surrounding jungle."
    },
    {
      title: "Modern Kampala Apartments",
      category: "Peace of Mind Package",
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      clientLocation: "Client based in Dubai, UAE",
      desc: "A high-yield 8-unit multiplex apartment built as a generational wealth investment."
    },
    {
      title: "Murchison Riverside Cabins",
      category: "Tuo Construction",
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      clientLocation: "Local Tour Operator",
      desc: "Off-grid luxury cabins built specifically for high-end safari guests."
    }
  ];

  /* Stagger container variants */
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="pt-24 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-ovkos-black mb-6">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 font-sans">
            A showcase of precision, transparency, and luxury. See what we've built for our diaspora and investor clients.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {projects.map((project, idx) => (
            <motion.div 
              key={idx} 
              variants={item}
              className="bg-white shadow-md group overflow-hidden flex flex-col h-full border border-gray-100"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <div 
                  className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" 
                  style={{ backgroundImage: `url('${project.image}')` }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-primary font-sans">
                  {project.category}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-brand-secondary text-sm font-bold uppercase tracking-widest mb-2 font-sans">
                  {project.clientLocation}
                </div>
                <h3 className="text-2xl font-bold text-ovkos-black mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-8 flex-grow font-sans">
                  {project.desc}
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center text-brand-primary font-bold uppercase tracking-wider text-sm hover:text-brand-secondary transition-colors mt-auto font-sans"
                >
                  View Case Study
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-24 bg-brand-primary p-12 text-center text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-6">Ready to see your project here?</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto font-sans">
            Our next masterpiece could be yours. Let's start the conversation about your vision and how we can make it a reality.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-brand-secondary text-ovkos-black font-bold uppercase tracking-wider px-10 py-4 hover:bg-yellow-400 transition-colors font-sans text-sm"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
