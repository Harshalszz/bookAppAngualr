import { Component,Input } from '@angular/core';
import { Books } from '../Books';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  @Input() book!:Books;

}
