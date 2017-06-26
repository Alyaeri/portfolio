import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'ng-gallery';
import { fadeInAnimation } from '../../animation-fade-in';

@Component({
  moduleId: module.id,
  selector: 'sd-enquire-management-portal',
  templateUrl: 'enquire-management-portal.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '', 'class': 'animate-router' }
})
export class EnquireManagementPortalComponent implements OnInit {

  images = [
    {
      src: 'images/portfolio/enquire-management-portal/mp-0.png',
    },
    {
      src: 'images/portfolio/enquire-management-portal/mp-1.png',
    },
    {
      src: 'images/portfolio/enquire-management-portal/mp-2.png',
    },
    {
      src: 'images/portfolio/enquire-management-portal/mp-3.png',
    },
    {
      src: 'images/portfolio/enquire-management-portal/mp-4.png',
    },
    {
      src: 'images/portfolio/enquire-management-portal/mp-5.png',
    },
    {
      src: 'images/portfolio/enquire-management-portal/drawer.gif',
    },
    {
      src: 'images/portfolio/enquire-management-portal/add-comment.gif',
    },
    {
      src: 'images/portfolio/enquire-management-portal/hero.gif',
    },
    {
      src: 'images/portfolio/enquire-management-portal/read-more-comment.gif',
    },
    {
      src: 'images/portfolio/enquire-management-portal/fab.gif',
    },
    {
      src: 'images/portfolio/enquire-management-portal/mp-6.png',
    },
    {
      src: 'images/portfolio/enquire-management-portal/mp-7.png',
    },
    {
      src: 'images/portfolio/enquire-management-portal/mp-8.png',
    }
  ];

  constructor(private gallery: GalleryService) {
  }

  ngOnInit() {
    this.gallery.load(this.images);
  }

}
