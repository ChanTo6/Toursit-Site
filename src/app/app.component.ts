import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {MyService} from './service.service'
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
 
  constructor(
    private MyService : MyService, 
    private http : HttpClient,
    private formBuilder: FormBuilder, 
    private router: Router,
    ){}
    Appfirebase : string;
    RegistrationButtom =true
    showRegistrationForm = false;
    isOpen =false;
    Logoutform = false;
    isDropdownOpen = false;
    adminToggle =false;
    data :any;

    ngOnInit() {
     if (localStorage.getItem('username') !== null){
      this.RegistrationButtom =false
      this.Logoutform =true
      this.isOpen = true
     }
  
     
    }



    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    }
    openRegistrationForm() :boolean {
      return this.showRegistrationForm = true;
    }
  
    closeRegistrationForm() {
      this.showRegistrationForm = false;
    }

    onFormSubmitted(form: FormGroup) {
      this.showRegistrationForm =false
      this.RegistrationButtom =false
      this.isOpen =true
      this.Logoutform =true
      this.adminToggle = true;
    }



  postForm = new FormGroup ({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl(''),
  });

  onSubmitPost(){
    const formData = this.postForm.value;
    this.MyService.sendData(this.postForm.value).subscribe((responseData:any)=>{
    }) 
    this.postForm.reset()
    };


 
    logout() {
      localStorage.removeItem('username');
      localStorage.removeItem('email');
       localStorage.removeItem('password');
       this.MyService.onRegister.next(true);
      this.Logoutform =false
      this.RegistrationButtom =true
      this.isOpen = false
      this.adminToggle =false
      
    }



   
  }
  
  
 