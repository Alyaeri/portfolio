import { trigger, state, animate, transition, style } from '@angular/animations';

export const viewportScrollAnimation =
  trigger("viewportScrollAnimation", [
    state("inactive", style({
      opacity: 0,
      visibility: "hidden",
      transform: "translateY(50px)"
    })),
    state("active", style({
      opacity: 1,
      visibility: "visible",
      transform: "translateY(0px)"
    })),
    transition("* => active", animate("450ms ease-in")),
    transition("* => inactive", animate("450ms ease-out")),
  ]);
