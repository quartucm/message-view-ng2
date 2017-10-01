import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-messages-count',
  templateUrl: './messages-count.component.html',
  styleUrls: ['./messages-count.component.css']
})
export class MessagesCountComponent {
  
  @Input() starCount;

  constructor() { }

}
