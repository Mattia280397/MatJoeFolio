import { Component } from '@angular/core';
@Component ({
  selector: 'app-personalarea',
  templateUrl: './personalarea.component.html',
  styleUrls: ['./personalarea.component.scss']
})
export class PersonalareaComponent {
  username: string = '';
  email:string="";
  constructor(){}
  ngOnInit() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    this.username = currentUser.username;
    this.email=currentUser.email;
  }

}
