import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SearchComponent} from "./search.component";
import {FiltersComponent} from "./filter/filter-list.component";
import {FilterComponent} from "./filter/filter.component";
import {MapDataComponent} from "./mapData/mapData.component";
import {ObjectTypeListComponent} from "./objectType/objectType-list.component";
import {ObjectTypeComponent} from "./objectType/objectType.component";
import {TagListComponent} from "./tag/tag-list.component";
import {TagComponent} from "./tag/tag.component";
import {SearchDataComponent} from "./searchData/searchData.component";

const routes: Routes = [
  { path: '', component: SearchComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class SearchRoutingModule { }

export const routedComponents = [
  SearchComponent,
  FiltersComponent,
  FilterComponent,
  MapDataComponent,
  ObjectTypeListComponent,
  ObjectTypeComponent,
  TagListComponent,
  TagComponent,
  SearchDataComponent
];
