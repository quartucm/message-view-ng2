import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent {

  @Input() message: Message;  

  @Output() messageStarred: EventEmitter<Message> = new EventEmitter();

  constructor() { }

  toggleStar(message: Message) {
    this.messageStarred.emit(message);
  }

}
