import { Component, OnInit } from '@angular/core';
import { languageToggleService } from 'src/app/services/language-toggle.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  constructor(public languageToggleService : languageToggleService) { }

  ngOnInit(): void {
  }

}
