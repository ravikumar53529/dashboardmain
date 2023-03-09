import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Dashboard ,usersMainData,OrderedandDelivered} from '../interfaces/dashboard';
import { DashboardserviceService } from '../services/dashboardservice.service';
import {MenuItem} from 'primeng/api'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dashboardData:Dashboard[]=[];
  public userAuthValue:boolean=false;
  public items:MenuItem[]=[];
  public dashboardUsersData:usersMainData[]=[];
public orderedAndDeliveredData:OrderedandDelivered[]=[]
  constructor(private dashboardServiceRef:DashboardserviceService,private router:Router){}
  
 public  ngOnInit(): void {
    this.getDashboardData();
    this.getMenuBar();

  }
  public getMenuBar():void{
    this.items = [
        {
            label:'Dashboard',
            icon:'pi pi-fw pi-home',
            
        },
        {
            label:'Edit',
            icon:'pi pi-fw pi-pencil',
            items:[
                {
                    label:'Left',
                    icon:'pi pi-fw pi-align-left'
                },
                {
                    label:'Right',
                    icon:'pi pi-fw pi-align-right'
                },
                {
                    label:'Center',
                    icon:'pi pi-fw pi-align-center'
                },
                {
                    label:'Justify',
                    icon:'pi pi-fw pi-align-justify'
                },
  
            ]
        },
        {
            label:'Users',
            icon:'pi pi-fw pi-user',
            items:[
                {
                    label:'New',
                    icon:'pi pi-fw pi-user-plus',
  
                },
                {
                    label:'Delete',
                    icon:'pi pi-fw pi-user-minus',
  
                },
                {
                    label:'Search',
                    icon:'pi pi-fw pi-users',
                    items:[
                    {
                        label:'Filter',
                        icon:'pi pi-fw pi-filter',
                        items:[
                            {
                                label:'Print',
                                icon:'pi pi-fw pi-print'
                            }
                        ]
                    },
                    {
                        icon:'pi pi-fw pi-bars',
                        label:'List'
                    }
                    ]
                }
            ]
        },
        {
            label:'Events',
            icon:'pi pi-fw pi-calendar',
            items:[
                {
                    label:'Edit',
                    icon:'pi pi-fw pi-pencil',
                    items:[
                    {
                        label:'Save',
                        icon:'pi pi-fw pi-calendar-plus'
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-calendar-minus'
                    },
  
                    ]
                },
                {
                    label:'Archieve',
                    icon:'pi pi-fw pi-calendar-times',
                    items:[
                    {
                        label:'Remove',
                        icon:'pi pi-fw pi-calendar-minus'
                    }
                    ]
                }
            ]
        },
        {
            label:'Quit',
            icon:'pi pi-fw pi-power-off',
            command:()=>this.onLogout()
        }
    ];
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
