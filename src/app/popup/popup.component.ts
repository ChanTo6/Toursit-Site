import { Component, ElementRef, Input, OnInit,  } from '@angular/core';
import {FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {MyService} from '../service.service'
import { EventEmitter,  Output } from '@angular/core';
import {  Router, } from '@angular/router';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit  {

  registrationForm!: FormGroup;
  aFormGroup!: FormGroup;
  user!: any;
  loggedIn!: any;
 
 constructor(private MyService: MyService,
    private router: Router,
    private authService: SocialAuthService,
    private formBuilder: FormBuilder ) {

  this.registrationForm = new FormGroup({
     'username': new FormControl('', [
       Validators.required,]),
     'email': new FormControl('', [
       Validators.required,
       Validators.email
     ]),
     'password': new FormControl('', [
       Validators.required,
       Validators.minLength(6)
     ])
   });
  
 }
 
 onSubmit(){
   this.MyService.sendData(this.registrationForm.value).subscribe((responseData)=>{  
   })
   if(this.registrationForm.valid){
     this.formSubmitted.emit(this.registrationForm)
     const { username, email, password } = this.registrationForm.value;
   this.MyService.login(username, password).subscribe(response => {

   });
   localStorage.setItem('username', this.registrationForm.get('username').value);
      localStorage.setItem('email', this.registrationForm.get('email').value);
      localStorage.setItem('password', this.registrationForm.get('password').value);
      this.MyService.onRegister.next(true);

      this.registrationForm.reset();
   }

 }
 @Output() formSubmitted = new EventEmitter<FormGroup>();

 ngOnInit() {
  this.authService.authState.subscribe((user) => {
    this.user = user;
    this.loggedIn = (user != null);

  });
 
 }

  
}