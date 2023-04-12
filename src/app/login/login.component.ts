import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
 export interface User {
  username:string
  email: string
  password?: string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  newEmail: string = '';
  loginpasswordts: string = '';
  signEmail: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  phoneNumber: string = '';
  address: string = '';
  newPasswordMessagge: string = '';
  confirmMessage: string = '';
  userlist:User[]=[];
  MyRouter:Router;
  wronglog:string="";
  users:User;
  public insertuser:string="";
  public insertemail:string="";
  public matchedUser:User|undefined;
  constructor(private http: HttpClient, router: Router,) { this.MyRouter=router;  this.users = JSON.parse(localStorage.getItem('users') || '[]')}
  CheckPass() {
    if (this.newPassword.length < 10) {
      this.newPasswordMessagge = 'Too short';
    } else {
      this.newPasswordMessagge = 'Good';
    }
  }

  SamePass() {
    if (this.newPassword == this.confirmPassword) {
      this.confirmMessage = 'Passwords are equal';
    } else {
      this.confirmMessage = 'Passwords are different';
    }
  }

  Access() {
    this.http.get<{userlist:User[]}>('../../assets/users.json').subscribe(users => {
      this.matchedUser = users.userlist.find(user => user.email === this.signEmail && user.password === this.loginpasswordts);
    if (this.matchedUser) {
      localStorage.setItem('isLogged', JSON.stringify(true));
      localStorage.setItem('currentUser', JSON.stringify(this.matchedUser));
      this.MyRouter.navigateByUrl('/personalarea');
    } else {
      this.wronglog='Login failed';
    }
    });    
  }

  SignupWorks(){
    console.log("Bravoh");
  }
}