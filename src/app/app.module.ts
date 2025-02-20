import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehiculeComponent } from './components/vehicule/vehicule.component';
import { VoitureComponent } from './components/voiture/voiture.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { UserComponent } from './components/user/user.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { NotificationModule } from './notification.module';
import { NotificationService } from './services/notification/notification.service';
import { AuthenticationService } from './services/authentication/authentication.service';
import { UserService } from './services/user/user.service';


@NgModule({
  declarations: [
    AppComponent,
    VehiculeComponent,
    VoitureComponent,
    HeaderComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NotificationModule
   
  ],
  providers: [NotificationService,AuthenticationService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
