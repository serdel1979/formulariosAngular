import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


interface Persona{
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {


  nfavorito!: string;


  persona: Persona ={
    nombre: 'Rick',
    favoritos: [
      {
        id: 1,
        nombre: 'Synfo'
      },
      {
        id: 2,
        nombre:'Colours'
      }
    ]
  }

  constructor() { }

  @ViewChild('miFormulario') miFormulario!: NgForm;


 

  guardar(){

  }

  agregar(){
    const nuevo: Favorito = {
      id : this.persona.favoritos.length+1,
      nombre : this.nfavorito
    }
    this.persona.favoritos.push({...nuevo});
    this.nfavorito = "";
  }

  eliminar(indice: number){
    this.persona.favoritos.splice(indice,1);
  }

}
