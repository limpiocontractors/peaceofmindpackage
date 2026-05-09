import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { LucideAngularModule, TreePine, CheckCircle2, Compass } from 'lucide-angular';

@Component({
  selector: 'app-tuo-construction',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './tuo-construction.component.html',
})
export class TuoConstructionComponent implements OnInit {
  specialties: any[] = [];
  
  readonly TreePineIcon = TreePine;
  readonly CheckCircle2Icon = CheckCircle2;
  readonly CompassIcon = Compass;

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getTuoConstructionContent().subscribe(data => {
      this.specialties = data.specialties;
    });
  }
}
