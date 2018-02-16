import { Component, Input } from '@angular/core';
import { Url } from 'url';

@Component({
    templateUrl: './my-menu-list.component.html',
    selector: 'my-menu-list',
    styleUrls: [
        './my-menu-list.component.css'
    ]
})
export class MyMenuListComponent {
    @Input() items: Object[];
    constructor() {

    }
}
