import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  constructor(private fb: FormBuilder) { }


  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  nuevoFavorito: FormControl = this.fb.control('', Validators.required)

  miFormulario: FormGroup = this.fb.group({
    'nombre': ['Sega', [Validators.required, Validators.minLength(3)]],
    'favoritos': this.fb.array([
      ['Metal',Validators.required],
      ['Straning',Validators.required]
    ], Validators.required)
  });


  campoNoEsValido(campo: string){
    return this.miFormulario.controls[`${campo}`].errors && this.miFormulario.controls[`${campo}`].touched?true:false
  }
 

  agregar(){
    if(this.nuevoFavorito.invalid){
      return;
    }
    //this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    //this.miFormulario.reset();
  }

  eliminar(i:number){
    this.favoritosArr.removeAt(i);
  }

}
