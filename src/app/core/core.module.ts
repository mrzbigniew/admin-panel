import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MenuDataLoaderService } from './services/menu-data-loader.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    exports: [],
    declarations: [],
    providers: [
        MenuDataLoaderService
    ]
})
export class CoreModule {

} 