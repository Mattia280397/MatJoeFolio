import { NgModule } from '@angular/core';
import { PersonalareaComponent } from './personalarea.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [PersonalareaComponent],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
  ]
})
export class PersonalareaModule { }
