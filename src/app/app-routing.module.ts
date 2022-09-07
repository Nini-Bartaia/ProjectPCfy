import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [{
  path:'', component: AppComponent
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

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
