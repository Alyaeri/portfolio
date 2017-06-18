import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';
import { AndroidReimaginedComponent } from './android-reimagined/android-reimagined.component';
import { TactivSignageComponent } from './tactiv-signage/tactiv-signage.component';
import { PersonalIdentityComponent } from './personal-identity/personal-identity.component';
import { InteractionExplorationComponent } from './interaction-exploration/interaction-exploration.component';
import { EnquireManagementPortalComponent } from './enquire-management-portal/enquire-management-portal.component';
import { EnquireClientPortalComponent } from './enquire-client-portal/enquire-client-portal.component';
import { EnquireBrandingComponent } from './enquire-branding/enquire-branding.component';
import { EnquireAdministrationConsoleComponent } from './enquire-administration-console/enquire-administration-console.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'portfolio', component: PortfolioComponent }
    ]),
    RouterModule.forChild([
      { path: 'portfolio/android-reimagined', component: AndroidReimaginedComponent }
    ]),
    RouterModule.forChild([
      { path: 'portfolio/enquire-administration-console', component: EnquireAdministrationConsoleComponent }
    ]),
    RouterModule.forChild([
      { path: 'portfolio/enquire-branding', component: EnquireBrandingComponent }
    ]),
    RouterModule.forChild([
      { path: 'portfolio/enquire-client-portal', component: EnquireClientPortalComponent }
    ]),
    RouterModule.forChild([
      { path: 'portfolio/enquire-management-portal', component: EnquireManagementPortalComponent }
    ]),
    RouterModule.forChild([
      { path: 'portfolio/interaction-exploration', component: InteractionExplorationComponent }
    ]),
    RouterModule.forChild([
      { path: 'portfolio/personal-identity', component: PersonalIdentityComponent }
    ]),
    RouterModule.forChild([
      { path: 'portfolio/tactiv-signage', component: TactivSignageComponent }
    ])
  ],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
