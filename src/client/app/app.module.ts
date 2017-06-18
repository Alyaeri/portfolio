import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { GalleryConfig, GalleryModule } from 'ng-gallery';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
import { PortfolioModule } from './portfolio/portfolio.module';
import { ContactModule } from './contact/contact.module';
import { Ng2ScrollimateModule } from 'ng2-scrollimate';

export const galleryConfig: GalleryConfig = {
  'style': {
    'background': 'white',
    'width': '80vw',
    'height': '40vw'
  },
  'animation': 'fade',
  'loader': {
    'width': '50px',
    'height': '50px',
    'position': 'center',
    'icon': 'oval'
  },
  'description': false,
  'bullets': false,
  'player': {
    'autoplay': false,
    'speed': 3000
  },
  'thumbnails': false,
  'navigation': true
};

@NgModule({
  imports: [ BrowserModule,
    HttpModule,
    AppRoutingModule,
    AboutModule,
    ContactModule,
    HomeModule,

    PortfolioModule,
    BrowserAnimationsModule,
    Ng2ScrollimateModule,
    GalleryModule.forRoot(galleryConfig),
    SharedModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9H6OAlJCihHwHAKNy0evvIav23vs8KqQ'
    }), ],
  declarations: [ AppComponent ],
  providers: [ {
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  } ],
  bootstrap: [ AppComponent ]

})
export class AppModule {
}
