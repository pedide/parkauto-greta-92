import { Injectable } from '@angular/core';
import { AppSettings } from '../../settings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public host = AppSettings.APP_URL;
  declare private token:string;
  declare private loggedInUsername : string;
  private jwtHelper = new JwtHelperService();

  constructor() { }
}
