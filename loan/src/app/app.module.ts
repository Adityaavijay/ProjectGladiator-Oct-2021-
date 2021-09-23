import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { Registration1Component } from './registration1/registration1.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';

@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    AdminloginComponent,
    Registration1Component,
    UserregistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
