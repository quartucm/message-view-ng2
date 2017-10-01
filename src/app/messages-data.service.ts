import { Injectable, Input, Output } from '@angular/core';

@Injectable()
export class MessagesDataService {

  constructor() { }

  starCount: number = 0;  

  public populateStars(messages): number {
    messages.map(message => {
      if (message.isStarred) {
        this.starCount++;
      }
    });
    return this.starCount;
  }

  public onStarClick(message): number {
    message.isStarred = !message.isStarred;
    if (message.isStarred === true) {
      this.starCount++;
    } else {
      this.starCount--;
    }
    return this.starCount;
  }

}
