import { Component, OnInit } from '@angular/core';
import { MessageApiService } from './message-api.service';
import { MessagesDataService } from './messages-data.service';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  messages: Array<Message> = [];
  constructor(private messageApiService: MessageApiService, 
              private messagesDataService: MessagesDataService) {}

  public ngOnInit() {
    this.messageApiService
      .getAllMessages()
      .subscribe(
        (messages) => {
          this.messages = messages;
          this.populateStars(messages);
        }
      );
  }

  private populateStars(messages): void {
    this.messagesDataService.populateStars(this.messages);
  }

  private onStarClick(message): void {
    this.messagesDataService.onStarClick(message);    
  }

}
