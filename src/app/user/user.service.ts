import { Injectable } from "@angular/core";
import { User } from './models/User';

@Injectable()
export class UserService {
    redirectUrl: string;

    constructor() {

    }

    public getCurrentUser(): User {
        //TODO: replace with code that connect to server and fetch current user data
        const serializedUserData = localStorage.getItem('user');
        console.log(serializedUserData);
        if (!serializedUserData) {
            return null;
        }
        const loggedUserData = JSON.parse(serializedUserData);
        const username = loggedUserData.username;
        const generatedUserName = `${username.slice(0, 1).toUpperCase()}${username.slice(1)}`;
        const user: User = {
            name: generatedUserName,
            username: username
        }
        return user;
    }
}
