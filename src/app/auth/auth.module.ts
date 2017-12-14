import { NgModule } from '@angular/core';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        HttpClientModule
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
