import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceipeManagementComponent } from './receipe-management/receipe-management.component';
import { AddReceipeComponent } from './add-receipe/add-receipe.component';
import { EditReceipeComponent } from './edit-receipe/edit-receipe.component';
import { ListReceipeComponent } from './list-receipe/list-receipe.component';

export const receipeRoutes:Routes=[
  {
   path:'', component:ReceipeManagementComponent,
   children:[
     {path:'addReceipe',component:AddReceipeComponent},
     {path:'view/:id/edit',component:EditReceipeComponent},
     //{path:'view/:id/:name',component:ViewComponent},
    //  {path:'view/:id',component:view},
     {path:'listReceipe',component:ListReceipeComponent}
   ]
  }
 ]


