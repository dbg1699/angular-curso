import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {
    heroes: string[] = ['Spiderman', 'Thor', 'IronMan', 'Capitan America'];
    heroeBorrado: string= '';

    borrarHeroe(){
      this.heroeBorrado = this.heroes.shift() || '';
    }



}


