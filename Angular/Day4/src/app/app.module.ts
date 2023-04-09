import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { CustdirectiveDirective } from './Directives/custdirective.directive';
import { CustomPipe } from './Pipes/custom.pipe';
import { ErrorComponent } from './Components/error/error.component';
import { HomeComponent } from './Components/home/home.component';
import { AddEmpComponent } from './Components/add-emp/add-emp.component';
import { UpdateEmpComponent } from './Components/update-emp/update-emp.component';
import { DetailsEmpComponent } from './Components/details-emp/details-emp.component';
import { DeleteEmpComponent } from './Components/delete-emp/delete-emp.component';
import { HeaderComponent } from './Components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    CustdirectiveDirective,
    CustomPipe,
    ErrorComponent,
    HomeComponent,
    AddEmpComponent,
    UpdateEmpComponent,
    DetailsEmpComponent,
    DeleteEmpComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
   // HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
