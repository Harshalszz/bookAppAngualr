import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnChanges{
  
  @Input() rooms : RoomList[] = [];

  @Input() title: string ='Rooms';

  @Output() roomSelected = new EventEmitter<RoomList>();
  ngOnChanges(changes: SimpleChanges): void {

    //throw new Error('Method not implemented.');
    if(changes['title']){
      this.title = changes['title'].currentValue;
    }

  }


  selectRoom(room : RoomList){
    this.roomSelected.emit(room)
  }

}
