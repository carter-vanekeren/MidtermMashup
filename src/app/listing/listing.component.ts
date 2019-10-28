import { Component, OnInit } from '@angular/core';
import { EtsyService } from '../etsy.service';
import { ListingItem } from '../Listing';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  listing: ListingItem[] = [];
  searchWord: string;
  invalidSearch = false;
  constructor(private etsy: EtsyService) { }

  ngOnInit() {
    this.etsy.getListing().subscribe(res => {
      this.listing = res;
    }, error => {
      alert(error.message);
    });


  }

  onSearch() {
    if (this.searchWord) {
      this.etsy.getListing(this.searchWord).subscribe(res => {
        this.listing = res;
      }, error => {
        alert(error.message);
      });
      this.invalidSearch = false;
    } else {
      this.invalidSearch = true;
    }
  }

  goToItemPage(url: string) {
    window.open(url);
  }
}
