// app.routes.ts
import { Routes } from '@angular/router';
import { ContactsTableComponent } from './contacts/contacts-table/contacts-table.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { TrashComponent } from './messages/trash/trash.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },  // Redirection vers la page des contacts par défaut
  { path: 'contacts', component: ContactsTableComponent },  // Route pour les contacts
  { path: 'settings', component: SettingsComponent },  // Route pour les paramètres
  { path: 'messages', component: MessagesListComponent },  // Route pour les messages
  { path: 'trash', component: TrashComponent }  // Route pour la corbeille des messages
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
