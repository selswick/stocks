import { Component, OnInit } from '@angular/core';

import { StocksService } from '../../service/stocks.service';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  symbols: Array<string>;
  stocks: string;
  
  constructor(private service: StocksService) {
    this.symbols = service.get();
   }

  ngOnInit(): void {
  }

  add() {
    this.symbols = this.service.add(this.stocks.toUpperCase());
    this.stocks = '';
  }

  remove(symbol) {
    this.symbols = this.service.remove(symbol);
  }

}
