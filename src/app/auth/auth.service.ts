import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
    redirectUrl: string;

    public isLogged(): boolean {
        return !!+localStorage.getItem('logged');
    }

    constructor(public http: Http) {

    }

    public login(username: string, password: string): Observable<boolean> {
        return this.http.post('/admin/login', JSON.stringify({ username: username, password: password })).map((res: Response) => {
            if (res.status !== 201) {
                return false;
            }
            localStorage.setItem('logged', '1');
            return true;
        });
    }

    public logout(): Observable<boolean> {
        return this.http.post('/admin/logout', JSON.stringify({})).map((res: Response) => {
            if (res.status === 201) {
                return true;
            }
            localStorage.setItem('logged', '0');
            return false;
        });
    }
}
