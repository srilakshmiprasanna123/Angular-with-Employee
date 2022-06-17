import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { EmployeeModel } from './Model/employee.Model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  employee: EmployeeModel = new EmployeeModel("","","", "", 0, "", "", new Date);

  id: any = this.route.snapshot.paramMap.get("id")

  constructor(private router:Router, private service:EmployeeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  onCancel() {
    this.router.navigate(["dashboard"]);
  }

  onSubmit() {
    console.log(this.employee);
     this.service.addEmployees(this.employee).subscribe((data:any)=> 
    {
      this.router.navigate(["dashboard"])
    })
  }
    getVal(value: String) {
    this.employee.department = value.toString();
  }

  updateEmployeeData() {
    this.service.updateEmployeeById(this.employee, this.id).subscribe ((data:any) => {
      this.router.navigate(["dashboard"])
    });
    
    
  }

}
