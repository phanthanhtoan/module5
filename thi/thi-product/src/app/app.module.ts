import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import {HttpClientModule} from "@angular/common/http";
import { ListComponent } from './product/list/list.component';
import { EditComponent } from './product/edit/edit.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { DeleteComponent } from './product/delete/delete.component';
import { CreateComponent } from './product/create/create.component';
import {NgxPaginationModule} from "ngx-pagination";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ListComponent,
    EditComponent,
    DeleteComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
