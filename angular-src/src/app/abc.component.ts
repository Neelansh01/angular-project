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
  template: '<img src="assets/public/1.png" width="200px" height="200px" (mouseenter)="mouseenter1()" (mouseleave)="mouseleave1()" (click)="click1()"><br><img src="assets/public/5.png" width="200px" height="200px" (mouseenter)="mouseenter2()" (mouseleave)="mouseleave2()" (click)="click2()"><br><img src="assets/public/2.png" width="200px" height="200px" (mouseenter)="mouseenter3()" (mouseleave)="mouseleave3()" (click)="click3()"><br><img src="assets/public/3.png" width="200px" height="200px" (mouseenter)="mouseenter4()" (mouseleave)="mouseleave4()" (click)="click4()"><br><img src="assets/public/4.png" width="200px" height="200px" (mouseenter)="mouseenter5()" (mouseleave)="mouseleave5()" (click)="click5()">',
  styleUrls: ['./app.component.css']
})

export class abcComponent{
	constructor(private _http:Http){}
	mouseenter1(){
		var log = "user hovered image 1";
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('msg', log);
		return this._http.post("http://localhost:8080/post",urlSearchParams).subscribe(result=>{
			console.log(result)
		})
	}
	mouseenter2(){
		var log = "user hovered image 2";
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('msg', log);
		return this._http.post("http://localhost:8080/post",urlSearchParams).subscribe(result=>{
			console.log(result)
		})
	}
	mouseenter3(){
		var log = "user hovered image 3";
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('msg', log);
		return this._http.post("http://localhost:8080/post",urlSearchParams).subscribe(result=>{
			console.log(result)
		})
	}
	mouseenter4(){
		var log = "user hovered image 4";
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('msg', log);
		return this._http.post("http://localhost:8080/post",urlSearchParams).subscribe(result=>{
			console.log(result)
		})
	}
	mouseenter5(){
		var log = "user hovered image 5";
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('msg', log);
		return this._http.post("http://localhost:8080/post",urlSearchParams).subscribe(result=>{
			console.log(result)
		})
	}

	mouseleave1(){
		var log = "user hovered out image 1";
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('msg', log);
		return this._http.post("http://localhost:8080/post",urlSearchParams).subscribe(result=>{
		console.log(result)
		})	
	}
	mouseleave2(){
		var log = "user hovered out image 2";
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('msg', log);
		return this._http.post("http://localhost:8080/post",urlSearchParams).subscribe(result=>{
		console.log(result)
		})	
	}
	mouseleave3(){
		var log = "user hovered out image 3";
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('msg', log);
		return this._http.post("http://localhost:8080/post",urlSearchParams).subscribe(result=>{
		console.log(result)
		})	
	}
	mouseleave4(){
		var log = "user hovered out image 4";
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('msg', log);
		return this._http.post("http://localhost:8080/post",urlSearchParams).subscribe(result=>{
		console.log(result)
		})	
	}
	mouseleave5(){
		var log = "user hovered out image 5";
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('msg', log);
		return this._http.post("http://localhost:8080/post",urlSearchParams).subscribe(result=>{
		console.log(result)
		})	
	}

	click1(){
		var log = "user clicked image 1";
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('msg', log);
		return this._http.post("http://localhost:8080/post",urlSearchParams).subscribe(result=>{
		console.log(result)
		})		
	}
	click2(){
		var log = "user clicked image 2";
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('msg', log);
		return this._http.post("http://localhost:8080/post",urlSearchParams).subscribe(result=>{
		console.log(result)
		})		
	}
	click3(){
		var log = "user clicked image 3";
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('msg', log);
		return this._http.post("http://localhost:8080/post",urlSearchParams).subscribe(result=>{
		console.log(result)
		})		
	}
	click4(){
		var log = "user clicked image 4";
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('msg', log);
		return this._http.post("http://localhost:8080/post",urlSearchParams).subscribe(result=>{
		console.log(result)
		})		
	}
	click5(){
		var log = "user clicked image 5";
		let urlSearchParams = new URLSearchParams();
		urlSearchParams.append('msg', log);
		return this._http.post("http://localhost:8080/post",urlSearchParams).subscribe(result=>{
		console.log(result)
		})		
	}
}