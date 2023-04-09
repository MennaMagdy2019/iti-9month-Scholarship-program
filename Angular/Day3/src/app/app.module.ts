import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/pages/home/home.component';
import { StudentsComponent } from './Components/pages/students/students.component';
import { DetailsComponent } from './Components/pages/details/details.component';
import { ErrorComponent } from './Components/pages/error/error.component';
import { HeaderComponent } from './Components/partials/header/header.component';
import { FooterComponent } from './Components/partials/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentsComponent,
    DetailsComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
      {path:"",component:HomeComponent},
      {path:"home",component:HomeComponent},
      {path:"students",component:StudentsComponent},
      {path:"details/:id",component:DetailsComponent},
      {path:"**",component:ErrorComponent}
    ]
    )

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
