import { Injectable } from '@angular/core';
import { RoomList } from '../rooms';
import {environment} from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList: RoomList[] = [
    {
      roomNumber:1,
      roomType: 'Deluxe Room',
      amenities:'Air COnditoner',
      price:500,
      checkinTime: new Date('9 jan 2023'),
      checkoutTime: new Date('6 june 2023')
    },
    {
      roomNumber:2,
      roomType: 'Private Suite Room',
      amenities:'Air COnditoner',
      price:5000,
      checkinTime: new Date('9 jan 2023'),
      checkoutTime: new Date('8 may 2023')
    },
    {
      roomNumber:3,
      roomType: 'Deluxe Room',
      amenities:'Air COnditoner',
      price:1000,
      checkinTime: new Date('10 feb 2023'),
      checkoutTime: new Date('6 july 2023')
    }
  ]

  constructor() { 
    console.log("Room Service is called")
  }

  getRooms(){
    return this.roomList;
  }
}
