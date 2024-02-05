import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [GamesComponent],
  template: `
    <h3>Los juegos favoritos de {{ username }}</h3>
    <ul>
      <!-- <li *ngFor='let game of games'>
        <a href="{{game.id}}">{{ game.name }}</a>
      </li>  -->
      @for (game of games; track game.id){
        <li (click)="fav(game.name)">{{ game.name }} </li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() username = '';
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameName: string) {
    this.addFavoriteEvent.emit(gameName);
  }
  games = [
    {
      id: 1,
      name: 'Zelda'
    },
    {
      id: 2,
      name: 'Pokemon'
    },
    {
      id: 3,
      name: 'Spiderman'
    }
  ];
}
