import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';
import { ListingItem } from './Listing';
import { CoindeskService } from './coindesk.service';

@Injectable({
  providedIn: 'root'
})
export class EtsyService {

  listing: ListingItem[] = [];
  constructor(private http: HttpClient, private coindesk: CoindeskService) { }

  getListing(searchWord?: string) {
    let apiURL = 'https://openapi.etsy.com/v2/listings/active.js?api_key=oz6xd4p3dzohwypiaoeafrpa&limit=24';
    if (searchWord) {
      apiURL += '&keywords=' + searchWord;
    }
    return this.http.jsonp(apiURL, 'callback').pipe(
      map((response: any) => {
          const result = [];
          response.results.forEach(item => {
            result.push({
              listing_id: item.listing_id,
              description: item.description,
              price: this.coindesk.convertToBitcoin(+item.price),
              url: item.url,
              title: item.title
            });
          });
          return result;
        })
    );
  }
}
