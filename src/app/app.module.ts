import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatCardModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './app/map/map.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { PlaceComponent } from './place/place.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SearchComponent,
    ResultsComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
