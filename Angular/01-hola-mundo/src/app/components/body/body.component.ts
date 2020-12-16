import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {
  
  mostrar: boolean = true;

  frase: any = {
    autor: 'Felix del Rio',
    mensaje: 'El final solo es el principio de un nuevo camino.'
  };
  
  personajes: string[] = ['Pera', 'Yohanna', 'Felix'];

}
