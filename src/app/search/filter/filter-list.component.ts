import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-filter-list',
    templateUrl: 'filter-list.component.html'
})

export class FiltersComponent implements OnInit {
    filterList : any[] = [
      { name: "Basin Name", id: 1},
      { name: "Formation at TD", id: 2},
      { name: "Loc District", id: 3},
      { name:  "loc Lease Name", id: 4},
      { name: "Loc State or Province", id: 5},
      { name: "Loc Well County", id: 6}
      ];
    constructor() { }

    ngOnInit() { }

}
