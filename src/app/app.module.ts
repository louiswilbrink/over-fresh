// Dependency modules..
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatCardModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';

// App modules.
import { AppRoutingModule } from './app-routing.module';

// App components.
import { AppComponent } from './app.component';
import { MapComponent } from './app/map/map.component';
import { SearchComponent } from './search/search.component';
import { PlaceComponent } from './components/place/place.component';
import { PlacesComponent } from './components/places/places.component';

// App reducers.
import { searchReducer } from './state/search.reducers';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SearchComponent,
    PlaceComponent,
    PlacesComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ search: searchReducer }),
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
