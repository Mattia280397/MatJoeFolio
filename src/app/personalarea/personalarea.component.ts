import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component ({
  selector: 'app-personalarea',
  templateUrl: './personalarea.component.html',
  styleUrls: ['./personalarea.component.scss']
})
export class PersonalareaComponent {
  username: string = '';
  email:string="";
  MyRouter:Router;
  constructor(router: Router,) { this.MyRouter=router;}
  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.username = currentUser.username;
    this.email=currentUser.email;
  }
  Logout(){
    localStorage.setItem('isLogged', JSON.stringify(false));
    this.MyRouter.navigateByUrl('/home');
  }
}
