"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 bg-brand-primary">
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Placeholder for actual background image/video */}
        <div 
          className="absolute inset-0 z-0 opacity-50 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-brand-secondary/20 text-brand-secondary text-sm font-bold tracking-widest uppercase mb-6 border border-brand-secondary/50">
            The #PeaceOfMindPackage
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8">
            Build Your Dream Home in Uganda —<br />
            <span className="text-brand-secondary">Stress-Free,</span> From Anywhere.
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl mx-auto">
            We eliminate risk, drama, and distance so diaspora clients can build generational wealth remotely. Title stays in your name. 100% transparent.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="bg-brand-secondary text-ovkos-black px-8 py-4 rounded-none font-bold uppercase tracking-wider hover:bg-yellow-400 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Start Your Journey
              <ArrowRight size={20} />
            </Link>
            
            <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-none font-semibold uppercase tracking-wider hover:bg-white/20 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              <Play size={20} className="fill-white" />
              Watch Video
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center"
      >
        <span className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-2">Scroll Down</span>
        <div className="w-px h-12 bg-white/30 relative">
          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="absolute left-0 w-full h-1/3 bg-brand-secondary"
          />
        </div>
      </motion.div>
    </section>
  );
}
