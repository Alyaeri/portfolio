import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'ng-gallery';
import { fadeInAnimation } from '../../animation-fade-in';

@Component({
  moduleId: module.id,
  selector: 'sd-enquire-administration-console',
  templateUrl: 'enquire-administration-console.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '', 'class': 'animate-router' }
})
export class EnquireAdministrationConsoleComponent implements OnInit {


  images = [
    {
      src: 'images/portfolio/enquire-administration-console/ac-1.png',
      text: 'Accordion'
    },
    {
      src: 'images/portfolio/enquire-administration-console/ac-2.png',
      text: 'Object Overview'
    },
    {
      src: 'images/portfolio/enquire-administration-console/ac-3.png',
      text: 'Table'
    },
    {
      src: 'images/portfolio/enquire-administration-console/ac-4.png',
      text: 'Table Row Detail'
    },
    {
      src: 'images/portfolio/enquire-administration-console/ac-5.png',
      text: 'Editing'
    },
    {
      src: 'images/portfolio/enquire-administration-console/ac-6.png',
      text: 'Drag and Drop'
    }
  ];

  constructor(private gallery: GalleryService) {
  }

  ngOnInit() {
    this.gallery.load(this.images);
  }

}

