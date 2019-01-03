import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

// App state actions.
import { SearchPlace, SearchPlaces, ResetSearch } from './state/search.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'oven-fresh';
  search$: Observable<object>;

  mapResults = {
   type: 'FeatureCollection',
    features: [{
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-77.032, 38.913]
      },
      properties: {
        title: 'Mapbox',
        description: 'Washington, D.C.'
      }
    }, {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [-122.414, 37.776]
      },
      properties: {
        title: 'Mapbox',
        description: 'San Francisco, California'
      }
    }]
  };

  constructor(private store: Store<{ search: object }>) {
    this.search$ = store.pipe(select('search'));
  }

  ngOnInit() {
  }

  onPlaceSearch() {
    this.store.dispatch(new SearchPlace('Some GeoJSON'));
  }

  onResultsSearch() {
    this.store.dispatch(new SearchPlaces('Some GeoJSON'));
  }

  onDirectionsSearch() {
    this.store.dispatch(new ResetSearch('Reset'));
  }
}
