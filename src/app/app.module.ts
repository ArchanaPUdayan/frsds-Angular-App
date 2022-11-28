import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrdsentryComponent } from './addfriends/frdsentry.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { SearchFriendsComponent } from './search-friends/search-friends.component';

@NgModule({
  declarations: [
    AppComponent,
    FrdsentryComponent,
    ViewFriendsComponent,
    SearchFriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
