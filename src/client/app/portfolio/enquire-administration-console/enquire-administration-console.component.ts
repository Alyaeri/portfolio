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
    },
    {
      src: 'images/portfolio/enquire-administration-console/ac-2.png',
    },
    {
      src: 'images/portfolio/enquire-administration-console/ac-3.png',
    },
    {
      src: 'images/portfolio/enquire-administration-console/ac-4.png',
    },
    {
      src: 'images/portfolio/enquire-administration-console/ac-5.png',
    },
    {
      src: 'images/portfolio/enquire-administration-console/accordion.gif',
    }
  ];

  constructor(private gallery: GalleryService) {
  }

  ngOnInit() {
    this.gallery.load(this.images);
  }

}

