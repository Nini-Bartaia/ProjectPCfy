import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailidComponent } from './detailid/detailid.component';


@NgModule({
  declarations: [
    DetailidComponent
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule
  ],
  exports:[DetailidComponent]
})
export class DetailsModule { }
