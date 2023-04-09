import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private readonly myClient:HttpClient){}
  private readonly DB_URL="http://localhost:3000/Employees"
  //methods
  GetALLEmployees(){
    return this.myClient.get(this.DB_URL);
  }
  //Get Emp
  GetEmployeeByUrl(id:any){
    return this.myClient.get(this.DB_URL+"/"+id);
  }
  //Update
  updateEmployee(id:any,updateEmployee:any){
    return this.myClient.put(this.DB_URL+"/"+id,updateEmployee);
  }
  //Delete
  DeleteEmployeeByID(id:any){
    return this.myClient.delete(this.DB_URL+"/"+id);
  }
  //Add
  AddNewEmployee(newEmp:any){
    return this.myClient.post(this.DB_URL,newEmp)
  }
}
