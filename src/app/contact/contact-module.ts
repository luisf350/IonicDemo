import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing-module';
import { SharedModule } from '../shared/shared-module';
import { IonicModule } from '@ionic/angular';
import { ContactComponent } from './pages/contact/contact.component';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    IonicModule
  ]
})
export class ContactModule { }
