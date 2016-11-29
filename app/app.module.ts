/**
 * Created by Home on 11/20/16.
 */
import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {MyHttpService} from "./services/http.service";
import {InputTextModule} from "primeng/primeng";
import {ButtonModule} from "primeng/components/button/button";
import {Http, HttpModule} from "@angular/http";
import {LocationStrategy, HashLocationStrategy, CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import ENV from "../env/index";
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        InputTextModule,
        ButtonModule,
        RouterModule,
        HttpModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [
        MyHttpService,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: 'Constants', useValue: ENV},
    ]
})
export class AppModule { }