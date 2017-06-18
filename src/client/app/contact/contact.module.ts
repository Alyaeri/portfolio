import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AgmMap, AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [CommonModule, ContactRoutingModule, AgmCoreModule, SharedModule],
  declarations: [ContactComponent],
  exports: [ContactComponent]
})
export class ContactModule { }
