import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { LoginModule } from './login/login.module';

import { DashboardModule } from './dashboard/dashboard.module';
import { MaterialModule } from './material/material.module';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        LoginModule,
        DashboardModule,
        MaterialModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [

    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
