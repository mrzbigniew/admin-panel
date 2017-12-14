import { NgModule } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { MyMenuListItemComponent } from './my-menu-list-item.component';

@NgModule({
    imports: [
        MaterialModule
    ],
    exports: [
        MyMenuListItemComponent
    ],
    declarations: [
        MyMenuListItemComponent
    ],
    providers: [

    ]
})
export class MyMenuListItemModule{

}