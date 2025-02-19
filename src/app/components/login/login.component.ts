import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { NotificationService } from '../../services/notification/notification.service';
import { User } from '../../models/user/user';
import { HttpResponse } from '@angular/common/http';
import { HeaderType } from '../../enum/header-type.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy{
  
  public showLoading !: boolean;
  private subscriptions : Subscription[] =[];


  constructor(
    private router:Router,
    private authenticationService : AuthenticationService,
    private notificationService: NotificationService
  ){}

  ngOnInit(): void {
    
    if(this.authenticationService.isUserLoggedIn()){
      this.router.navigateByUrl('/user/management');  
    } else{
      this.router.navigateByUrl('/login');
    }
  }

  
  public onLogin(user:User):void {
    this.showLoading = true;

    this.subscriptions.push(
      this.authenticationService.login(user).subscribe(
        (response:HttpResponse<User>) =>{

          console.log(response);
         // const token = response.headers.get(HeaderType.JWT_TOKEN);

        }

      )
    )
   
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(
      sub => sub.unsubscribe()
    );
  }

}
