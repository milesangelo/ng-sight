import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() page : number;
  @Input() count : number;
  @Input() resultsPerPage: number;
  @Input() pagesToShow: number;
  @Input() loading : boolean;

  @Output() goPrev = new EventEmitter<boolean>();
  @Output() goNext = new EventEmitter<boolean>();
  @Output() goPage = new EventEmitter<number>();
  

  constructor() { }

  ngOnInit(): void {

  }

  onPrev(): void {
    this.goPrev.emit(true);
  }

  onNext(): void {
    this.goNext.emit(true);
  }

  onPage(n:number): void {
    this.goPage.emit(n);
  }

  totalPages(): number {
    return Math.ceil(this.count / this.page) || 0;
  }

  isLastPage(): boolean {
    return this.page * this.resultsPerPage >= this.count;
  }
}
