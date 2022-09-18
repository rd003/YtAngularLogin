import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   loggedIn(){
     return !! this.getToken() && !this.tokenExpired();
   }


   getToken(){
      let token = localStorage.getItem('token');
      return token;
   }

   removeToken(){
    localStorage.removeItem('token');
   }
   
   getUsername(){
    let username = localStorage.getItem('username');
      return username;
   }

   removeUsername(){
    localStorage.removeItem('username');

   }
  
    logout():boolean{
      let loggedIn=this.loggedIn();
      if(loggedIn){
        this.removeToken();
        this.removeUsername();
        return true;
      }
      return false;
    }

   tokenExpired(){
    const token: string=this.getToken()??"";
    if(!token)
      return false;
    const tokenSplit:string=token.split('.')[1];
    const decodedString:string=atob(tokenSplit);
    const jsonString=JSON.parse(decodedString);
    console.log(jsonString);
    const expiry = (jsonString).exp;
    return (Math.floor((new Date).getTime() / 1000)) >= expiry;
   }

  constructor() { }
}
