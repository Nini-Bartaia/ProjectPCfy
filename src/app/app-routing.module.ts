import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
  path:'',redirectTo: "landing", pathMatch:'full'
},
{
  path:'landing', component:LandingComponent
},
{
  path:'register', component:RegisterComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
