import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  myFormValid = new FormGroup({
    name:new FormControl(null,[Validators.required,Validators.minLength(3)]),
    age: new FormControl(null,[Validators.min(20),Validators.max(40)]),
    email:new FormControl(null,[Validators.required,Validators.email])
  })


  get nameValid(){
     return this.myFormValid.controls["name"].touched && this.myFormValid.controls["name"].invalid
  }
  get ageValid(){
    return this.myFormValid.controls["age"].touched  && this.myFormValid.controls["age"].invalid
 }
 get emailValid(){
  return this.myFormValid.controls["email"].touched && this.myFormValid.controls["email"].invalid
}

 getData(){
  console.log(this.myFormValid)
  if(this.nameValid && this.ageValid && this.emailValid)
    console.log("Name :",this.myFormValid.controls["name"].value);
    console.log("Age :",this.myFormValid.controls["age"].value);
    console.log("Email :",this.myFormValid.controls["email"].value);
 }
}
