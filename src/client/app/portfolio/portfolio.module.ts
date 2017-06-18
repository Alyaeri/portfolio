import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio.component';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { AndroidReimaginedComponent } from './android-reimagined/android-reimagined.component';
import { EnquireAdministrationConsoleComponent } from './enquire-administration-console/enquire-administration-console.component';
import { EnquireBrandingComponent } from './enquire-branding/enquire-branding.component';
import { EnquireClientPortalComponent } from './enquire-client-portal/enquire-client-portal.component';
import { EnquireManagementPortalComponent } from './enquire-management-portal/enquire-management-portal.component';
import { InteractionExplorationComponent } from './interaction-exploration/interaction-exploration.component';
import { PersonalIdentityComponent } from './personal-identity/personal-identity.component';
import { TactivSignageComponent } from './tactiv-signage/tactiv-signage.component';
import { SharedModule } from '../shared/shared.module';
import { GalleryModule } from 'ng-gallery';

@NgModule({
  imports: [CommonModule,
    PortfolioRoutingModule,
    GalleryModule,
    SharedModule
  ],
  declarations: [PortfolioComponent,
    AndroidReimaginedComponent,
    EnquireAdministrationConsoleComponent,
    EnquireBrandingComponent,
    EnquireClientPortalComponent,
    EnquireManagementPortalComponent,
    InteractionExplorationComponent,
    PersonalIdentityComponent,
    TactivSignageComponent],
  exports: [PortfolioComponent]
})
export class PortfolioModule { }
