import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1> <button kendoButton  [primary]="true">My MAIN UI Button</button>`,
})
export class AppComponent  { name = 'Angular'; }
