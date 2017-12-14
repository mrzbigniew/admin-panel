import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardRoutingModule } from './dashboard.routing.module';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyMenuListModule } from '../my-menu-list/my-menu-list.module';
import { MyMenuListItemModule } from '../my-menu-list-item/my-menu-list-item.module';
import { AuthModule } from '../auth/auth.module';

import { ToolbarUserInfoComponent } from './toolbar-user-info.component';
import { DashboardComponent } from './dashboard.component';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MaterialModule,
        BrowserAnimationsModule,
        MyMenuListModule,
        AuthModule,
        CoreModule
    ],
    declarations: [
        DashboardComponent,
        ToolbarUserInfoComponent
    ],
    providers: [

    ]
})
export class DashboardModule {

}