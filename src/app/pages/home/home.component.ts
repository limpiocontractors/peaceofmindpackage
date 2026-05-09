import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, ArrowRight, Play, FileCheck, Coins, Video, FileText, Home, TreePine } from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  readonly ArrowRightIcon = ArrowRight;
  readonly PlayIcon = Play;
  readonly FileCheckIcon = FileCheck;
  readonly CoinsIcon = Coins;
  readonly VideoIcon = Video;
  readonly FileTextIcon = FileText;
  readonly HomeIcon = Home;
  readonly TreePineIcon = TreePine;

  features = [
    {
      icon: this.FileCheckIcon,
      colorClass: 'text-brand-primary',
      title: "Title Stays in YOUR Name",
      description: "We never take ownership of your land. All legal documentation remains strictly in your name from day one.",
    },
    {
      icon: this.CoinsIcon,
      colorClass: 'text-brand-secondary',
      title: "Milestone Payments Only",
      description: "You only release funds when specific, agreed-upon construction milestones are hit and verified.",
    },
    {
      icon: this.VideoIcon,
      colorClass: 'text-brand-primary',
      title: "Live Site Cams",
      description: "Log into your client portal 24/7 and watch the physical progress of your build in real-time.",
    },
    {
      icon: this.FileTextIcon,
      colorClass: 'text-brand-secondary',
      title: "Timestamped Reports",
      description: "Receive weekly, detailed drone footage and highly-technical construction reports directly to your inbox.",
    },
  ];
}
