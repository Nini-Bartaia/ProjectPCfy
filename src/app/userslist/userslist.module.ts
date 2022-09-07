import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserslistRoutingModule } from './userlist-routing.module';
import {MatCardModule} from '@angular/material/card';





@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    UserslistRoutingModule,
    MatCardModule,
    
  ],
  exports:[ListComponent]
})



export class UserslistModule {


 }

