import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { LucideAngularModule, Menu, X, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Search, ShieldCheck, Ruler, Calculator, Hammer, Key, ArrowRight, TreePine, CheckCircle2, Compass, Play, FileCheck, Coins, Video, FileText, Home } from 'lucide-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(LucideAngularModule.pick({ Menu, X, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Search, ShieldCheck, Ruler, Calculator, Hammer, Key, ArrowRight, TreePine, CheckCircle2, Compass, Play, FileCheck, Coins, Video, FileText, Home }))
  ]
};
