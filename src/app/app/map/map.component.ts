import { Component, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // Mapbox configuration.
    mapboxgl.accessToken = 'pk.eyJ1IjoibG91aXN3aWxicmluayIsImEiOiJjajB1MnR1ZzcwNXE0MndvNnM3amszOGEyIn0.fq259e8DyvBrFYoumz_9eQ';
      var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });
  }
}
