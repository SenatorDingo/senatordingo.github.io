import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'portfolio', component: PortfolioComponent},
  {path:  'contact', component: ContactComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
