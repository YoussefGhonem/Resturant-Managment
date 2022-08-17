import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from 'oidc-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = environment.ApiUrl+'Account/';
  constructor(private HttpClinet:HttpClient) { }

  Login(user:User){
   return this.HttpClinet.post<any>(this.baseUrl+"login",user);
  }


  Register(user:User){
    this.HttpClinet.post(this.baseUrl+"register",user).subscribe({
      next:()=>{
        console.log("Register Success")
      },
      error:()=>{
        console.log("Error Register")
      }
    })
  }


}
