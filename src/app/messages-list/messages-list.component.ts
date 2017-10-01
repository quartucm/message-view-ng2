import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../message';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent {

  @Input()
  messages: Message[];

  @Output()
  messageStarred: EventEmitter<Message> = new EventEmitter();

  constructor() { }

  onMessageStarred(message: Message) {
    this.messageStarred.emit(message)
  }

}
