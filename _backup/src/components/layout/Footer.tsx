import Link from "next/link";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand & Hook */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-white uppercase">
              DiCAPITALE
            </h3>
            <p className="text-white/80 text-sm leading-relaxed max-w-xs">
              The ultimate trust-builder for diaspora clients investing in Ugandan properties. We eliminate risk, drama, and distance so you can build generational wealth remotely.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-brand-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/Thecapitalevang" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-brand-secondary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-brand-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-brand-secondary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-secondary uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/peace-of-mind" className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full"></span>
                  Peace of Mind Package
                </Link>
              </li>
              <li>
                <Link href="/tuo-construction" className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full"></span>
                  Tuo Construction
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full"></span>
                  Our Portfolio
                </Link>
              </li>
              <li>
                <Link href="/process" className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full"></span>
                  The Process
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-secondary rounded-full"></span>
                  Diaspora Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-secondary uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/80 text-sm">
                <MapPin size={18} className="text-brand-secondary shrink-0 mt-0.5" />
                <span>Kampala, Uganda<br/>(Serving the Global Diaspora)</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-sm">
                <Phone size={18} className="text-brand-secondary shrink-0" />
                <span>+256 700 000 000</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-sm">
                <Mail size={18} className="text-brand-secondary shrink-0" />
                <span>build@peaceofmindpackage.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-brand-secondary uppercase tracking-wider text-sm">Newsletter</h4>
            <p className="text-white/80 text-sm mb-4">
              Get the latest insights on building in Uganda and avoiding diaspora pitfalls.
            </p>
            <form className="space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/10 border border-white/20 text-white px-4 py-3 text-sm focus:outline-none focus:border-brand-secondary focus:ring-1 focus:ring-brand-secondary transition-all placeholder:text-white/40"
                required
              />
              <button 
                type="submit" 
                className="w-full bg-brand-secondary text-ovkos-black font-semibold uppercase tracking-wider text-sm px-4 py-3 hover:bg-yellow-400 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} DiCAPITALE Construction. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
