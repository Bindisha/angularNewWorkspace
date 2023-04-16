import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListbooksComponent } from './listbooks/listbooks.component';
import { AddbookComponent } from './addbook/addbook.component';
import { ViewbookComponent } from './viewbook/viewbook.component';
import { EditbookComponent } from './editbook/editbook.component';
import { LibraryManagementComponent } from './library-management/library-management.component';
import { LibHeaderComponent } from './lib-header/lib-header.component';
import { LibFooterComponent } from './lib-footer/lib-footer.component';
import { MatmaterailModule } from 'src/app/matmaterail.module';



@NgModule({
  declarations: [
    ListbooksComponent,
    AddbookComponent,
    ViewbookComponent,
    EditbookComponent,
    LibraryManagementComponent,
    LibHeaderComponent,
    LibFooterComponent
  ],
  imports: [
    CommonModule,
    MatmaterailModule,
  ],
  exports:[
    ListbooksComponent,
    AddbookComponent,
    ViewbookComponent,
    EditbookComponent,
    LibHeaderComponent,
    LibFooterComponent,
    LibraryManagementComponent
  ]
})
export class LibraryModule { }
