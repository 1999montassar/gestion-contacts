import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule  // Nécessaire pour routerLink dans la sidebar
  ],
  exports: [
    NavbarComponent,  // Assure-toi que NavbarComponent est exporté ici
    SidebarComponent
  ]
})
export class SharedModule { }
