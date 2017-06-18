import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'ng-gallery';
import { fadeInAnimation } from '../../animation-fade-in';

@Component({
  moduleId: module.id,
  selector: 'sd-android-reimagined',
  templateUrl: 'android-reimagined.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '', 'class': 'animate-router' }
})
export class AndroidReimaginedComponent implements OnInit {


  images = [
    {
      src: 'images/portfolio/android-reimagined/gallery/hero.png',
      text: 'Android Reimagined'
    },
    {
      src: 'images/portfolio/android-reimagined/gallery/image-1.png',
      text: 'Music'
    },
    {
      src: 'images/portfolio/android-reimagined/gallery/image-2.png',
      text: 'Recipes'
    },
    {
      src: 'images/portfolio/android-reimagined/gallery/image-3.png',
      text: 'Alarms'
    },
    {
      src: 'images/portfolio/android-reimagined/gallery/image-4.png',
      text: 'Apps'
    },
    {
      src: 'images/portfolio/android-reimagined/gallery/image-5.png',
      text: 'Chat'
    }
  ];

  constructor(private gallery: GalleryService) {
  }

  ngOnInit() {
    this.gallery.load(this.images);
  }
}
