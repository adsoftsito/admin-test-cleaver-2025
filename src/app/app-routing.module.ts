import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestsUvWebListComponent } from './components/tests-uv-web-list/tests-uv-web-list.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
//  { path: 'login', component: LoginComponent },
//  { path: 'consultas', component: TestsUvWebListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
