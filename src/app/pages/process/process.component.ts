import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { LucideAngularModule, Search, ShieldCheck, Ruler, Calculator, Hammer, Key } from 'lucide-angular';

@Component({
  selector: 'app-process',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './process.component.html',
})
export class ProcessComponent implements OnInit {
  processSteps: any[] = [];

  readonly SearchIcon = Search;
  readonly ShieldCheckIcon = ShieldCheck;
  readonly RulerIcon = Ruler;
  readonly CalculatorIcon = Calculator;
  readonly HammerIcon = Hammer;
  readonly KeyIcon = Key;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getProcessContent().subscribe(data => {
      this.processSteps = data.processSteps;
    });
  }

  getIconForStep(index: number) {
    const icons = [this.SearchIcon, this.ShieldCheckIcon, this.RulerIcon, this.CalculatorIcon, this.HammerIcon, this.KeyIcon];
    return icons[index] || this.SearchIcon;
  }
}
