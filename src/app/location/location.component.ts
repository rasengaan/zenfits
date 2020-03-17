import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../services.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private service: ServicesService) { }
  url: string = "https://api.zenefits.com/core/people";

  ngOnInit() {
    let data=this.service.getData(this.url);
    console.log(data);
  }

}
