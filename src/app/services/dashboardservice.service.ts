import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Logindata} from '../interfaces/logindata';
import {Dashboard} from '../interfaces/dashboard'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DashboardserviceService  {
public credentialsData='../../assets/data/credential.json';
public dashboardData='../../assets/data/dashboard.json';
public userAuthentication:boolean=false;
public temp:string='';
public tempUserAuthentication:boolean=false
  constructor(private httpRef:HttpClient,private router:Router) { }
  public canActivate():boolean{
    const isAuthenticate = localStorage.getItem('isAuthenticate');
    if(isAuthenticate==='true'){
      return true
    }else{
      this.router.navigateByUrl('/login')
      return false
    }
    
  }
  public getCredetentials():Observable<Logindata[]>{
    return this.httpRef.get<Logindata[]>(this.credentialsData)
  }
  public getDashboardData():Observable<Dashboard[]>{
    return this.httpRef.get<Dashboard[]>(this.dashboardData)
  }
  public userAuthenticationStatusFromLogin(authvalue:boolean):void{
   this.userAuthentication=authvalue;
  }
}
