import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginModel } from '../models/loginModel';
import { loginResponse } from '../models/loginResponseModel';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   baseUrl:string=environment.baseUrl+'/authentication';
  login(model:LoginModel){
    return this.http.post<loginResponse>(this.baseUrl+'/login',model);
  }

  constructor(private http:HttpClient) { }
}
