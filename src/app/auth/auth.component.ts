import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from './auth.service';
import {MyService} from '../service.service'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService,
    private MyService: MyService,
     private router: Router,
     private http: HttpClient,) {}
     
  isLoginMode = true;
  error: string = null;
  user: { email: string, name: string };
  logoutButton = false;
  public sessionData: any;


  ngOnInit() {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;

   

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password);

      
    } else {
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe(
      resData => {     
        this.sessionData = sessionStorage.getItem('userData');
        this.user = JSON.parse(this.sessionData);
        this.logoutButton = true;

      },
      errorMessage => {
        this.error = errorMessage;
      }
    );
    

    form.reset();
  }
  onLogout() {
    this.authService.logout();
    sessionStorage.clear();
    this.isLoginMode = true;
  this.logoutButton =false;
  this.sessionData =false;
  }

 
  
}
