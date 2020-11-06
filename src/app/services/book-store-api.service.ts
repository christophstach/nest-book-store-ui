import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateBookDto } from '../dto/create-book.dto';
import { UpdateBookDto } from '../dto/update-book.dto';
import { Book } from '../entities/book.entity';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class BookStoreApiService {
  private endpoint = 'https://nest-book-store.herokuapp.com/books';

  constructor(private http: HttpClient) {

  }

  create(createBookDto: CreateBookDto) {
    return this.http.post(this.endpoint, createBookDto);
  }

  findAll() {
    return this.http.get<Book[]>(this.endpoint);
  }

  findOne(id: number) {
    return this.http.get<Book>(`${this.endpoint}/{id}`);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.http.put(`${this.endpoint}/{id}`, updateBookDto);
  }

  remove(id: number) {
    return this.http.delete(`${this.endpoint}/{id}`);
  }
}
