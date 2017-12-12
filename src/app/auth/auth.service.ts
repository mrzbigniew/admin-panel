import { Injectable } from "@angular/core";
// import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class AuthService {
    redirectUrl: string;

    public isLogged(): boolean {
        return !!+localStorage.getItem('logged');
    }

    constructor() {

    }

    public login(username: string, password: string): boolean {
        //TODO
        localStorage.setItem('logged', '1');
        return true;
    }

    public logout(): void {
        //TODO 
        localStorage.setItem('logged', '0');
    }
}
