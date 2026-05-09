import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { LucideAngularModule, ArrowRight } from 'lucide-angular';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit {
  projects: any[] = [];
  readonly ArrowRightIcon = ArrowRight;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getPortfolioContent().subscribe(data => {
      this.projects = data.projects;
    });
  }
}
