import { Component } from '@angular/core';
import { fadeInAnimation } from '../animation-fade-in';
import { viewportScrollAnimation } from '../animation-viewport-scroll';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  animations: [fadeInAnimation, viewportScrollAnimation],
  host: { '[@fadeInAnimation]': '', 'class': 'animate-router' }
})
export class AboutComponent {

  scrollimateOptions: any = {
    section1: {
      currentState: "inactive",
      states: [
        {
          method: "pxElement",
          value: 150,
          class: "",
          state: "active",
        },
        {
          method: "default",
          state: "inactive"
        }
      ]
    },
    section2: {
      currentState: "inactive",
      states: [
        {
          method: "pxElement",
          value: 300,
          class: "",
          state: "active",
        },
        {
          method: "default",
          state: "inactive"
        }
      ]
    },
    section3: {
      currentState: "inactive",
      states: [
        {
          method: "pxElement",
          value: 300,
          class: "",
          state: "active",
        },
        {
          method: "default",
          state: "inactive"
        }
      ]
    },
    section4: {
      currentState: "inactive",
      states: [
        {
          method: "pxElement",
          value: 250,
          class: "",
          state: "active",
        },
        {
          method: "default",
          state: "inactive"
        }
      ]
    },
    section5: {
      currentState: "inactive",
      states: [
        {
          method: "pxElement",
          value: 250,
          class: "",
          state: "active",
        },
        {
          method: "default",
          state: "inactive"
        }
      ]
    },
    section6: {
      currentState: "inactive",
      states: [
        {
          method: "pxElement",
          value: 300,
          class: "",
          state: "active",
        },
        {
          method: "default",
          state: "inactive"
        }
      ]
    }
  }

}
