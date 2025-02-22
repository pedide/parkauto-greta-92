import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { User } from '../../models/user/user';
import { UserService } from '../../services/user/user.service';
import { NotificationType } from '../../enum/notification-type.enum';
import { HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../../services/notification/notification.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  implements OnInit{

  private titleSubject = new BehaviorSubject<string>('Users');
  public titleAction$ = this.titleSubject.asObservable();
  public users: User[] = [];
  public refreshing: boolean = false;
  private subscriptions : Subscription[] =[];

  constructor(private userService:UserService, private notificationService:NotificationService){}

  public changeTitle(title:string) : void {

    this.titleSubject.next(title);
  }

  ngOnInit(): void {
    this.getUsers(true);
    
  }

  public getUsers(showNotification:boolean):void{
    this.refreshing =true;
    this.subscriptions.push(
      this.userService.getUsers().subscribe({
            next :
            (response : User[]) =>{
              this.userService.addUsersToLocalCache(response);
              this.users = response;
              this.refreshing = false;

              if(showNotification){
                this.sendNotification(NotificationType.SUCCESS, `${response.length} user(s) loaded successfully.`);

              }

            },
            error:
           (errorResponse: HttpErrorResponse) =>{
             this.sendNotification(NotificationType.ERROR, errorResponse.error.message);
             this.refreshing = false;
           
            }
      
    


  }) );
    

  }
  private sendNotification(notificationType: NotificationType, message: string) {
    if (message) {
      this.notificationService.notify(notificationType, message);
    } else {
      this.notificationService.notify(notificationType, 'Une erreur est survenue. Veuillez réessayer.');
    }

  }
}
