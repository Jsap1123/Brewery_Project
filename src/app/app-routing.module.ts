import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrewerylistComponent } from './brewerylist/brewerylist.component';
import { HomeComponent } from './home/home.component';
//import { MapComponent } from './map/map.component';
import { BreweryDetailsComponent } from './brewery-details/brewery-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'brewerylist', component: BrewerylistComponent },
  //{ path: 'map', component: MapComponent },
  { path: 'brewerydetails', component: BreweryDetailsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
