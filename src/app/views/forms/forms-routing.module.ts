import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ModelDrivenComponent } from './model-driven/model-driven.component';
import { CustomValidationComponent } from './custom-validation/custom-validation.component';

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
    path: 'model-driven',
    component: ModelDrivenComponent
  }, {
    path: 'custom-validation',
    component: CustomValidationComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class FormsRoutingModule { }
