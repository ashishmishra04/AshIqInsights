import { NgModule } from '@angular/core';
import {SearchRoutingModule, routedComponents} from "./search-routing.module";
import {LayoutModule} from "@progress/kendo-angular-layout";
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [ CoreModule, SearchRoutingModule,  LayoutModule],
  exports: [],
  declarations: [routedComponents],
  providers: [],
})
export class SearchModule { }
