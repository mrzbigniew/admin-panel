import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { map, tap, catchError } from 'rxjs/operators';

import { MenuItemModel } from '../models/menu/menu-item.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuDataLoaderService {
    public menuItemsUrl: string = 'api/menu/items';

    constructor(private http: HttpClient) {

    }

    public load(): Observable<MenuItemModel[]> {
        return this.http.get<MenuItemModel[]>(this.menuItemsUrl);
    }
}