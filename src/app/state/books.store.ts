import { Injectable } from '@angular/core';
import produce from 'immer';
import { ActiveState, EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Book } from '../entities/book.entity';

export interface BooksState extends EntityState<Book, number>, ActiveState { }

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'books', producerFn: produce })
export class BooksStore extends EntityStore<BooksState> {
  constructor() {
    super() ;
  }
}