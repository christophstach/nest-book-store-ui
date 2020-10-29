import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BooksQuery } from 'src/app/state/books.query';
import { BooksService } from 'src/app/state/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  books$ = this.booksQuery.selectAll();
  loading$ = this.booksQuery.selectLoading();

  constructor(
    private booksQuery: BooksQuery,
    private booksService: BooksService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.booksService.findAll().subscribe();
  }

  detectChanges() {
    setTimeout(() => this.cdr.detectChanges());
  }
}
