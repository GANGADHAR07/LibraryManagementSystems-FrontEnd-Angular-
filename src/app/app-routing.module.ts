import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksListComponent } from './books-list/books-list.component';
import { SearchBookComponent } from './search-book/search-book.component';
import { UpdateBooksComponent } from './update-books/update-books.component';

const routes: Routes = [
  {
    path : "add-Book" , component : AddBookComponent
  },
  {
    path : "search-Book" , component : SearchBookComponent
  },
  {
    path : "books", component : BooksListComponent
  },
  {
    path: "update-Books/:title", component: UpdateBooksComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
