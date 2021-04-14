
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MessageComponent } from './dashboard/message/message.component';
import { ActivebiddsComponent } from './dashboard/tasks/activebidds/activebidds.component';
import { FindtalentComponent } from './findtalent/findtalent.component';
import { HomeComponent } from './home/home.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { LoginComponent } from './login/login.component';
import { WorkComponent } from './work/work.component';

const routes: Routes = [
  {path:'', component:LayoutsComponent,
  children: [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'work', component: WorkComponent},
    {path: 'findtalent', component: FindtalentComponent},
    {path: 'contact', component: ContactComponent},
    
  ]},
  {path:'dashboard', component:DashboardComponent,
  children: [
    {path: 'dashboard', component: HomeComponent},
    {path: 'message', component: MessageComponent},
    {path: 'activebidds', component: ActivebiddsComponent},
    
  ]},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
