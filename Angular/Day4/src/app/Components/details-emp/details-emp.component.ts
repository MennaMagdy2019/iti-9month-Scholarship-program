import { Component } from '@angular/core';
import {EmployeesService} from 'src/app/Services/employees.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details-emp',
  templateUrl: './details-emp.component.html',
  styles: [
  ]
})
export class DetailsEmpComponent {
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
}
