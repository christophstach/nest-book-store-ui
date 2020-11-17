import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BooksQuery } from '../../state/books.query';
import { BooksService } from '../../state/books.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'author', 'isbn', 'publisher', 'publicationYear'];

  books$ = this.booksQuery.selectAll();
  loading$ = this.booksQuery.selectLoading();

  constructor(
      private booksQuery: BooksQuery,
      private booksService: BooksService
  ) {
  }

  ngOnInit() {
    console.log('test');
    this.booksService.findAll().subscribe();
  }
}
