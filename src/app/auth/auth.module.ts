import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { HttpModule } from '@angular/http';


@NgModule({
    imports: [
        HttpModule
    ],
    exports: [

    ],
    declarations: [

    ],
    providers: [
        AuthService,
        AuthGuardService
    ]
})
export class AuthModule {

}
