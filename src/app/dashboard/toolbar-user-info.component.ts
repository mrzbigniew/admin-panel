import { Component, Input } from '@angular/core';
import { User } from '../user/models/User';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'toolbar-user-info',
    templateUrl: './toolbar-user-info.component.html',
    styleUrls: [
        './toolbar-user-info.component.css'
    ]
})
export class ToolbarUserInfoComponent {
    @Input() user: User;

    constructor(private authService: AuthService, private router: Router) {

    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}