import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LayoutsComponent } from './layouts/layouts.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FindtalentComponent } from './findtalent/findtalent.component';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OffreComponent } from './offre/offre.component';
import { ListeoffreComponent } from './listeoffre/listeoffre.component';
import { ListeprojetComponent } from './listeprojet/listeprojet.component';
import { ListecondidatureComponent } from './listecondidature/listecondidature.component';
import { ProfilComponent } from './profil/profil.component';
import { ContactComponent } from './contact/contact.component';
import { PortfeuilleComponent } from './portfeuille/portfeuille.component';

import { GestionoffreComponent } from './gestionoffre/gestionoffre.component';
import { RechercheworkComponent } from './recherchework/recherchework.component';
import { WorkComponent } from './work/work.component';
import { UserComponent } from './user/user.component';
import { MessageComponent } from './dashboard/message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { ManagetasksComponent } from './dashboard/tasks/managetasks/managetasks.component';
import { ManagebiddersComponent } from './dashboard/tasks/managebidders/managebidders.component';
import { ActivebiddsComponent } from './dashboard/tasks/activebidds/activebidds.component';
import { PosttaskComponent } from './dashboard/tasks/posttask/posttask.component';
import { ManagejobsComponent } from './dashboard/userjob/managejobs/managejobs.component';
import { ManagecondidatesComponent } from './dashboard/userjob/managecondidates/managecondidates.component';
import { PostjobComponent } from './dashboard/userjob/postjob/postjob.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutsComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    FindtalentComponent,
    GetintouchComponent,
    AboutusComponent,
    GetstartedComponent,
    LoginComponent,
    SignupComponent,
    OffreComponent,
    ListeoffreComponent,
    ListeprojetComponent,
    ListecondidatureComponent,
    ProfilComponent,
    ContactComponent,
    PortfeuilleComponent,
    
    GestionoffreComponent,
    RechercheworkComponent,
    WorkComponent,
    UserComponent,
    MessageComponent,
    DashboardComponent,
    ManagejobsComponent,
    ManagecondidatesComponent,
    PostjobComponent,
    ManagetasksComponent,
    ManagebiddersComponent,
    ActivebiddsComponent,
    PosttaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
