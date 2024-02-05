import { Component } from '@angular/core';
import { GamesComponent } from "../games/games.component";

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [GamesComponent]
})
export class UserComponent {
  username = 'nerea';
  isLoggedIn = false; // está funcionando como un estado
  favGame = '';

  getFavorite(gameName: string) {
    this.favGame = gameName;
  }

  greet() {
    alert('Buenas tardes');
  }
}
