import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { UserslistRoutingModule } from './userlist-routing.module';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    UserslistRoutingModule
  ],
  exports:[ListComponent]
})



export class UserslistModule {


 }

