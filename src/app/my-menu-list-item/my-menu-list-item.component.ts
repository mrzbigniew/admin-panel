import { Component, Input } from '@angular/core';

@Component({
    selector: 'my-menu-list-item',
    templateUrl: './my-menu-list-item.component.html',
    styleUrls: [
        './my-menu-list-item.component.css'
    ]
})
export class MyMenuListItemComponent {
    @Input() item: Object;
}
