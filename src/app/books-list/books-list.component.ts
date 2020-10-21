import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Books } from '../Books.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})

export class BooksListComponent implements OnInit {

  books : Observable<Books[]>;
  message : any;

  constructor(private service : BooksService,
    private router: Router) { }

  /*ngOnInit(): void {
    this.service.refreshNeeded$.subscribe(()=>{

      this.getBooks();
    });

    this.getBooks();

  }

  private getBooks(){
    
    let response = this.service.getBooks();
    response.subscribe(data => this.books = data);

  }*/

  ngOnInit(){
    this.reloadData();
  }
  reloadData()
  {
    this.books=this.service.getBooks();
  }

  
  updateBook(title : string){
    console.log(title);
    this.router.navigate(['update-Books',title])
  }

  
  }


