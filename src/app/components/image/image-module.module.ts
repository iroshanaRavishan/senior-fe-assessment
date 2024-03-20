import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { ImageModuleRoutingModule } from './image-module-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ImageModuleRoutingModule,
    HttpClientModule
  ]
})
export class ImageModuleModule { }
