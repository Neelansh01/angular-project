import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  {Http,Response} from '@angular/http'
import { map, filter, switchMap } from 'rxjs/operators';
import {RouterModule}  from '@angular/router';
import {adminComponent} from './admin.component'
import {abcComponent} from './abc.component';
@NgModule({
  declarations: [
    AppComponent,adminComponent,abcComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot([
    	{path:'admin',component:adminComponent},
    	{path:'home',component:abcComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}