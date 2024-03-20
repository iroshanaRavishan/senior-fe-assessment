import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ImageListComponent } from './image-list/image-list.component';
import { ImageAssignedComponent } from './image-assigned/image-assigned.component';

const routes: Routes = [
  { path: '', component: ImageListComponent},
  { path: 'images', component: ImageListComponent},
  { path: 'assigned-images', component: ImageAssignedComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImageModuleRoutingModule { }
