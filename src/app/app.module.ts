import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { ResumeComponent } from './resume/resume.component';
import { AppRoutingModule } from './app-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ResumeComponent,
    PortfolioComponent,
    ContactComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
