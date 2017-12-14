import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';

import { DashboardRoutingModule } from './dashboard.routing.module';
import { MaterialModule } from '../material/material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MyMenuListModule } from '../my-menu-list/my-menu-list.module';
import { MyMenuListItemModule } from '../my-menu-list-item/my-menu-list-item.module';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        MyMenuListModule
    ],
    declarations: [
        DashboardComponent
    ],
    providers: [

    ]
})
export class DashboardModule {

}