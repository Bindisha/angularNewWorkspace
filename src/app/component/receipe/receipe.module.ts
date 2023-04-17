import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatmaterailModule } from 'src/app/matmaterail.module';
import { receipeRoutes } from './receipe.routing';
import { RouterModule } from '@angular/router';
import { AddReceipeComponent } from './add-receipe/add-receipe.component';
import { EditReceipeComponent } from './edit-receipe/edit-receipe.component';
import { ReceipeManagementComponent } from './receipe-management/receipe-management.component';
import { ReceipeHeaderComponent } from './receipe-header/receipe-header.component';
import { HeaderComponent } from '../generic/header/header.component';
import { ListReceipeComponent } from './list-receipe/list-receipe.component';



@NgModule({
  declarations: [
    AddReceipeComponent,
    EditReceipeComponent,
    ReceipeManagementComponent,
    ReceipeHeaderComponent,
    ListReceipeComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MatmaterailModule,
    RouterModule.forChild(receipeRoutes)
  ],
  exports:[
    HeaderComponent
  ]
})
export class ReceipeModule { }
