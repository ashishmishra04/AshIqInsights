import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {ButtonsModule} from "@progress/kendo-angular-buttons";

@NgModule({
  imports:      [ BrowserModule, ButtonsModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
