import { Component, OnInit } from '@angular/core';
import { GalleryService } from 'ng-gallery';
import { fadeInAnimation } from '../../animation-fade-in';

@Component({
  moduleId: module.id,
  selector: 'sd-interaction-exploration',
  templateUrl: 'interaction-exploration.component.html',
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '', 'class': 'animate-router' }
})
export class InteractionExplorationComponent implements OnInit {

  images = [
    {
      src: 'images/portfolio/interaction-exploration/categories.gif',
      text: 'Filter by Category'
    },
    {
      src: 'images/portfolio/interaction-exploration/filters.gif',
      text: 'Modify Filters'
    },
    {
      src: 'images/portfolio/interaction-exploration/gallery-view.gif',
      text: 'Image Gallery'
    },
    {
      src: 'images/portfolio/interaction-exploration/image-selector.gif',
      text: 'Image Selection'
    },
    {
      src: 'images/portfolio/interaction-exploration/layout.gif',
      text: 'Change Layout'
    },
    {
      src: 'images/portfolio/interaction-exploration/messenger.gif',
      text: 'Messenger'
    },
    {
      src: 'images/portfolio/interaction-exploration/music-player.gif',
      text: 'Music Player'
    },
    {
      src: 'images/portfolio/interaction-exploration/payment.gif',
      text: 'Payment'
    },
    {
      src: 'images/portfolio/interaction-exploration/search.gif',
      text: 'Search'
    },
  ];

  constructor(private gallery: GalleryService) {
  }

  ngOnInit() {
    this.gallery.load(this.images);
  }

}
