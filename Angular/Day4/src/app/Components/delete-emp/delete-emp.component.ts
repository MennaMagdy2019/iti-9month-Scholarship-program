import { Component } from '@angular/core';
import {EmployeesService} from 'src/app/Services/employees.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-emp',
  templateUrl: './delete-emp.component.html',
  styles: [
  ]
})
export class DeleteEmpComponent {
  ID=0;
  constructor(private empService:EmployeesService,private myActivatedRoute:ActivatedRoute){}

  ngOnInit():void{
    this.ID = this.myActivatedRoute.snapshot.params["id"]
    this.empService.DeleteEmployeeByID(this.ID).subscribe()
  }
}
