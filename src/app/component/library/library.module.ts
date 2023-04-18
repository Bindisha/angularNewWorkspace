import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { LibraryManagementComponent } from './library-management/library-management.component';
import { MatmaterailModule } from 'src/app/matmaterail.module';
import { RouterModule } from '@angular/router';
import { libraryRoutes } from './libray.routing';
import { HeaderComponent } from '../generic/header/header.component';
import { LibHeaderComponent } from './lib-header/lib-header.component';
import { DeletebookComponent } from './deletebook/deletebook.component';



@NgModule({
  declarations: [
    ListbooksComponent,
    AddbookComponent,
    ViewbookComponent,
    EditbookComponent,
    LibraryManagementComponent,
    LibHeaderComponent,
    DeletebookComponent
  ],
  imports: [
    CommonModule,
    MatmaterailModule,
    RouterModule.forChild(libraryRoutes)
  ]
})
export class LibraryModule { }
