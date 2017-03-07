import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { InbuiltPipesComponent } from './inbuilt-pipes/inbuilt-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'inbuilt-pipes',
    pathMatch: 'full'
  }, {
    path: 'inbuilt-pipes',
    component: InbuiltPipesComponent
  }, {
    path: 'custom-pipes',
    component: CustomPipesComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PipesRoutingModule { }
