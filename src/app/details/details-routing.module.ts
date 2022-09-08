import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailidComponent } from './detailid/detailid.component';

const routes: Routes = [{
  path:'detailid/:id', component:DetailidComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRoutingModule { }
