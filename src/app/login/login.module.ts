import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';
import { AuthService } from '../auth/auth.service';
import { AuthGuardService } from '../auth/auth-guard.service';
import { MaterialModule } from '../material/material.module';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        MaterialModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [

    ],
    providers: [
        AuthService,
        AuthGuardService
    ]
})
export class LoginModule {

}