import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { darkModeService } from './services/dark-mode.service';
declare const AOS: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public darkModeService: darkModeService,
              public metaService : Meta) {
    this.darkModeService.start();
    metaService.addTag({property: 'og:title', content: 'Jonathan Martin'}, true);
    metaService.addTag({property: 'og:description', content: 'Portfolio de Jonathan Martin, fullstack developer.'}, true);
    metaService.addTag({property: 'og:url', content: 'develope.ar'}, true);
    metaService.addTag({property: 'og:image', content: 'https://develope.ar/assets/profilepicture.png'}, true);
    metaService.addTag({property: 'twitter:title', content: 'Jonathan Martin'}, true);
    metaService.addTag({property: 'twitter:description', content: 'Portfolio de Jonathan Martin, fullstack developer.'}, true);
    metaService.addTag({property: 'twitter:url', content: 'develope.ar'}, true);
    metaService.addTag({property: 'twitter:image', content: 'https://develope.ar/assets/profilepicture.png'}, true);
  }
  title = 'portfolio';
  ngOnInit() {
    AOS.init();
  }
}
