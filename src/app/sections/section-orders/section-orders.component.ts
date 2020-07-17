import { Component, OnInit } from '@angular/core';
import { Order } from '../../shared/order';
@Component({
  selector: 'app-section-orders',
  templateUrl: './section-orders.component.html',
  styleUrls: ['./section-orders.component.css']
})
export class SectionOrdersComponent implements OnInit {

  constructor() { }

  orders : Order[] = [
    { 
      id: 1, 
      customer: { 
        id: 1, 
        name: 'Yings Bakery', 
        email: 'ying@gmail.com', 
        state: 'CO' 
      }, 
      total: 130, 
      fulfilled: new Date(2020, 7, 16), 
      placed: new Date(2020,6,29), 
      //status:'Completed'  
    },
    { 
      id: 2, 
      customer: { 
        id: 2, 
        name: 'Mings Cafe', 
        email: 'ying@gmail.com', 
        state: 'CO' 
      }, 
      total: 100, 
      fulfilled: new Date(2020, 7, 13), 
      placed: new Date(2020,6,25), 
      //status:'Completed'  
    },
    { 
      id: 3, 
      customer: { 
        id: 3, 
        name: 'Yangs Bakery', 
        email: 'yang@gmail.com', 
        state: 'CO' 
      }, 
      total: 87.5, 
      fulfilled: new Date(2020, 5, 10), 
      placed: new Date(2020, 4, 3), 
      //status:'Completed'  
    },
  ];

  ngOnInit(): void {
  }

}
