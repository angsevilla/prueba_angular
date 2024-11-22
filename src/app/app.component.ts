import { Component } from '@angular/core';

/* Dentro del decorador podemos crear el HTML mediante la variable template como se puede ver a continuacion:
template: `<h1>{{title}}</h1>
<hr>
<h3>Counter: {{ counter }}</h3>`
Tambien se podría meter el style metiendo el css en el mediante la variable style
*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  //title = 'Mi primera app de Angular' - El profe prefiere la siguiente sintaxis para mejorar la legibilidad
  public title:string = 'App';

}
