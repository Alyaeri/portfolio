import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'ng-gallery';
import { fadeInAnimation } from '../../animation-fade-in';

@Component({
  moduleId: module.id,
  selector: 'sd-tactiv-signage',
  templateUrl: 'tactiv-signage.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '', 'class': 'animate-router' }
})
export class TactivSignageComponent implements OnInit {


  images = [
    {
      src: 'images/portfolio/tactiv-signage/signage-1.jpg',
      text: 'Boardroom - Glass wall mounted base + laser cut logo'
    },
    {
      src: 'images/portfolio/tactiv-signage/signage-2.jpg',
      text: 'ACM Aluminium'
    },
    {
      src: 'images/portfolio/tactiv-signage/signage-3.jpg',
      text: 'Light box'
    },
    {
      src: 'images/portfolio/tactiv-signage/signage-4.jpg',
      text: '3D Laser cut acrylic logo'
    },
    {
      src: 'images/portfolio/tactiv-signage/signage-5.jpg',
      text: 'PVC panel walls, counter, and fascia'
    },
    {
      src: 'images/portfolio/tactiv-signage/signage-6.jpg',
      text: 'Adhesive Decal Sticker'
    },
    {
      src: 'images/portfolio/tactiv-signage/signage-7.jpg',
      text: 'Entrance - Glass and semi transparent '
    }
  ];

  constructor(private gallery: GalleryService) {
  }

  ngOnInit() {
    this.gallery.load(this.images);
  }
}
