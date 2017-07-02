import { Component, OnInit } from '@angular/core';
import './operators';
import { NavigationEnd, Router } from '@angular/router';

/**
 * This class represents the main application component.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: [ 'app.component.css' ],
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  openNav() {
    document.getElementById('drawer').classList.add('open');
    document.getElementById('obfusator').classList.add('visible');
  }

  closeNav() {
    document.getElementById('drawer').classList.remove('open');
    document.getElementById('obfusator').classList.remove('visible');
  }
}
