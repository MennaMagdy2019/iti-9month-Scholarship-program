import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {EmployeesService} from 'src/app/Services/employees.service'

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styles: [
  ]
})
export class AddEmpComponent {
  constructor(private empService:EmployeesService,private router:Router){}

  AddEmp(name:any, age:any, email:any,add:any,phone:any,salary:any){
   let newEmp={name:name,age:age,address:add,phone:phone,email:email,salary:salary}
   this.empService.AddNewEmployee(newEmp).subscribe();
  //  newEmp:{}
   this.router.navigateByUrl("Employees")
  }
}
