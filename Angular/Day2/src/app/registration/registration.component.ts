import { Component, EventEmitter ,Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {
  name="";
  age:any;
  // students:{name:string,age:number}[]=[];

  // DataLogin = "Data from login"
  // AddStudent(){
  //   let newStudent:{name:string,age:number}={name:this.name,age:this.age}
  //   if(this.age>=20 && this.age<=40 && this.name.length >= 3){
  //     this.students.push(newStudent)
  //   }

    @Output()getDataEvent = new EventEmitter()

    AddStudent(){
      let newStudent:{name:string,age:number}={name:this.name,age:this.age}
      this.getDataEvent.emit(newStudent)
    }
  }

