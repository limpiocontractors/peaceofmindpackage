import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LucideAngularModule, X, ChevronLeft, ChevronRight, FolderOpen, ArrowLeft } from 'lucide-angular';

interface Project {
  name: string;
  thumbnail: string;
  images: string[];
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterModule, LucideAngularModule],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent implements OnInit {
  readonly XIcon = X;
  readonly ChevronLeftIcon = ChevronLeft;
  readonly ChevronRightIcon = ChevronRight;
  readonly ArrowLeftIcon = ArrowLeft;
  readonly FolderOpenIcon = FolderOpen;

  projects: Project[] = [
    {
      name: 'Camping Site at Mweya for UWA',
      thumbnail: 'assets/images/projects/campingsite_mweya1.jpg',
      images: [
        'assets/images/projects/campingsite_mweya.jpg',
        'assets/images/projects/campingsite_mweya1.jpg',
        'assets/images/projects/campingsite_mweya2.jpg',
        'assets/images/projects/campingsite_mweya3.jpg',
        'assets/images/projects/campingsite_mweya4.jpg',
        'assets/images/projects/campingsite_mweya5.jpg'
      ]
    },
    {
      name: 'Luxury Tents at Mweya Safari Lodge',
      thumbnail: 'assets/images/projects/luxuryTents_Mweya1.jpg',
      images: [
        'assets/images/projects/luxuryTents_Mweya.JPG',
        'assets/images/projects/luxuryTents_Mweya1.jpg',
        'assets/images/projects/luxuryTents_Mweya1 (4).JPG',
        'assets/images/projects/luxuryTents_Mweya1 (5).JPG',
        'assets/images/projects/luxuryTents_Mweya1 (6).JPG',
        'assets/images/projects/luxuryTents_Mweya1 (7).JPG',
        'assets/images/projects/luxuryTents_Mweya1 (8).JPG',
        'assets/images/projects/luxuryTents_Mweya1 (9).JPG',
        'assets/images/projects/luxuryTents_Mweya1 (10).JPG',
        'assets/images/projects/luxuryTents_Mweya1 (11).JPG',
        'assets/images/projects/luxuryTents_Mweya1 (12).JPG',
        'assets/images/projects/luxuryTents_Mweya1 (13).JPG',
        'assets/images/projects/luxuryTents_Mweya1 (14).JPG',
        'assets/images/projects/luxuryTents_Mweya1 (15).JPG',
        'assets/images/projects/luxuryTents_Mweya1 (16).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (17).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (18).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (19).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (20).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (21).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (22).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (23).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (24).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (25).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (26).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (27).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (28).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (29).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (30).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (31).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (32).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (33).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (34).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (35).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (36).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (37).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (38).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (39).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (40).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (41).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (42).jpg',
        'assets/images/projects/luxuryTents_Mweya1 (43).jpg',
        'assets/images/projects/luxuryTents_Mweya2.JPG',
        'assets/images/projects/luxuryTents_Mweya3.JPG'
      ]
    },
    {
      name: 'Makindye Apartments',
      thumbnail: 'assets/images/projects/apartments (13).jpg',
      images: [
        'assets/images/projects/apartments (1).jpg',
        'assets/images/projects/apartments (2).jpg',
        'assets/images/projects/apartments (3).jpg',
        'assets/images/projects/apartments (4).jpg',
        'assets/images/projects/apartments (5).jpg',
        'assets/images/projects/apartments (6).jpg',
        'assets/images/projects/apartments (7).jpg',
        'assets/images/projects/apartments (8).jpg',
        'assets/images/projects/apartments (9).jpg',
        'assets/images/projects/apartments (10).jpg',
        'assets/images/projects/apartments (11).jpg',
        'assets/images/projects/apartments (12).jpg',
        'assets/images/projects/apartments (13).jpg',
        'assets/images/projects/apartments (14).jpg',
        'assets/images/projects/apartments (15).jpg',
        'assets/images/projects/apartments (16).jpg',
        'assets/images/projects/apartments (17).jpg',
        'assets/images/projects/apartments (18).jpg',
        'assets/images/projects/apartments (19).jpg',
        'assets/images/projects/apartments (20).jpg',
        'assets/images/projects/apartments (21).jpg',
        'assets/images/projects/apartments (22).jpg',
        'assets/images/projects/apartments (23).jpg',
        'assets/images/projects/apartments (24).jpg',
        'assets/images/projects/apartments (25).jpg',
        'assets/images/projects/apartments (26).jpg',
        'assets/images/projects/apartments (27).jpg',
        'assets/images/projects/apartments (28).jpg',
        'assets/images/projects/apartments (29).jpg',
        'assets/images/projects/apartments (30).jpg',
        'assets/images/projects/apartments (31).jpg',
        'assets/images/projects/apartments (32).jpg',
        'assets/images/projects/apartments (33).jpg',
        'assets/images/projects/apartments (34).jpg',
        'assets/images/projects/apartments (35).jpg',
        'assets/images/projects/apartments (36).jpg',
        'assets/images/projects/apartments (37).jpg',
        'assets/images/projects/apartments (38).jpg',
        'assets/images/projects/apartments (39).jpg',
        'assets/images/projects/apartments (40).jpg',
        'assets/images/projects/apartments (41).jpg',
        'assets/images/projects/apartments (42).jpg',
        'assets/images/projects/apartments (43).jpg',
        'assets/images/projects/apartments (44).jpg',
        'assets/images/projects/apartments (45).jpg',
        'assets/images/projects/apartments (46).jpg',
        'assets/images/projects/apartments (47).jpg',
        'assets/images/projects/apartments (48).jpg',
        'assets/images/projects/apartments (49).jpg',
        'assets/images/projects/apartments (50).jpg',
        'assets/images/projects/apartments (51).jpg',
        'assets/images/projects/apartments (52).jpg',
        'assets/images/projects/apartments (53).jpg',
        'assets/images/projects/apartments (54).jpg',
        'assets/images/projects/apartments (55).jpg'
      ]
    },
    {
      name: 'Sunflower',
      thumbnail: 'assets/images/projects/sunflower (22).jpg',
      images: [
        'assets/images/projects/sunflower (1).jpg',
        'assets/images/projects/sunflower (2).jpg',
        'assets/images/projects/sunflower (3).jpg',
        'assets/images/projects/sunflower (4).jpg',
        'assets/images/projects/sunflower (5).jpg',
        'assets/images/projects/sunflower (6).jpg',
        'assets/images/projects/sunflower (7).jpg',
        'assets/images/projects/sunflower (8).jpg',
        'assets/images/projects/sunflower (9).jpg',
        'assets/images/projects/sunflower (10).jpg',
        'assets/images/projects/sunflower (11).jpg',
        'assets/images/projects/sunflower (12).jpg',
        'assets/images/projects/sunflower (13).jpg',
        'assets/images/projects/sunflower (14).jpg',
        'assets/images/projects/sunflower (15).jpg',
        'assets/images/projects/sunflower (16).jpg',
        'assets/images/projects/sunflower (17).jpg',
        'assets/images/projects/sunflower (18).jpg',
        'assets/images/projects/sunflower (19).jpg',
        'assets/images/projects/sunflower (20).jpg',
        'assets/images/projects/sunflower (21).jpg',
        'assets/images/projects/sunflower (22).jpg',
        'assets/images/projects/sunflower (23).jpg',
        'assets/images/projects/sunflower (24).jpg',
        'assets/images/projects/sunflower (25).jpg',
        'assets/images/projects/sunflower (26).jpg',
        'assets/images/projects/sunflower (27).jpg',
        'assets/images/projects/sunflower (28).jpg',
        'assets/images/projects/sunflower (29).jpg',
        'assets/images/projects/sunflower (30).jpg',
        'assets/images/projects/sunflower (31).jpg',
        'assets/images/projects/sunflower (32).jpg',
        'assets/images/projects/sunflower (33).jpg',
        'assets/images/projects/sunflower (34).jpg',
        'assets/images/projects/sunflower (35).jpg',
        'assets/images/projects/sunflower (36).jpg',
        'assets/images/projects/sunflower (37).jpg',
        'assets/images/projects/sunflower (38).jpg',
        'assets/images/projects/sunflower (39).jpg',
        'assets/images/projects/sunflower (40).jpg',
        'assets/images/projects/sunflower (41).jpg',
        'assets/images/projects/sunflower (42).jpg',
        'assets/images/projects/sunflower (43).jpg',
        'assets/images/projects/sunflower (44).jpg',
        'assets/images/projects/sunflower (45).jpg',
        'assets/images/projects/sunflower (46).jpg',
        'assets/images/projects/sunflower (47).jpg',
        'assets/images/projects/sunflower (48).jpg',
        'assets/images/projects/sunflower (49).jpg',
        'assets/images/projects/sunflower (50).jpg',
        'assets/images/projects/sunflower (51).jpg'
      ]
    },
    {
      name: 'Swimming pool deck at Mweya Safari Lodge',
      thumbnail: 'assets/images/projects/swimmingPoolDeck_mweya (1).jpg',
      images: [
        'assets/images/projects/swimmingPoolDeck_mweya (1).jpg',
        'assets/images/projects/swimmingPoolDeck_mweya (2).jpg',
        'assets/images/projects/swimmingPoolDeck_mweya (3).jpg',
        'assets/images/projects/swimmingPoolDeck_mweya (4).jpg',
        'assets/images/projects/swimmingPoolDeck_mweya (5).jpg',
        'assets/images/projects/swimmingPoolDeck_mweya (6).jpg',
        'assets/images/projects/swimmingPoolDeck_mweya (7).jpg',
        'assets/images/projects/swimmingPoolDeck_mweya (8).jpg'
      ]
    },
    {
      name: 'Timber bridge across the Kyambura Gorge River',
      thumbnail: 'assets/images/projects/timberBridge_KyamburaGorgeRiver (1).jpg',
      images: [
        'assets/images/projects/timberBridge_KyamburaGorgeRiver (1).jpg',
        'assets/images/projects/timberBridge_KyamburaGorgeRiver (2).jpg',
        'assets/images/projects/timberBridge_KyamburaGorgeRiver (3).jpg'
      ]
    }
  ];

  selectedProject: Project | null = null;
  selectedPhotoIndex: number | null = null;

  ngOnInit() {
    // Statically initialized
  }

  selectProject(project: Project) {
    this.selectedProject = project;
  }

  backToProjects() {
    this.selectedProject = null;
    this.selectedPhotoIndex = null;
  }

  openPhoto(index: number) {
    this.selectedPhotoIndex = index;
  }

  closePhoto() {
    this.selectedPhotoIndex = null;
  }

  nextPhoto(event: Event) {
    event.stopPropagation();
    if (this.selectedProject && this.selectedPhotoIndex !== null) {
      if (this.selectedPhotoIndex < this.selectedProject.images.length - 1) {
        this.selectedPhotoIndex++;
      } else {
        this.selectedPhotoIndex = 0; // wrap around
      }
    }
  }

  prevPhoto(event: Event) {
    event.stopPropagation();
    if (this.selectedProject && this.selectedPhotoIndex !== null) {
      if (this.selectedPhotoIndex > 0) {
        this.selectedPhotoIndex--;
      } else {
        this.selectedPhotoIndex = this.selectedProject.images.length - 1; // wrap around
      }
    }
  }
}
