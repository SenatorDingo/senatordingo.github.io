import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ResumeComponent } from './resume/resume.component'
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'resume', component: ResumeComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
