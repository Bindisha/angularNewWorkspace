import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListbooksComponent } from './listbooks/listbooks.component';
import {  AddbookTemplateComponent } from './addbookTemplate/addbookTemplate.component';
import { LibraryManagementComponent } from './library-management/library-management.component';
import { EditbookComponent } from './editbook/editbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { DeletebookComponent } from './deletebook/deletebook.component';
import { AddbookReactiveComponent } from './addbookReactive/addbookReactive.component';
import { AddbookComponent } from './addbook/addbook.component';

export const libraryRoutes:Routes=[
  {
   path:'', component:LibraryManagementComponent,
   children:[
     {path:'addBooks',component:AddbookComponent},
     {path:'addBooksTemplate',component:AddbookTemplateComponent},
     {path:'addBooksReactive',component:AddbookReactiveComponent},
     {path:'edit/:id/editBooks',component:EditbookComponent},
     {path:'listBooks/:id',component:ListbooksComponent},
     {path:'view/:id',component:ViewbookComponent},
     {path:'listBooks',component:ListbooksComponent}
   ]
  }
 ]


