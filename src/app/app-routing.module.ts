import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibHeaderComponent } from './component/library/lib-header/lib-header.component';
import { ReceipeHeaderComponent } from './component/receipe/receipe-header/receipe-header.component';
import { ListbooksComponent } from './component/library/listbooks/listbooks.component';
import { HomeComponent } from './component/home/home.component';
import { AboutusComponent } from './component/aboutus/aboutus.component';

const routes: Routes = [
  {path:'library',
  loadChildren:()=>import('./component/library/library.module').then(m=>m.LibraryModule)},
  {path:'receipe',
  loadChildren:()=>import('./component/receipe/receipe.module').then(n=>n.ReceipeModule)},
  {path:'aboutus',component: AboutusComponent},
  {path:'home',component: HomeComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
