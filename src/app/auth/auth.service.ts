import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    redirectUrl: string;

    public isLogged(): boolean {
        return !!localStorage.getItem('user');
    }

    constructor(private http: HttpClient) {

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
