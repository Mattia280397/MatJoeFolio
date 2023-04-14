import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PreventiveComponent } from '../preventive/preventive.component';
import { PaymentComponent } from '../payment/payment.component';
import { PersonalareaComponent } from './personalarea.component';
const routes: Routes = [

  { path: '', component: PersonalareaComponent },
  
 { path: 'preventive', component: PreventiveComponent },
  
 { path: 'payment', component: PaymentComponent },
  ];
@NgModule({
  declarations: [PreventiveComponent,PaymentComponent,PersonalareaComponent],
  imports: [
    FormsModule,
    RouterModule,
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule,
  ]
})
export class PersonalareaModule { }
