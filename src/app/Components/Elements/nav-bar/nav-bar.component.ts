import { Component, OnInit } from '@angular/core';
import { darkModeService } from 'src/app/services/dark-mode.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent{
  public darkMode = this.darkModeService.toggle
  constructor(public darkModeService : darkModeService) {
   }

}
