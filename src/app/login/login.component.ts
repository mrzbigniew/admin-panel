import { Component, Input } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    @Input() username: string;
    @Input() password: string;
    message: string;

    constructor(private authService: AuthService, private router: Router) {

    }

    login() {
        this.authService.login(this.username, this.password);
        this.router.navigate['/dashboard'];
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
