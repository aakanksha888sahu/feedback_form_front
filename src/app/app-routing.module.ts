import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedbackFome2Component } from './feedback-fome2/feedback-fome2.component';
import { FeedbackComponent } from './feedback/feedback.component';

const routes: Routes = [
{path: '', component: FeedbackComponent},
{path: 'feedbackForm2',component: FeedbackFome2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
