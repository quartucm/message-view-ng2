import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Message } from '../app/message';

const API = environment.url;

@Injectable()
export class MessageApiService {

  constructor(private http: Http) { }

  getAllMessages(): Observable<Message[]> {
    return this.http
      .get(`${API}/messages`)
      .map(response => {
        const messages = response.json();
        return messages.map(message => new Message(message));
    })
  }
}
