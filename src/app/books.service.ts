import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Books } from './Books.model';
import {catchError, tap} from 'rxjs/operators'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  API_URL:string = "http://localhost:8080/api/";
  

  constructor(private httpClient : HttpClient) {  }

 

  // public addBooks(books){
  //   return this.http.post(this.API_URL+"books",books,{responseType: "text" as "json"})
  //   .pipe(
  //     tap(()=>{
  //       this._refreshNeeded$.next();
  //     })
  //   );
  // }

 /* public getBooks(){
    return this.httpClient.get<Books[]>(this.API_URL+"books");
    
  }
  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }*/

  /*public searchBook(title:String){
    return this.httpClient.get(this.API_URL+"book/"+title);

  }*/
  getBooks(): Observable<any> {
    return this.httpClient.get(`${this.API_URL}books`);
  }
  private _refreshNeeded$ = new Subject<void>();

  get refreshNeeded$(){
    return this._refreshNeeded$;
  }

  
  /*public addBook(book:Object) {
    return this.httpClient.post<Books>(this.API_URL+"book", book);
  }*/

  addBook(book: Object): Observable<Object>{
    return this.httpClient.post(`${this.API_URL}book`, book);
  }

  // public updateBook(book ){
  //   return this.httpClient.put<Books>(this.API_URL+"book",book,{responseType:"text" as "json"})
  //   .pipe(
  //     tap(()=>{
  //       this._refreshNeeded$.next();
  //     })
  //   );
  // }
 /* updateBook(book: Books): Observable<Books> {
    const updateUrl = `${this.API_URL}/${book.title}`;
    // let userData = user + '/' + user.id
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.httpClient.put<Books>(updateUrl, book, httpOptions)
      .pipe(
        catchError(this.handleError('updateBook' , book))
      );
  }
  handleError(arg0: string, book: Books): any {
    throw new Error('Method not implemented.');
  }*/

  updateBook(book: Object): Observable<Object>{
    return this.httpClient.put(`${this.API_URL}book`, book);
  }

  searchBookbytitlteauthor(title: string,author: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}books/${title}/${author}`);
  }

  searchBook(title: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}book/${title}`);
  }

  searchBookbyauthor(author: string): Observable<any> {
    return this.httpClient.get(`${this.API_URL}books/${author}`);
  }
}
