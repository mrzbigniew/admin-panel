import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { Output } from '@angular/core/src/metadata/directives';

@Component({
    selector: 'my-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username: string;
    password: string;
    loginError: boolean = false;

    constructor(private authService: AuthService, private router: Router) {

    }

    login() {
        console.log(this.username, this.password);
        if (this.authService.login(this.username, this.password)) {
            this.router.navigate(['/dashboard']);
        }
        else {
            this.loginError = true;
        }
    }
}
