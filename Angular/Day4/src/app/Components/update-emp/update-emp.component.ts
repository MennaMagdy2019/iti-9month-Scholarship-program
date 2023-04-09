import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {EmployeesService} from 'src/app/Services/employees.service'

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styles: [
  ]
})
export class UpdateEmpComponent implements OnInit {
  ID=0;

  constructor(private empService:EmployeesService,private myActivatedRoute:ActivatedRoute){}

  Employee:any;
  ngOnInit():void{
    this.ID = this.myActivatedRoute.snapshot.params["id"]
    this.empService.GetEmployeeByUrl(this.ID).subscribe({
      next:(data)=>{
        console.log(data)
        this.Employee=data
      },
      error:(err)=>{console.log(err)}
    })
  }

  update(name:any, age:any, email:any,add:any,phone:any,salary:any){
    this.Employee={name:name,age:age,address:add,phone:phone,email:email,salary:salary}
    this.ID = this.myActivatedRoute.snapshot.params["id"]
   this.empService.updateEmployee(this.ID, this.Employee).subscribe(
    {
      next:(data)=>{
        console.log(data)
      },
      error:(err)=>{console.log(err)}
    }
   )

  }
}
