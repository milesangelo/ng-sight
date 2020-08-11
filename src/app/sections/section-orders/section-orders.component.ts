import { Component, OnInit } from '@angular/core';
import { SalesDataService } from '../../services/sales-data.service';
import { MessageService } from '../../services/message.service';
import { Order } from '../../shared/order';

@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor(private _SalesDataService: SalesDataService, public messageService: MessageService) { }

  orders: Order[];
  total = 0;
  page = 1;
  limit = 10;
  loading = false;

  ngOnInit(): void {
    this.getOrders();
  }
  
  getOrders(): void {
    this.messageService.add('section-orders: getting orders');
    this._SalesDataService.getOrders(this.page, this.limit)
      .subscribe(orders => this.orders = orders, () => {
        this.messageService.add('got orders');
      });
  }

  goToPrevious(): void {
    this.page--;
    this.messageService.add('section-orders: go to previous page of ' + this.page);
    this.getOrders();
  }

  goToNext(): void {
    this.page++;
    this.messageService.add('section-orders: go to next page of ' + this.page);
    this.getOrders();
  }

  goToPage(n: number): void {
    this.page = n;
    this.messageService.add('section-orders: go to page ' + this.page);
    this.getOrders();
  }
  
}
