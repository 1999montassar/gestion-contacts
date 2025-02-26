import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ContactsTableComponent } from './contacts/contacts-table/contacts-table.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { TrashComponent } from './messages/trash/trash.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { RouterModule } from '@angular/router';  // Importer RouterModule pour le routage
import { appRoutes } from './app.routes';  // Importer les routes

@NgModule({
  declarations: [
    AppComponent,  // Déclarer le composant AppComponent
    // Supprimer NavbarComponent, SidebarComponent et les autres de 'declarations'
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),  // Utiliser le module de routage
    NavbarComponent,  // Importer NavbarComponent
    SidebarComponent,  // Importer SidebarComponent
    ContactsTableComponent,  // Importer ContactsTableComponent
    MessagesListComponent,  // Importer MessagesListComponent
    TrashComponent,  // Importer TrashComponent
    SettingsComponent,  // Importer SettingsComponent
  ],
  bootstrap: [AppComponent]  // Déclarer AppComponent comme composant bootstrap
})
export class AppModule { }
