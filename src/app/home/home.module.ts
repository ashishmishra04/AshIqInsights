import { NgModule } from '@angular/core';
import {HomeRoutingModule, routedComponents} from "./home-routing.module";
import {CoreModule} from "../core/core.module";

@NgModule({
    imports: [HomeRoutingModule, CoreModule],
    exports: [],
    declarations: [routedComponents],
    providers: [],
})
export class HomeModule { }
