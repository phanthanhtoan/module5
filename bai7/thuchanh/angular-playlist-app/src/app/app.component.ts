import { Component } from '@angular/core';
import {Routes} from "@angular/router";
import {YoutubePlaylistComponent} from "./youtube-playlist/youtube-playlist.component";

const  routes : Routes = [{
  path: 'youtube',
  component: YoutubePlaylistComponent
}];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-playlist-app';
}
