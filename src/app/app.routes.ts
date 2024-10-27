import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';

export const routes: Routes = [
  { path: 'teachers', component: TeacherListComponent },
  { path: 'teacher/:id', component: TeacherDetailComponent },
  { path: '', redirectTo: '/teachers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
