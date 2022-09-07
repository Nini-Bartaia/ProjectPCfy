import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [{
  path:'', redirectTo:"landing", pathMatch:"full"
},
{
  path:'register', component:RegisterComponent
},
{
  path:'userslist/list', 
  loadChildren:()=>import('src/app/userslist/userslist.module').then((m)=>m.UserslistModule)
},
{
  path:'landing', component:LandingComponent
},

{
  path:'success', component:SuccessComponent
},
{
  path:'login/logincomp',
  loadChildren:()=>import('src/app/login/login.module').then((m)=>m.LoginModule)
}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
