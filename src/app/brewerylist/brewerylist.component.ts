import { Component, OnInit } from '@angular/core';
import { Brewery } from '../brewery';
import { BreweryService } from '../brewery.service';

@Component({
  selector: 'app-brewerylist',
  templateUrl: './brewerylist.component.html',
  styleUrls: ['./brewerylist.component.css']
})
export class BrewerylistComponent implements OnInit {

  ngOnInit(): void {
  }
  user: Brewery= new Brewery();
  users: any;

  constructor(private signupService:BreweryService) { }

  getBreweries() {
    this.signupService.getBreweryList()
      .subscribe(data=>{this.users=data},error=>console.log(error));
  }

}
