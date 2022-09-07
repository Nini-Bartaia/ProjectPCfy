import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LogincompComponent } from './logincomp/logincomp.component';


@NgModule({
  declarations: [
    LogincompComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[LogincompComponent]
})
export class LoginModule { }
