import { Component } from '@angular/core';

@Component({
  selector: 'app-comments',
  standalone: true,
  imports: [],
  template: `
    <h3>Comentarios de lo que sea</h3>
    <img src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Pato.jpg" />
    <p>
      Sed ullamcorper quam id arcu ultricies, id aliquam felis ullamcorper. Duis
      congue dapibus ultricies. Integer non nibh vitae nisi condimentum rhoncus.
      Quisque hendrerit, elit sit amet sodales tristique, massa nulla fermentum
      ex, vitae consequat orci leo a nunc. Aenean vulputate arcu et tincidunt
      feugiat. Quisque suscipit nisl eu leo dignissim auctor. Nullam commodo
      gravida ligula, sit amet luctus lectus tincidunt at. Aliquam erat
      volutpat. Vestibulum efficitur elit nec arcu gravida fermentum. Morbi
      bibendum felis eu ultricies aliquet.
    </p>

    <p></p>
  `,
  styles: `
  img{
    width: 500px;
    height: auto; 
  }
  `,
})
export class CommentsComponent {}
