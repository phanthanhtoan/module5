import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./product/list/list.component";
import {EditComponent} from "./product/edit/edit.component";
import {DeleteComponent} from "./product/delete/delete.component";
import {CreateComponent} from "./product/create/create.component";

const routes: Routes = [
  {
    path: 'benhAn',
    component: ListComponent
  },
  {
    path: 'benhAn/create',
    component: CreateComponent
  },
  {
    path: 'benhAn/edit/:id',
    component: EditComponent
  },
  {
    path: 'benhAn/delete/:id',
    component: DeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
