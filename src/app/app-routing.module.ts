import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { AddFrmComponent } from './components/dashboard/add-frm/add-frm.component';
import { TableComponent } from './components/dashboard/table/table.component';

const routes: Routes = [
  {path:"",redirectTo:"Products",pathMatch:"full"},
  {path:"Product/Add",component:AddFrmComponent},
  {path:"Products",component:TableComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
