import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { MyMenuListItemModule } from '../my-menu-list-item/my-menu-list-item.module';
import { MyMenuListComponent } from './my-menu-list.component';

@NgModule({
    imports: [
        MaterialModule,
        MyMenuListItemModule
    ],
    exports: [
        MyMenuListComponent
    ],
    declarations: [
        MyMenuListComponent
    ],
    providers: [

    ]
})
export class MyMenuListModule{

}