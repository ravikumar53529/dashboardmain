import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {DashboardserviceService} from './services/dashboardservice.service'
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext'
import {ButtonModule} from 'primeng/button';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CardModule,
    InputTextModule,
    ButtonModule,ReactiveFormsModule
    
  ],
  providers: [DashboardserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
