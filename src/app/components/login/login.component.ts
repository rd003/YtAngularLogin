import { Component, OnInit } from '@angular/core';
import { loginResponse } from 'src/app/models/loginResponseModel';
import { LoginService } from 'src/app/services/login.service';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginResponse!:loginResponse;
  frm!:FormGroup;
  constructor(private loginService:LoginService,private fb:FormBuilder,private router:Router,private authService:AuthService) { }

  get f(){
   return this.frm.controls;
  }

  onPost(){
     this.loginService.login(this.frm.value).subscribe({
      next:(resp)=>{
        console.log(resp.username);
        this.loginResponse=resp;
        if(resp.statusCode==1){
          localStorage.setItem('token',resp.token);
          localStorage.setItem('username',resp.username);
          this.router.navigate(['/employee']);
        }
        else{
          console.log(resp.message);
        }

      },
      error: (err)=>console.log(err)
     }
     
     )
  }

  ngOnInit(): void {
    this.frm = this.fb.group({
      'userName':['',Validators.required],
      'password':['',Validators.required],
    })

    if(this.authService.loggedIn()){
      this.router.navigate(['/employee'])
    }
  }

}
