import { Component } from '@angular/core';
import { Books } from '../Books';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
  
})


export class BooksComponent {

  books : Books[]=[
    {
      name:"Harry Potter",
      author:"JK Rolling",
  
      image:"https://play-lh.googleusercontent.com/2kBabvPwoBWnnSFWYyjXuKaK5hrmRwA662aOJ5LaVvJv8F2O8BAvrv7DbpOxuWfz2w11",
      price:700
  
    },
    {
      name:"Harry Potter",
      author:"JK Rolling",
  
      image:"https://play-lh.googleusercontent.com/2kBabvPwoBWnnSFWYyjXuKaK5hrmRwA662aOJ5LaVvJv8F2O8BAvrv7DbpOxuWfz2w11",
      price:700
  
    },
    {
      name:"Harry Potter",
      author:"JK Rolling",
  
      image:"https://play-lh.googleusercontent.com/2kBabvPwoBWnnSFWYyjXuKaK5hrmRwA662aOJ5LaVvJv8F2O8BAvrv7DbpOxuWfz2w11",
      price:700
  
    }
  ]


  name:string = "Harry Potter";
  author:string ="JK Rolling";

  link:string="https://play-lh.googleusercontent.com/2kBabvPwoBWnnSFWYyjXuKaK5hrmRwA662aOJ5LaVvJv8F2O8BAvrv7DbpOxuWfz2w11";

  link1:string="https://upload.wikimedia.org/wikipedia/en/d/dc/A_Song_of_Ice_and_Fire_book_collection_box_set_cover.jpg";

  isDisable:boolean = false;

  myString!:string;

  isShowing:boolean = true;

  sbook:any;

}
