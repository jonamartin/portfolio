import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './Components/Views/about-me/about-me.component';
import { ExperienceComponent } from './Components/Views/experience/experience.component';

const routes: Routes = [
  { path: 'about-me', component: AboutMeComponent },
  { path: 'experience', component: ExperienceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
