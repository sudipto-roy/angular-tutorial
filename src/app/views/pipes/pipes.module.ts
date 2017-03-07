import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { PipesRoutingModule } from './pipes-routing.module';

import { HomeComponent } from './home/home.component';
import { InbuiltPipesComponent } from './inbuilt-pipes/inbuilt-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PipesRoutingModule
  ],
  declarations: [HomeComponent, InbuiltPipesComponent, CustomPipesComponent]
})
export class PipesModule { }
