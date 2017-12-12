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
        this.authService.login(this.username, this.password).subscribe(() => {
            if (this.authService.isLogged()) {
                const url = this.authService.redirectUrl ? this.authService.redirectUrl : '/';
                this.router.navigate([url]);
            }
            else {
                this.message = "Nieprawidłowy login lub hasło";
            }
        });
    }

    logout() {
        this.authService.logout().subscribe(() => {
            if (!this.authService.isLogged()) {
                this.router.navigate(['/login']);
            }
        });
    }
}
