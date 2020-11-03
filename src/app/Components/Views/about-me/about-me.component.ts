import { Component, OnInit } from '@angular/core';
import { languageToggleService } from 'src/app/services/language-toggle.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor(public languageToggleService : languageToggleService) { }

  ngOnInit(): void {
  }

}
