import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'ng-gallery';
import { fadeInAnimation } from '../../animation-fade-in';

@Component({
  moduleId: module.id,
  selector: 'sd-personal-identity',
  templateUrl: 'personal-identity.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '', 'class': 'animate-router' }
})
export class PersonalIdentityComponent implements OnInit {

  images = [
    {
      src: 'images/portfolio/personal-identity/group.png',
      text: 'Group'
    },
    {
      src: 'images/portfolio/personal-identity/group-v2.png',
      text: 'Paper'
    },
    {
      src: 'images/portfolio/personal-identity/folio.png',
      text: 'Folio'
    },
    {
      src: 'images/portfolio/personal-identity/open-book.png',
      text: 'Style Guide Book'
    }
  ];

  constructor(private gallery: GalleryService) {
  }

  ngOnInit() {
    this.gallery.load(this.images);
  }

}
