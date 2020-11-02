import { Component, OnInit } from '@angular/core';
import { darkModeService } from './services/dark-mode.service';
declare const AOS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public darkModeService: darkModeService) {
    this.darkModeService.start();
  }
  title = 'portfolio';
  ngOnInit() {
    AOS.init();
  }
}
