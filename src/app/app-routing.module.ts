import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'image-list', pathMatch: 'full' },
  { path: 'image-list', loadChildren: () => import('./components/image/image-module.module').then( m => m.ImageModuleModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
