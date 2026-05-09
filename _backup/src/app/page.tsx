import Hero from "@/components/sections/Hero";
import TrustSignals from "@/components/sections/TrustSignals";
import ServicesOverview from "@/components/sections/ServicesOverview";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TrustSignals />
      <ServicesOverview />
      
      {/* Bottom CTA Section to be added later if needed */}
      <section className="py-20 bg-brand-secondary text-ovkos-black text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Build Your Legacy?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
            Schedule a free discovery call today. No commitments, just honest advice from Uganda's premier diaspora builders.
          </p>
          <a
            href="/contact"
            className="inline-block bg-ovkos-black text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
          >
            Book Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
