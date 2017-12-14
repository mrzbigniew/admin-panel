import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';


interface User {
    username: string;
    name?: string;
}

@Injectable()
export class AuthService {
    redirectUrl: string;

    public isLogged(): boolean {
        return !!localStorage.getItem('user');
    }

    constructor(private http: Http) {

    }

    public login(username: string, password: string): boolean {
        //TODO: 
        localStorage.setItem('user', JSON.stringify({
            username: username
        }));
        return true;
    }

    public logout(): void {
        //TODO 
        localStorage.removeItem('user');
    }
}
