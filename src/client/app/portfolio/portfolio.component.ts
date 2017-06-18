import { Component } from '@angular/core';
import { fadeInAnimation } from '../animation-fade-in';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-portfolio',
  templateUrl: 'portfolio.component.html',
  animations: [ fadeInAnimation ],
  host: {'[@fadeInAnimation]': '', 'class': 'animate-router'}
})
export class PortfolioComponent {

  viewAll: boolean = true;
  viewPrototypes: boolean = false;
  viewWebApps: boolean = false;
  viewBranding: boolean = false;

  viewAllLabel: boolean = true;
  viewPrototypesLabel: boolean = false;
  viewWebAppsLabel: boolean = false;
  viewBrandingLabel: boolean = false;
  fadeInOutState: string = 'show';


  toggleFadeInOutState() {
    if (this.fadeInOutState = 'show') {
      this.fadeInOutState = 'hide';
    } else {
      this.fadeInOutState = 'show';
    }

    setTimeout(() => {
      if (this.fadeInOutState = 'hide') {
        this.fadeInOutState = 'show';
      } else {
        this.fadeInOutState = 'hide';
      }
    }, 450);
  }

  showAll() {
    this.viewAllLabel = true;
    this.viewPrototypesLabel = false;
    this.viewWebAppsLabel = false;
    this.viewBrandingLabel = false;
    setTimeout(() => {
      this.viewAll = true;
      this.viewPrototypes = false;
      this.viewWebApps = false;
      this.viewBranding = false;
    }, 400);
  }

  showPrototypes() {
    this.viewAllLabel = false;
    this.viewPrototypesLabel = true;
    this.viewWebAppsLabel = false;
    this.viewBrandingLabel = false;
    setTimeout(() => {
      this.viewAll = false;
      this.viewPrototypes = true;
      this.viewWebApps = false;
      this.viewBranding = false;
    }, 400);
  }

  showWebApps() {
    this.viewAllLabel = false;
    this.viewPrototypesLabel = false;
    this.viewWebAppsLabel = true;
    this.viewBrandingLabel = false;
    setTimeout(() => {
      this.viewAll = false;
      this.viewPrototypes = false;
      this.viewWebApps = true;
      this.viewBranding = false;
    }, 400);
  }

  showBranding() {
    this.viewAllLabel = false;
    this.viewPrototypesLabel = false;
    this.viewWebAppsLabel = false;
    this.viewBrandingLabel = true;

    setTimeout(() => {
      this.viewAll = false;
      this.viewPrototypes = false;
      this.viewWebApps = false;
      this.viewBranding = true;
    }, 400);
  }

}
