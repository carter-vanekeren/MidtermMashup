import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoindeskService {
  rate: number;
  constructor(private http: HttpClient) { }

  getIndex() {
    this.http.get('https://api.coindesk.com/v1/bpi/currentprice/USD.json').subscribe((response: any) => {
      this.rate = response.bpi.USD.rate_float;
    });
  }

  convertToBitcoin(price: number) {
    return price / this.rate;
  }
}
