import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Dashboard } from '../interfaces/dashboard';
import { DashboardserviceService } from '../services/dashboardservice.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dashboardData:Dashboard[]=[];
  public userAuthValue:boolean=false
  constructor(private dashboardServiceRef:DashboardserviceService,private router:Router){}
  
 public  ngOnInit(): void {
    this.getDashboardData();
  }

  public getDashboardData():void{
    try{
      this.dashboardServiceRef.getDashboardData().subscribe((data)=>{
     this.dashboardData=data
      }) 
    }catch(error){
     console.log(error,'error')
    }
  }
  public onLogout():void{
    localStorage.setItem("isAuthenticate",'false')
    console.log(localStorage.getItem("userauthenticationvalue"))
    this.router.navigateByUrl('/login')
  }
}
