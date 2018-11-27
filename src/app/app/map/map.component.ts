import { Component, OnInit, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class MapComponent implements OnInit, OnChanges {

  map: {};

  @Input('mapResults') results;

  constructor() { }

  ngOnInit() {
    // Mapbox configuration.
    mapboxgl.accessToken = 'pk.eyJ1IjoibG91aXN3aWxicmluayIsImEiOiJjajB1MnR1ZzcwNXE0MndvNnM3amszOGEyIn0.fq259e8DyvBrFYoumz_9eQ';

    this.map = new mapboxgl.Map({
      container: 'map',
      center: [-122.420679, 37.772537],
      zoom: 13,
      style: 'mapbox://styles/mapbox/streets-v10'
    });

    // Add markers to map.
    this.results.features.forEach(function(marker) {
      // create a HTML element for each feature
      var el = document.createElement('div');
      el.className = 'marker';

      // Make a marker for each feature and add it to the map.
      new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(this.map);
    }, this);
  }

  ngOnChanges(changes: SimpleChanges) {
  }
}
