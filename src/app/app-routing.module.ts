import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibHeaderComponent } from './component/library/lib-header/lib-header.component';
import { LibFooterComponent } from './component/library/lib-footer/lib-footer.component';
import { ListbooksComponent } from './component/library/listbooks/listbooks.component';
import { AddbookComponent } from './component/library/addbook/addbook.component';
import { LibraryManagementComponent } from './component/library/library-management/library-management.component';

const routes: Routes = [
  {path:'book',
  loadChildren:()=>import('./component/library/library.module').then(m=>m.LibraryModule)},
  {path:'addBooks', component:AddbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
