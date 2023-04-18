import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { AddbookComponent } from './addbook/addbook.component';
import { LibraryManagementComponent } from './library-management/library-management.component';
import { EditbookComponent } from './editbook/editbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';

export const libraryRoutes:Routes=[
  {
   path:'', component:LibraryManagementComponent,
   children:[
     {path:'addBooks',component:AddbookComponent},
     {path:'edit/:id/editBooks',component:EditbookComponent},
     {path:'delete/:id/:name',component:DeletebookComponent},
     {path:'view/:id',component:ViewbookComponent},
     {path:'listBooks',component:ListbooksComponent}
   ]
  }
 ]


