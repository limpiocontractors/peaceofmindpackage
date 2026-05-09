import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LucideAngularModule, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  readonly MenuIcon = Menu;
  readonly XIcon = X;
  
  isScrolled = false;
  mobileMenuOpen = false;
  isHomepage = true;

  navLinks = [
    { name: "Home", href: "/" },
    { name: "Peace of Mind", href: "/peace-of-mind" },
    { name: "Tuo Construction", href: "/tuo-construction" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Process", href: "/process" },
    { name: "Contact", href: "/contact" },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isHomepage = this.router.url === '/';
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 10;
  }

  get shouldBeSolid(): boolean {
    return this.isScrolled || !this.isHomepage;
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
}
