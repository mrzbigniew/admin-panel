import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../user/models/User';
import { UserService } from '../user/user.service';
import { MenuDataLoaderService } from '../core/services/menu-data-loader.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    menuItems: Object[] = [
        {
            name: 'O nas',
            icon: 'home',
            file: 'onas'
        },
        {
            name: 'Oferta',
            icon: 'assignment',
            file: 'oferta'
        },
        {
            name: 'Cennik',
            icon: 'attach_money',
            file: 'cennik'
        },
        {
            name: 'Galeria',
            icon: 'photo_album',
            file: 'galeria'
        },
        {
            name: 'Kontakt',
            icon: 'mail_outline',
            file: 'kontakt'
        },
        {
            name: 'Promocje',
            icon: 'alarm',
            file: 'promocje'
        },
    ];

    user: Object;

    constructor(private userService: UserService, private menuService: MenuDataLoaderService) {

    }

    ngOnInit() {
        this.user = this.userService.getCurrentUser();
    }
}
