import { NgModule } from '@angular/core';

import {HeaderComponent} from "./header/header.component";
import {SearchControlComponent} from "./searchControl/searchControl.component";


@NgModule({
    imports: [],
    exports: [HeaderComponent, SearchControlComponent],
    declarations: [HeaderComponent, SearchControlComponent],
    providers: [],
})
export class CoreModule { }
