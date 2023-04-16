import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibHeaderComponent } from './lib-header/lib-header.component';
import { LibFooterComponent } from './lib-footer/lib-footer.component';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { AddbookComponent } from './addbook/addbook.component';
import { LibraryManagementComponent } from './library-management/library-management.component';
import { EditbookComponent } from './editbook/editbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';

export const libraryRoutes:Routes=[
  {
   path:'', component:LibraryManagementComponent,
   children:[
     {path:'add',component:AddbookComponent},
     {path:'view/:id/edit',component:EditbookComponent},
     //{path:'view/:id/:name',component:ViewComponent},
     {path:'view/:id',component:ViewbookComponent},
     {path:'list',component:ListbooksComponent}
   ]
  }
 ]


