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
      src: 'images/portfolio/enquire-management-portal/mp-1.png',
      text: 'Login'
    },
    {
      src: 'images/portfolio/enquire-management-portal/mp-2.png',
      text: 'Contact Profile'
    },
    {
      src: 'images/portfolio/enquire-management-portal/mp-3.png',
      text: 'Work Package Overview'
    },
    {
      src: 'images/portfolio/enquire-management-portal/mp-4.png',
      text: 'Date Picker'
    },
    {
      src: 'images/portfolio/enquire-management-portal/mp-5.png',
      text: 'Document Library'
    },
    {
      src: 'images/portfolio/enquire-management-portal/mp-6.png',
      text: 'Upload Document'
    },
    {
      src: 'images/portfolio/enquire-management-portal/mp-7.png',
      text: 'Workflow'
    },
    {
      src: 'images/portfolio/enquire-management-portal/mp-8.png',
      text: 'Task Overview'
    }
  ];

  constructor(private gallery: GalleryService) {
  }

  ngOnInit() {
    this.gallery.load(this.images);
  }

}
