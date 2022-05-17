import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./customer/list/list.component";
import {CreateComponent} from "./customer/create/create.component";
import {EditComponent} from "./customer/edit/edit.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
