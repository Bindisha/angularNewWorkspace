import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceipeManagementComponent } from './receipe-management/receipe-management.component';
import { AddReceipeComponent } from './add-receipe/add-receipe.component';
import { EditReceipeComponent } from './edit-receipe/edit-receipe.component';
import { ListReceipeComponent } from './list-receipe/list-receipe.component';
import { DeletereceipeComponent } from './deletereceipe/deletereceipe.component';
import { ViewreceipeComponent } from './viewreceipe/viewreceipe.component';

export const receipeRoutes:Routes=[
  {
   path:'', component:ReceipeManagementComponent,
   children:[
     {path:'addReceipe',component:AddReceipeComponent},
     {path:'edit/:id/editReceipe',component:EditReceipeComponent},
     {path:'delete/:id/:name',component:DeletereceipeComponent},
     {path:'view/:id',component:ViewreceipeComponent},
     {path:'listReceipe',component:ListReceipeComponent}
   ]
  }
 ]


