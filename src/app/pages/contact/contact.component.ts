import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, PhoneCall, Mail, MapPin, Search } from 'lucide-angular';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  readonly PhoneCallIcon = PhoneCall;
  readonly MailIcon = Mail;
  readonly MapPinIcon = MapPin;
  readonly SearchIcon = Search;
}
