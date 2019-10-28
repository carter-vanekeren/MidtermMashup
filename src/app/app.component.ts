import { Component, OnInit } from '@angular/core';
import { CoindeskService } from './coindesk.service';
import { EtsyService } from './etsy.service';
import { ListingItem } from './Listing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Bitcoin Shopping';
  constructor(private coindesk: CoindeskService, private etsy: EtsyService) { }

  ngOnInit() {
    this.coindesk.getIndex();
  }
}
