import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CreateBookDto } from '../dtos/create-book.dto';
import { UpdateBookDto } from '../dtos/update-book.dto';
import { Book } from '../entities/book.entity';
import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class BookStoreApiService {
  private endpoint = environment.inventoryEndpoint;

  constructor(private http: HttpClient) {

  }

  create(createBookDto: CreateBookDto) {
    return this.http.post<Book>(`${this.endpoint}/books`, createBookDto);
  }

  findAll() {
    return this.http.get<Book[]>(`${this.endpoint}/books`);
  }

  findOne(id: number) {
    return this.http.get<Book>(`${this.endpoint}/books/${id}`);
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return this.http.put<Book>(`${this.endpoint}/books/${id}`, updateBookDto);
  }

  remove(id: number) {
    return this.http.delete<Book>(`${this.endpoint}/books/${id}`);
  }
}
