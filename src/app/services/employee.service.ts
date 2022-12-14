import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl= environment.baseUrl+'/employee';

  constructor(private http:HttpClient) {
   
   }
   getEmployees(){
     return this.http.get<Employee[]>(this.baseUrl+'/getemployees');
   }
}
