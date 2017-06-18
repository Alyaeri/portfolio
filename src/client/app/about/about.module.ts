import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { SharedModule } from '../shared/shared.module';
import { Ng2ScrollimateModule } from 'ng2-scrollimate';

@NgModule({
  imports: [CommonModule, AboutRoutingModule, SharedModule, Ng2ScrollimateModule],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
