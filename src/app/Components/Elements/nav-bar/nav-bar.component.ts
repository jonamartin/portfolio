import { Component, OnInit, ViewChild } from '@angular/core';
import { darkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent{
  public darkMode = this.darkModeService.toggle
  @ViewChild('details') details; 
  constructor(public darkModeService : darkModeService) {
   }

   dropDownClose() {
    this.details.nativeElement.removeAttribute('open');
   }

}
