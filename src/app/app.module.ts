import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessageItemComponent } from './message-item/message-item.component';
import { MessagesCountComponent } from './messages-count/messages-count.component';
import { MessageApiService } from './message-api.service';
import { MessagesDataService } from './messages-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MessagesListComponent,
    MessageItemComponent,
    MessagesCountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [MessageApiService, MessagesDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
