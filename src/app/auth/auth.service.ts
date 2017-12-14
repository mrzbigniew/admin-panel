import { Injectable } from "@angular/core";
// import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

interface User{
    username: string;
    name?: string;
}

@Injectable()
export class AuthService {
    redirectUrl: string;

    public isLogged(): boolean {
        return !!localStorage.getItem('logged');
    }

    constructor() {

    }

    public login(username: string, password: string): boolean {
        //TODO
        localStorage.setItem('logged', JSON.stringify({
            username: username
        }));
        return true;
    }

    public logout(): void {
        //TODO 
        localStorage.removeItem('logged');
    }
}
