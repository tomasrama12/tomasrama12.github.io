import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { MainComponent } from './main/main/main.component';
import { TextTitleComponent } from './main/text-title/text-title.component';
import { AboutmeComponent } from './main/aboutme/aboutme.component';
import { ProjectsPreviewComponent } from './main/projects-preview/projects-preview.component';
import { ProjectSquarePreviewComponent } from './main/projects-preview/project-square-preview/project-square-preview.component';
import { InfoPageComponent } from './info-page/info-page.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TextSectionComponent } from './text-section/text-section.component';
import { CodeSnipetsComponent } from './code-snipets/code-snipets.component';
import { PvOneComponent } from './projects-views/pv-one/pv-one.component';
import { SubtitleTextSectionComponent } from './subtitle-text-section/subtitle-text-section.component';
import { ImageContentComponent } from './image-content/image-content.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    TextTitleComponent,
    AboutmeComponent,
    ProjectsPreviewComponent,
    ProjectSquarePreviewComponent,
    InfoPageComponent,
    LandingPageComponent,
    TextSectionComponent,
    CodeSnipetsComponent,
    PvOneComponent,
    SubtitleTextSectionComponent,
    ImageContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
