import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrewerylistComponent } from './brewerylist/brewerylist.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {StyleClassModule} from 'primeng/styleclass';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxPaginationModule} from 'ngx-pagination';
//import { MapComponent } from './map/map.component';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { BreweryDetailsComponent } from './brewery-details/brewery-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BrewerylistComponent,
    HomeComponent,
    //MapComponent,
    HeaderFooterComponent,
    BreweryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    StyleClassModule,
    NgbModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
