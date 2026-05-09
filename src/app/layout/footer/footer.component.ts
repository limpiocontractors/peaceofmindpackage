import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  readonly FacebookIcon = Facebook;
  readonly InstagramIcon = Instagram;
  readonly TwitterIcon = Twitter;
  readonly LinkedinIcon = Linkedin;
  readonly MailIcon = Mail;
  readonly PhoneIcon = Phone;
  readonly MapPinIcon = MapPin;
  
  currentYear = new Date().getFullYear();
}
