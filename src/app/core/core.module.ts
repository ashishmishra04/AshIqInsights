import { NgModule } from '@angular/core';

import {HeaderComponent} from "./header/header.component";
import {SearchControlComponent} from "./searchControl/searchControl.component";
import {CommonModule} from "@angular/common";
import {SpinnerModule} from "./spinner/spinner.module";
import {ToastModule} from "./toast/toast.module";
import {ExceptionService} from "./exception.service";


@NgModule({
    imports: [CommonModule, SpinnerModule,ToastModule],
    exports: [CommonModule, HeaderComponent, SearchControlComponent,SpinnerModule,ToastModule],
    declarations: [HeaderComponent, SearchControlComponent],
    providers: [ExceptionService],
})
export class CoreModule { }
