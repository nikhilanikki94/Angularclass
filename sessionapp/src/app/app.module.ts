import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}  from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SessionComponent } from './session/session.component';
import { HomeComponent } from './home/home.component';
import { StorageServiceModule } from 'angular-webstorage-service';



@NgModule({
  declarations: [
    AppComponent,
    SessionComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StorageServiceModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
