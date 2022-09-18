import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employees!:Employee[];
  constructor(private employeeService:EmployeeService) { }

  private getEmployee(){
    this.employeeService.getEmployees().subscribe({
      next: (resp)=>{
        this.employees=resp;
      },
      error: (err)=>{
        console.log(err);
      }
    })
  }

  ngOnInit(): void {
    this.getEmployee();
  }

}
