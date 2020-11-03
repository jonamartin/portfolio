import { Component, OnInit, ViewChild } from '@angular/core';
import { darkModeService } from 'src/app/services/dark-mode.service';
import { languageToggleService } from 'src/app/services/language-toggle.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent{
  public darkMode = this.darkModeService.toggle
  @ViewChild('details') details; 
  constructor(public darkModeService : darkModeService,
              public languageToggleService: languageToggleService) {
   }

   dropDownClose() {
    this.details.nativeElement.removeAttribute('open');
   }

}
