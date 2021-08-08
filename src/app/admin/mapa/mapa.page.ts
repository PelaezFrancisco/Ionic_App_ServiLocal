import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../services/location.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  lat = -0.10092412924206448;
  lng= -78.48962876063473;
  zoom = 16;

  lat2 =   -0.11522906358994434;
  lng2= -78.4943289630664;
  

  currentLocation: any;

  centerLocation: any ={
    latitude : null,
    longitude : null,
  };

  icons = {
    client: "https://cdn1.iconfinder.com/data/icons/ecommerce-61/48/eccomerce_-_location-48.png",
    shop: "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Marker-Outside-Chartreuse.png",
    center: "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Marker-Inside-Chartreuse.png",
    pointer: "https://cdn1.iconfinder.com/data/icons/Map-Markers-Icons-Demo-PNG/48/Map-Marker-Ball-Azure.png"
  };


  constructor(private locationService: LocationService) { 
  
  }

  async ngOnInit() {
    this.currentLocation = await this.locationService.getCurrentLocation();
    console.log(this.currentLocation);
  }

  newAddress(event: any){
    if (event) {
      this.centerLocation.latitude = event.lat;
      this.centerLocation.longitude= event.lng;
      this.locationService.getAddressOfLocation(this.centerLocation);
      console.log(this.centerLocation);
    }

  }

}
