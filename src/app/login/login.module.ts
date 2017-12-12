import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';
import { AuthService } from '../auth/auth.service';

@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
    providers: [
        AuthService
    ]
})
export class LoginModule {

}