import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmpComponent } from './Components/add-emp/add-emp.component';
import { DetailsEmpComponent } from './Components/details-emp/details-emp.component';
import { ErrorComponent } from './Components/error/error.component';
import { HomeComponent } from './Components/home/home.component';
import { UpdateEmpComponent } from './Components/update-emp/update-emp.component';

const routes: Routes = [
  {path:"",redirectTo:"Employees",pathMatch:"full"},
  {path:"Employees",component:HomeComponent},
  {path:"add",component:AddEmpComponent},
  {path:"Employees/:id",component:DetailsEmpComponent},
  {path:"update/:id",component:UpdateEmpComponent},
  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
