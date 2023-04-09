import { Component , OnInit } from '@angular/core';
import {EmployeesService} from 'src/app/Services/employees.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit{
  //ID=0;
  constructor(private empService:EmployeesService){}

  Employees:any;
  ngOnInit():void{
    this.empService.GetALLEmployees().subscribe({
      next:(data)=>{
        console.log(data)
        this.Employees=data
      },
      error:(err)=>{console.log(err)}
    })
  }

  deleteEmp(ID:any){
   // this.ID = this.myActivatedRoute.snapshot.params["id"]
    this.empService.DeleteEmployeeByID(ID).subscribe({
      next:(data)=>{
        console.log(data)
       
      //return data
      },
      error:(err)=>{console.log(err)}
    })
  }
}
