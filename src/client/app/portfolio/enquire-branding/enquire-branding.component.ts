import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'ng-gallery';
import { fadeInAnimation } from '../../animation-fade-in';

@Component({
  moduleId: module.id,
  selector: 'sd-enquire-branding',
  templateUrl: 'enquire-branding.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '', 'class': 'animate-router' }
})
export class EnquireBrandingComponent implements OnInit {


  images = [
    {
      src: 'images/portfolio/enquire-branding/grantcycle-management.png',
      text: 'Grantcycle Management'
    },
    {
      src: 'images/portfolio/enquire-branding/contract-management.png',
      text: 'Contract Management'
    },
    {
      src: 'images/portfolio/enquire-branding/procurement-and-supplier-management.png',
      text: 'Procurement And Supplier Management'
    },
    {
      src: 'images/portfolio/enquire-branding/relationship-management.png',
      text: 'Relationship Management'
    },
    {
      src: 'images/portfolio/enquire-branding/project-portfolio-management.png',
      text: 'Project Portfolio Management'
    },
    {
      src: 'images/portfolio/enquire-branding/e1.png',
      text: 'Enquire 1'
    },
    {
      src: 'images/portfolio/enquire-branding/prints.png',
      text: 'Prints'
    }


  ];

  constructor(private gallery: GalleryService) {
  }

  ngOnInit() {
    this.gallery.load(this.images);
  }

}
