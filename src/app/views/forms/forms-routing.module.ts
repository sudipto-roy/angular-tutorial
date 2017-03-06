import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModuleDrivenComponent } from './module-driven/module-driven.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'template-driven',
    pathMatch: 'full'
  }, {
    path: 'template-driven',
    component: TemplateDrivenComponent
  }, {
    path: 'module-driven',
    component: ModuleDrivenComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FormsRoutingModule { }
