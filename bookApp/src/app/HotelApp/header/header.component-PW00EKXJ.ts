import { Component, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  //if you want to create more than one innstance of the seevice we use provider
  providers:[RoomsService]
})
export class HeaderComponent {

  constructor(@Self() private roomService : RoomsService){

  }

  fname!:string;
  lname!:string;

  doFormPost(personDetails: any){
    console.log(personDetails);
  }

}
