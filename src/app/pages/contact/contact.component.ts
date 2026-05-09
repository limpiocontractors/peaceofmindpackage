import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { LucideAngularModule, PhoneCall, Mail, MapPin, Search, CheckCircle2, XCircle, Loader2 } from 'lucide-angular';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, LucideAngularModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnDestroy {
  readonly PhoneCallIcon = PhoneCall;
  readonly MailIcon = Mail;
  readonly MapPinIcon = MapPin;
  readonly SearchIcon = Search;
  readonly CheckCircleIcon = CheckCircle2;
  readonly XCircleIcon = XCircle;
  readonly LoaderIcon = Loader2;

  contactForm: FormGroup;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  // Progress bar logic
  progressValue = 0;
  private progressInterval: any;

  // Bot Protection: Math CAPTCHA
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['peace-of-mind', Validators.required],
      message: ['', Validators.required],
      // Honeypot field (must remain empty)
      website_url: [''],
      // Math CAPTCHA
      mathAnswer: ['', [Validators.required, this.mathValidator.bind(this)]]
    });
  }

  ngOnDestroy() {
    this.clearProgressInterval();
  }

  mathValidator(control: AbstractControl): ValidationErrors | null {
    const value = parseInt(control.value, 10);
    if (isNaN(value) || value !== (this.num1 + this.num2)) {
      return { incorrectMath: true };
    }
    return null;
  }

  refreshCaptcha() {
    this.num1 = Math.floor(Math.random() * 10) + 1;
    this.num2 = Math.floor(Math.random() * 10) + 1;
    this.contactForm.get('mathAnswer')?.setValue('');
    this.contactForm.get('mathAnswer')?.markAsUntouched();
  }

  private startProgress() {
    this.progressValue = 0;
    this.clearProgressInterval();
    
    // Simulate progress going up to 90%
    this.progressInterval = setInterval(() => {
      if (this.progressValue < 90) {
        const increment = Math.max(1, (90 - this.progressValue) * 0.1);
        this.progressValue += increment;
      }
    }, 100);
  }

  private clearProgressInterval() {
    if (this.progressInterval) {
      clearInterval(this.progressInterval);
      this.progressInterval = null;
    }
  }

  async onSubmit() {
    // Bot Protection: Reject immediately if honeypot is filled
    if (this.contactForm.get('website_url')?.value) {
      this.contactForm.reset();
      return;
    }

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;
    this.startProgress();

    try {
      const formValue = this.contactForm.value;

      const templateParams = {
        name: `${formValue.firstName} ${formValue.lastName}`,
        email: formValue.email,
        subject: formValue.subject,
        message: formValue.message,
        time: new Date().toLocaleString()
      };

      await emailjs.send(
        'service_25t8ciw',
        'template_lqg14sg', // <-- ADD YOUR TEMPLATE ID HERE
        templateParams,
        '3GbiN2TnePiq5UG-i'   // <-- ADD YOUR PUBLIC KEY HERE
      );

      // Smooth finish to 100%
      this.clearProgressInterval();
      this.progressValue = 100;

      setTimeout(() => {
        this.submitSuccess = true;
        this.isSubmitting = false;
        this.contactForm.reset({ subject: 'peace-of-mind' });
        this.refreshCaptcha();
        
        // Auto-dismiss success message
        setTimeout(() => {
          this.submitSuccess = false;
        }, 4000);
      }, 500);

    } catch (error) {
      console.error('Failed to send email', error);
      this.clearProgressInterval();
      this.submitError = true;
      this.isSubmitting = false;
    }
  }
}
