import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  constructor(private authService:AuthService,private router:Router) {
      
  }
  username = localStorage.getItem('username');
  isLoggedIn!:boolean;

  logout(){
    var loggedOut= this.authService.logout();
    if(loggedOut){
           this.router.navigate(['/login']);
    }
  }

  checkLoginInfo(){
   this.isLoggedIn=this.authService.loggedIn();
  }

}
