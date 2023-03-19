import { Component, SkipSelf, ViewChild } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';
import { RoomsService } from './services/rooms.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {

  hotelName:string = "RediSon Blu"
  numberRooms:number = 10;

  showRooms : boolean = false;

  selectedRooms!: RoomList;

  title!: string;
  roomList: RoomList[] = [];
  //roomList: () => RoomList[];
  //

  constructor(@SkipSelf() private roomService: RoomsService){
    this.roomList = this.roomService.getRooms();
  }

 

  @ViewChild(HeaderComponent)
  headerComponent!: HeaderComponent;

  rooms: Room ={
    totalRoom: 20,
    availableRoom: 10,
    bookedRoom: 5
  };

  

  toggle(){

    this.showRooms = !this.showRooms;
    this.title = "Changed Title";

  }

  roomSelect(room: RoomList){
    console.log(room)
    this.selectedRooms = room;
  }

  addRoom(){
    const room : RoomList={
      roomNumber: 4,
      roomType: 'SmartRoom',
      amenities: 'AC, Food, Bar',
      price: 10000,
      checkinTime: new Date('11 nov 2022'),
      checkoutTime: new Date('24 nov 2022')
    };

    //this.roomList.push(room);

    this.roomList = [...this.roomList, room];

    console.log(room)
  }

}
