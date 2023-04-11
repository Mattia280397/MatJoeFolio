import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginRoutingModule } from './login-routing.module';
import { PersonalareaComponent } from '../personalarea/personalarea.component';
const routes: Routes = [
 {
   path: '',
   component: LoginComponent
 },
 {
   path: 'personalarea',  component:PersonalareaComponent
 },
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    FormsModule,
    CommonModule,
    HttpClientModule,
    LoginRoutingModule,
  ],
  exports: [
    RouterModule,
    LoginComponent
  ],
})
export class LoginModule { }

