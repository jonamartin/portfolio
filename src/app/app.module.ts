import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/Elements/nav-bar/nav-bar.component';
import { AboutMeComponent } from './Components/Views/about-me/about-me.component';
import { ExperienceComponent } from './Components/Views/experience/experience.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { MenulinkComponent } from './Components/Elements/menulink/menulink.component';
import {darkModeService} from './services/dark-mode.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AboutMeComponent,
    ExperienceComponent,
    MenulinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule
  ],
  providers: [darkModeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
