import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-peace-of-mind',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './peace-of-mind.component.html',
})
export class PeaceOfMindComponent implements OnInit {
  steps: any[] = [];

  constructor(private contentService: ContentService) {}

  ngOnInit() {
    this.contentService.getPeaceOfMindContent().subscribe(data => {
      this.steps = data.steps;
    });
  }
}
