import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { ListStudentComponent } from './components/list-student/list-student.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  {path : 'dashboard' , component: DashboardComponent},
  {path : 'addStudent' , component : AddStudentComponent},
  {path : 'listStudent' , component: ListStudentComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
