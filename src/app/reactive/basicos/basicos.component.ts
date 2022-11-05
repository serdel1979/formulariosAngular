import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {


  //miFormulario: FormGroup = new FormGroup({
  //  'nombre': new FormControl('RTX 4080TI'),
  //  'precio':  new FormControl(1500),
  //  'existencias':  new FormControl(5)
  //})

  miFormulario: FormGroup = this.fb.group({
    'nombre': ['', [Validators.required, Validators.minLength(3)]],
    'precio': [, [Validators.required, Validators.min(0)]],
    'existencias': [,[Validators.required, Validators.min(0)]]
  });


  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.setValue({
      nombre: 'RTX 4080 TI',
      precio: 15000,
      existencias: 200
    })
  }

  campoNoEsValido(campo: string){
    return this.miFormulario.controls[`${campo}`].errors && this.miFormulario.controls[`${campo}`].touched?true:false
  }
 

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();
  }

 

}
