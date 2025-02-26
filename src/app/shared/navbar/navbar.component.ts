import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDarkMode = false;
  showMessages = false;

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }

  toggleMessages() {
    this.showMessages = !this.showMessages;
  }

  logout() {
    console.log("Déconnexion...");
    // Implémenter la logique de déconnexion
  }
}
