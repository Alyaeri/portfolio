import { trigger, state, animate, transition, style } from '@angular/animations';

export const fadeInOutAnimation =
  trigger('fadeInOutAnimation', [
    state('inactive', style({opacity: 0})),
    state('active', style({opacity: 1})),
    transition('inactive => active', animate('6000ms ease-in')),
    transition('active => inactive', animate('6000ms ease-out'))
  ]);
