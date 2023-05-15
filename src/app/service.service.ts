import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject} from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MyService  {
  onRegister: Subject <any>= new Subject();
  firebase = new BehaviorSubject<string>('');
  
  constructor(private http: HttpClient,
    private router: Router) {
    this.loggedIn.next(!localStorage.getItem('token'));
    
  }

  private apiUrl ='https://forregistration-a4a0c-default-rtdb.firebaseio.com/'
  
  sendData(data:any){
    return this.http.post
    ('https://forregistration-a4a0c-default-rtdb.firebaseio.com/post.json', data) 
    
  }
  private loggedIn = new BehaviorSubject<boolean>(false);

  

login(username: string, password: string): Observable<any> {
  return this.http.post<any>(`${this.apiUrl}/main.json`, { username, password })
    .pipe(map(response => {
      if (response && response.token) {
        localStorage.setItem('token', response.token);
        this.loggedIn.next(true);
      }
      
      return response;
    }));

}
isLoggedIn(): Observable<boolean> {
  return this.loggedIn.asObservable(); 
}

logout(): void {
  localStorage.removeItem('token');
  this.loggedIn.next(false);
}


}