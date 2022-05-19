import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./customer/list/list.component";
import {CreateComponent} from "./customer/create/create.component";
import {EditComponent} from "./customer/edit/edit.component";
import {DeleteComponent} from "./customer/delete/delete.component";

const routes: Routes = [
  {
    path: 'customer',
    component: ListComponent
  },
  {
    path: 'customer/create',
    component: CreateComponent
  },
  {
    path: 'customer/edit/:id',
    component: EditComponent
  },
  {
    path:'customer/delete/:id',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
