import { Component } from '@angular/core';

@Component({
  selector: 'app-googlemap',
  templateUrl: './googlemap.component.html',
  styleUrls: ['./googlemap.component.css']
})
export class GooglemapComponent {
  constructor() {}
      
  ngOnInit(): void {}

  display: any;
  center: google.maps.LatLngLiteral = {
      lat: 41.716667,
      lng: 44.783333
  };
  zoom = 6;


  moveMap(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}
