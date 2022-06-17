import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { 
  }

  addEmployees(employee: any){
    return this.http.post("http://localhost:8080/empPayroll/create", employee);
  }

    getAllEmployee(){
      return this.http.get("http://localhost:8080/empPayroll/get");
    }

    updateEmployeeById(employee: any,id: number) {
      return this.http.put("http://localhost:8080/empPayroll/update/" +id, employee);
    }

    deleteEmployeeById(id:number){
      return this.http.delete("http://localhost:8080/empPayroll/delete/" +id);
    }
  
}
