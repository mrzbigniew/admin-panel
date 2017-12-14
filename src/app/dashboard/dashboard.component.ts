import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    menuItems: Object[] = [
        {
            name: 'Home',
            icon: 'home'
        }
    ]
    constructor(private authService: AuthService){

    }
}