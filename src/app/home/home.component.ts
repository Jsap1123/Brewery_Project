import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as GeoJSON from 'geojson';
import * as mapboxgl from 'mapbox-gl';
//import { MapComponent } from './map/map.component';
import { environment } from 'src/environments/environment';
import { Brewery } from '../brewery';
import { BreweryService } from '../brewery.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //changeDetection: ChangeDetectionStrategy.OnPush,
})

export class HomeComponent implements OnInit {

  brewery: Brewery = new Brewery();
  breweries: any;
  brewerylist: Brewery[] = [];
  p: number = 1;
  itemsPerPage: number = 5;
  totalBreweries: any;
  selectedBrewery?: Brewery;
  markers: any;
  source: any;

  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  //lat = this.selectedBrewery?.latitude;
  //lng = this.selectedBrewery?.longitude;
  //breweryURL: any;

  constructor(private signupService: BreweryService, private router: Router) { }

  profileForm = new FormGroup({
    city: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.profileForm.controls;
  }

  ngOnInit(): void {
    /* this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.selectedBrewery?.longitude, this.selectedBrewery?.latitude]
    });
    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl()); */
  }

  buildMap() {
    //this.map.triggerRepaint();
    this.map = new mapboxgl.Map({
      accessToken: environment.mapbox.accessToken,
      container: 'map',
      style: this.style,
      zoom: 10,
      center: [this.selectedBrewery?.longitude, this.selectedBrewery?.latitude],
    });
  
    // Add map markers
    var marker = new mapboxgl.Marker()
      .setLngLat([this.selectedBrewery?.longitude, this.selectedBrewery?.latitude])
      .setPopup(new mapboxgl.Popup().setHTML(this.selectedBrewery?.name))
      .addTo(this.map);
    marker.togglePopup();

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());


    this.map.triggerRepaint();
  }

  /* updateMap() {

  } */

  removeMap() {
    this.map.removeControl(new mapboxgl.NavigationControl);
    this.map.remove();
  }

  search() {
    this.brewery.city = this.f['city'].value;
    if (this.brewery.city != "") {
      this.signupService.getBreweriesByCity(this.brewery.city).subscribe(data => {
        this.breweries = data;
        for (let i = 0; i < data.length; i++) {
          console.log(this.brewery);
          this.brewery = this.breweries[i];
          this.brewerylist.push(this.brewery);
          this.totalBreweries = this.brewerylist.length;
        }
        console.log(this.brewerylist)
      }, error => console.log(error));
    }
  }

  selectBrewery(brewery: Brewery) {
    this.selectedBrewery = brewery;
    
    console.log(this.selectedBrewery);
    //return this.selectedBrewery.longitude, this.selectedBrewery.latitude;
    if (this.selectedBrewery.latitude && this.selectedBrewery.longitude != null) {

      this.buildMap();
      
      //if (this.buildMap()) {}
      //this.map.on('click')
      /* this.map = new mapboxgl.Map({
        accessToken: environment.mapbox.accessToken,
        container: 'map',
        style: this.style,
        zoom: 10,
        center: [this.selectedBrewery.longitude, this.selectedBrewery.latitude],
      });

      // Add map markers
      var marker = new mapboxgl.Marker()
        .setLngLat([this.selectedBrewery.longitude, this.selectedBrewery.latitude])
        .setPopup(new mapboxgl.Popup().setHTML(this.selectedBrewery.name))
        .addTo(this.map);
      marker.togglePopup();

      this.map.addControl(new mapboxgl.NavigationControl()); */

    }
    else {
      console.log("No coordinates found");
    }
  }

}


