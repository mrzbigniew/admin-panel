import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const route: Routes = [
    { path: '', redirectTo: '/admin', pathMatch: 'full' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(route)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
