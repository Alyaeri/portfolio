import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/name-list/name-list.service';
import { fadeInAnimation } from '../animation-fade-in';
import { viewportScrollAnimation } from '../animation-viewport-scroll';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  animations: [fadeInAnimation, viewportScrollAnimation],
  host: { '[@fadeInAnimation]': '', 'class': 'animate-router' }
})
export class HomeComponent implements OnInit {


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
    }
  }


  newName: string = '';
  errorMessage: string;
  names: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService) {}

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    this.getNames();
  }

  /**
   * Handle the nameListService observable
   */
  getNames() {
    this.nameListService.get()
      .subscribe(
        names => this.names = names,
        error => this.errorMessage = <any>error
      );
  }

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    this.names.push(this.newName);
    this.newName = '';
    return false;
  }

}
