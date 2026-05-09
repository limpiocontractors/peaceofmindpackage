"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  
  const isHomepage = pathname === "/";
  const shouldBeSolid = isScrolled || !isHomepage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Peace of Mind", href: "/peace-of-mind" },
    { name: "Tuo Construction", href: "/tuo-construction" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        shouldBeSolid
          ? "bg-white/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span
              className={`text-2xl font-bold tracking-tight uppercase ${
                shouldBeSolid ? "text-brand-primary" : "text-white"
              }`}
            >
              DiCAPITALE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-brand-secondary ${
                  shouldBeSolid ? "text-ovkos-black hover:text-brand-primary" : "text-white/90"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-brand-secondary text-ovkos-black px-6 py-3 rounded-none font-semibold uppercase text-sm tracking-wider hover:bg-yellow-400 transition-colors shadow-md"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={shouldBeSolid ? "text-ovkos-black" : "text-white"}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full border-t border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-ovkos-black hover:text-brand-primary border-b border-gray-50"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-6 text-center bg-brand-primary text-white px-6 py-4 rounded-none font-semibold uppercase tracking-wider"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Your Free Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
