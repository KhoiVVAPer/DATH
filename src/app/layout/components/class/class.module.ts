

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { KdevSharedModule } from '../../../../@kdev/shared.module';
import { ClassComponent } from './class.component';
import { MatToolbarModule } from '@angular/material';
@NgModule({
    declarations: [
        ClassComponent
    ],
    imports: [
        RouterModule,
        KdevSharedModule,
        MatToolbarModule
    ],
    exports: [
        ClassComponent
    ]
})
export class ClassModule {
}
