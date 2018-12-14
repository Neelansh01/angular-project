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
  selector: '',
  template: '<button (click)="loadList()">Load List</button><br><br>  <pre>{{abc}}</pre>',
  styleUrls: ['./app.component.css']
})

export class adminComponent{
	abc = "Welcome"
	constructor(private _http:Http){}
	loadList(){
		return this._http.get("http://localhost:8080/fetch").subscribe(result=>{
			var json = JSON.parse(result._body)
			this.abc = ""
			for(var i=0;i<json.length;i++){
				this.abc = this.abc + json[i].message;
			}
			//this.abc = JSON.parse(result._body)[0].message + "<br>guyhujk"
			//console.log(JSON.parse(result._body)[0].message)
		})
	}
}