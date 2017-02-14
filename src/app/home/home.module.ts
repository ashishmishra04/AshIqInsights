import { NgModule } from '@angular/core';
import {CoreModule} from "../core/core.module";
import {HomeRoutingModule, routedComponents} from "./home-routing.module";

@NgModule({
    imports: [ CoreModule, HomeRoutingModule],
    exports: [],
    declarations: [routedComponents],
    providers: [],
})

export class HomeModule { }
