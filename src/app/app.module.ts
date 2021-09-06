import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { IntroComponent } from './profile/intro/intro.component';
import { ExperienceComponent } from './profile/experience/experience.component';
import { SkillsComponent } from './profile/skills/skills.component';
import { ToolsComponent } from './profile/tools/tools.component';
import { ProjectsComponent } from './profile/projects/projects.component';
import { ContactModalComponent } from './contact-modal/contact-modal.component';
import { EducationComponent } from './profile/education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ProfileComponent,
    IntroComponent,
    ExperienceComponent,
    SkillsComponent,
    ToolsComponent,
    ProjectsComponent,
    ContactModalComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
