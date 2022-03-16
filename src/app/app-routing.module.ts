import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
{path: '', component: MainPageComponent},
{path:'employee_feedback', component: FeedbackComponent},
{path:'employeeDetails',component:EmployeeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
