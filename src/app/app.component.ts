import { Component, OnInit } from '@angular/core';
declare const AOS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  ngOnInit() {
    AOS.init();
  }
}
