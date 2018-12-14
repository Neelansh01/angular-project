import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { URLSearchParams } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
//import { AppComponent } from './app.component';
import  {Http,Response} from '@angular/http'
import { map, filter, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})

export class AppComponent {}
