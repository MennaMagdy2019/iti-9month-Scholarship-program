import { Component } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {
 studensts=[
  {name:"menna",age:23,address:"Mansoura"},
  {name:"hadeer",age:22,address:"Alex"},
  {name:"shrouk",age:26,address:"cairo"},
  {name:"rabab",age:22,address:"cairo"},
 ]
}
