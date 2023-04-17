import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibHeaderComponent } from './component/library/lib-header/lib-header.component';
import { ReceipeHeaderComponent } from './component/receipe/receipe-header/receipe-header.component';

const routes: Routes = [
  {path:'book',
  loadChildren:()=>import('./component/library/library.module').then(m=>m.LibraryModule)},
  {path:'rec',
  loadChildren:()=>import('./component/receipe/receipe.module').then(n=>n.ReceipeModule)},
  {path:'library', component:LibHeaderComponent},
  {path:'receipe', component:ReceipeHeaderComponent}
  // {path:'listBooks', component:ListbooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
