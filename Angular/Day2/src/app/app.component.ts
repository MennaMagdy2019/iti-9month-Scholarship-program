import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day2';
  students:{name:string,age:number}[]=[];

DataFromLogin=""
  getData(e:any){
    if(e.age>=20 && e.age<=40 && e.name.length >= 3){
      this.students.push(e)
      }

   console.log(this.students)
  }
}
