import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'ng-gallery';
import { fadeInAnimation } from '../../animation-fade-in';

@Component({
  moduleId: module.id,
  selector: 'sd-enquire-client-portal',
  templateUrl: 'enquire-client-portal.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '', 'class': 'animate-router' }
})
export class EnquireClientPortalComponent implements OnInit {

  images = [
    {
      src: 'images/portfolio/enquire-client-portal/cp-1.png',
      text: 'Grants & Funding'
    },
    {
      src: 'images/portfolio/enquire-client-portal/cp-2.png',
      text: 'Application Overview'
    },
    {
      src: 'images/portfolio/enquire-client-portal/cp-3.png',
      text: 'Open Application'
    },
    {
      src: 'images/portfolio/enquire-client-portal/cp-4.png',
      text: 'My Applications'
    },
    {
      src: 'images/portfolio/enquire-client-portal/cp-5.png',
      text: 'User Account'
    },
  ];

  constructor(private gallery: GalleryService) {
  }

  ngOnInit() {
    this.gallery.load(this.images);
  }

}
