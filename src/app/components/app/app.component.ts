import { Component, OnInit } from '@angular/core';
import { BooksQuery } from 'src/app/state/books.query';
import { BooksService } from 'src/app/state/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  books$ = this.booksQuery.selectAll()

  constructor(
    private booksQuery: BooksQuery, 
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.booksService.findAll().subscribe();
  }
}
