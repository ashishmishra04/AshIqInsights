import { NgModule } from '@angular/core';
import {CoreModule} from "../core/core.module";
import {SearchRoutingModule, routedComponents} from "./search-routing.module";
import {LayoutModule} from "@progress/kendo-angular-layout";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [ CommonModule, SearchRoutingModule, CoreModule, LayoutModule],
  exports: [],
  declarations: [routedComponents],
  providers: [],
})
export class SearchModule { }
